import Link from "next/link";
import { ServiceMarkdown } from "@/components/services/ServiceMarkdown";
import { Icon } from "@/components/Icon";
import {
  getNeighborhoodsForService,
  getServiceAreaLinkLabel,
  groupNeighborhoodsByRegion,
} from "@/lib/services/get-service-neighborhoods";
import { SERVICE_CATALOG } from "@/lib/neighborhoods/content-profiles";

type ServiceAreasSectionProps = {
  serviceSlug: string;
  intro?: string;
};

export function ServiceAreasSection({
  serviceSlug,
  intro,
}: ServiceAreasSectionProps) {
  const catalog = SERVICE_CATALOG[serviceSlug];
  const serviceTitle = catalog?.title ?? "الخدمة";
  const neighborhoods = getNeighborhoodsForService(serviceSlug);
  const groups = groupNeighborhoodsByRegion(neighborhoods);

  if (neighborhoods.length === 0) return null;

  const featured = neighborhoods.filter((n) => n.featured).slice(0, 8);

  return (
    <section
      id="service-areas"
      aria-labelledby="service-areas-heading"
      className="scroll-mt-24 rounded-xl border border-outline-variant/25 bg-gradient-to-b from-surface-container-low/60 to-white p-4 sm:scroll-mt-28 sm:rounded-2xl sm:p-6 md:p-8"
    >
      <h2
        id="service-areas-heading"
        className="mb-3 break-words border-r-4 border-secondary bg-gradient-to-l from-surface-container-low/80 to-transparent py-2 pr-3 text-lg font-bold leading-snug text-primary sm:pr-4 sm:text-headline-md"
      >
        مناطق الخدمة في الرياض — {serviceTitle}
      </h2>

      {intro ? (
        <div className="mb-5 max-w-3xl sm:mb-6">
          <ServiceMarkdown content={intro} />
        </div>
      ) : (
        <p className="mb-5 max-w-3xl text-body-md leading-relaxed text-on-surface-variant sm:mb-6 sm:text-body-lg">
          نقدّم <strong className="text-primary">{serviceTitle}</strong> في{" "}
          <strong className="text-primary">{neighborhoods.length} حيّاً</strong>{" "}
          موزّعة على شمال وشرق وغرب وجنوب ووسط العاصمة.
        </p>
      )}

      {featured.length > 0 && (
        <div className="mb-6 sm:mb-8">
          <p className="mb-2 text-label-sm font-bold text-secondary sm:mb-3">
            أحياء نزورها بكثافة
          </p>
          <ul className="flex flex-wrap gap-2">
            {featured.map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/areas/${n.slug}`}
                  title={getServiceAreaLinkLabel(serviceSlug, n.nameAr)}
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-secondary/25 bg-secondary-container/10 px-3 py-2 text-[13px] font-semibold text-primary transition-colors hover:border-secondary hover:bg-secondary-container/20 sm:px-4 sm:text-label-sm"
                >
                  <Icon
                    name="location_on"
                    size="sm"
                    className="shrink-0 text-secondary"
                  />
                  حي {n.nameAr}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-6 sm:space-y-8">
        {groups.map((group) => (
          <div key={group.region}>
            <h3 className="mb-2 flex flex-wrap items-center gap-2 text-base font-bold text-primary sm:mb-3 sm:text-body-lg">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon name="map" size="sm" />
              </span>
              <span>{group.label}</span>
              <span className="text-label-sm font-normal text-on-surface-muted">
                ({group.neighborhoods.length})
              </span>
            </h3>
            <ul className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {group.neighborhoods.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/areas/${n.slug}`}
                    title={getServiceAreaLinkLabel(serviceSlug, n.nameAr)}
                    className="group flex min-h-[3.25rem] flex-col justify-center rounded-lg border border-outline-variant/20 bg-white px-3 py-2.5 text-label-sm transition-all active:scale-[0.99] sm:rounded-xl sm:py-3 hover:border-secondary/35 hover:shadow-soft"
                  >
                    <span className="font-semibold text-primary group-hover:text-secondary">
                      حي {n.nameAr}
                    </span>
                    <span className="mt-0.5 line-clamp-1 text-[11px] text-on-surface-muted sm:text-[12px]">
                      {n.landmark}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-4 border-t border-outline-variant/20 pt-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
        <p className="text-body-md leading-relaxed text-on-surface-muted">
          لم تجد حيّك؟ نغطي الرياض بالكامل — تواصل معنا لتحديد موعد الزيارة.
        </p>
        <Link
          href="/areas"
          className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-label-sm font-bold text-on-primary transition-opacity hover:opacity-90 sm:w-auto"
        >
          دليل جميع الأحياء
          <Icon name="arrow_forward" size="sm" className="rtl:rotate-180" />
        </Link>
      </div>
    </section>
  );
}
