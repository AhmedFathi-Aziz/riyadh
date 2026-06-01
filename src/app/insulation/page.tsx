import type { Metadata } from "next";
import { InsulationCtaSection } from "@/components/insulation/InsulationCtaSection";
import { InsulationFooter } from "@/components/insulation/InsulationFooter";
import { InsulationHero } from "@/components/insulation/InsulationHero";
import { InsulationPortfolio } from "@/components/insulation/InsulationPortfolio";
import { InsulationProcessSteps } from "@/components/insulation/InsulationProcessSteps";
import { InsulationTypesGrid } from "@/components/insulation/InsulationTypesGrid";
import { SiteHeader } from "@/components/SiteHeader";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { StandardPageSections } from "@/components/seo/StandardPageSections";
import { insulationPage } from "@/lib/insulation-page";
import { breadcrumbs } from "@/lib/seo/breadcrumbs";
import { getFaqsForPage } from "@/lib/seo/page-faqs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "عزل أسطح وخزانات بالرياض",
  description: insulationPage.meta.description,
  path: insulationPage.meta.path,
  keywords: [
    "عزل أسطح الرياض",
    "عزل مائي وحراري",
    "عزل فوم بولي يوريثان",
    "شركة عزل احترافية الرياض",
    "عزل خزانات وحمامات",
  ],
  image: insulationPage.hero.image,
});

export default function InsulationPage() {
  const faqs = getFaqsForPage({ serviceSlug: "roof-insulation-riyadh" });

  return (
    <>
      <PageStructuredData breadcrumbs={breadcrumbs.insulation()} faqs={faqs} />
      <SiteHeader activePage="insulation" variant="glass" />
      <main className="overflow-x-hidden pt-20">
        <InsulationHero />
        <InsulationTypesGrid />
        <InsulationProcessSteps />
        <InsulationPortfolio />
        <div className="mx-auto max-w-max-width px-gutter">
          <StandardPageSections
            faqs={faqs}
            showServices={false}
            showSteps={false}
            showAdvantages={false}
          />
        </div>
        <InsulationCtaSection />
      </main>
      <InsulationFooter />
    </>
  );
}
