import type { NeighborhoodPage } from "@/lib/neighborhoods/types";
import { siteConfig } from "@/lib/site";

export function NeighborhoodJsonLd({ page }: { page: NeighborhoodPage }) {
  const { url, name, phoneE164 } = siteConfig;
  const pageUrl = `${url}/areas/${page.slug}`;

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: page.keyword,
    description: page.description,
    url: pageUrl,
    areaServed: {
      "@type": "Place",
      name: `حي ${page.nameAr}، الرياض`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "الرياض",
        addressRegion: "منطقة الرياض",
        addressCountry: "SA",
      },
    },
    provider: {
      "@type": "LocalBusiness",
      name,
      url,
      telephone: phoneE164,
    },
    serviceType: "كشف تسربات المياه",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: url },
      {
        "@type": "ListItem",
        position: 2,
        name: "أحياء الرياض",
        item: `${url}/areas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.keyword,
        item: pageUrl,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([service, breadcrumb]),
      }}
    />
  );
}
