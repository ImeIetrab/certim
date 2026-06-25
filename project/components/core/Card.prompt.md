Surface container used everywhere — dashboard panels, account blocks, feature tiles.

```jsx
<Card title="Lancer un entraînement" subtitle="Sélectionnez un ou plusieurs thèmes.">
  …content…
</Card>
<Card tone="navy" title="Dernier examen blanc">…</Card>
<Card tone="accent">…</Card>
```

- `tone="light"` (default) = white card on beige page, 1px border. `navy` = dark card. `accent` = gold-tinted glass.
- Radius 12px, padding 20px 22px. Pass `title`/`subtitle` for the standard header, or omit and supply your own children.
