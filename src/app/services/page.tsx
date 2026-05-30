import type { Metadata } from "next";
import { ServicesBentoGrid } from "@/components/services/ServicesBentoGrid";
import { ServicesPageHero } from "@/components/services/ServicesPageHero";
import { ServicesPageJsonLd } from "@/components/services/ServicesPageJsonLd";
import { TrustStats } from "@/components/services/TrustStats";
import { Icon } from "@/components/Icon";
import { ServicesFooter } from "@/components/ServicesFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { servicesCatalog } from "@/lib/services-catalog";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "خدماتنا",
  description:
    "خدمات هندسية متكاملة في الرياض: كشف تسربات المياه بدون تكسير، عزل الخزانات والأسطح والحمامات، وترميم المنازل. ضمان معتمد ودعم 24/7.",
  path: "/services",
  keywords: [
    "خدمات عزل الرياض",
    "كشف تسربات بدون تكسير",
    "عزل خزانات علوية وأرضية",
    "عزل أسطح فوم وإيبوكسي",
    "ترميم منازل الرياض",
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
  return (
    <>
      <ServicesPageJsonLd />
      <SiteHeader activePage="services" variant="services" />
      <main className="overflow-x-hidden pt-32 pb-20">
        <ServicesPageHero />
        <ServicesBentoGrid />
        <TrustStats />
      </main>
      <ServicesFooter />
      <ServicesWhatsAppFab />
    </>
  );
}
