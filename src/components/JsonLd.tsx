import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const {
    name,
    legalName,
    description,
    url,
    phoneE164,
    email,
    address,
    geo,
    openingHours,
    priceRange,
    logo,
    images,
    services,
  } = siteConfig;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${url}/#organization`,
    name,
    legalName,
    description,
    url,
    image: [logo.src, images.hero.src, images.services.src],
    logo: logo.src,
    telephone: phoneE164,
    email,
    priceRange,
    openingHoursSpecification: openingHours.map((hours) => ({
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
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
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
    areaServed: {
      "@type": "City",
      name: "الرياض",
      containedInPlace: {
        "@type": "Country",
        name: "المملكة العربية السعودية",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات العزل وكشف التسربات",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          provider: { "@id": `${url}/#organization` },
          areaServed: "الرياض",
        },
      })),
    },
    sameAs: [],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name,
    description,
    inLanguage: "ar-SA",
    publisher: { "@id": `${url}/#organization` },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name: `${name} | كشف تسربات وعزل مائي بالرياض`,
    description,
    isPartOf: { "@id": `${url}/#website` },
    about: { "@id": `${url}/#organization` },
    inLanguage: "ar-SA",
    primaryImageOfPage: images.hero.src,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كيف يتم كشف تسربات المياه بدون تكسير في الرياض؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نستخدم أجهزة الكشف الحراري والموجات الصوتية والنيتروجين لتحديد مكان التسريب بدقة دون الحاجة لتكسير الجدران أو الأرضيات.",
        },
      },
      {
        "@type": "Question",
        name: "ما مدة ضمان أعمال العزل؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نقدم شهادة ضمان معتمدة على أعمال العزل والإصلاح تصل مدتها إلى 10 سنوات حسب نوع الخدمة والمواد المستخدمة.",
        },
      },
      {
        "@type": "Question",
        name: "هل تقدمون خدمة معاينة مجانية في الرياض؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، يمكنك طلب معاينة مجانية عبر الموقع أو الاتصال بنا، ويتحرك فريقنا بسرعة لمنع تفاقم أضرار المياه.",
        },
      },
    ],
  };

  const graphs = [localBusiness, webSite, webPage, faqPage];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphs) }}
    />
  );
}
