# SyncLab ESLint config

Inspired by [Rocketseat ESLint config](https://github.com/Rocketseat/eslint-config-rocketseat).

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

1. Install the dependencies

```bash
npm i -D eslint @synclab/eslint-config
```

2. Create a `.eslintrc.json` file extending the config:

```json
{
  "extends": "@synclab/eslint-config/react"
  // "extends": "@synclab/eslint-config/node"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
