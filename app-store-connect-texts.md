# App Store Connect — textes prêts à coller

Chaque promesse ci-dessous a été vérifiée dans le code de l'app (build 93,
version 1.3.0, 09/10/2026). Avant de la modifier, revérifier : une fiche qui
promet une fonction absente est un motif de rejet, et une source d'avis à une
étoile.

**Langue principale : français (France), sans autre localisation.** L'app
n'existe qu'en français. Une fiche anglaise promettrait une app que le lecteur
ne pourrait pas utiliser. Seules les notes pour la revue sont en anglais : elles
s'adressent à l'équipe d'Apple.

Les limites de caractères sont celles d'App Store Connect ; les textes ont été
comptés.

---

## 1. Informations sur l'app

### Nom (30 caractères max)
```
KOVA
```

### Sous-titre (30 caractères max)
```
Ton coach IA muscu et course
```

### Catégorie
Principale : **Santé et forme**. Secondaire : aucune.

### Copyright
```
2026 Enzo Bertolami
```

### URL de la politique de confidentialité (obligatoire)
```
https://enzoberto10.github.io/kova-legal/
```

### URL d'assistance (obligatoire)
```
https://enzoberto10.github.io/kova-legal/assistance.html
```
App Store Connect refuse une adresse `mailto:` : il faut une page web. Celle-ci
est générée depuis `assistance.md` par `node build.mjs`.

---

## 2. Fiche de la version

### Texte promotionnel (170 caractères max, modifiable sans nouveau build)
```
Accès anticipé : tout est gratuit. Un programme muscu et course qui s'adapte à ta récupération, et un coach IA qui te répond, à l'écrit comme à la voix.
```

### Description (4 000 caractères max)
```
KOVA est ton coach de musculation et de course à pied. Un programme construit pour toi, et un coach IA qui connaît tes séances, tes records et ta récupération.

UN PROGRAMME À TA MESURE
Musculation, course à pied ou les deux. Choisis ton objectif (perdre du gras, prendre du muscle, devenir plus fort, du premier footing au semi-marathon), ton niveau, ton matériel et le nombre de séances par semaine : KOVA construit ta semaine.

UN COACH QUI TE RÉPOND ET QUI AGIT
Écris-lui ou parle-lui. Il connaît ton programme et tes données, et il peut agir : adapter la séance du jour, réorganiser ta semaine, préparer les semaines qui mènent à ta course, enregistrer un nouveau record. Il peut aussi te répondre à voix haute.

TA RÉCUPÉRATION, CHAQUE MATIN
Connecte Apple Santé : KOVA lit ton sommeil, ta variabilité cardiaque et ta fréquence cardiaque au repos, et calcule un score de récupération. Nuit courte, fatigue ou charge qui grimpe trop vite : le coach te propose d'adapter ta séance.

PENDANT LA SÉANCE
Charges et répétitions préremplies d'après tes séances précédentes, temps de repos annoncé à la voix, records détectés automatiquement. En course, tu coches tes segments un à un.

LA NUTRITION À LA FRANÇAISE
Besoins caloriques et macros calculés pour toi. Journal des repas avec la table Ciqual de l'ANSES et les produits de marque d'Open Food Facts, scan des codes-barres avec la portion indiquée par le fabricant. Des idées de repas adaptées à ton régime (végétarien, vegan, sans gluten, keto), à ton temps de cuisine et à ton budget.

ALLURES ET ZONES CARDIAQUES
Allures d'entraînement calculées à partir de ton temps de course (méthode VDOT), zones cardiaques selon ta fréquence cardiaque de réserve (méthode de Karvonen).

LA RÉGULARITÉ, PAS LA PRESSION
Ta série compte les semaines où tu atteins ton objectif de séances, pas les jours : le repos fait partie du programme. Records, statistiques, calendrier d'activité et leçons courtes pour comprendre ton entraînement.

TES DONNÉES T'APPARTIENNENT
Pas de compte à créer, pas de publicité, aucun pistage. Ton compte et ton historique sont stockés dans l'Union européenne. Export et suppression depuis Profil, Mes données.

ACCÈS ANTICIPÉ
Toutes les fonctionnalités sont gratuites pendant l'accès anticipé.

KOVA ne remplace ni un médecin ni un diététicien. En cas de douleur, de blessure ou de problème de santé, consulte un professionnel.
```

### Mots-clés (100 caractères max)
```
musculation,running,nutrition,programme,entrainement,fitness,sport,calories,macros,footing,semi
```
Séparés par des virgules, sans espace. Inutile d'y répéter un mot du nom ou du
sous-titre (« coach », « IA », « muscu », « course ») : Apple les indexe déjà.

### Captures d'écran
iPhone 6,9 pouces (1320 × 2868), entre 3 et 10 images ; App Store Connect en
déduit les autres tailles. Les 6 captures sont faites (09/10/2026, build 93 + correctifs d'affichage) :
dossier `captures-app-store/` du dépôt de l'app, non versionné. Simulateur
iPhone 17 Pro Max, iOS 26.5, en français, profil de démo « Thomas » (force +
course, intermédiaire, 4 séances), historique de 5 semaines inventé.
1. `1-accueil.png` : score de récupération, coach adaptatif, séance du jour
2. `2-coach.png` : « J'ai mal dormi cette nuit » et la séance allégée
3. `3-seance.png` : séance en cours, charges préremplies et 1RM estimé
4. `4-plan.png` : semaine du cycle, jours faits, séance du soir
5. `5-nutrition.png` : recherche « fromage blanc » dans la table Ciqual
6. `6-profil.png` : série de 5 semaines, badges

---

## 3. TestFlight — test externe

### Description de la bêta (visible par les testeurs)
```
KOVA est un coach de musculation et de course à pied, avec un coach IA qui connaît ton programme, tes séances et ta récupération. L'app est en accès anticipé : tout est gratuit, et ton avis compte pour la suite.
```

### Adresse de retour
```
contact.bertolami@gmail.com
```

### À tester (build 93)
```
Merci de tester KOVA !

1. INSCRIPTION — Est-ce clair ? Trop long ? Une question te manque ?
2. SÉANCE — Depuis l'Accueil, démarre la séance du jour et valide tes séries. En course, coche tes segments.
3. COACH — Écris-lui, ou maintiens le micro pour lui parler. Demande-lui d'alléger ta séance, de passer à 4 séances par semaine ou d'enregistrer un record.
4. APPLE SANTÉ — Profil → Connexions. Le lendemain matin, regarde ton score de récupération sur l'Accueil.
5. NUTRITION — Cherche un aliment, scanne un code-barres, ajoute un repas. Les valeurs sont-elles justes ?

Nouveau dans ce build : la série compte désormais les semaines à l'objectif, un rappel le soir quand la semaine se resserre, la portion du fabricant au scan, une nouvelle icône, et la correction d'un plantage en fin de sortie.

Un bug, une incompréhension, une bonne surprise ? Réponds via TestFlight (capture d'écran + commentaire) ou écris à contact.bertolami@gmail.com.
```

### Informations pour la revue de la bêta

*Connexion requise :* **Non**

*Coordonnées*
```
Prénom : Enzo
Nom : Bertolami
Téléphone : [à renseigner]
Email : contact.bertolami@gmail.com
```

*Notes pour la revue (en anglais, pour l'équipe d'Apple)*
```
KOVA is a strength training and running coach with an AI assistant. The app is in French only.

NO SIGN-IN REQUIRED. An anonymous account is created on first launch. Sign in with Apple is optional (Profil > Mes données > Sauvegarder mon compte) and only backs up the account.

NO PURCHASES. All features are free during early access. This build contains no in-app purchase.

HOW TO TEST
1. Onboarding (1 to 2 minutes): pick a sport ("Musculation", "Course à pied" or "Les deux"), a goal and a level.
2. Accueil (Home): tap "Démarrer" on today's session, then tick the sets.
3. Coach tab: type a message, or press and hold the microphone to dictate. Example: "Que manger avant ma séance ?"
4. Nutrition tab: search a food or scan a barcode.
5. Profil > Connexions: optionally connect Apple Health. Read-only (e.g. workouts, weight, sleep, heart rate, HRV, VO2 max); the app never writes to Apple Health.
6. Account deletion: Profil > Mes données > Supprimer mon compte.

THIRD-PARTY SERVICES
Called through our backend (Supabase); no API key is shipped in the app:
- Anthropic Claude: coach replies
- OpenAI Whisper: speech-to-text when the user dictates
- ElevenLabs: spoken coach replies
Called from the app: Open Food Facts (barcode and branded food lookup).
No advertising, no tracking, no data sold.

HEALTH
KOVA is not a medical device. The coach states that it does not replace a doctor or a dietitian, refers users to a professional for pain, injury or medical conditions, and never recommends extreme diets.

Contact: contact.bertolami@gmail.com
```

---

## 4. Étapes dans App Store Connect

1. **Confidentialité de l'app** : remplir le questionnaire selon
   `declaration-app-store.md`, ligne par ligne.
2. **Informations sur l'app** : sous-titre, catégorie, URL de confidentialité
   et d'assistance (section 1).
3. **TestFlight** :
   - Informations de test : description de la bêta, adresse de retour,
     coordonnées et notes pour la revue (section 3) ;
   - choisir le build → « À tester » (section 3) ;
   - Test externe → nouveau groupe → ajouter le build → soumettre à la revue
     de la bêta (24 à 48 h) ;
   - une fois validé : lien public, ou invitations par email.
4. **Avant la soumission à l'App Store** : description, mots-clés, texte
   promotionnel et captures (section 2).
