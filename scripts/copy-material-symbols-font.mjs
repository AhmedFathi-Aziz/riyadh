/**
 * Copies Material Symbols woff2 from @fontsource into public/fonts for self-hosted icons.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(
  root,
  "node_modules",
  "@fontsource",
  "material-symbols-outlined",
  "files",
  "material-symbols-outlined-latin-400-normal.woff2",
);
const destDir = path.join(root, "public", "fonts");
const dest = path.join(destDir, "material-symbols-outlined.woff2");

if (!fs.existsSync(source)) {
  console.error(
    "copy-material-symbols-font: install @fontsource/material-symbols-outlined first",
  );
  process.exit(1);
}

fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(source, dest);
console.log(`copy-material-symbols-font: OK → public/fonts/material-symbols-outlined.woff2`);
