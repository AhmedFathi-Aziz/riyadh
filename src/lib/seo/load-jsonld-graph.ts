import fs from "node:fs";
import path from "node:path";

/** Loads pre-generated JSON-LD graph files from public/seo/graphs (built in prebuild). */
export function loadJsonLdGraph(publicPath: string): object[] {
  const filePath = path.join(
    process.cwd(),
    "public",
    publicPath.replace(/^\//, ""),
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(
      `JSON-LD graph not found: ${publicPath} — run "npm run seo" or prebuild first`,
    );
  }

  const parsed = JSON.parse(fs.readFileSync(filePath, "utf8")) as unknown;
  return Array.isArray(parsed) ? parsed : [parsed as object];
}
