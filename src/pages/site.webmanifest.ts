// Web app manifest in the language of the build, based on assets/site.webmanifest.
import type { APIRoute } from "astro";
import { siteConfig } from "~/settings";
import { LOCALES, locale, t } from "~/i18n";

export const GET: APIRoute = () =>
  Response.json({
    name: siteConfig.title,
    short_name: siteConfig.title,
    description: t.meta.description,
    lang: LOCALES[locale].htmlLang,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#323232",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  });
