import { servicesCatalog } from "@/lib/services-catalog";
import { siteConfig } from "@/lib/site";

export function ServicesPageJsonLd() {
  const { url, name } = siteConfig;
  const allServices = [
    servicesCatalog.featured,
    ...servicesCatalog.cards,
  ];

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "خدمات عزل الرياض للمحترفين",
    description:
      "خدمات كشف تسربات المياه وعزل الأسطح والخزانات والحمامات وترميم المنازل في الرياض",
    url: `${url}/services`,
    numberOfItems: allServices.length,
    itemListElement: allServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        "@id": `${url}/services#${service.id}`,
        name: service.title,
        description: service.description,
        provider: { "@id": `${url}/#organization` },
        areaServed: {
          "@type": "City",
          name: "الرياض",
        },
        image: service.image.src,
      },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "الرئيسية",
        item: url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "خدماتنا",
        item: `${url}/services`,
      },
    ],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/services#webpage`,
    url: `${url}/services`,
    name: `خدماتنا | ${name}`,
    description:
      "خدمات هندسية متكاملة لكشف تسربات المياه وعزل الأسطح والخزانات والحمامات وترميم المنازل في الرياض",
    isPartOf: { "@id": `${url}/#website` },
    about: { "@id": `${url}/#organization` },
    inLanguage: "ar-SA",
    breadcrumb: { "@id": `${url}/services#breadcrumb` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([itemList, breadcrumb, webPage]),
      }}
    />
  );
}
