import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  type BreadcrumbItem,
  type FaqItem,
} from "@/lib/seo/structured-data";

type PageStructuredDataProps = {
  breadcrumbs: BreadcrumbItem[];
  faqs: FaqItem[];
  /** مخططات إضافية (Service، Article، …) */
  extra?: object[];
};

export function PageStructuredData({
  breadcrumbs,
  faqs,
  extra = [],
}: PageStructuredDataProps) {
  const graphs: object[] = [
    buildBreadcrumbSchema(breadcrumbs),
    ...extra,
  ];
  const faqSchema = buildFaqSchema(faqs);
  if (faqSchema) graphs.push(faqSchema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphs) }}
    />
  );
}
