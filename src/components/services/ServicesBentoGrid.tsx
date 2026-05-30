import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { servicesCatalog } from "@/lib/services-catalog";
import { siteConfig } from "@/lib/site";

const serviceDetailLinks: Record<string, string> = {
  "leak-detection": "/services/leak-detection-water-riyadh",
  "tank-insulation": "/services/tank-insulation-riyadh",
  "roof-insulation": "/services/roof-insulation-riyadh",
  "bathroom-insulation": "/services/bathroom-insulation-riyadh",
  "home-restoration": "/services/leak-repair-water-riyadh",
};

export function ServicesBentoGrid() {
  const { featured, cards } = servicesCatalog;

  return (
    <section
      aria-labelledby="services-grid-heading"
      className="mx-auto max-w-max-width px-gutter"
    >
      <h2 id="services-grid-heading" className="sr-only">
        قائمة خدمات العزل وكشف التسربات
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="group relative overflow-hidden rounded-xl border border-outline-variant/30 bg-white shadow-sm transition-all duration-500 hover:shadow-xl md:col-span-8">
          <article id={featured.id} className="relative min-h-[480px]">
            <div className="absolute inset-0 z-0">
              <OptimizedImage
                src={featured.image.src}
                alt={featured.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                placeholder="blur"
                blurDataURL={featured.image.blurDataURL}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-end p-8 text-on-primary">
              <Icon
                name={featured.icon}
                size="xl"
                className="mb-4 text-secondary-container"
              />
              <h2 className="mb-3 text-headline-md font-semibold">
                {featured.title}
              </h2>
              <p className="mb-6 max-w-xl text-body-md opacity-90">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/services/leak-detection-water-riyadh"
                  className="inline-flex w-fit items-center gap-2 rounded-lg bg-secondary-container px-6 py-2 text-label-sm text-on-secondary-container transition-colors hover:bg-secondary-fixed"
                >
                  الدليل الكامل
                </Link>
                <a
                  href={`tel:${siteConfig.phoneE164}`}
                  className="inline-flex w-fit items-center gap-2 rounded-lg border border-on-primary/40 px-6 py-2 text-label-sm transition-colors hover:bg-on-primary/10"
                >
                  <Icon name="call" size="sm" />
                  فحص مجاني
                </a>
              </div>
            </div>
          </article>
        </div>

        {cards.map((card) => (
          <div
            key={card.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-white shadow-sm transition-all duration-500 hover:shadow-xl md:col-span-4"
          >
            <article id={card.id} className="flex h-full flex-col">
              <div className="h-48 overflow-hidden">
                <OptimizedImage
                  src={card.image.src}
                  alt={card.image.alt}
                  width={card.image.width}
                  height={card.image.height}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  placeholder="blur"
                  blurDataURL={card.image.blurDataURL}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-grow flex-col p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-lg bg-primary-fixed/30 p-2">
                    <Icon name={card.icon} size="md" className="text-primary" />
                  </span>
                  <h3 className="text-headline-md font-semibold text-primary">
                    {card.title}
                  </h3>
                </div>
                <p className="mb-6 flex-grow text-body-md text-on-surface-variant">
                  {card.description}
                </p>
                <Link
                  href={serviceDetailLinks[card.id] ?? `/services#${card.id}`}
                  className="mt-auto inline-flex items-center gap-2 text-label-sm font-medium text-primary transition-all hover:gap-4"
                >
                  تفاصيل الخدمة
                  <Icon name="arrow_forward" size="sm" className="rtl:rotate-180" />
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
