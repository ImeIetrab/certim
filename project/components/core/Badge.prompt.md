Small uppercase status pill — exam outcomes, subscription state, the AMF certification tag.

```jsx
<Badge variant="pass">Réussi</Badge>
<Badge variant="fail">Échoué</Badge>
<Badge variant="active">Actif</Badge>
<Badge variant="gold">AMF</Badge>
```

- `pass`/`active` are green, `fail` is red, `neutral` is bordered grey ("Bientôt"), `gold` is the certification tag.
- Always renders UPPERCASE with 0.04em tracking at 10px/700.
