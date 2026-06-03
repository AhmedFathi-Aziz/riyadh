/**
 * يولّد ملفات JSON-LD في public/seo/graphs/ قبل البناء.
 * الصفحات تربطها عبر <script src="..."> لتفادي تكرار FAQPage في حمولة RSC.
 */
import fs from "node:fs";
import path from "node:path";
import { getAllPosts } from "../src/lib/blog/load-posts";
import { getAllNeighborhoodPages } from "../src/lib/neighborhoods/load-neighborhoods";
import { getAllServicePages } from "../src/lib/services/load-pages";
import { breadcrumbs } from "../src/lib/seo/breadcrumbs";
import { extractFaqFromMarkdown } from "../src/lib/seo/extract-markdown-faq";
import { getFaqsForPage, GLOBAL_FAQS } from "../src/lib/seo/page-faqs";
import { prepareServiceMarkdown } from "../src/lib/services/prepare-markdown";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  type FaqItem,
} from "../src/lib/seo/structured-data";
import { siteConfig } from "../src/lib/site";

const graphsDir = path.join(process.cwd(), "public", "seo", "graphs");

function writeGraph(relPath: string, graphs: object[]) {
  const outPath = path.join(graphsDir, relPath);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, `${JSON.stringify(graphs)}\n`, "utf8");
}

function faqGraphs(faqs: FaqItem[]): object[] {
  const faq = buildFaqSchema(faqs);
  return faq ? [faq] : [];
}

writeGraph("home.json", [
  buildBreadcrumbSchema(breadcrumbs.home()),
  ...faqGraphs(GLOBAL_FAQS),
]);

writeGraph("services.json", [
  buildBreadcrumbSchema(breadcrumbs.services()),
  ...faqGraphs(getFaqsForPage()),
]);

writeGraph("areas.json", [
  buildBreadcrumbSchema(breadcrumbs.areas()),
  ...faqGraphs(getFaqsForPage()),
]);

writeGraph("blog.json", [
  buildBreadcrumbSchema(breadcrumbs.blog()),
  ...faqGraphs(getFaqsForPage()),
]);

writeGraph("insulation.json", [
  buildBreadcrumbSchema(breadcrumbs.insulation()),
  ...faqGraphs(getFaqsForPage({ serviceSlug: "roof-insulation-riyadh" })),
]);

writeGraph("contact.json", [
  buildBreadcrumbSchema(breadcrumbs.contact()),
  ...faqGraphs(getFaqsForPage()),
]);

for (const page of getAllServicePages()) {
  const cleaned = prepareServiceMarkdown(page.content);
  const markdownFaqs = extractFaqFromMarkdown(cleaned);
  const faqs = getFaqsForPage({
    extras: markdownFaqs,
    serviceSlug: page.slug,
    max: 5,
  });
  const pageUrl = `${siteConfig.url}/services/${page.slug}`;
  writeGraph(`services/${page.slug}.json`, [
    buildBreadcrumbSchema(breadcrumbs.service(page.keyword, page.slug)),
    buildServiceSchema({
      name: page.keyword,
      description: page.description,
      pageUrl,
    }),
    ...faqGraphs(faqs),
  ]);
}

for (const page of getAllNeighborhoodPages()) {
  const markdownFaqs = extractFaqFromMarkdown(page.content);
  const faqs = getFaqsForPage({ extras: markdownFaqs, max: 5 });
  const pageUrl = `${siteConfig.url}/areas/${page.slug}`;
  writeGraph(`areas/${page.slug}.json`, [
    buildBreadcrumbSchema(breadcrumbs.area(page.keyword, page.slug)),
    buildServiceSchema({
      name: page.keyword,
      description: page.description,
      pageUrl,
    }),
    ...faqGraphs(faqs),
  ]);
}

for (const post of getAllPosts()) {
  const pageUrl = `${siteConfig.url}/blog/${post.slug}`;
  writeGraph(`blog/${post.slug}.json`, [
    buildBreadcrumbSchema(breadcrumbs.post(post.title, post.slug)),
    buildArticleSchema({
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug,
      publishedAt: post.publishedAt,
      category: post.category,
      readTime: post.readTime,
      imageSrc: post.image.src,
    }),
    ...faqGraphs(getFaqsForPage({ max: 5 })),
  ]);
}

const serviceCount = getAllServicePages().length;
const areaCount = getAllNeighborhoodPages().length;
const blogCount = getAllPosts().length;
console.log(
  `Generated JSON-LD graphs: ${serviceCount} services, ${areaCount} areas, ${blogCount} blog posts + static pages`,
);
