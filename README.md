# Docudocs

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

Run `cp .env.example .env` and set values. These environment variables are used in [`docusaurus.config.js`](/docusaurus.config.js).

### Local Development

```bash
pnpm install
```

```bash
pnpm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
pnpm run build
```

### Build Locally

```bash
pnpm run serve
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```bash
pnpm run deploy
```
