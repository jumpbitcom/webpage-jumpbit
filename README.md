# Jump Bit website

Company website of Jump Bit: help with every kind of IT question, for private individuals,
non-profit organisations and companies.

One codebase produces two static websites:

| Domain | Language | Output |
| --- | --- | --- |
| [jumpbit.com](https://jumpbit.com) | English | `dist/en/` |
| [jumpbit.ch](https://jumpbit.ch) | German (Swiss spelling) | `dist/de/` |

Both sites use the same paths. The language switch in the header links to the same page on the other domain, and every page declares its counterpart with `hreflang`.

Built with [Astro](https://docs.astro.build) and styled with the Jump Bit design system in `assets/` (`jumpbit-theme.css`, Inter font, logos and icons).

## Prerequisites

- Node.js 24 (pinned in `.nvmrc` and `mise.toml`)
- npm (lock file: `package-lock.json`)

## Setup

```shell
npm ci
cp .env.example .env   # optional, only for local overrides
```

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | English dev server on http://localhost:4321 |
| `npm run dev:de` | German dev server on http://localhost:4322 |
| `npm run check` | Type and template check (`astro check`) |
| `npm run build` | Check, then build both sites into `dist/en/` and `dist/de/` |
| `npm run build:en` / `build:de` | Build one site |
| `npm run preview` / `preview:de` | Serve the built English or German site |
| `npm run format` / `format:check` | Format or check the sources with Prettier |

To test the language switch locally, run both dev servers and set `SITE_URL_EN=http://localhost:4321` and `SITE_URL_DE=http://localhost:4322` in `.env`.

## Configuration

| Variable | Default | Purpose |
| --- | --- | --- |
| `SITE_LOCALE` | `en` | Language of the build (`en` or `de`). Set by the npm scripts. |
| `SITE_URL_EN` | `https://jumpbit.com` | Base URL of the English site |
| `SITE_URL_DE` | `https://jumpbit.ch` | Base URL of the German site |

The variables are validated by Astro at startup (`env.schema` in `astro.config.mjs`). None of them is secret.

## Project structure

| Path | Content |
| --- | --- |
| `src/i18n/ui.ts` | All page text in English and German. The German dictionary is typed against the English one, so a missing translation fails `npm run check`. |
| `src/i18n/index.ts` | Current language, language metadata and cross-domain links |
| `src/settings.ts` | Site name, contact e-mail, company details for the legal notice, social image |
| `src/pages/` | Pages: home, about, contact, legal notice, privacy policy, blog, tags, 404, RSS |
| `src/pages/[icon].ts`, `site.webmanifest.ts` | Publish the icons and social image from `assets/` and a localized web app manifest |
| `src/content/blog/en/`, `src/content/blog/de/` | Blog posts. Use the same file name in both languages so the language switch finds the translation. |
| `src/styles/site.css` | Page layout on top of `assets/jumpbit-theme.css` |
| `assets/` | Jump Bit design system: tokens, theme, fonts, logos, icons |

## Deployment

Deploy `dist/en/` to jumpbit.com and `dist/de/` to jumpbit.ch. The hosting provider is not decided yet.

## To do before going live

- [ ] Replace the placeholders in `[square brackets]` in `src/settings.ts` (owner, address, UID) and in the privacy policy in `src/i18n/ui.ts` (hosting provider, log retention, AI providers), then have the legal notice and privacy policy reviewed.
- [ ] Decide on hosting and add a deployment workflow (GitHub Actions with OIDC, secrets in GitHub environments).
- [ ] Add a CI workflow that runs `npm ci`, `npm run format:check` and `npm run build`.
- [ ] Upgrade Astro to the current major version.

## License

The source code is based on the MIT-licensed [astro-smallworld](https://github.com/anaxite/astro-smallworld) template (see `LICENSE`). The Jump Bit name, logos and texts are not covered by that license.
