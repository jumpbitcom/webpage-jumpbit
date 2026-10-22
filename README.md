# Jump Bit website

Private website of Jump Bit, a non-commercial project that gives IT advice to non-profit
organisations (associations, foundations, volunteer groups). Jump Bit is not a company yet.

One codebase produces two static websites:

| Domain | Language | Output |
| --- | --- | --- |
| [jumpbit.com](https://jumpbit.com) | English | `dist/en/` |
| [jumpbit.ch](https://jumpbit.ch) | German (Swiss spelling) | `dist/de/` |

Both sites use the same paths. The language switch in the header links to the same page on the other domain, and every page declares its counterpart with `hreflang`.

Built with [Astro](https://docs.astro.build) 7 and styled with the Jump Bit design system in `assets/` (`jumpbit-theme.css`, Inter font, logos and icons).

## Prerequisites

- Node.js 24.22.0, the current LTS release (pinned in `.nvmrc` and `mise.toml`)
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
| `src/settings.ts` | Site name, contact e-mail, operator details for the legal notice, social image |
| `src/pages/` | Pages: home, about, contact, legal notice, privacy policy, blog, tags, 404, RSS |
| `src/pages/[icon].ts`, `site.webmanifest.ts` | Publish the icons and social image from `assets/` and a localized web app manifest |
| `src/pages/design/[...file].ts` | Publishes the UI sample page `assets/jumpbit-ui-example.html` with its stylesheets, logos and fonts at `/design/ui-example.html`, shown in the design blog post |
| `src/content/blog/en/`, `src/content/blog/de/` | Blog posts. Use the same file name in both languages so the language switch finds the translation. |
| `src/styles/site.css` | Page layout on top of `assets/jumpbit-theme.css` |
| `assets/` | Jump Bit design system: tokens, theme, fonts, logos, icons |

## Deployment

Pushing any Git tag triggers [the Hostpoint deployment workflow](.github/workflows/deploy.yml).
It runs `npm ci`, `npm run format:check` and `npm run build`, then replaces
`~/www/jumpbit` over SFTP (port 22) with the contents of `dist/`.
The domain document roots on Hostpoint must point to `~/www/jumpbit/en` for
jumpbit.com and `~/www/jumpbit/de` for jumpbit.ch.

Create a GitHub environment named `production` in the repository settings, configure
required reviewers and permitted deployment tags, and add these environment secrets:

| Secret | Value |
| --- | --- |
| `HOSTPOINT_HOST` | Hostpoint SSH/SFTP server hostname, without a protocol or path |
| `HOSTPOINT_USERNAME` | SSH/SFTP account username whose home contains `www/` |
| `HOSTPOINT_PRIVATE_KEY` | Complete dedicated SSH private key, including its header, footer and line breaks, without a passphrase |
| `HOSTPOINT_KNOWN_HOSTS` | Complete OpenSSH `known_hosts` entry for that hostname, verified against Hostpoint's published SSH host-key fingerprint or through Hostpoint support |

Enable SSH/SFTP access for the account in Hostpoint first and authorize the
matching public key in that user's `~/.ssh/authorized_keys` (or through Hostpoint's
SSH key management). Use a dedicated deployment key, never a personal key, and
store only the private key in the GitHub secret, not in the repository. The
workflow validates the key before connecting and removes its temporary copy on exit.
Password login is not used; the old `HOSTPOINT_PASSWORD` secret can be removed.
Do not trust an unverified `ssh-keyscan` result or disable host-key checking.

For example, after committing and pushing the website changes:

```shell
git tag v1.0.0
git push origin v1.0.0
```

Deployments are serialized and an active upload is not cancelled by another tag.
All build checks and local output checks must pass before remote files are deleted.
**Everything previously in `~/www/jumpbit` is deleted before uploading**, including
hidden files and any manually uploaded content. The site is unavailable during
the upload; a failed transfer can leave it incomplete. To roll back, tag a known-good
commit with a new tag and push that tag to redeploy it.

## To do before going live

- [ ] Replace the placeholders in `[square brackets]` in `src/settings.ts` (name and address) and in the privacy policy in `src/i18n/ui.ts` (hosting provider, log retention, AI providers), then have the legal notice and privacy policy reviewed.
- [ ] Configure the Hostpoint document roots, enable SFTP access, and add the `production` environment secrets and deployment protection rules. Hostpoint SFTP uses account credentials, not GitHub OIDC.
- [ ] Add a CI workflow that runs `npm ci`, `npm run format:check` and `npm run build`.

## License

The source code is based on the MIT-licensed [astro-smallworld](https://github.com/anaxite/astro-smallworld) template (see `LICENSE`). The Jump Bit name, logos and texts are not covered by that license.
