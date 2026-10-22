// Publishes the Jump Bit UI sample page with its stylesheets, logos and fonts from assets/
// under /design/, so the blog can show it while assets/ stays the single source of truth.
// The sample page links its files relatively, so they keep their names from assets/.
import type { APIRoute, GetStaticPaths } from "astro";
import { readFile } from "node:fs/promises";
import path from "node:path";

const FILES = {
  "ui-example.html": {
    source: "jumpbit-ui-example.html",
    type: "text/html; charset=utf-8",
  },
  "jumpbit-theme.css": {
    source: "jumpbit-theme.css",
    type: "text/css; charset=utf-8",
  },
  "jumpbit-ui.css": {
    source: "jumpbit-ui.css",
    type: "text/css; charset=utf-8",
  },
  "jumpbitlogo.png": { source: "jumpbitlogo.png", type: "image/png" },
  "jumpbitlogoweiss.png": { source: "jumpbitlogoweiss.png", type: "image/png" },
  "favicon.svg": { source: "favicon.svg", type: "image/svg+xml" },
  "font/Inter-VariableFont_opsz,wght.ttf": {
    source: "font/Inter-VariableFont_opsz,wght.ttf",
    type: "font/ttf",
  },
  "font/Inter-Italic-VariableFont_opsz,wght.ttf": {
    source: "font/Inter-Italic-VariableFont_opsz,wght.ttf",
    type: "font/ttf",
  },
} as const;

type File = keyof typeof FILES;

export const getStaticPaths = (() =>
  Object.keys(FILES).map((file) => ({
    params: { file },
  }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  // getStaticPaths limits params.file to the keys of FILES.
  const { source, type } = FILES[params.file as File];
  const content = await readFile(path.join(process.cwd(), "assets", source));
  return new Response(content, { headers: { "Content-Type": type } });
};
