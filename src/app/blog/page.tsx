import type { Metadata } from "next";
import { BlogFeaturedGrid } from "@/components/blog/BlogFeaturedGrid";
import { BlogFooter } from "@/components/blog/BlogFooter";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogLatestGrid } from "@/components/blog/BlogLatestGrid";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { SiteHeader } from "@/components/SiteHeader";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { StandardPageSections } from "@/components/seo/StandardPageSections";
import { blogMeta } from "@/lib/blog";
import { breadcrumbs } from "@/lib/seo/breadcrumbs";
import { getFaqsForPage } from "@/lib/seo/page-faqs";
import { jsonLdGraphPath } from "@/lib/seo/jsonld-graph-path";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "مدونة عزل وكشف التسربات بالرياض",
  description: blogMeta.description,
  path: blogMeta.path,
  keywords: [
    "مدونة ManzilCare",
    "نصائح عزل الأسطح",
    "كشف تسربات المياه",
    "عزل فوم بولي يوريثان",
    "صيانة عزل المباني",
  ],
});

export default function BlogPage() {
  const faqs = getFaqsForPage();

  return (
    <>
      <PageStructuredData graphPath={jsonLdGraphPath.blog()} />
      <SiteHeader activePage="blog" />
      <BlogHero />
      <main className="mx-auto max-w-max-width px-6 py-12">
        <BlogFeaturedGrid />
        <BlogLatestGrid />
        <BlogNewsletter />
        <StandardPageSections faqs={faqs} showServices={false} />
      </main>
      <BlogFooter />
    </>
  );
}
