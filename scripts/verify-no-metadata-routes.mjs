import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const appDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "src",
  "app",
);

const forbidden = ["manifest.ts", "robots.ts", "sitemap.ts"];

for (const file of forbidden) {
  const full = path.join(appDir, file);
  if (fs.existsSync(full)) {
    console.error(
      `Remove src/app/${file} — use static files in public/ for Cloudflare export.`,
    );
    process.exit(1);
  }
}
