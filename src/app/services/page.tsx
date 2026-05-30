import type { Metadata } from "next";
import { AreasPromo } from "@/components/areas/AreasPromo";
import { ServicesBentoGrid } from "@/components/services/ServicesBentoGrid";
import { ServicesLandingList } from "@/components/services/ServicesLandingList";
import { ServicesPageHero } from "@/components/services/ServicesPageHero";
import { TrustStats } from "@/components/services/TrustStats";
import { Icon } from "@/components/Icon";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { StandardPageSections } from "@/components/seo/StandardPageSections";
import { ServicesFooter } from "@/components/ServicesFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { servicesCatalog } from "@/lib/services-catalog";
import { breadcrumbs } from "@/lib/seo/breadcrumbs";
import { getFaqsForPage } from "@/lib/seo/page-faqs";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "كشف تسربات المياه وعزل الأسطح بالرياض",
  description:
    "خدمات هندسية متكاملة في الرياض: كشف تسربات المياه بدون تكسير، عزل الخزانات والأسطح والحمامات. ضمان معتمد ودعم 24/7 في جميع الأحياء.",
  path: "/services",
  keywords: [
    "خدمات ManzilCare",
    "كشف تسربات بدون تكسير",
    "عزل خزانات علوية وأرضية",
    "عزل أسطح فوم وإيبوكسي",
  ],
  image: servicesCatalog.featured.image,
});

function ServicesWhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center rounded-full bg-secondary-container p-4 text-on-secondary-container shadow-2xl transition-transform duration-300 hover:scale-110"
      aria-label="تواصل عبر واتساب — طوارئ"
    >
      <Icon name="chat" size="lg" className="text-on-secondary-container" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-error opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-error" />
      </span>
    </a>
  );
}

export default function ServicesPage() {
  const faqs = getFaqsForPage();

  return (
    <>
      <PageStructuredData breadcrumbs={breadcrumbs.services()} faqs={faqs} />
      <SiteHeader activePage="services" variant="services" />
      <main className="overflow-x-hidden pt-32 pb-20">
        <ServicesPageHero />
        <ServicesBentoGrid />
        <TrustStats />
        <ServicesLandingList />
        <AreasPromo />
        <div className="mx-auto max-w-max-width px-gutter">
          <StandardPageSections faqs={faqs} showServices={false} />
        </div>
      </main>
      <ServicesFooter />
      <ServicesWhatsAppFab />
    </>
  );
}
