/**
 * يولّد ملفات JSON-LD في public/seo/graphs/ قبل البناء.
 * الصفحات تربطها عبر <script src="..."> لتفادي تكرار FAQPage في حمولة RSC.
 */
import fs from "node:fs";
import path from "node:path";
import { blogMeta } from "../src/lib/blog";
import { contactPageMeta } from "../src/lib/contact-page";
import { getAllPosts } from "../src/lib/blog/load-posts";
import { getAllNeighborhoodPages } from "../src/lib/neighborhoods/load-neighborhoods";
import { getAllServicePages } from "../src/lib/services/load-pages";
import { breadcrumbs } from "../src/lib/seo/breadcrumbs";
import { DEFAULT_META_DESCRIPTION } from "../src/lib/seo/constants";
import { extractFaqFromMarkdown } from "../src/lib/seo/extract-markdown-faq";
import { getFaqsForPage, GLOBAL_FAQS } from "../src/lib/seo/page-faqs";
import { prepareServiceMarkdown } from "../src/lib/services/prepare-markdown";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
  buildWebPageSchema,
  buildWebSiteSchema,
  formatPageTitle,
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

function pageGraph(
  pageUrl: string,
  title: string,
  description: string,
  titleSuffix: string | undefined,
  graphs: object[],
): object[] {
  return [
    buildWebPageSchema({
      pageUrl,
      name: formatPageTitle(title, titleSuffix),
      description,
    }),
    ...graphs,
  ];
}

writeGraph("site.json", [buildLocalBusinessSchema(), buildWebSiteSchema()]);

const homeUrl = `${siteConfig.url}/`;
writeGraph("home.json", [
  ...pageGraph(
    homeUrl,
    "كشف تسربات المياه بالرياض",
    DEFAULT_META_DESCRIPTION,
    undefined,
    [
      buildBreadcrumbSchema(breadcrumbs.home()),
      ...faqGraphs(GLOBAL_FAQS),
    ],
  ),
]);

writeGraph(
  "services.json",
  pageGraph(
    `${siteConfig.url}/services`,
    "كشف تسربات المياه وعزل الأسطح بالرياض",
    "خدمات هندسية متكاملة في الرياض: كشف تسربات المياه بدون تكسير، عزل الخزانات والأسطح والحمامات. ضمان معتمد ودعم 24/7 في جميع الأحياء.",
    undefined,
    [
      buildBreadcrumbSchema(breadcrumbs.services()),
      ...faqGraphs(getFaqsForPage()),
    ],
  ),
);

writeGraph(
  "areas.json",
  pageGraph(
    `${siteConfig.url}/areas`,
    "كشف تسربات المياه في أحياء الرياض",
    "صفحة مخصصة لكل حي في الرياض: وصف المنطقة، مشاكل التسرب، أنواع المباني، والخدمات المناسبة. معاينة مجانية من ManzilCare.",
    undefined,
    [
      buildBreadcrumbSchema(breadcrumbs.areas()),
      ...faqGraphs(getFaqsForPage()),
    ],
  ),
);

writeGraph(
  "blog.json",
  pageGraph(
    `${siteConfig.url}${blogMeta.path}`,
    "مدونة عزل وكشف التسربات بالرياض",
    blogMeta.description,
    undefined,
    [
      buildBreadcrumbSchema(breadcrumbs.blog()),
      ...faqGraphs(getFaqsForPage()),
    ],
  ),
);

writeGraph(
  "insulation.json",
  pageGraph(
    `${siteConfig.url}/insulation`,
    "عزل أسطح وخزانات بالرياض",
    "خدمات عزل مائي وحراري وفوم بولي يوريثان للأسطح والخزانات في الرياض. فحص مجاني، منهجية احترافية، وضمان يصل إلى 15 عاماً.",
    undefined,
    [
      buildBreadcrumbSchema(breadcrumbs.insulation()),
      ...faqGraphs(getFaqsForPage({ serviceSlug: "roof-insulation-riyadh" })),
    ],
  ),
);

writeGraph(
  "contact.json",
  pageGraph(
    `${siteConfig.url}${contactPageMeta.path}`,
    "اتصل بنا — كشف تسربات وعزل بالرياض",
    contactPageMeta.description,
    "معاينة مجانية 24/7",
    [
      buildBreadcrumbSchema(breadcrumbs.contact()),
      ...faqGraphs(getFaqsForPage()),
    ],
  ),
);

for (const page of getAllServicePages()) {
  const cleaned = prepareServiceMarkdown(page.content);
  const markdownFaqs = extractFaqFromMarkdown(cleaned);
  const faqs = getFaqsForPage({
    extras: markdownFaqs,
    serviceSlug: page.slug,
    max: 5,
  });
  const pageUrl = `${siteConfig.url}/services/${page.slug}`;
  writeGraph(
    `services/${page.slug}.json`,
    pageGraph(pageUrl, page.keyword, page.description, undefined, [
      buildBreadcrumbSchema(breadcrumbs.service(page.keyword, page.slug)),
      buildServiceSchema({
        name: page.keyword,
        description: page.description,
        pageUrl,
      }),
      ...faqGraphs(faqs),
    ]),
  );
}

for (const page of getAllNeighborhoodPages()) {
  const markdownFaqs = extractFaqFromMarkdown(page.content);
  const faqs = getFaqsForPage({ extras: markdownFaqs, max: 5 });
  const pageUrl = `${siteConfig.url}/areas/${page.slug}`;
  writeGraph(
    `areas/${page.slug}.json`,
    pageGraph(pageUrl, page.keyword, page.description, undefined, [
      buildBreadcrumbSchema(breadcrumbs.area(page.keyword, page.slug)),
      buildServiceSchema({
        name: page.keyword,
        description: page.description,
        pageUrl,
      }),
      ...faqGraphs(faqs),
    ]),
  );
}

for (const post of getAllPosts()) {
  const pageUrl = `${siteConfig.url}/blog/${post.slug}`;
  writeGraph(
    `blog/${post.slug}.json`,
    pageGraph(pageUrl, post.title, post.excerpt, "مدونة ManzilCare", [
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
    ]),
  );
}

const serviceCount = getAllServicePages().length;
const areaCount = getAllNeighborhoodPages().length;
const blogCount = getAllPosts().length;
console.log(
  `Generated JSON-LD graphs: site + ${serviceCount} services, ${areaCount} areas, ${blogCount} blog posts + static pages`,
);
