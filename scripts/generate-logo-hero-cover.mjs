/**
 * Hero cover: ManzilCare logo centered on white background (full, clear).
 * Usage: node scripts/generate-logo-hero-cover.mjs <outputPng> [width] [height]
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const LOGO = path.join(ROOT, "public", "images", "manzilcare-logo.png");

async function main() {
  const outArg = process.argv[2];
  const width = Number(process.argv[3]) || 1920;
  const height = Number(process.argv[4]) || 1080;

  if (!outArg) {
    console.error(
      "Usage: node scripts/generate-logo-hero-cover.mjs <outputPng> [width] [height]",
    );
    process.exit(1);
  }

  if (!fs.existsSync(LOGO)) {
    console.error("Logo not found:", LOGO);
    process.exit(1);
  }

  const outPath = path.resolve(outArg);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const logoMeta = await sharp(LOGO).metadata();
  const maxLogoW = Math.round(width * 0.62);
  const maxLogoH = Math.round(height * 0.72);
  const scale = Math.min(
    maxLogoW / (logoMeta.width ?? 1),
    maxLogoH / (logoMeta.height ?? 1),
    1,
  );
  const logoW = Math.round((logoMeta.width ?? 1) * scale);
  const logoH = Math.round((logoMeta.height ?? 1) * scale);

  const logoBuf = await sharp(LOGO)
    .resize(logoW, logoH, { fit: "inside", withoutEnlargement: true })
    .png()
    .toBuffer();

  const left = Math.round((width - logoW) / 2);
  const top = Math.round((height - logoH) / 2);

  await sharp({
    create: {
      width,
      height,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .composite([{ input: logoBuf, left, top }])
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  console.log(`Wrote ${outPath} (${width}x${height})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
