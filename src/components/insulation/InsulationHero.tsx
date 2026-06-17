import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { insulationPage } from "@/lib/insulation-page";
import { siteConfig } from "@/lib/site";
import { primaryCtaOnDark } from "@/lib/ui/button-styles";

export function InsulationHero() {
  const { hero } = insulationPage;

  return (
    <section className="relative flex min-h-[500px] h-[60vh] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-l from-primary/90 to-primary/40" />
        <OptimizedImage
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={hero.image.blurDataURL}
          className="object-cover"
        />
      </div>
      <div className="relative z-20 mx-auto w-full max-w-max-width px-gutter rtl">
        <div className="max-w-2xl text-on-primary">
          <h1 className="mb-6 text-display-lg leading-tight font-bold">
            {hero.title}
          </h1>
          <p className="mb-8 text-body-lg opacity-90">{hero.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`tel:${siteConfig.phoneE164}`}
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3 font-semibold hover:scale-[1.02] ${primaryCtaOnDark}`}
            >
              <Icon name="bolt" size="md" className="text-primary" />
              احجز فحصاً مجانياً
            </Link>
            <Link
              href="/services/roof-insulation-riyadh"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-on-primary/80 bg-on-primary/10 px-8 py-3 font-semibold text-on-primary backdrop-blur-sm transition-colors hover:bg-on-primary/20"
            >
              <Icon name="wb_sunny" size="md" />
              عزل أسطح بالرياض — التفاصيل
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
