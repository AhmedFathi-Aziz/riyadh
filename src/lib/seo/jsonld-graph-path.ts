/** مسارات ملفات JSON-LD المُولَّدة في prebuild — تُربط بـ script src لتجنب تكرار Schema في HTML */
/** slugs عربية → اسم ملف ASCII لتفادي مشاكل Windows/dev */
const JSONLD_GRAPH_FILE_SLUGS: Record<string, string> = {
  "عزل-مائي-بالرياض": "waterproofing-riyadh",
  "عزل-حراري-بالرياض": "thermal-insulation-riyadh",
  "عزل-خزانات-بالرياض": "tanks-insulation-riyadh",
};

function graphFileSlug(slug: string): string {
  return JSONLD_GRAPH_FILE_SLUGS[slug] ?? slug;
}

export const jsonLdGraphPath = {
  site: () => "/seo/graphs/site.json",
  home: () => "/seo/graphs/home.json",
  services: () => "/seo/graphs/services.json",
  service: (slug: string) =>
    `/seo/graphs/services/${graphFileSlug(slug)}.json`,
  areas: () => "/seo/graphs/areas.json",
  area: (slug: string) => `/seo/graphs/areas/${slug}.json`,
  blog: () => "/seo/graphs/blog.json",
  post: (slug: string) => `/seo/graphs/blog/${slug}.json`,
  insulation: () => "/seo/graphs/insulation.json",
  contact: () => "/seo/graphs/contact.json",
} as const;
