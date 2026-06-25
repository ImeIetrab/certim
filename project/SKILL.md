---
name: certim-design
description: Use this skill to generate well-branded interfaces and assets for CertIM, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping CertIM — a French SaaS for AMF (financial markets) certification prep with a navy/gold/cream palette and Inter type.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (`styles.css` + `tokens/`, `guidelines/` specimen cards, `components/`, `ui_kits/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

Key facts to internalize before designing:
- **Palette**: navy `#04091A` (fonds immersifs), gold `#C8B882` (accent unique, CTA), cream `#F0EBE0` (texte sur navy), beige `#F7F4EF` (fond de page), white cards. Score semantics: green ≥75%, orange 50–74%, red <50%.
- **Type**: Inter only (400–800). UPPERCASE micro-labels with letter-spacing. French language, vouvoiement.
- **Icons**: geometric Unicode glyphs (◈ ◉ ◎ ◐ ◑), ✓, →, ▶ — never SVG/PNG icon files. Emoji 🔥/👋 only for app gamification.
- **Motifs**: navy 135° gradient + faint cream grid texture on hero/sidebar; 12px card radius; gold 75% goal line on progress bars; subtle shadows; hover = opacity .88.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
