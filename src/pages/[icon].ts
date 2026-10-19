// Publishes the brand icons and the social image from assets/ at the site root,
// so assets/ stays the single source of truth instead of copies in public/.
import type { APIRoute, GetStaticPaths } from "astro";
import { readFile } from "node:fs/promises";
import path from "node:path";

const ICONS = {
  "favicon.svg": "image/svg+xml",
  "favicon.ico": "image/x-icon",
  "apple-touch-icon.png": "image/png",
  "icon-192.png": "image/png",
  "icon-512.png": "image/png",
  "icon-maskable-512.png": "image/png",
  "og-image.png": "image/png",
} as const;

type Icon = keyof typeof ICONS;

export const getStaticPaths = (() =>
  Object.keys(ICONS).map((icon) => ({
    params: { icon },
  }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  // getStaticPaths limits params.icon to the keys of ICONS.
  const icon = params.icon as Icon;
  const file = await readFile(path.join(process.cwd(), "assets", icon));
  return new Response(file, { headers: { "Content-Type": ICONS[icon] } });
};
