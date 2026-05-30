/**
 * يولّد robots.txt و sitemap.xml و manifest.webmanifest في public/
 * قبل البناء — متوافق مع output: "export" على Cloudflare Pages.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const blogPath = path.join(root, "src", "lib", "blog.ts");

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://manzilcare.com"
).replace(/\/$/, "");

const blogSource = fs.readFileSync(blogPath, "utf8");
const posts = [];
const entryRe =
  /slug:\s*"([^"]+)"[\s\S]*?publishedAt:\s*"(\d{4}-\d{2}-\d{2})"/g;
let match;
while ((match = entryRe.exec(blogSource)) !== null) {
  posts.push({ slug: match[1], publishedAt: match[2] });
}

const staticPaths = [
  { path: "", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "weekly" },
  { path: "/insulation", priority: "0.9", changefreq: "weekly" },
  { path: "/contact", priority: "0.9", changefreq: "monthly" },
  { path: "/blog", priority: "0.85", changefreq: "daily" },
];

const now = new Date().toISOString().slice(0, 10);

const urlEntry = (loc, lastmod, changefreq, priority) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

const sitemapUrls = [
  ...staticPaths.map((p) =>
    urlEntry(`${baseUrl}${p.path}`, now, p.changefreq, p.priority),
  ),
  ...posts.map((p) =>
    urlEntry(
      `${baseUrl}/blog/${p.slug}`,
      p.publishedAt,
      "monthly",
      "0.7",
    ),
  ),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join("\n")}
</urlset>
`;

const robotsTxt = `User-Agent: *
Allow: /

Host: ${baseUrl}
Sitemap: ${baseUrl}/sitemap.xml
`;

const manifest = {
  name: "عزل الرياض للمحترفين",
  short_name: "عزل الرياض",
  description:
    "الشركة الرائدة في كشف تسربات المياه وعزل الأسطح والخزانات بالرياض. دقة، سرعة، وضمان معتمد يصل إلى 10 سنوات.",
  start_url: "/",
  display: "standalone",
  background_color: "#f8f9ff",
  theme_color: "#001e40",
  lang: "ar",
  dir: "rtl",
  orientation: "portrait-primary",
  categories: ["business", "utilities"],
};

fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsTxt, "utf8");
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf8");
fs.writeFileSync(
  path.join(publicDir, "manifest.webmanifest"),
  `${JSON.stringify(manifest, null, 2)}\n`,
  "utf8",
);

console.log("Generated public/robots.txt, sitemap.xml, manifest.webmanifest");
