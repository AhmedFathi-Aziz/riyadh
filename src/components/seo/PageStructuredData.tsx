/**
 * JSON-LD عبر ملف خارجي (public/seo/graphs) — يمنع تكرار FAQPage في حمولة RSC لـ Next.js.
 * الملفات تُولَّد في prebuild: scripts/generate-jsonld-graphs.ts
 */
type PageStructuredDataProps = {
  graphPath: string;
};

export function PageStructuredData({ graphPath }: PageStructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      src={graphPath}
      suppressHydrationWarning
    />
  );
}
