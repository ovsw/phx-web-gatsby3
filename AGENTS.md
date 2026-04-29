# AGENTS.md

## Purpose

Minimal operating notes for AI coding agents working in this repo.

## Stack

- Gatsby 3
- React 17
- Theme UI
- Sanity content sourcing via `gatsby-source-sanity`
- npm with `package-lock.json`

## Commands

- `npm run dev`: local development, including a Gatsby cache clean first
- `npm run develop`: Gatsby develop mode
- `npm run build`: production build
- `npm run serve`: serve the built site
- `npm run clean` or `npm run clean-cache`: clear Gatsby cache/output
- `npm run format`: run Prettier

`build` and `develop` already inject `NODE_OPTIONS=--openssl-legacy-provider`. Preserve that unless the dependency stack is upgraded and reverified.

## Verification Notes

- `npm run build` currently succeeds
- `npm run test` is a placeholder that always fails; do not use it as a verification step
- Current build warnings include:
  - `gatsby-plugin-sitemap` compatibility warning
  - outdated `caniuse-lite`
  - `MaxListenersExceededWarning` during build
  - redirect collisions between some Sanity redirects and generated pages

## Source of Truth

- `client-config.js`: Sanity project ID and dataset
- `gatsby-config.js`: Gatsby plugins, env loading, site metadata, Sanity source plugin config
- `gatsby-node.js`: page creation and Sanity-driven redirects
- `config/website.js`: primary site metadata and branding config
- `src/pages`: static Gatsby pages
- `src/templates`: templates for Sanity-generated routes
- `src/components`: reusable UI and serializers
- `src/gatsby-plugin-theme-ui`: Theme UI tokens and theme config

## Environment Variables

- `GATSBY_SANITY_PROJECT_ID`: optional override; default is checked in
- `GATSBY_SANITY_DATASET`: optional override; default is checked in
- `SANITY_READ_TOKEN`: optional unless authenticated Sanity reads are needed

## Guardrails

- Never edit `node_modules`
- Prefer updating `config/website.js` and Sanity-backed content/config instead of duplicating site metadata in components
- Keep README and agent guidance aligned with actual `package.json` scripts and verified build behavior
