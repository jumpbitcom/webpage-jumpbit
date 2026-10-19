// Astro configuration for the Jump Bit website.
// One codebase is built once per language: English for jumpbit.com, German for jumpbit.ch.
// SITE_LOCALE selects the language; the npm scripts set it (see scripts/astro-locale.mjs).
import { defineConfig, envField } from "astro/config";
import { loadEnv } from "vite";

const SITE_URLS = {
  en: "https://jumpbit.com",
  de: "https://jumpbit.ch",
};

// loadEnv merges .env files with process.env, so the locale and URL overrides work from either.
const env = loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "");
const locale = env.SITE_LOCALE || "en";
if (!Object.hasOwn(SITE_URLS, locale)) {
  throw new Error(`SITE_LOCALE must be "en" or "de", got "${locale}".`);
}
const site =
  (locale === "de" ? env.SITE_URL_DE : env.SITE_URL_EN) || SITE_URLS[locale];

export default defineConfig({
  site,
  // Keep HTML-aware whitespace handling (the default before Astro 7), so text next to
  // inline elements such as links keeps its spaces.
  compressHTML: true,
  outDir: `./dist/${locale}`,
  env: {
    schema: {
      SITE_LOCALE: envField.enum({
        context: "client",
        access: "public",
        values: ["en", "de"],
        default: "en",
      }),
      SITE_URL_EN: envField.string({
        context: "client",
        access: "public",
        url: true,
        default: SITE_URLS.en,
      }),
      SITE_URL_DE: envField.string({
        context: "client",
        access: "public",
        url: true,
        default: SITE_URLS.de,
      }),
    },
  },
});
