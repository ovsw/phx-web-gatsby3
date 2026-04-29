# PHX Home Loan Gatsby Site

Marketing site for PHX Home Loan / Jimmy Vercellino, built with Gatsby 3, React 17, Theme UI, and Sanity content sourcing.

## Stack

- Gatsby 3
- React 17
- Theme UI
- Sanity via `gatsby-source-sanity`
- npm with `package-lock.json`

## Local Development

Install dependencies:

```sh
npm install
```

Start local development:

```sh
npm run dev
```

Useful commands:

- `npm run develop`: start Gatsby develop mode without the extra cache clean step
- `npm run build`: production build
- `npm run serve`: serve the built site
- `npm run clean` or `npm run clean-cache`: clear Gatsby caches
- `npm run format`: run Prettier on `js`, `jsx`, `json`, and `md` files

The build and develop scripts already set `NODE_OPTIONS=--openssl-legacy-provider`. Keep that in place unless the Gatsby/dependency stack is upgraded and verified without it.

## Environment

This repo loads environment variables from `.env.<NODE_ENV>` in `gatsby-config.js`.

Relevant variables:

- `GATSBY_SANITY_PROJECT_ID`: optional override for the Sanity project ID. Defaults to `e4y15utr` in `client-config.js`.
- `GATSBY_SANITY_DATASET`: optional override for the Sanity dataset. Defaults to `production` in `client-config.js`.
- `SANITY_READ_TOKEN`: optional token passed to `gatsby-source-sanity`. Needed only when authenticated Sanity reads are required.

`.env.production` currently defines:

- `GATSBY_SANITY_PROJECT_ID`
- `GATSBY_SANITY_DATASET`

## Project Structure

Main source areas:

- `src/pages`: top-level Gatsby pages
- `src/templates`: templates used by pages created in `gatsby-node.js`
- `src/components`: reusable UI components and serializers
- `src/gatsby-plugin-theme-ui`: Theme UI tokens and theme config
- `config/website.js`: primary site metadata and branding config
- `client-config.js`: Sanity project configuration

## Content and Routing

Sanity is the primary content source. `gatsby-node.js` creates:

- generic pages from `allSanityPage`
- blog post pages from `allSanityPost`
- paginated blog index pages
- paginated category pages from `allSanityCategory`
- redirects from the Sanity `redirects` document

When changing site metadata or branding, prefer updating `config/website.js` and Sanity-backed content rather than hardcoding values in multiple components.

## Verification

Verified in this repo on April 29, 2026:

- `npm run build` succeeds
- `npm run test` is not implemented; it is a placeholder command that exits with status `1`

Known build warnings from the current dependency/content state:

- `gatsby-plugin-sitemap` reports a Gatsby version compatibility warning
- `caniuse-lite` is outdated
- Gatsby emits a `MaxListenersExceededWarning` during build
- some Sanity redirects conflict with existing generated pages
