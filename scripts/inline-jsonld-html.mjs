/**
 * After next build: injects inline JSON-LD into static HTML from pre-generated graphs.
 * Avoids Next.js RSC flight data duplicating FAQPage while keeping Google-parseable inline schema.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const publicDir = path.join(root, "public");
const manifestPath = path.join(publicDir, "seo", "page-graph-manifest.json");

if (!fs.existsSync(manifestPath)) {
  console.error("inline-jsonld-html: missing public/seo/page-graph-manifest.json — run prebuild");
  process.exit(1);
}

/** @type {Record<string, string[]>} */
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

function loadGraphs(relPaths) {
  const merged = [];
  for (const rel of relPaths) {
    const filePath = path.join(publicDir, rel);
    const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
    if (Array.isArray(parsed)) merged.push(...parsed);
    else merged.push(parsed);
  }
  return merged;
}

function stripExistingLdJson(html) {
  return html.replace(
    /<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g,
    "",
  );
}

function injectLdJson(html, graphs) {
  if (graphs.length === 0) return html;
  const tag = `<script type="application/ld+json">${JSON.stringify(graphs)}</script>`;
  const cleaned = stripExistingLdJson(html);
  if (cleaned.includes("</head>")) {
    return cleaned.replace("</head>", `${tag}</head>`);
  }
  return `${tag}${cleaned}`;
}

let injected = 0;
for (const [relHtml, graphPaths] of Object.entries(manifest)) {
  const htmlPath = path.join(outDir, relHtml.replace(/\//g, path.sep));
  if (!fs.existsSync(htmlPath)) {
    console.warn(`inline-jsonld-html: skip missing ${relHtml}`);
    continue;
  }
  const graphs = loadGraphs(graphPaths);
  const html = fs.readFileSync(htmlPath, "utf8");
  fs.writeFileSync(htmlPath, injectLdJson(html, graphs), "utf8");
  injected++;
}

console.log(`inline-jsonld-html: OK — injected JSON-LD into ${injected} pages`);
