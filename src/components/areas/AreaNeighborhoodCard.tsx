import Link from "next/link";
import { Icon } from "@/components/Icon";
import { OptimizedImage } from "@/components/OptimizedImage";
import { getAreaHeroImage, getNeighborhoodDisplayName } from "@/lib/neighborhoods/area-images";
import type { NeighborhoodPage } from "@/lib/neighborhoods/types";
import { siteConfig } from "@/lib/site";

type AreaNeighborhoodCardProps = {
  neighborhood: NeighborhoodPage;
};

export function AreaNeighborhoodCard({ neighborhood: n }: AreaNeighborhoodCardProps) {
  const heroImage = getAreaHeroImage(n.slug);
  const nameAr = getNeighborhoodDisplayName(n.slug, n.nameAr);

  return (
    <Link
      href={`/areas/${n.slug}`}
      className="shadow-soft-md group flex h-full flex-col overflow-hidden rounded-2xl border border-outline-variant/15 bg-white transition-all hover:border-secondary/25 hover:shadow-soft-lg"
      title={n.keyword}
    >
      {heroImage ? (
        <div className="relative h-40 w-full shrink-0 sm:h-44">
          <OptimizedImage
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
          <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-white/30 bg-white/95 p-1.5 shadow-sm">
            <OptimizedImage
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              responsive={false}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      ) : null}

      <div className="flex flex-grow flex-col p-6">
        {!heroImage && (
          <div className="mb-4 flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-low p-2">
              <OptimizedImage
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
                responsive={false}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-card-title block leading-snug text-primary">
                {n.keyword}
              </span>
              <span className="mt-1 block text-label-sm text-on-surface-muted" dir="rtl" lang="ar">
                حي {nameAr}
              </span>
            </div>
          </div>
        )}

        {heroImage && (
          <div className="mb-3">
            <span className="text-card-title block leading-snug text-primary">
              {n.keyword}
            </span>
            <span className="mt-1 block text-label-sm text-on-surface-muted" dir="rtl" lang="ar">
              حي {nameAr}
            </span>
          </div>
        )}

        <p className="text-card-body line-clamp-3 flex-grow text-on-surface-variant">
          {n.description}
        </p>
        <span className="text-card-link mt-4 inline-flex items-center gap-1">
          اقرأ الدليل
          <Icon
            name="arrow_forward"
            size="sm"
            className="rtl:rotate-180 transition-transform group-hover:-translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
