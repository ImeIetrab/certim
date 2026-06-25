Score progress bar — theme mastery, exam scores, sidebar mini-bars. Fill color is derived from the score (≥75 green, 50–74 orange, <50 red).

```jsx
<ProgressBar value={78} />
<ProgressBar value={62} onNavy showGoal />
<ProgressBar value={48} height={4} />
```

- `showGoal` draws the gold vertical line at the 75% certification threshold.
- `onNavy` swaps the track to a translucent white for dark surfaces (sidebar, hero).
- Use the exported `scoreColor(value)` helper to color matching score labels the same way.
