import { insulationPage } from "@/lib/insulation-page";
import { siteConfig } from "@/lib/site";

export function InsulationPageJsonLd() {
  const { url, name } = siteConfig;
  const pageUrl = `${url}${insulationPage.meta.path}`;

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: insulationPage.meta.title,
    description: insulationPage.meta.description,
    provider: { "@id": `${url}/#organization` },
    areaServed: { "@type": "City", name: "الرياض" },
    serviceType: [
      "العزل المائي",
      "العزل الحراري",
      "عزل الفوم بولي يوريثان",
    ],
    image: insulationPage.hero.image.src,
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "خطوات العزل الاحترافية للأسطح في الرياض",
    description: insulationPage.meta.description,
    step: insulationPage.processSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
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
        name: insulationPage.meta.title,
        item: pageUrl,
      },
    ],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: `${insulationPage.meta.title} | ${name}`,
    description: insulationPage.meta.description,
    inLanguage: "ar-SA",
    isPartOf: { "@id": `${url}/#website` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([service, howTo, breadcrumb, webPage]),
      }}
    />
  );
}
