// Runs the Astro CLI for one site language, so the npm scripts behave the same on every OS.
// Usage: node scripts/astro-locale.mjs <en|de> <astro command> [astro options]
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import astroPackage from "astro/package.json" with { type: "json" };

const [locale, ...astroArgs] = process.argv.slice(2);
if (locale !== "en" && locale !== "de") {
  console.error(
    "Usage: node scripts/astro-locale.mjs <en|de> <astro command> [options]",
  );
  process.exit(2);
}

// Run Astro's own CLI entry point (as declared in its package.json) with this Node binary,
// instead of going through a shell.
const astroDir = path.dirname(
  fileURLToPath(import.meta.resolve("astro/package.json")),
);
const astroCli = path.join(astroDir, astroPackage.bin.astro);
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
