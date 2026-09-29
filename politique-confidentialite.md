# Politique de confidentialité — KOVA

**Dernière mise à jour : 25 septembre 2026**

KOVA est une application d'entraînement qui combine musculation et course à
pied, avec un coach assisté par intelligence artificielle.

Ce document décrit exactement ce que l'application collecte, où ces données
vont, et ce que tu peux en faire. Il est écrit pour être lu, pas pour être
survolé.

---

## En résumé

- KOVA ne demande **ni adresse courriel, ni mot de passe, ni identité**. Ton
  compte est anonyme par défaut. Tu peux, si tu le souhaites, y rattacher ton
  identifiant Apple pour le retrouver sur un autre iPhone — c'est facultatif.
- Tes données servent **uniquement** à te fournir le service : générer ton
  programme, suivre tes progrès, répondre à tes questions.
- Elles ne sont **vendues à personne** et ne servent à **aucune publicité**.
- Pour faire fonctionner le coach, la voix et la recherche d'aliments, KOVA
  transmet certaines données à des prestataires techniques. Ils sont tous
  nommés plus bas.
- Tu peux **exporter** toutes tes données, ou **supprimer ton compte**, à tout
  moment, depuis l'application : **Profil → Mes données**.

---

## 1. Qui est responsable de tes données

Le responsable du traitement est l'éditeur de KOVA.

**Contact : contact.bertolami@gmail.com**

---

## 2. Ton compte

À la première ouverture, KOVA crée un **compte anonyme**. Concrètement :

- aucune adresse courriel, aucun mot de passe, aucun nom de famille ;
- un identifiant technique aléatoire, qui ne permet pas de remonter à toi ;
- si tu désinstalles l'application sans avoir exporté tes données ni rattaché
  ton compte, elles deviennent inaccessibles — y compris pour nous.

Le prénom que tu renseignes sert uniquement à ce que le coach t'appelle par ton
prénom. Tu peux mettre ce que tu veux.

### 2.1 Rattacher ton identifiant Apple (facultatif)

Depuis **Profil → Mes données**, tu peux rattacher ton identifiant Apple à ce
compte anonyme. C'est la seule façon de le retrouver après avoir perdu ou
changé de téléphone.

Ce que ça change :

- le compte garde **le même identifiant technique** : aucune donnée n'est
  déplacée, dupliquée ni recréée ;
- KOVA reçoit d'Apple une **adresse courriel** et, à la toute première
  autorisation seulement, ton **prénom**. Rien d'autre : ni ton mot de passe,
  ni ton identifiant Apple lui-même ;
- si tu choisis **« Masquer mon adresse e-mail »**, Apple nous transmet une
  adresse relais. Nous ne connaissons alors pas ton adresse réelle ;
- l'adresse reçue sert uniquement à rattacher le compte et à te répondre si tu
  nous écris. Elle ne sert à aucun envoi commercial.

Tu peux rester anonyme indéfiniment : l'application fonctionne entièrement sans
ce rattachement.

---

## 3. Ce que KOVA collecte

Tout ce qui suit vient de ce que **tu saisis** ou de ce que **tu autorises**.
KOVA ne lit pas tes contacts, ta position, ton carnet d'adresses, ni le contenu
d'autres applications.

### 3.1 Profil d'entraînement

Prénom, âge, sexe, taille, poids de départ, niveau, objectif, nombre de séances
par semaine, matériel disponible, moment d'entraînement préféré, blessures et
limitations que tu déclares.

### 3.2 Données de santé et de performance

Séances réalisées : exercices, charges, répétitions, durée, effort ressenti.
Sorties de course : distance, durée, allure. Records personnels. Pesées.
Fréquence cardiaque au repos et maximale. Maximales de force (1RM).
Auto-évaluation de mobilité.

### 3.3 Nutrition

Aliments enregistrés, quantités, objectifs caloriques, régime alimentaire,
allergies déclarées, consommation d'eau.

### 3.4 Données importées depuis l'app Santé d'Apple

**Uniquement si tu l'autorises explicitement**, et uniquement en lecture :
sommeil, variabilité de la fréquence cardiaque, fréquence cardiaque au repos,
dépense énergétique, nombre de pas, VO2max, séances et pesées.

Tu peux révoquer cette autorisation à tout moment dans les réglages d'iOS.
KOVA **n'écrit jamais** dans l'app Santé.

### 3.5 Conversations avec le coach

Les messages que tu écris ou dictes au coach, et ses réponses.

Le coach retient aussi quelques faits durables que tu lui confies — une
blessure, une contrainte, un objectif — pour ne pas te les redemander à chaque
conversation. Ces faits sont visibles et modifiables en lui demandant.

### 3.6 Données techniques

Événements d'usage anonymes : quel écran est ouvert, quelle fonction est
utilisée, combien de temps dure une séance. Ces événements sont rattachés à ton
identifiant anonyme.

Une barrière technique dans l'application **écarte automatiquement** tout texte
libre de ces événements : ni le contenu de tes messages, ni tes notes, ni le
nom de tes aliments n'y figurent.

---

## 4. Où vont tes données

### 4.1 Sur ton téléphone

La totalité de tes données vit d'abord sur ton appareil.

### 4.2 Sur nos serveurs

Une copie est conservée sur **Supabase**, sur des serveurs situés **en France**
(région `eu-west-3`, Paris), chiffrée pendant le transfert. Elle sert à ne pas
perdre ton historique, et à retrouver tes données sur un autre appareil si tu
rattaches ton identifiant Apple.

L'accès est cloisonné au niveau de la base : ton identifiant ne peut lire que
tes propres lignes.

### 4.3 Chez nos prestataires techniques

Pour rendre le service, KOVA transmet certaines données à des tiers. Chacun ne
reçoit que ce qui lui est nécessaire.

| Prestataire | Ce qu'il reçoit | Pourquoi |
|---|---|---|
| **Anthropic** (États-Unis) | Ton contexte d'entraînement : prénom, âge, sexe, objectif, niveau, blessures, séances récentes, records, tendance de poids, données de récupération si tu les as autorisées, et le contenu de tes messages | Produire les réponses du coach |
| **OpenAI** (États-Unis) | L'enregistrement audio, quand tu dictes un message | Transcrire ta voix en texte |
| **ElevenLabs** (États-Unis) | Le texte de la réponse du coach | Lire la réponse à voix haute |
| **USDA FoodData Central** (États-Unis) | Le terme que tu cherches | Trouver les valeurs nutritionnelles |
| **Open Food Facts** (France) | Le code-barres scanné | Identifier le produit |
| **Sentry** (États-Unis) | Rapports de plantage : version de l'app, modèle d'appareil, pile d'appel | Corriger les défauts |

Précisions importantes :

- **Anthropic et OpenAI n'utilisent pas ces données pour entraîner leurs
  modèles.** C'est une garantie contractuelle de leurs offres professionnelles.
- **Sentry est configuré pour ne transmettre aucune donnée personnelle.**
- La recherche d'aliments et le scan de code-barres n'envoient **pas** ton
  identifiant : ces services ne savent pas qui cherche.
- Aucun de ces prestataires ne reçoit ton historique complet. Ils reçoivent ce
  qui est nécessaire à une opération précise, au moment où elle a lieu.

Les transferts vers les États-Unis reposent sur les clauses contractuelles
types de la Commission européenne.

---

## 5. Ce que KOVA ne fait pas

- Aucune publicité, aucun traceur publicitaire, aucun identifiant de suivi.
- Aucune vente, location ou échange de tes données.
- Aucun profilage à des fins commerciales.
- Aucune lecture de ta position, de tes contacts ou de tes photos.

---

## 6. Combien de temps les données sont conservées

- **Tant que ton compte existe** : ton profil, tes séances, tes sorties, tes
  records, ta nutrition, tes conversations.
- **À la suppression de ton compte** : tout est effacé immédiatement, sur ton
  appareil et sur nos serveurs.
- **Exception** : les journaux de facturation d'un éventuel abonnement sont
  conservés douze mois pour pouvoir traiter un litige. Ton identifiant en est
  retiré à la suppression du compte.

---

## 7. Tes droits

Tu disposes des droits prévus par le règlement général sur la protection des
données (RGPD) : accès, rectification, effacement, portabilité, limitation,
opposition.

Deux d'entre eux s'exercent **directement dans l'application**, sans avoir à
nous écrire ni à attendre :

- **Portabilité et accès** — Profil → Mes données → *Exporter*. Tu obtiens un
  fichier JSON contenant l'intégralité de ce que KOVA détient sur toi.
- **Effacement** — Profil → Mes données → *Supprimer mon compte*. L'effacement
  est immédiat et définitif.

Pour les autres droits, écris-nous à l'adresse indiquée au point 1.

Tu peux aussi introduire une réclamation auprès de la CNIL
(www.cnil.fr) si tu estimes que tes droits ne sont pas respectés.

---

## 8. Sécurité

- Communications chiffrées de bout en bout du transport (TLS).
- Cloisonnement des données au niveau de la base : chaque compte ne peut lire
  que ses propres lignes.
- Aucune clé d'accès aux prestataires n'est stockée dans l'application : les
  appels sensibles passent par nos serveurs.

Aucun système n'est invulnérable. En cas de violation de données susceptible
d'engendrer un risque pour tes droits, nous te préviendrons et notifierons la
CNIL dans les délais prévus par le RGPD.

---

## 9. Mineurs

KOVA n'est pas destinée aux personnes de moins de 16 ans et ne collecte pas
sciemment leurs données. Si tu constates qu'un mineur a créé un compte,
écris-nous : nous le supprimerons.

---

## 10. Santé — ce que KOVA n'est pas

KOVA n'est pas un dispositif médical. Le coach n'est ni médecin, ni
kinésithérapeute, ni diététicien. Ses recommandations sont des suggestions
d'entraînement générées automatiquement, fondées sur ce que tu déclares.

En cas de douleur, de blessure, de condition médicale, de grossesse ou de
doute, consulte un professionnel de santé. Ne substitue jamais l'avis de KOVA
au sien.

---

## 11. Modifications

Toute modification substantielle de cette politique sera signalée dans
l'application avant son entrée en vigueur. La date de dernière mise à jour
figure en tête de ce document.

---

## 12. Nous contacter

**contact.bertolami@gmail.com**
