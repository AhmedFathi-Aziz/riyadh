import type { ServicePage } from "@/lib/services/load-pages";
import { siteConfig } from "@/lib/site";

export function ServiceJsonLd({ page }: { page: ServicePage }) {
  const { url, name, phoneE164 } = siteConfig;
  const pageUrl = `${url}/services/${page.slug}`;

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: page.keyword,
    description: page.description,
    url: pageUrl,
    areaServed: {
      "@type": "City",
      name: "الرياض",
      containedInPlace: { "@type": "Country", name: "Saudi Arabia" },
    },
    provider: {
      "@type": "LocalBusiness",
      name,
      url,
      telephone: phoneE164,
      address: {
        "@type": "PostalAddress",
        addressLocality: "الرياض",
        addressCountry: "SA",
      },
    },
    serviceType: page.keyword,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: url },
      {
        "@type": "ListItem",
        position: 2,
        name: "خدماتنا",
        item: `${url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: pageUrl,
      },
    ],
  };

  const faqMatch = page.content.match(
    /## الأسئلة الشائعة[\s\S]*?(?=## |$)/,
  );
  const faq =
    faqMatch &&
    ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: extractFaqPairs(faqMatch[0]).map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });

  const graphs: object[] = [service, breadcrumb];
  if (faq && faq.mainEntity.length > 0) graphs.push(faq);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphs) }}
    />
  );
}

function extractFaqPairs(section: string): [string, string][] {
  const pairs: [string, string][] = [];
  const blocks = section.split(/### /).slice(1);
  for (const block of blocks) {
    const lines = block.trim().split("\n");
    const question = lines[0]?.replace(/\?$/, "").trim();
    const answer = lines.slice(1).join(" ").trim();
    if (question && answer) pairs.push([question, answer]);
  }
  return pairs;
}
