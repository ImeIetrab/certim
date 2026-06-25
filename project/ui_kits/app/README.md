# UI Kit — Application CertIM

Recréation fidèle et interactive du tableau de bord CertIM (espace abonné).

## Écran
- **`index.html`** — Dashboard complet desktop-first :
  - **Sidebar fixe 260px** (`Sidebar.jsx`) : logo, profil, navigation (glyphes ◈◎◉◐◑), mini-barres de progression par thème, pastille d'abonnement AMF. La nav suit la section visible (IntersectionObserver) et défile au clic.
  - **Hero compact** (`DashboardHero.jsx`) : salutation, 3 KPI pills (streak 🔥, score de maîtrise avec seuil 75%, questions répondues), CTAs.
  - **Corps** (`DashboardBody.jsx`) : sélecteur de thèmes + nombre de questions (interactif), carte dernier examen blanc, calendrier d'activité hebdo (heatmap), historique d'examens, statistiques par thème, statistiques rapides, informations compte + abonnement.

## Composants du design system utilisés
`Card`, `Button`, `Badge`, `Avatar`, `ProgressBar`, `ThemeChip`, `CountSelector`, `KpiPill` / `KpiValue`.

## Interactions
- Navigation sidebar ↔ sections (scroll + état actif).
- Sélection multi-thèmes avec compteur ; choix du nombre de questions (10 / 20 / 50 / Toutes).

## Notes
- Source d'origine : `dashboard.html` du dépôt `ImeIetrab/certim`.
