import {
  buildLocalBusinessSchema,
  buildWebSiteSchema,
} from "@/lib/seo/structured-data";
import { siteConfig } from "@/lib/site";

/** LocalBusiness + WebSite — على كل صفحات الموقع من layout */
export function JsonLd() {
  const { url } = siteConfig;
  const graphs = [
    buildLocalBusinessSchema(),
    buildWebSiteSchema(),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}/#webpage`,
      url,
      name: formatPageTitleDefault(),
      description: siteConfig.description,
      isPartOf: { "@id": `${url}/#website` },
      about: { "@id": `${url}#organization` },
      inLanguage: "ar-SA",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphs) }}
    />
  );
}

function formatPageTitleDefault() {
  return "كشف تسربات المياه بالرياض | فحص دقيق بدون تكسير";
}
