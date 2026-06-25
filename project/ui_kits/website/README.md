# UI Kit — Site marketing CertIM

Recréation fidèle du site public CertIM (acquisition + conversion).

## Écrans
- **`index.html`** — Landing page complète : hero navy (gradient + grille crème), bandeau de stats, catalogue de certifications (AMF actif + CFA/MiFID/IAS « bientôt »), section « Pourquoi CertIM » sur fond navy, méthode en 3 étapes, les 8 thèmes officiels (fond crème), FAQ, CTA final. Le clic sur n'importe quel CTA ouvre la **modale d'abonnement** (carte pricing 34,99 €/mois) qui mène au tableau de bord (`../app/index.html`).

## Fichiers
- `SiteChrome.jsx` — `SiteNav` (nav sticky navy) + `SiteFooter`.
- `LandingPage.jsx` — toutes les sections de la landing, données incluses.

## Composants du design system utilisés
`Button`, `Badge` (+ tokens couleurs/espacements/effets).

## Notes
- Source d'origine : `index.html` + `amf.html` du dépôt `ImeIetrab/certim`.
- Le wordmark « Cert**IM** » et les glyphes d'icônes (◈ ◉ ◎ ◐) sont des éléments texte, pas des SVG.
