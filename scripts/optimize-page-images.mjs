/**
 * Converts page PNG/JPG assets to compressed WebP + responsive widths.
 * Usage: node scripts/optimize-page-images.mjs <sourceDir> <baseName>
 * Example: node scripts/optimize-page-images.mjs "public/pages/كشف تسربات المياه بالرياض" leak-detection-water-riyadh
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const HERO_MAX_KB = 300;
const CONTENT_MAX_KB = 150;
const WIDTHS = [640, 1080, 1920];

function pickHeroFile(dir) {
  const files = fs.readdirSync(dir);
  const hero = files.find((f) => /hero/i.test(f) && /\.(png|jpe?g)$/i.test(f));
  if (hero) return hero;
  return files.find((f) => /\.(png|jpe?g)$/i.test(f));
}

function pickContentFile(dir, heroFile) {
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g)$/i.test(f) && f !== heroFile);
  return files.sort((a, b) => {
    const sa = fs.statSync(path.join(dir, a)).size;
    const sb = fs.statSync(path.join(dir, b)).size;
    return sb - sa;
  })[0];
}

async function encodeUnderBudget(pipeline, maxKb, startQuality = 86) {
  let quality = startQuality;
  let buffer = await pipeline.webp({ quality, effort: 6 }).toBuffer();
  while (buffer.length > maxKb * 1024 && quality > 52) {
    quality -= 4;
    buffer = await pipeline.webp({ quality, effort: 6 }).toBuffer();
  }
  return { buffer, quality };
}

async function writeResponsive(basePipeline, outDir, baseName, role, maxKb) {
  const meta = await basePipeline.clone().metadata();
  const aspect = (meta.width ?? 16) / (meta.height ?? 9);

  for (const w of WIDTHS) {
    if ((meta.width ?? 0) < w * 0.85) continue;
    const h = Math.round(w / aspect);
    const pipe = basePipeline.clone().resize(w, h, { fit: "inside", withoutEnlargement: true });
    const { buffer } = await encodeUnderBudget(pipe, maxKb);
    const suffix = w === WIDTHS[0] ? "" : `-${w}`;
    const file = `${baseName}-${role}${suffix}.webp`;
    fs.writeFileSync(path.join(outDir, file), buffer);
    console.log(`  ${file} (${(buffer.length / 1024).toFixed(1)} KB)`);
  }

  const mainW = Math.min(meta.width ?? 1920, role === "hero" ? 1920 : 1280);
  const mainH = Math.round(mainW / aspect);
  const mainPipe = basePipeline
    .clone()
    .resize(mainW, mainH, { fit: "inside", withoutEnlargement: true });
  const { buffer } = await encodeUnderBudget(
    mainPipe,
    maxKb,
    role === "hero" ? 88 : 84,
  );
  const mainFile = `${baseName}-${role}.webp`;
  fs.writeFileSync(path.join(outDir, mainFile), buffer);
  console.log(`  ${mainFile} (${(buffer.length / 1024).toFixed(1)} KB) [main]`);
  return { width: mainW, height: mainH, mainFile };
}

async function main() {
  const sourceDir = process.argv[2];
  const baseName = process.argv[3];
  if (!sourceDir || !baseName) {
    console.error(
      "Usage: node scripts/optimize-page-images.mjs <sourceDir> <baseName>",
    );
    process.exit(1);
  }

  const absSource = path.resolve(sourceDir);
  const outDir = path.join(process.cwd(), "public", "images");
  fs.mkdirSync(outDir, { recursive: true });

  const heroFile = pickHeroFile(absSource);
  if (!heroFile) {
    console.error("No images found in", absSource);
    process.exit(1);
  }

  console.log("Hero:", heroFile);
  const heroPath = path.join(absSource, heroFile);
  const heroInfo = await writeResponsive(
    sharp(heroPath),
    outDir,
    baseName,
    "hero",
    HERO_MAX_KB,
  );

  const contentFile = pickContentFile(absSource, heroFile);
  let contentInfo = null;
  if (contentFile) {
    console.log("Content:", contentFile);
    contentInfo = await writeResponsive(
      sharp(path.join(absSource, contentFile)),
      outDir,
      baseName,
      "field",
      CONTENT_MAX_KB,
    );
  }

  const manifest = {
    hero: {
      src: `/images/${heroInfo.mainFile}`,
      width: heroInfo.width,
      height: heroInfo.height,
    },
    field: contentInfo
      ? {
          src: `/images/${contentInfo.mainFile}`,
          width: contentInfo.width,
          height: contentInfo.height,
        }
      : null,
  };
  console.log(JSON.stringify(manifest, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
