# Déclaration App Store Connect — mode d'emploi

Ce document dit **quoi cocher**, et **pourquoi**, dans le questionnaire
« Confidentialité des données de l'app » d'App Store Connect.

Il est tiré du code, pas d'une estimation. Chaque ligne indique le fichier qui
justifie la réponse, pour qu'elle puisse être revérifiée quand l'app évoluera.

> **Une déclaration fausse n'est pas un rejet, c'est un retrait.** Le rejet
> arrive avant publication et se corrige. Une sous-déclaration se découvre
> après, et Apple retire l'app le temps de la régulariser. Dans le doute,
> déclarer.

---

## 1. Avant tout : les trois champs obligatoires

| Champ | Où | Valeur |
|---|---|---|
| Politique de confidentialité (URL) | Informations sur l'app | L'adresse où tu publies `politique-confidentialite.md` |
| Adresse d'assistance (URL) | Informations sur l'app | Une page ou une adresse de contact |
| Coordonnées de contact | Informations sur l'app | Ton adresse courriel |

Sans le premier, la soumission est bloquée.

---

## 2. Questionnaire « Confidentialité des données »

Pour chaque type de données, Apple demande trois choses :

1. **Collectée ?** oui / non
2. **Liée à l'utilisateur ?** — c'est-à-dire rattachée à son identité ou à son
   compte
3. **Utilisée pour le suivi publicitaire ?** — **toujours NON pour KOVA**

> **Sur « liée à l'utilisateur »** : le compte KOVA est anonyme par défaut — pas
> de courriel, pas de nom de famille. Mais les données sont rattachées à un
> identifiant de compte persistant, et l'utilisateur peut y rattacher son
> identifiant Apple. Apple considère cela comme **lié** dans les deux cas. Il
> faut donc répondre **oui** partout, même quand tu ne sais pas qui est la
> personne.

### 2.1 Santé et forme physique

| Type | Collecté | Lié | Justification |
|---|---|---|---|
| **Santé** | Oui | Oui | Poids, fréquence cardiaque au repos et maximale, sommeil, variabilité cardiaque, VO2max — `src/store/useStore.ts`, `src/services/healthSync.ts` |
| **Forme physique** | Oui | Oui | Séances, charges, répétitions, distances, allures, records — `prLog`, `runLog`, `workoutHistory` |

**Usage à déclarer : « Fonctionnalité de l'app »** uniquement.
Pas « Analyses », pas « Personnalisation du produit » au sens publicitaire.

### 2.2 Coordonnées

| Type | Collecté | Lié | Justification |
|---|---|---|---|
| **Nom** | Oui | Oui | Le prénom saisi à l'inscription — `state.name`. Également transmis par Apple à la première autorisation de « Se connecter avec Apple ». |
| **Adresse courriel** | Oui | Oui | Transmise par Apple si l'utilisateur rattache son compte — `src/infrastructure/auth/appleIdentity.ts`. Facultatif : l'app fonctionne sans. |
| Numéro de téléphone | **Non** | — | — |
| Adresse postale | **Non** | — | — |

> **Le courriel a changé de statut.** Il était déclaré « non collecté », et
> c'était exact tant que le compte ne pouvait qu'être anonyme. Depuis le
> rattachement Apple, KOVA reçoit une adresse — réelle, ou relais
> `@privaterelay.appleid.com` si l'utilisateur choisit « Masquer mon adresse ».
> Apple ne fait pas de différence entre les deux dans le questionnaire : les
> deux comptent comme une adresse courriel collectée. Le caractère facultatif
> ne change rien non plus — une donnée collectée dans certains cas est une
> donnée collectée.

### 2.3 Données utilisateur

| Type | Collecté | Lié | Justification |
|---|---|---|---|
| **Autres données utilisateur** | Oui | Oui | Âge, sexe, taille, blessures déclarées, régime alimentaire, allergies, objectifs |

Les blessures et allergies sont des données de santé : elles relèvent aussi de
la catégorie « Santé » ci-dessus.

### 2.4 Contenu utilisateur

| Type | Collecté | Lié | Justification |
|---|---|---|---|
| **Audio** | Oui | Oui | Les messages dictés au coach — `supabase/functions/stt/` |
| **Autre contenu** | Oui | Oui | Les messages écrits au coach, les notes de séance |

### 2.5 Identifiants

| Type | Collecté | Lié | Justification |
|---|---|---|---|
| **ID utilisateur** | Oui | Oui | L'identifiant du compte anonyme Supabase |
| ID appareil | **Non** | — | L'app n'utilise ni IDFA ni IDFV |

### 2.6 Utilisation

| Type | Collecté | Lié | Justification |
|---|---|---|---|
| **Données d'interaction avec le produit** | Oui | Oui | Événements d'usage — `src/infrastructure/analytics/` |

**Usage : « Analyses »**, pour comprendre quelles fonctions servent.
Jamais pour de la publicité.

### 2.7 Diagnostics

| Type | Collecté | Lié | Justification |
|---|---|---|---|
| **Données de plantage** | Oui | **Non** | Sentry, configuré avec `sendDefaultPii: false` — `src/services/sentry.ts` |
| **Données de performance** | Oui | Non | Même source |

### 2.8 Ce qui n'est PAS collecté

À laisser décoché, et c'est vérifiable dans le code :

Localisation · Contacts · Photos et vidéos · Historique de recherche ·
Historique de navigation · Informations financières · Informations d'achat ·
Données sensibles au sens d'Apple (origine, opinions, orientation) ·
Identifiants publicitaires

### 2.9 Suivi publicitaire

**Non, pour tout.** L'app n'intègre aucun réseau publicitaire, aucun SDK de
suivi, et ne demande pas l'autorisation de suivi (ATT). Ne pas cocher « Suivi ».

---

## 3. Autorisations iOS — vérifier les textes

Ces textes apparaissent dans la boîte de dialogue système. Apple rejette les
textes vagues du type « L'app a besoin de cet accès ».

| Clé | Texte actuel | Verdict |
|---|---|---|
| `NSCameraUsageDescription` | « KOVA utilise l'appareil photo pour scanner les codes-barres des aliments… » | ✅ précis |
| `NSMicrophoneUsageDescription` | « KOVA utilise le micro pour que tu puisses parler à ton coach… » | ✅ précis |
| `microphonePermission` (plugin `expo-av`) | même texte, en français | ✅ corrigé — il était en anglais, et le garde-fou ne le voyait pas : il ne cherchait que les clés en `UsageDescription` |
| HealthKit (lecture) | — | ⚠️ **à vérifier** : si l'app lit l'app Santé, `NSHealthShareUsageDescription` est obligatoire |

Sign in with Apple ne demande **aucun texte d'autorisation** : la feuille est
fournie par iOS et n'est pas personnalisable. Rien à déclarer ici.

---

## 4. Le point qui demande une décision

L'app transmet des données de santé à **Anthropic** et **OpenAI**, tous deux
aux États-Unis.

Ce n'est pas un problème en soi : ce sont des sous-traitants, les transferts
reposent sur les clauses contractuelles types, et leurs offres professionnelles
excluent l'entraînement sur les données transmises.

Mais **il faut pouvoir le prouver**. Avant publication :

- [ ] vérifier que tes comptes Anthropic et OpenAI sont sur une offre
      professionnelle, pas grand public ;
- [ ] conserver une trace écrite de l'engagement de non-entraînement — c'est
      ce qu'un contrôle demanderait en premier ;
- [ ] signer leurs accords de sous-traitance (DPA) si tu ne l'as pas fait.

---

## 5. Avant de soumettre — liste à cocher

- [ ] Politique publiée à une adresse publique et stable
- [ ] Adresse renseignée dans `src/config/legal.ts` — le test `legal.test.ts`
      passe au vert
- [ ] Même adresse dans App Store Connect
- [ ] Adresse de contact renseignée aux points 1 et 12 de la politique
- [ ] Questionnaire « Confidentialité des données » rempli comme ci-dessus
- [ ] `NSHealthShareUsageDescription` présent si HealthKit est actif
- [ ] Compte de test fourni à la revue Apple — ou mention que l'app n'en
      demande pas, ce qui est le cas ici
- [ ] Captures d'écran à jour

---

## 6. Ce que je ne peux pas faire à ta place

Je ne suis pas juriste, et ce document n'est pas un avis juridique. Il décrit
fidèlement ce que le code fait, ce qui est la partie où je suis utile.

Deux points méritent l'œil d'un professionnel avant publication :

1. **Les transferts hors Union européenne** vers Anthropic et OpenAI, qui
   portent des données de santé — la catégorie la plus encadrée du RGPD.
2. **La mention de non-dispositif médical**, qui doit être cohérente avec ce
   que ta fiche App Store promet. Une app qui prescrit des charges et
   interprète des données de santé se tient sur une ligne : la description
   commerciale ne doit pas la franchir.
