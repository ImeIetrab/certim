Selectable theme chip for the training/exam theme picker — numbered navy badge, theme name, optional score, gold checkmark when selected.

```jsx
<ThemeChip num={1} name="Cadre réglementaire" score={78}
  selected={sel} onToggle={() => setSel(!sel)} />
```

- Default border is beige; hover/selected border turns navy with a faint navy fill.
- `score` is colored with the shared `scoreColor` thresholds.
- Lay these out in a 2-column grid (`grid-template-columns: 1fr 1fr; gap: 7px`).
