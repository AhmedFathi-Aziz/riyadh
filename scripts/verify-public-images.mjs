/**
 * يتأكد أن كل مسار /images/... المستخدم في الكود موجود في public/images/
 * قبل البناء — حتى لا ينشر الموقع صوراً مختلفة أو روابط خارجية.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const imagesDir = path.join(root, "public", "images");
const srcDir = path.join(root, "src");
const contentDir = path.join(root, "content");

const quotedImageRe =
  /["'`]\/images\/([a-zA-Z0-9][a-zA-Z0-9._-]*\.[a-zA-Z0-9]+)["'`]/g;
const coverImageRe = /coverImage:\s*"([a-zA-Z0-9][a-zA-Z0-9._-]*\.[a-zA-Z0-9]+)"/g;
const mdImageRe =
  /!\[[^\]]*\]\(\/images\/([a-zA-Z0-9][a-zA-Z0-9._-]*\.[a-zA-Z0-9]+)\)/g;
const externalImageRe = /url:\s*"(https?:\/\/[^"]+)"/g;

function walk(dir, ext, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, ext, files);
    else if (full.endsWith(ext)) files.push(full);
  }
  return files;
}

function collectFromText(text, required) {
  for (const re of [quotedImageRe, coverImageRe, mdImageRe, localImageRe]) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text)) !== null) {
      required.add(m[1]);
    }
  }
}

const fileFieldRe = /file:\s*"([a-zA-Z0-9][a-zA-Z0-9._-]*\.[a-zA-Z0-9]+)"/g;
const localImageRe =
  /localImage\(\s*"([a-zA-Z0-9][a-zA-Z0-9._-]*\.[a-zA-Z0-9]+)"/g;

const required = new Set();

const mediaDir = path.join(srcDir, "lib", "media");
for (const file of walk(mediaDir, ".ts")) {
  collectFromText(fs.readFileSync(file, "utf8"), required);
  const text = fs.readFileSync(file, "utf8");
  fileFieldRe.lastIndex = 0;
  let m;
  while ((m = fileFieldRe.exec(text)) !== null) {
    required.add(m[1]);
  }
}

const metaFile = path.join(srcDir, "lib", "services", "service-pages-meta.ts");
if (fs.existsSync(metaFile)) {
  collectFromText(fs.readFileSync(metaFile, "utf8"), required);
}

for (const file of [...walk(srcDir, ".ts"), ...walk(srcDir, ".tsx")]) {
  const text = fs.readFileSync(file, "utf8");
  collectFromText(text, required);
  if (file.endsWith("original-sources.ts")) {
    let extUrl;
    while ((extUrl = externalImageRe.exec(text)) !== null) {
      console.error(
        `External image URL in ${path.relative(root, file)}: ${extUrl[1]}`,
      );
      process.exit(1);
    }
  }
}

const blogDir = path.join(contentDir, "blog");
const servicesDir = path.join(contentDir, "services");
for (const dir of [blogDir, servicesDir]) {
  if (!fs.existsSync(dir)) continue;
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith(".md") || name.startsWith("_") || name === "README.md") {
      continue;
    }
    collectFromText(
      fs.readFileSync(path.join(dir, name), "utf8"),
      required,
    );
  }
}

const missing = [...required].filter((name) => {
  const direct = path.join(imagesDir, name);
  if (fs.existsSync(direct)) return false;
  return true;
});

if (missing.length > 0) {
  console.error("Missing files in public/images/:");
  for (const name of missing.sort()) console.error(`  - ${name}`);
  console.error("\nAdd the file locally, then commit it before deploy.");
  process.exit(1);
}

const MAX_HERO_BYTES = 180_000;
const heroOversized = [];
for (const name of required) {
  if (!/-hero(-1080)?\.webp$/i.test(name)) continue;
  const filePath = path.join(imagesDir, name);
  if (!fs.existsSync(filePath)) continue;
  const size = fs.statSync(filePath).size;
  if (size > MAX_HERO_BYTES) {
    heroOversized.push({ name, size });
  }
}

if (heroOversized.length > 0) {
  console.error("Hero images exceed LCP size budget:");
  for (const { name, size } of heroOversized) {
    console.error(`  - ${name}: ${Math.round(size / 1024)}KB (max ${MAX_HERO_BYTES / 1024}KB)`);
  }
  process.exit(1);
}

console.log(`verify-public-images: OK (${required.size} assets in public/images/)`);
