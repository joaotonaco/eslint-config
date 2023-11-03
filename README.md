# ESLint config by @joaotonaco

Inspired by [Rocketseat ESLint config](https://github.com/Rocketseat/eslint-config-rocketseat).

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Import plugin;
- Prettier;

## Setup

1. Install the dependencies

```bash
npm i -D eslint @tonaco/eslint-config
```

2. Create a `.eslintrc.json` file extending the config:

```json
{
  "extends": "@tonaco/eslint-config/react"
  // "extends": "@tonaco/eslint-config/node"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
