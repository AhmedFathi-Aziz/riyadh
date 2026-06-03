/**
 * بعد next build: يتأكد أن HTML لا يحتوي FAQPage مضمّناً (سبب Duplicate field في Search Console).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");

function walkHtml(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkHtml(full, files);
    else if (name.endsWith(".html")) files.push(full);
  }
  return files;
}

const htmlFiles = walkHtml(outDir);
if (htmlFiles.length === 0) {
  console.error("verify-jsonld-html: no HTML in out/ — run npm run build first");
  process.exit(1);
}

const offenders = [];
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const faqCount = (html.match(/FAQPage/g) ?? []).length;
  if (faqCount > 0) {
    offenders.push({ file: path.relative(root, file), faqCount });
  }
}

if (offenders.length > 0) {
  console.error("verify-jsonld-html: inline FAQPage found in HTML:");
  for (const o of offenders) console.error(`  ${o.file}: ${o.faqCount}`);
  process.exit(1);
}

const sample = path.join(outDir, "services", "leak-detection-no-damage-riyadh.html");
if (fs.existsSync(sample)) {
  const html = fs.readFileSync(sample, "utf8");
  const srcScripts = (html.match(/type="application\/ld\+json" src="/g) ?? []).length;
  const inlineScripts = (html.match(/type="application\/ld\+json">/g) ?? []).length;
  if (srcScripts < 2 || inlineScripts > 0) {
    console.error(
      `verify-jsonld-html: expected 2 external ld+json scripts and 0 inline on sample page (src=${srcScripts}, inline=${inlineScripts})`,
    );
    process.exit(1);
  }
}

console.log(
  `verify-jsonld-html: OK — ${htmlFiles.length} pages, no inline FAQPage`,
);
