// Runs the Astro CLI for one site language, so the npm scripts behave the same on every OS.
// Usage: node scripts/astro-locale.mjs <en|de> <astro command> [astro options]
import { spawn } from "node:child_process";
import path from "node:path";

const [locale, ...astroArgs] = process.argv.slice(2);
if (locale !== "en" && locale !== "de") {
  console.error(
    "Usage: node scripts/astro-locale.mjs <en|de> <astro command> [options]",
  );
  process.exit(2);
}

// Run Astro's own entry point with this Node binary instead of going through a shell.
const astroCli = path.join(
  import.meta.dirname,
  "..",
  "node_modules",
  "astro",
  "astro.js",
);
const child = spawn(process.execPath, [astroCli, ...astroArgs], {
  stdio: "inherit",
  env: { ...process.env, SITE_LOCALE: locale },
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}
child.on("exit", (code, signal) => {
  process.exitCode = code ?? (signal ? 1 : 0);
});
