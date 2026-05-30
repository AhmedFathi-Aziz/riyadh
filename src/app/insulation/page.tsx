import type { Metadata } from "next";
import { InsulationCtaSection } from "@/components/insulation/InsulationCtaSection";
import { InsulationFooter } from "@/components/insulation/InsulationFooter";
import { InsulationHero } from "@/components/insulation/InsulationHero";
import { InsulationPageJsonLd } from "@/components/insulation/InsulationPageJsonLd";
import { InsulationPortfolio } from "@/components/insulation/InsulationPortfolio";
import { InsulationProcessSteps } from "@/components/insulation/InsulationProcessSteps";
import { InsulationTypesGrid } from "@/components/insulation/InsulationTypesGrid";
import { MobileFloatingContact } from "@/components/MobileFloatingContact";
import { SiteHeader } from "@/components/SiteHeader";
import { insulationPage } from "@/lib/insulation-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: insulationPage.meta.title,
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
  return (
    <>
      <InsulationPageJsonLd />
      <SiteHeader activePage="insulation" variant="glass" />
      <main className="overflow-x-hidden pt-20">
        <InsulationHero />
        <InsulationTypesGrid />
        <InsulationProcessSteps />
        <InsulationPortfolio />
        <InsulationCtaSection />
      </main>
      <InsulationFooter />
      <MobileFloatingContact />
    </>
  );
}
