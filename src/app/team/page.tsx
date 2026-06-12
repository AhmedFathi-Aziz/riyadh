import { TeamHero } from "@/components/team/TeamHero";
import { TeamPageContent } from "@/components/team/TeamPageContent";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { StandardPageSections } from "@/components/seo/StandardPageSections";
import { teamFaqs, teamPageMeta } from "@/lib/team-page";
import { getFaqsForPage } from "@/lib/seo/page-faqs";
import { jsonLdGraphPath } from "@/lib/seo/jsonld-graph-path";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: teamPageMeta.title,
  description: teamPageMeta.description,
  path: teamPageMeta.path,
  keywords: [
    "فريق ManzilCare",
    "مهندس كشف تسربات الرياض",
    "فني عزل مائي الرياض",
    "فريق كشف تسربات مياه",
    "ManzilCare فريق العمل",
  ],
});

export default function TeamPage() {
  const faqs = getFaqsForPage({ extras: [...teamFaqs], max: 8 });

  return (
    <>
      <PageStructuredData graphPath={jsonLdGraphPath.team()} />
      <SiteHeader activePage="team" />
      <TeamHero />
      <main className="bg-white pb-20">
        <div className="mx-auto max-w-max-width px-gutter">
          <TeamPageContent />
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
