Gold/navy call-to-action button — use for any primary or secondary action across the CertIM marketing site and app.

```jsx
<Button variant="primary" iconRight="→">S'entraîner</Button>
<Button variant="secondary">Examen blanc</Button>
<Button variant="outline">Voir le programme</Button>
<Button variant="ghost" size="sm">Annuler</Button>
```

- `variant="primary"` (gold on navy text) is the default CTA. `secondary` is navy with cream text. `outline` is for use on navy backgrounds. `ghost` is a muted text-only action.
- `size`: `sm` / `md` (default) / `lg`. Hero CTAs use `lg`.
- Pass Unicode glyphs as `iconLeft`/`iconRight` ("▶", "→") — the brand uses these rather than icon SVGs.
- Hover dims opacity to .88; disabled drops to .5.
