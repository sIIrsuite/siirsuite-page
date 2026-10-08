# Siirsuite

Vite + React websites for exploring art through maths and programming, styled to match Siir.

- [Siirsuite](https://siirsuite.online/)
- [Siir for Android](https://siirsuite.online/siir/)

## Development

```sh
npm ci
npm run dev       # localhost:5173
npm run dev:siir  # localhost:5174/siir/ (separate terminal)
```

## Deployment

```sh
npm run build:pages
```

Output: `dist/pages/`. Pushes to `main` deploy both pages through GitHub Actions.
