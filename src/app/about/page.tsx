import { AboutHero } from "@/components/about/AboutHero";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { StandardPageSections } from "@/components/seo/StandardPageSections";
import { aboutFaqs, aboutPageMeta } from "@/lib/about-page";
import { getFaqsForPage } from "@/lib/seo/page-faqs";
import { jsonLdGraphPath } from "@/lib/seo/jsonld-graph-path";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: aboutPageMeta.title,
  description: aboutPageMeta.description,
  path: aboutPageMeta.path,
  keywords: [
    "من نحن ManzilCare",
    "شركة عزل وكشف تسربات الرياض",
    "شركة كشف تسربات مياه الرياض",
    "ManzilCare الرياض",
    "فريق عزل مائي الرياض",
  ],
});

export default function AboutPage() {
  const faqs = getFaqsForPage({ extras: [...aboutFaqs], max: 8 });

  return (
    <>
      <PageStructuredData graphPath={jsonLdGraphPath.about()} />
      <SiteHeader activePage="about" />
      <AboutHero />
      <main className="bg-white pb-20">
        <div className="mx-auto max-w-max-width px-gutter">
        <AboutPageContent />
        <StandardPageSections
          faqs={faqs}
          showServices={false}
          showSteps={false}
        />
        </div>
      </main>
      <Footer />
    </>
  );
}
