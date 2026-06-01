import { OptimizedImage } from "@/components/OptimizedImage";
import { Icon } from "@/components/Icon";
import Link from "next/link";
import { getServicePageImages } from "@/lib/media/service-page-images";
import {
  getServicesPageSpotlight,
  SERVICES_PAGE_SPOTLIGHT_SLUG,
} from "@/lib/services/service-pages-meta";
import { siteConfig } from "@/lib/site";
import { primaryCta } from "@/lib/ui/button-styles";

const highlights = [
  "كشف دقيق بدون تكسير عشوائي — أجهزة صوتية وحرارية",
  "تقرير مصور، تقدير تكلفة، وخطة إصلاح واضحة",
  "معاينة مجانية وتغطية لأحياء الرياض",
] as const;

export function FeaturedServiceGuideSection() {
  const meta = getServicesPageSpotlight();
  const images = getServicePageImages(SERVICES_PAGE_SPOTLIGHT_SLUG);

  if (!meta || !images) return null;

  const pageHref = `/services/${meta.slug}`;

  return (
    <section
      id="service-guide-spotlight"
      aria-labelledby="service-guide-spotlight-heading"
      className="mx-auto mb-12 mt-12 max-w-max-width scroll-mt-28 px-4 sm:mb-16 sm:mt-16 sm:px-gutter"
    >
      <div className="overflow-hidden rounded-2xl border border-outline-variant/25 bg-gradient-to-b from-surface-container-low/80 to-white shadow-soft-md sm:rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-full">
            <OptimizedImage
              src={images.hero.src}
              alt={images.hero.alt}
              width={images.hero.width}
              height={images.hero.height}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent lg:bg-gradient-to-l lg:from-primary/40" />
            <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-secondary-container px-3 py-1.5 text-[13px] font-bold text-on-secondary-container shadow-sm">
              <Icon name="menu_book" size="sm" />
              دليل شامل
            </span>
          </div>

          <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
            <p className="mb-2 text-label-sm font-bold text-secondary">
              صفحة الخدمة التفصيلية
            </p>
            <h2
              id="service-guide-spotlight-heading"
              className="mb-3 text-xl font-bold leading-snug text-primary sm:text-headline-md"
            >
              {meta.keyword}
            </h2>
            <p className="mb-5 text-body-md leading-relaxed text-on-surface-variant">
              {meta.description}
            </p>

            <ul className="mb-6 space-y-2.5">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-body-md text-on-surface"
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

            <div className="cta-row cta-row--stack-mobile">
              <Link
                href={pageHref}
                className={`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-label-sm font-bold sm:w-auto ${primaryCta}`}
              >
                اقرأ الدليل الكامل
                <Icon name="arrow_forward" size="sm" className="rtl:rotate-180" />
              </Link>
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-outline-variant/40 bg-surface px-6 py-3 text-label-sm font-bold text-primary transition-colors hover:bg-surface-container-low sm:w-auto"
              >
                <Icon name="call" size="sm" />
                معاينة مجانية
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
