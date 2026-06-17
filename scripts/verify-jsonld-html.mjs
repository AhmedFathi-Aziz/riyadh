/**
 * After inline-jsonld-html: validates production HTML has parseable inline JSON-LD.
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

function extractInlineLdJson(html) {
  const blocks = [];
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let match;
  while ((match = re.exec(html)) !== null) {
    blocks.push(match[1]);
  }
  return blocks;
}

const htmlFiles = walkHtml(outDir);
if (htmlFiles.length === 0) {
  console.error("verify-jsonld-html: no HTML in out/ — run npm run build first");
  process.exit(1);
}

const offenders = [];
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const rel = path.relative(outDir, file).replace(/\\/g, "/");
  const srcScripts = (html.match(/type="application\/ld\+json" src="/g) ?? []).length;
  const blocks = extractInlineLdJson(html);

  if (srcScripts > 0) {
    offenders.push({ file: rel, reason: `external ld+json src (${srcScripts})` });
  }
  if (blocks.length === 0 && rel !== "404.html" && rel !== "_not-found.html") {
    offenders.push({ file: rel, reason: "no inline ld+json" });
  }

  let faqInLdJson = 0;
  for (const block of blocks) {
    try {
      const parsed = JSON.parse(block);
      const items = Array.isArray(parsed) ? parsed : [parsed];
      faqInLdJson += items.filter((item) => item["@type"] === "FAQPage").length;
    } catch {
      offenders.push({ file: rel, reason: "invalid JSON-LD JSON" });
    }
  }
  if (faqInLdJson > 1) {
    offenders.push({ file: rel, reason: `duplicate FAQPage in ld+json (${faqInLdJson})` });
  }
}

if (offenders.length > 0) {
  console.error("verify-jsonld-html: structured data issues:");
  for (const o of offenders) {
    console.error(`  ${o.file}: ${o.reason}`);
  }
  process.exit(1);
}

console.log(
  `verify-jsonld-html: OK — ${htmlFiles.length} pages with inline JSON-LD`,
);
