import { loadJsonLdGraph } from "@/lib/seo/load-jsonld-graph";

/**
 * Inline JSON-LD for Google rich results.
 * Production HTML is injected post-build (scripts/inline-jsonld-html.mjs) to avoid
 * Next.js RSC payload duplicating schema. Dev mode inlines here for preview.
 */
type PageStructuredDataProps = {
  graphPath: string;
};

export function PageStructuredData({ graphPath }: PageStructuredDataProps) {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  const graphs = loadJsonLdGraph(graphPath);
  if (graphs.length === 0) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphs) }}
      suppressHydrationWarning
    />
  );
}
