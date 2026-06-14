import type { Metadata } from "next";
import { AreasSeoIntro } from "@/components/areas/AreasSeoIntro";
import { AreaNeighborhoodCard } from "@/components/areas/AreaNeighborhoodCard";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { StandardPageSections } from "@/components/seo/StandardPageSections";
import { ServicesFooter } from "@/components/ServicesFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { areasPageMeta } from "@/lib/areas-page";
import { REGION_LABELS } from "@/lib/neighborhoods/content-profiles";
import { getAllNeighborhoodPages } from "@/lib/neighborhoods/load-neighborhoods";
import type { NeighborhoodPage } from "@/lib/neighborhoods/types";
import { getFaqsForPage } from "@/lib/seo/page-faqs";
import { jsonLdGraphPath } from "@/lib/seo/jsonld-graph-path";
import { createPageMetadata } from "@/lib/seo";
import type { NeighborhoodRegion } from "@/lib/neighborhoods/types";

export const metadata: Metadata = createPageMetadata({
  title: areasPageMeta.title,
  description: areasPageMeta.description,
  path: areasPageMeta.path,
  keywords: [
    "كشف تسربات أحياء الرياض",
    "كشف تسربات حي النرجس",
    "كشف تسربات حي الياسمين",
    "كشف تسربات حي الملقا",
  ],
});

const regionOrder: NeighborhoodRegion[] = [
  "north",
  "east",
  "central",
  "west",
  "south",
];

function sortFeaturedNeighborhoods(pages: NeighborhoodPage[]): NeighborhoodPage[] {
  return pages
    .filter((p) => p.featured)
    .sort((a, b) => {
      if (a.slug === "al-narjis") return -1;
      if (b.slug === "al-narjis") return 1;
      return a.nameAr.localeCompare(b.nameAr, "ar");
    });
}

export default function AreasIndexPage() {
  const pages = getAllNeighborhoodPages();
  const faqs = getFaqsForPage();
  const featured = sortFeaturedNeighborhoods(pages);

  return (
    <>
      <PageStructuredData graphPath={jsonLdGraphPath.areas()} />
      <SiteHeader activePage="services" />
      <main className="mx-auto max-w-max-width px-gutter pt-32 pb-20">
        <header className="mb-12 max-w-3xl">
          <span className="mb-4 block text-label-sm font-semibold text-secondary">
            تغطية أحياء الرياض
          </span>
          <h1 className="mb-4 text-display-lg-mobile font-bold text-primary md:text-display-lg">
            كشف تسربات المياه في أحياء الرياض
          </h1>
          <p className="mb-4 text-body-lg text-on-surface-variant">
            {pages.length} حيّاً بمحتوى مخصّص — وصف المنطقة، مشاكل التسرب، أنواع
            المباني، خدمات مناسبة، وأسئلة شائعة. اختر حيّك للتفاصيل.
          </p>
          <AreasSeoIntro />
        </header>

        {featured.length > 0 && (
          <section className="mb-14" aria-labelledby="featured-areas-heading">
            <h2
              id="featured-areas-heading"
              className="mb-6 text-headline-md font-semibold text-primary"
            >
              أحياء مميزة
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((n) => (
                <li key={n.slug}>
                  <AreaNeighborhoodCard neighborhood={n} />
                </li>
              ))}
            </ul>
          </section>
        )}

        {regionOrder.map((region) => {
          const group = pages.filter(
            (p) => p.region === region && !p.featured,
          );
          if (group.length === 0) return null;

          return (
            <section key={region} className="mb-14">
              <h2 className="mb-6 text-headline-md font-semibold text-primary">
                {REGION_LABELS[region]}
                <span className="mr-2 text-label-sm font-normal text-on-surface-variant">
                  ({group.length})
                </span>
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.map((n) => (
                  <li key={n.slug}>
                    <AreaNeighborhoodCard neighborhood={n} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        <StandardPageSections faqs={faqs} showServices={false} />
      </main>
      <ServicesFooter />
    </>
  );
}
