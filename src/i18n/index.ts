// Language of the current build and links to the same page in the other language.
// jumpbit.com serves English and jumpbit.ch serves German; both builds share the same paths.
import { SITE_LOCALE, SITE_URL_DE, SITE_URL_EN } from "astro:env/client";
import { dictionaries, type Dictionary } from "./ui";

export type Locale = keyof typeof dictionaries;

type LocaleInfo = {
  readonly htmlLang: string;
  readonly ogLocale: string;
  readonly label: string;
  readonly siteUrl: string;
};

export const LOCALES: Readonly<Record<Locale, LocaleInfo>> = {
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    label: "English",
    siteUrl: SITE_URL_EN,
  },
  de: {
    htmlLang: "de-CH",
    ogLocale: "de_CH",
    label: "Deutsch",
    siteUrl: SITE_URL_DE,
  },
};

/** Language this build is generated for. */
export const locale: Locale = SITE_LOCALE;

/** The other language, which the language switch links to. */
export const otherLocale: Locale = locale === "en" ? "de" : "en";

/** All user-facing text in the current language. */
export const t: Dictionary = dictionaries[locale];

/** Absolute URL of `path` on the website of `target`. */
export function localizedUrl(target: Locale, path: string): URL {
  return new URL(path, LOCALES[target].siteUrl);
}
