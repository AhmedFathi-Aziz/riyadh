import type { Metadata } from "next";
import { AreasPromo } from "@/components/areas/AreasPromo";
import { FeaturedServiceGuideSection } from "@/components/services/FeaturedServiceGuideSection";
import { ServicesBentoGrid } from "@/components/services/ServicesBentoGrid";
import { ServicesLandingList } from "@/components/services/ServicesLandingList";
import { ServicesPageHero } from "@/components/services/ServicesPageHero";
import { TrustStats } from "@/components/services/TrustStats";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { StandardPageSections } from "@/components/seo/StandardPageSections";
import { ServicesFooter } from "@/components/ServicesFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ServicesSeoIntro } from "@/components/services/ServicesSeoIntro";
import { servicesCatalog } from "@/lib/services-catalog";
import { servicesPageMeta } from "@/lib/services-page";
import { breadcrumbs } from "@/lib/seo/breadcrumbs";
import { getFaqsForPage } from "@/lib/seo/page-faqs";
import { jsonLdGraphPath } from "@/lib/seo/jsonld-graph-path";
import { createPageMetadata } from "@/lib/seo";
export const metadata: Metadata = createPageMetadata({
  title: servicesPageMeta.title,
  description: servicesPageMeta.description,
  path: servicesPageMeta.path,
  keywords: [
    "خدمات ManzilCare",
    "كشف تسربات بدون تكسير",
    "عزل خزانات علوية وأرضية",
    "عزل أسطح فوم وإيبوكسي",
  ],
  image: servicesCatalog.featured.image,
});

export default function ServicesPage() {
  const faqs = getFaqsForPage();

  return (
    <>
      <PageStructuredData graphPath={jsonLdGraphPath.services()} />
      <SiteHeader activePage="services" variant="services" />
      <main className="overflow-x-hidden pt-32 pb-20">
        <ServicesPageHero />
        <ServicesSeoIntro />
        <FeaturedServiceGuideSection />
        <ServicesBentoGrid />
        <TrustStats />
        <ServicesLandingList />
        <AreasPromo />
        <div className="mx-auto max-w-max-width px-gutter">
          <StandardPageSections faqs={faqs} showServices={false} />
        </div>
      </main>
      <ServicesFooter />
    </>
  );
}
