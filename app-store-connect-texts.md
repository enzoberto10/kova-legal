# App Store Connect — textes prêts à coller

> Tout est en EN (langue par défaut Apple Reviewer) sauf description marketing FR.

---

## 1. App Information

### Subtitle (30 chars max)
```
AI fitness & running coach
```

### Promotional Text (170 chars max, peut être changé sans rebuild)
```
Your AI coach. Hybrid strength + running. Adaptive program that talks back. Voice-controlled workouts. Powered by Claude, Whisper, ElevenLabs.
```

### Description (FR — pour l'App Store français)
```
KOVA, c'est ton coach sportif IA dans la poche.

— UN VRAI COACH QUI TE RÉPOND
Parle-lui à la voix ou par texte. Il connaît ton programme, tes records, ton sommeil, ta récup. Pose-lui n'importe quelle question — il te répond avec tes vraies données.

— UN PROGRAMME QUI S'ADAPTE
Force, course, ou les deux. KOVA génère ton plan hebdo selon ton objectif (perte de poids, masse, force, marathon...), ton niveau, ton équipement. Et il l'ajuste en temps réel selon ta récup.

— OMNIPOTENCE PAR LA VOIX
Dis "passe-moi à 5 séances par semaine" → c'est fait. "Mon nouveau squat c'est 140kg" → enregistré. "Prépare-moi un marathon en octobre" → plan complet généré. Aucune autre app ne fait ça.

— RÉCUP INTELLIGENTE
Connecté à Apple Santé : sommeil, HRV, FC repos. Si t'es sous-récup, KOVA réduit l'intensité avant que tu te blesses.

— PENDANT LA SÉANCE
Compte à rebours vocal entre les sets. Commandes vocales pour skip, prolonger, demander conseil. Mains libres, casque dans les oreilles.

— NUTRITION
Calcul TDEE auto, macros custom, contraintes alimentaires (végé, sans gluten, keto...), bibliothèque de repas adaptée à ton temps de cuisson et budget.

— VDOT + KARVONEN
Calculs scientifiques pour le pacing course et les zones cardiaques.

— PREMIUM
Voix IA, contexte coach étendu, programmes multi-semaines.

KOVA, c'est le coach que tu voulais — sans rendez-vous, sans abonnement à 200 €/mois, sans copier-coller un plan Reddit.
```

### Description (EN)
```
KOVA is your AI fitness coach in your pocket.

— A REAL COACH THAT TALKS BACK
Speak or type. KOVA knows your program, your PRs, your sleep, your recovery. Ask anything — it responds with your actual data.

— A PROGRAM THAT ADAPTS
Strength, running, or both. KOVA builds your weekly plan around your goal (weight loss, muscle, strength, marathon...), your level, your equipment. Then adjusts it live based on recovery.

— VOICE OMNIPOTENCE
Say "switch me to 5 sessions a week" → done. "My new squat is 140kg" → logged. "Build me a marathon plan for October" → full program generated. No other app does this.

— SMART RECOVERY
Connected to Apple Health: sleep, HRV, resting HR. If you're under-recovered, KOVA scales intensity down before you get hurt.

— DURING WORKOUTS
Voice rest countdowns between sets. Voice commands to skip, extend, ask the coach. Hands-free with earbuds in.

— NUTRITION
Auto TDEE calculation, custom macros, dietary constraints (vegetarian, gluten-free, keto...), meal library adapted to your cook time and grocery budget.

— VDOT + KARVONEN
Scientific calculations for run pacing and HR zones.

— PREMIUM
AI voice replies, extended coach context, multi-week programs.

KOVA is the coach you actually wanted — no appointment, no $200/month subscription, no copy-pasted Reddit plan.
```

### Keywords (100 chars max, comma-separated)
```
fitness,coach,ai,running,workout,strength,gym,training,marathon,vdot,nutrition,macro,health,plan
```

### Support URL
```
mailto:enzo.bertolami1@gmail.com
```
> OR si tu veux plus propre : crée une simple page "support" à côté de la privacy policy avec ton email.

### Marketing URL (optionnel)
```
https://[ton-username-github].github.io/kova-legal/
```

### Privacy Policy URL (OBLIGATOIRE)
```
https://[ton-username-github].github.io/kova-legal/
```

---

## 2. TestFlight — External Testing

### Test Information

**What to Test (visible aux testeurs)**
```
Bienvenue dans le beta KOVA ! 🔥

Voici ce sur quoi tu peux nous aider :

1. ONBOARDING — Le flow d'inscription est-il clair ? Trop long ? Manque-t-il une question ?

2. COACH IA — Parle au coach à la voix ou en texte. Demande-lui de modifier ton programme : "passe-moi à 5 séances", "prépare-moi un marathon", "mon nouveau squat est 140kg". Il devrait exécuter sans demander confirmation.

3. SÉANCES — Lance une séance depuis Home. Teste les commandes vocales pendant les rest periods (active le micro).

4. APPLE HEALTH — Connecte Apple Santé dans Profile → Connexions. Vérifie que le coach mentionne ton sommeil/HRV dans ses réponses.

5. NUTRITION — Va dans Nutrition, ajoute un repas. Les macros sont-elles cohérentes ?

REMONTE :
- Bugs / crashes
- Choses que tu ne comprends pas
- Choses qui te paraissent magiques ✨

Reply à ce mail ou DM Enzo.

Merci 🙏
```

**Beta App Review — Information for Apple**

*Sign-in required?*
```
No
```

*Contact Information*
```
First name: Enzo
Last name: Bertolami
Phone: [ton numéro]
Email: enzo.bertolami1@gmail.com
```

*Review notes (texte pour le reviewer Apple)*
```
KOVA is an AI fitness coaching app for strength training and running.

No login is required — users go through onboarding (sport selection, goals, body data) and immediately have access to all features.

KEY FLOWS TO TEST:
1. Complete the onboarding (~2-3 min). Pick "running" or "both" for the most feature-rich experience.
2. From Home, tap "Start session" to launch today's workout.
3. From the Coach tab, send a text message or hold the microphone to record voice. Example: "What should I eat today?"
4. From Settings → Connections, optionally enable Apple Health (the app reads sleep, HRV, resting HR to personalize coaching).

THIRD-PARTY SERVICES (proxied via our Supabase Edge Functions — no API keys on device):
- Anthropic Claude (coach LLM)
- OpenAI Whisper (speech-to-text)
- ElevenLabs (text-to-speech, Premium feature)

PREMIUM is gated via in-app purchase (StoreKit). Voice replies and extended context are Premium-only. The beta enables Premium for all testers via a flag for testing convenience.

If anything is unclear, contact enzo.bertolami1@gmail.com.
```

**What's New in This Version (build 60)**
```
- AI coach now has full control of your program via conversation: change days/week, restructure multiple weeks, update PRs, switch coaching style, all through voice
- Multi-week plan generation for race prep
- Adaptive 1RM auto-progression
- Apple HealthKit recovery signals (sleep, HRV) injected into coach context
- Voice rest countdowns during workouts
- French and English support
- Sentry crash reporting added
- TestFlight beta — first external release
```

---

## 3. Steps in App Store Connect (UI)

1. **My Apps → KOVA → App Privacy** → Edit details
   - Data collected: Health (with consent), User content (workouts/messages), Identifiers (user ID for sync), Diagnostics (Sentry, anonymized)
   - All "linked to user", "not used for tracking"

2. **My Apps → KOVA → App Information**
   - Paste subtitle, description (FR + EN), keywords, support URL, marketing URL, privacy URL

3. **My Apps → KOVA → TestFlight**
   - Pick build 60 → "Manage" → Beta App Review information → paste the review notes above
   - External Testing → "+ New Group" → "Friends Beta"
   - Enable Public Link → copy/share with friends
   - OR add tester emails directly
   - Submit build 60 for Beta App Review

4. **Wait 24–48h for Apple Beta Review approval.**

5. Once approved → public link goes live → share with friends.
