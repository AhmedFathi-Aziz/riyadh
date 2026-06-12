import { siteConfig } from "@/lib/site";
import { ORGANIZATION_ID } from "./constants";

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function formatPageTitle(title: string, suffix?: string): string {
  const s = suffix ?? "ManzilCare";
  return `${title} | ${s}`;
}

export function buildLocalBusinessSchema() {
  const {
    name,
    legalName,
    description,
    url,
    phoneE164,
    email,
    address,
    geo,
    priceRange,
    logo,
    images,
    services,
  } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}${ORGANIZATION_ID}`,
    name,
    legalName,
    description,
    url,
    image: [logo.src, images.hero.src, images.services.src],
    logo: logo.src,
    telephone: phoneE164,
    email,
    priceRange,
    openingHoursSpecification: {
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
          provider: { "@id": `${url}${ORGANIZATION_ID}` },
          areaServed: "الرياض",
        },
      })),
    },
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  const { url } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${url}${item.path}`,
    })),
  };
}

export function buildFaqSchema(faqs: FaqItem[]) {
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildServiceSchema(options: {
  name: string;
  description: string;
  pageUrl: string;
}) {
  const { url, name: businessName, phoneE164 } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${options.pageUrl}#service`,
    name: options.name,
    description: options.description,
    url: options.pageUrl,
    areaServed: {
      "@type": "City",
      name: "الرياض",
      containedInPlace: { "@type": "Country", name: "Saudi Arabia" },
    },
    provider: {
      "@type": "LocalBusiness",
      "@id": `${url}${ORGANIZATION_ID}`,
      name: businessName,
      url,
      telephone: phoneE164,
    },
    serviceType: options.name,
  };
}

export function buildArticleSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  category: string;
  readTime: string;
  imageSrc: string;
  author: {
    name: string;
    role: string;
    id: string;
  };
}) {
  const { url, name } = siteConfig;
  const articleUrl = `${url}/blog/${post.slug}`;
  const authorUrl = `${url}/team#${post.author.id}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    image: post.imageSrc,
    datePublished: post.publishedAt,
    inLanguage: "ar-SA",
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      url: authorUrl,
      worksFor: { "@type": "Organization", name, url },
    },
    publisher: {
      "@type": "Organization",
      name,
      logo: { "@type": "ImageObject", url: siteConfig.logo.src },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    articleSection: post.category,
  };
}

export function buildWebSiteSchema() {
  const { name, description, url } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name,
    description,
    inLanguage: "ar-SA",
    publisher: { "@id": `${url}${ORGANIZATION_ID}` },
  };
}

export function buildWebPageSchema(options: {
  pageUrl: string;
  name: string;
  description: string;
}) {
  const { url } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${options.pageUrl}#webpage`,
    url: options.pageUrl,
    name: options.name,
    description: options.description,
    isPartOf: { "@id": `${url}/#website` },
    about: { "@id": `${url}${ORGANIZATION_ID}` },
    inLanguage: "ar-SA",
  };
}
