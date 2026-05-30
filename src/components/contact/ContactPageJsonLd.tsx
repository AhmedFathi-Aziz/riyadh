import { contactPageMeta } from "@/lib/contact-page";
import { siteConfig } from "@/lib/site";

export function ContactPageJsonLd() {
  const { url, name, phoneE164, email, address, geo, openingHours } = siteConfig;
  const pageUrl = `${url}${contactPageMeta.path}`;

  const contactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: `${contactPageMeta.title} | ${name}`,
    description: contactPageMeta.description,
    inLanguage: "ar-SA",
    isPartOf: { "@id": `${url}/#website` },
    about: { "@id": `${url}/#organization` },
  };

  const contactPoint = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    telephone: phoneE164,
    email,
    contactType: "customer service",
    areaServed: "SA",
    availableLanguage: ["Arabic"],
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: url },
      { "@type": "ListItem", position: 2, name: contactPageMeta.title, item: pageUrl },
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name,
    url: pageUrl,
    telephone: phoneE164,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "حي الصحافة، طريق الملك فهد",
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHours,
    contactPoint: [contactPoint],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([contactPage, breadcrumb, localBusiness]),
      }}
    />
  );
}
