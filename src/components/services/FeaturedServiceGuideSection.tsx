import { OptimizedImage } from "@/components/OptimizedImage";
import { Icon } from "@/components/Icon";
import Link from "next/link";
import { getServicePageImages } from "@/lib/media/service-page-images";
import {
  getServicesPageSpotlights,
  SERVICES_PAGE_SPOTLIGHT_HIGHLIGHTS,
  type ServicesPageSpotlightSlug,
  type ServicePageMeta,
} from "@/lib/services/service-pages-meta";
import { primaryCta } from "@/lib/ui/button-styles";

type GuideCardProps = {
  meta: ServicePageMeta;
  slug: ServicesPageSpotlightSlug;
  featured?: boolean;
};

function GuideCard({ meta, slug, featured }: GuideCardProps) {
  const images = getServicePageImages(slug);
  const hero = images?.hero ?? {
    src: `/images/${meta.coverImage}`,
    alt: meta.imageAlt,
    width: 1200,
    height: 675,
  };
  const highlights = SERVICES_PAGE_SPOTLIGHT_HIGHLIGHTS[slug];
  const pageHref = `/services/${meta.slug}`;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-soft-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg sm:rounded-3xl ${
        featured
          ? "border-secondary/30 ring-1 ring-secondary/10"
          : "border-outline-variant/25"
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-low">
        <OptimizedImage
          src={hero.src}
          alt={hero.alt}
          width={hero.width}
          height={hero.height}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-container px-3 py-1.5 text-[13px] font-bold text-on-secondary-container shadow-sm">
            <Icon name="menu_book" size="sm" />
            دليل شامل
          </span>
          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-on-primary/15 text-on-primary backdrop-blur-sm">
            <Icon name={meta.icon} size="md" />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
        <h3 className="mb-2 text-lg font-bold leading-snug text-primary sm:text-xl">
          {meta.keyword}
        </h3>
        <p className="mb-5 flex-1 text-body-md leading-relaxed text-on-surface-variant">
          {meta.description}
        </p>

        <ul className="mb-6 space-y-2.5">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-[15px] leading-relaxed text-on-surface sm:text-body-md"
            >
              <Icon
                name="check_circle"
                size="sm"
                className="mt-0.5 shrink-0 text-secondary"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href={pageHref}
          className={`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-label-sm font-bold transition-transform group-hover:scale-[1.01] sm:w-auto sm:self-start ${primaryCta}`}
        >
          اقرأ الدليل الكامل
          <Icon name="arrow_forward" size="sm" className="rtl:rotate-180" />
        </Link>
      </div>
    </article>
  );
}

export function FeaturedServiceGuideSection() {
  const spotlights = getServicesPageSpotlights();

  if (spotlights.length === 0) return null;

  return (
    <section
      id="service-guide-spotlight"
      aria-labelledby="service-guide-spotlight-heading"
      className="mx-auto mb-12 mt-12 max-w-max-width scroll-mt-28 px-4 sm:mb-16 sm:mt-16 sm:px-gutter"
    >
      <div className="mb-8 text-center sm:mb-10">
        <p className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-secondary-container/40 px-3 py-1 text-label-sm font-bold text-secondary">
          <Icon name="auto_stories" size="sm" />
          صفحات الخدمة التفصيلية
        </p>
        <h2
          id="service-guide-spotlight-heading"
          className="mb-3 text-xl font-bold text-primary sm:text-headline-md"
        >
          دلائل الخدمات التفصيلية في الرياض
        </h2>
        <p className="mx-auto max-w-2xl text-body-md leading-relaxed text-on-surface-muted sm:text-body-lg">
          محتوى تفصيلي لكل خدمة — كشف التسربات، عزل الأسطح، عزل الفوم، عزل
          مائي وحراري وخزانات، خطوات العمل، الأسئلة الشائعة، وتغطية الأحياء. اختر
          الدليل المناسب لحالتك.
        </p>
      </div>

      <div
        className={`grid grid-cols-1 gap-6 lg:gap-8 ${
          spotlights.length >= 5
            ? "md:grid-cols-2 xl:grid-cols-3"
            : spotlights.length >= 4
              ? "md:grid-cols-2"
              : spotlights.length >= 3
                ? "md:grid-cols-2 xl:grid-cols-3"
                : "lg:grid-cols-2"
        }`}
      >
        {spotlights.map((meta, index) => (
          <GuideCard
            key={meta.slug}
            meta={meta}
            slug={meta.slug as ServicesPageSpotlightSlug}
            featured={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
