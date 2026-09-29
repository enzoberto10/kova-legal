/**
 * KOVA — Génère la page HTML publique de la politique de confidentialité.
 *
 *   node legal/build.mjs
 *   → legal/site/index.html
 *
 * ── Pourquoi un générateur plutôt qu'une page écrite à la main ───────────────
 *
 * La politique va changer : l'adresse de contact, le nom de l'app, chaque
 * nouveau prestataire. Deux copies du même texte finissent toujours par
 * diverger, et celle qui divergera est celle que personne ne relit — la page
 * publique. Ici, `politique-confidentialite.md` reste la source unique, et un
 * test vérifie déjà son contenu.
 *
 * ── Pourquoi un convertisseur maison ────────────────────────────────────────
 *
 * Le document n'utilise qu'un sous-ensemble fermé de Markdown : titres,
 * paragraphes, listes à puces, tableaux, traits de séparation, gras et
 * italique. Pas de liens, pas de code, pas de listes imbriquées, pas de
 * citations. Ajouter une dépendance pour ça, dans un projet qui part sur
 * l'App Store, coûte plus cher que les quarante lignes ci-dessous.
 *
 * Le générateur **échoue bruyamment** s'il rencontre une construction qu'il ne
 * sait pas rendre, plutôt que de la laisser passer en texte brut : une balise
 * Markdown affichée telle quelle dans une politique de confidentialité, c'est
 * le genre de détail qui fait douter de tout le reste.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ICI = path.dirname(fileURLToPath(import.meta.url));
const SOURCE = path.join(ICI, 'politique-confidentialite.md');
const SORTIE = path.join(ICI, 'site', 'index.html');

// ─── Conversion ───────────────────────────────────────────────────────────────

const echapper = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Gras d'abord : `**` serait sinon mal lu par le motif de l'italique. */
const enLigne = (s) =>
  echapper(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^\w])_([^_]+)_/g, '$1<em>$2</em>');

function convertir(markdown) {
  const lignes = markdown.split('\n');
  const out = [];
  let i = 0;

  const nonRendu = [];

  while (i < lignes.length) {
    const ligne = lignes[i];

    if (ligne.trim() === '') { i++; continue; }

    if (ligne === '---') { out.push('<hr>'); i++; continue; }

    const titre = /^(#{1,3})\s+(.*)$/.exec(ligne);
    if (titre) {
      const n = titre[1].length;
      // Un identifiant stable par section : permet de pointer un lien vers
      // « le point 7 » depuis un courriel de réponse à une demande RGPD.
      const id = titre[2].toLowerCase()
        .normalize('NFD').replace(/\p{Diacritic}/gu, '')
        .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      out.push(`<h${n} id="${id}">${enLigne(titre[2])}</h${n}>`);
      i++; continue;
    }

    // Tableau : en-tête, séparateur, puis les lignes.
    if (ligne.startsWith('|')) {
      const cellules = (l) => l.split('|').slice(1, -1).map((c) => c.trim());
      const entete = cellules(ligne);
      i += 2; // on saute la ligne de séparation |---|---|
      const corps = [];
      while (i < lignes.length && lignes[i].startsWith('|')) {
        corps.push(cellules(lignes[i])); i++;
      }
      out.push(
        '<div class="tableau"><table><thead><tr>'
        + entete.map((c) => `<th>${enLigne(c)}</th>`).join('')
        + '</tr></thead><tbody>'
        + corps.map((r) => '<tr>' + r.map((c) => `<td>${enLigne(c)}</td>`).join('') + '</tr>').join('')
        + '</tbody></table></div>',
      );
      continue;
    }

    // Liste à puces. Une puce peut se poursuivre sur la ligne suivante si
    // celle-ci est indentée — c'est le cas partout dans le document.
    if (ligne.startsWith('- ')) {
      const items = [];
      while (i < lignes.length && lignes[i].startsWith('- ')) {
        let texte = lignes[i].slice(2); i++;
        while (i < lignes.length && /^\s{2,}\S/.test(lignes[i])) {
          texte += ' ' + lignes[i].trim(); i++;
        }
        items.push(`<li>${enLigne(texte)}</li>`);
      }
      out.push(`<ul>${items.join('')}</ul>`);
      continue;
    }

    // Paragraphe : tout jusqu'à la prochaine ligne vide ou construction connue.
    const bloc = [];
    while (
      i < lignes.length && lignes[i].trim() !== ''
      && !lignes[i].startsWith('- ') && !lignes[i].startsWith('|')
      && !lignes[i].startsWith('#') && lignes[i] !== '---'
    ) { bloc.push(lignes[i].trim()); i++; }

    const texte = bloc.join(' ');
    // Une construction Markdown résiduelle trahirait un cas non prévu.
    if (/^(>|\d+\.\s|```)/.test(texte)) nonRendu.push(texte.slice(0, 80));
    out.push(`<p>${enLigne(texte)}</p>`);
  }

  if (nonRendu.length > 0) {
    throw new Error(
      'Constructions Markdown non gérées par le générateur :\n'
      + nonRendu.map((t) => '  ' + t).join('\n')
      + '\n\nAjoute-les à legal/build.mjs plutôt que de les laisser passer.',
    );
  }

  return out.join('\n');
}

// ─── Page ─────────────────────────────────────────────────────────────────────

/**
 * Tout est inline : pas de police distante, pas de feuille de style externe,
 * pas de script. Une politique de confidentialité qui appellerait un serveur
 * tiers pour s'afficher serait un aveu au mauvais endroit.
 *
 * `prefers-color-scheme` plutôt qu'un thème imposé : la page sera surtout lue
 * depuis le téléphone, souvent le soir.
 */
function page(corps, titre) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${echapper(titre)}</title>
<meta name="description" content="Ce que l'application KOVA collecte, où ces données vont, et ce que tu peux en faire.">
<meta name="robots" content="index, follow">
<style>
:root {
  --fond: #ffffff; --texte: #16181d; --doux: #5a6070;
  --trait: #e3e6ec; --accent: #4b32c3; --surface: #f6f7f9;
}
@media (prefers-color-scheme: dark) {
  :root {
    --fond: #0e0f12; --texte: #edeef1; --doux: #a0a6b4;
    --trait: #262a33; --accent: #c9f04a; --surface: #16181d;
  }
}
* { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; }
body {
  margin: 0 auto; max-width: 42rem; padding: 2.5rem 1.25rem 6rem;
  background: var(--fond); color: var(--texte);
  font: 400 17px/1.65 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  overflow-wrap: break-word;
}
h1 { font-size: 1.9rem; line-height: 1.2; letter-spacing: -0.02em; margin: 0 0 1.5rem; }
h2 { font-size: 1.3rem; line-height: 1.3; letter-spacing: -0.01em; margin: 2.75rem 0 0.75rem; }
h3 { font-size: 1.05rem; margin: 1.75rem 0 0.5rem; color: var(--doux); }
p { margin: 0 0 1rem; }
ul { margin: 0 0 1rem; padding-left: 1.25rem; }
li { margin-bottom: 0.4rem; }
strong { font-weight: 600; }
hr { border: 0; border-top: 1px solid var(--trait); margin: 2.5rem 0; }
a { color: var(--accent); }
/* Les tableaux listent les prestataires : sur mobile ils doivent défiler
   horizontalement plutôt que d'écraser le texte en colonnes illisibles. */
.tableau { overflow-x: auto; margin: 0 0 1.25rem; -webkit-overflow-scrolling: touch; }
table { border-collapse: collapse; width: 100%; font-size: 0.92rem; min-width: 30rem; }
th, td { text-align: left; vertical-align: top; padding: 0.6rem 0.75rem; border-bottom: 1px solid var(--trait); }
th { background: var(--surface); font-weight: 600; white-space: nowrap; }
@media print {
  body { max-width: none; color: #000; background: #fff; }
  .tableau { overflow: visible; } table { min-width: 0; }
}
</style>
</head>
<body>
${corps}
</body>
</html>
`;
}

// ─── Exécution ────────────────────────────────────────────────────────────────

const markdown = fs.readFileSync(SOURCE, 'utf8');
const titre = (/^#\s+(.*)$/m.exec(markdown)?.[1] ?? 'Politique de confidentialité')
  .replace(/\s*—\s*/g, ' — ');

fs.mkdirSync(path.dirname(SORTIE), { recursive: true });
fs.writeFileSync(SORTIE, page(convertir(markdown), titre), 'utf8');

const octets = fs.statSync(SORTIE).size;
console.log(`✓ ${path.relative(process.cwd(), SORTIE)} — ${(octets / 1024).toFixed(1)} Ko`);

// Un placeholder publié serait pire que pas de page du tout.
if (/à compléter/i.test(markdown)) {
  console.log('\n⚠️  Le texte contient encore « à compléter ».');
  console.log('   Renseigne l\'adresse de contact aux points 1 et 12 avant de publier.');
  process.exitCode = 1;
}
