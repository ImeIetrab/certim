Hero KPI tile for the app dashboard header — sits on the navy gradient, shows a metric with an uppercase micro label.

```jsx
<KpiPill label="Score de maîtrise" minWidth={160}>
  <KpiValue tone="gold">62%</KpiValue>
  <ProgressBar value={62} onNavy showGoal style={{ marginTop: 7 }} />
</KpiPill>
<KpiPill label="Questions répondues">
  <KpiValue tone="cream">347</KpiValue>
</KpiPill>
```

- Translucent white surface (`rgba(255,255,255,.07)`) with a faint border — only legible on navy.
- Pair `KpiValue` (gold for headline metrics, cream for secondary) and optionally a `ProgressBar onNavy`.
