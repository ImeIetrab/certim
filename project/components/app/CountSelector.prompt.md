Segmented selector for choosing the number of questions in a training session.

```jsx
const [n, setN] = React.useState('20');
<CountSelector value={n} onChange={setN} />
```

- Selected option fills navy with cream text; others are white with a beige border. Equal-width segments.
