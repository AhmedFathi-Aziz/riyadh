import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { StandardPageSections } from "@/components/seo/StandardPageSections";
import { ServicesFooter } from "@/components/ServicesFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { REGION_LABELS } from "@/lib/neighborhoods/content-profiles";
import { getAllNeighborhoodPages } from "@/lib/neighborhoods/load-neighborhoods";
import { breadcrumbs } from "@/lib/seo/breadcrumbs";
import { getFaqsForPage } from "@/lib/seo/page-faqs";
import { createPageMetadata } from "@/lib/seo";
import type { NeighborhoodRegion } from "@/lib/neighborhoods/types";

export const metadata: Metadata = createPageMetadata({
  title: "كشف تسربات المياه في أحياء الرياض",
  description:
    "صفحة مخصصة لكل حي في الرياض: وصف المنطقة، مشاكل التسرب، أنواع المباني، والخدمات المناسبة. معاينة مجانية من ManzilCare.",
  path: "/areas",
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

export default function AreasIndexPage() {
  const pages = getAllNeighborhoodPages();
  const faqs = getFaqsForPage();

  return (
    <>
      <PageStructuredData breadcrumbs={breadcrumbs.areas()} faqs={faqs} />
      <SiteHeader activePage="services" />
      <main className="mx-auto max-w-max-width px-gutter pt-32 pb-20">
        <header className="mb-12 max-w-3xl">
          <span className="mb-4 block text-label-sm font-semibold text-secondary">
            تغطية أحياء الرياض
          </span>
          <h1 className="mb-4 text-display-lg-mobile font-bold text-primary md:text-display-lg">
            كشف تسربات المياه في أحياء الرياض
          </h1>
          <p className="text-body-lg text-on-surface-variant">
            {pages.length} حيّاً بمحتوى مخصّص — وصف المنطقة، مشاكل التسرب، أنواع
            المباني، خدمات مناسبة، وأسئلة شائعة. اختر حيّك للتفاصيل.
          </p>
        </header>

        {regionOrder.map((region) => {
          const group = pages.filter((p) => p.region === region);
          if (group.length === 0) return null;

          return (
            <section key={region} className="mb-14">
              <h2 className="mb-6 text-headline-md font-semibold text-primary">
                {REGION_LABELS[region]}
                <span className="mr-2 text-label-sm font-normal text-on-surface-variant">
                  ({group.length})
                </span>
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`/areas/${n.slug}`}
                      className="shadow-soft-md flex h-full flex-col rounded-2xl bg-white p-6 transition-shadow hover:shadow-soft-lg"
                    >
                      <span className="text-card-title block">حي {n.nameAr}</span>
                      <span className="text-card-body mt-2 flex-grow line-clamp-2">
                        {n.keyword}
                      </span>
                      <span className="text-card-link mt-4 inline-flex items-center gap-1">
                        الدليل
                        <Icon
                          name="arrow_forward"
                          size="sm"
                          className="rtl:rotate-180"
                        />
                      </span>
                    </Link>
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
