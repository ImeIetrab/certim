# CertIM — Design System

Design system de **CertIM**, plateforme SaaS de préparation à la **certification AMF** (Autorité des marchés financiers) destinée aux professionnels de la finance en France. CertIM propose la banque de questions officielle, des examens blancs en conditions réelles (120 questions, 2h30, seuil 75%) et un suivi de progression détaillé par thème — le tout pour 34,99 €/mois sans engagement.

Interface **desktop-first**, espace abonné à **sidebar fixe**, palette **navy / or / crème**, typographie **Inter**. Le ton est sobre, professionnel et rassurant — fait par des professionnels, pour des professionnels.

## Sources

Ce design system est dérivé du dépôt GitHub fourni :

- **`ImeIetrab/certim`** — https://github.com/ImeIetrab/certim
  - `certim-design-system.txt` — spécification couleurs / type / composants / espacements / ombres / animations (source de vérité des tokens).
  - `index.html` — landing page marketing.
  - `amf.html` — page produit de la certification AMF (programme + pricing).
  - `dashboard.html` — tableau de bord de l'espace abonné.

> Explorez ce dépôt pour approfondir le contexte produit et affiner toute création basée sur CertIM. Le second dépôt visible sur le compte (`financeflow-research`) n'est **pas** lié à ce produit et n'a pas été utilisé.

---

## CONTENT FUNDAMENTALS

**Langue** : français exclusivement. Vouvoiement systématique (« Préparez et obtenez votre certification », « Choisissez vos thèmes »). Pas de « je » ; la marque s'adresse directement à l'utilisateur en « vous ».

**Ton** : professionnel, direct, rassurant, sans esbroufe. Promesse claire (« réussir l'examen AMF »), preuves chiffrées (1 000+ questions, 8 thèmes, 75% requis). Vocabulaire métier assumé : « banque de questions officielle », « répétition espacée », « conditions réelles », « référentiel en vigueur ».

**Casse** :
- Titres en casse de phrase (capitale initiale seulement) : « Certifications disponibles », « Comment ça fonctionne ».
- Labels micro / tags / badges en **MAJUSCULES** avec interlettrage (`AMF`, `BIENTÔT`, `ÉCHOUÉ`, `ACTIF`, `CERTIFICATION AMF`).
- Boutons en casse de phrase : « Commencer maintenant », « S'entraîner », « Relancer un examen blanc ».

**Chiffres & unités** : format français — virgule décimale (`34,99 €`), `€` après le montant avec espace, pourcentages collés (`75%`, `62%`), durées `2h30`, dates longues (« 18 juin 2026 »). Le « − » (vrai signe moins) pour les écarts : « −13 pts ».

**Ponctuation de séparation** : le point médian « · » sépare les méta-informations (« Sans engagement · Résiliation à tout moment », « 120 questions · 2h30 · Seuil 75% »). La flèche « → » termine les CTA d'action ; « ▶ » précède « S'entraîner ».

**Emoji** : usage très parcimonieux, uniquement pour la **gamification** dans l'app — `🔥` (streak / jours consécutifs) et `👋` (salutation « Bonjour, Alexandre 👋 »). Jamais sur le site marketing, jamais décoratif ailleurs.

**Exemples de copy réels** :
- Hero : « Préparez et obtenez votre **certification financière** »
- Sous-titre : « La plateforme d'entraînement professionnelle pour réussir l'examen AMF. »
- État d'échec : « ÉCHOUÉ · Il manque 7 points »
- Objectif : « Objectif 75% · −13 pts »
- Vide : « Tous les thèmes · aucune sélection »

---

## VISUAL FOUNDATIONS

**Palette** : navy profond (`#04091A`) dominant pour les fonds immersifs (hero, sidebar, cartes sombres, CTA secondaires) ; **or** (`#C8B882`) comme unique accent — CTA primaires, highlights, chiffres-clés, tag AMF ; **crème** (`#F0EBE0`) pour le texte sur navy ; **beige** (`#F7F4EF`) en fond de page clair ; **blanc** pour les cartes. Les bleus désaturés (`#7A9AB8` muted, `#3D5A78`) portent le texte secondaire sur navy. Trois sémantiques de score : vert ≥75%, orange 50–74%, rouge <50%.

**Typographie** : **Inter** en famille unique, du 400 au 800. Échelle : Display 32/800, H1 24/700, H2 18/700, H3 15/600, Body 14/400, Small 12/500, Micro 10/700 (toujours UPPERCASE + interlettrage 0.08em). Interlettrage négatif sur les gros titres (`-0.03em`). Les numéros d'étapes utilisent un chiffre monospace géant en or translucide (15% d'opacité).

**Fonds & textures** : les zones navy (hero, dashboard header) portent une **grille fine de lignes crème à ~3–4% d'opacité** (50–60px) par-dessus un **gradient diagonal 135°** navy → navy-mid → `#0F2240`. Pas de photo, pas d'illustration, pas de dégradé criard. Le motif est strictement géométrique et discret.

**Cartes** : trois variantes. *Light* — blanc, bordure 1px `#D6CEBD`, rayon 12px, padding 20×22px. *Navy* — `#0C1D38`, même rayon. *Accent* — or translucide (`rgba(200,184,130,.1)`) bordé `rgba(200,184,130,.2)`. Coins arrondis systématiques (8px boutons/chips, 12px cartes, 14px cartes feature, 16px pricing, 100px pills).

**Ombres** : système léger et discret — subtle `0 1px 3px /.06`, card `0 2px 8px /.08`, hover `0 4px 16px /.12`, pricing `0 8px 40px rgba(4,9,26,.12)`. Les cartes sur navy n'ont pas d'ombre (séparation par la couleur).

**Bordures** : 1px `#D6CEBD` (cartes light), 1.5px sur les chips sélectionnables, `rgba(255,255,255,.1–.18)` sur navy. La sidebar nav-item active porte un **liseré gauche or de 3px** + fond or translucide.

**Progress bars** : pièce maîtresse. Track fin (4–7px, rayon 3px) — `rgba(255,255,255,.1)` sur navy ou `#D6CEBD` sur blanc ; remplissage coloré par la sémantique de score ; **ligne verticale or à 75%** matérialisant le seuil de certification.

**Animations** : sobres et fonctionnelles. Barres de progression 0→valeur en 600ms ease-out au chargement ; compteurs KPI 0→valeur en 800ms ; sélection de chip scale 0.97→1.0 en 150ms ; hover de carte `translateY(-2px)` + ombre en 150ms ; transitions couleur 150ms par défaut. Pas de bounce, pas de parallaxe, pas d'animation décorative en boucle.

**États d'interaction** : hover des CTA = **opacité .88** (pas de changement de teinte) ; hover des chips = bordure navy + fond navy à 3% ; hover nav sidebar = texte crème + fond blanc à 4% ; sélection = bordure/fond navy + checkmark or. Disabled = opacité .5–.6.

**Layout** : desktop-first. App = sidebar fixe 260px + contenu décalé (`margin-left:260px`) ; navbar marketing sticky 64px. Padding page app 24×32px, gap cartes 18px. Grilles responsives `repeat(auto-fill, minmax(...))`.

**Transparence & blur** : la transparence sert sur navy (surfaces blanches à 4–12%, bordures à 10–18%, accents or à 10–30%). Le flou (`backdrop-filter: blur`) est réservé aux overlays de modale.

---

## ICONOGRAPHY

CertIM **n'utilise aucun fichier d'icône** (ni SVG, ni PNG, ni police d'icônes, ni CDN type Lucide/Heroicons). L'iconographie repose entièrement sur des **glyphes géométriques Unicode** rendus en or sur navy :

- Navigation & features : **◈ ◉ ◎ ◐ ◑** (losange, cercles pleins/partiels) — un glyphe par rubrique.
- Validation : **✓** (dans les pastilles de check, les listes de features).
- Action : **→** en fin de CTA, **▶** devant « S'entraîner ».
- Gamification : emoji **🔥** (streak) et **👋** (salutation) — uniquement dans l'app.

Le **logo** est un wordmark texte : « Cert » en crème (ou navy sur fond clair) + « **IM** » en or, Inter 800, interlettrage `-0.02em`. Pas de symbole graphique.

> Si un projet a besoin d'une icône absente de ce répertoire de glyphes, privilégier un glyphe Unicode géométrique cohérent plutôt que d'introduire une bibliothèque SVG. À défaut, substituer le plus proche équivalent d'un set au trait fin et **signaler la substitution**.

---

## INDEX — contenu du design system

**Racine**
- `styles.css` — point d'entrée global (uniquement des `@import`). Les consommateurs lient ce fichier.
- `readme.md` — ce document.
- `SKILL.md` — manifeste de skill (compatible Agent Skills / Claude Code).

**`tokens/`** — variables CSS sur `:root`
- `colors.css` · `typography.css` · `spacing.css` · `effects.css` (rayons, ombres, transitions, textures) · `fonts.css` (Inter via Google Fonts).

**`guidelines/`** — cartes spécimen (onglet Design System)
- Couleurs : Navy, Or, Neutres, Texte & bleus, Sémantiques, Surfaces badges & heatmap.
- Type : Échelle typographique, Graisses.
- Spacing : Échelle d'espacement, Rayons & ombres.
- Brand : Logo, Iconographie, Texture hero.

**`components/`** — primitives React (`window.CertIMDesignSystem_2a4d2d`)
- `core/` — **Button**, **Badge**, **Card**, **Avatar**.
- `app/` — **ProgressBar** (+ `scoreColor`), **ThemeChip**, **KpiPill** / **KpiValue**, **CountSelector**.

**`ui_kits/`** — recréations d'écrans complets
- `website/` — landing marketing + modale d'abonnement.
- `app/` — tableau de bord abonné (sidebar, hero KPI, sections).

Chaque répertoire de composant et de kit contient une carte `@dsCard` qui s'affiche dans l'onglet Design System.
