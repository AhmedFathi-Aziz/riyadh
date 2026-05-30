import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const { images, phoneE164 } = siteConfig;

  return (
    <header
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-l from-primary/90 to-transparent" />
        <OptimizedImage
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={images.hero.blurDataURL}
          className="object-cover"
        />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-max-width px-gutter">
        <div className="max-w-2xl text-white">
          <h1 className="mb-6 text-display-lg-mobile leading-tight font-bold md:text-display-lg">
            الخيار الأول لعزل وكشف تسربات المياه بالرياض
          </h1>
          <p className="mb-10 text-body-lg opacity-90">
            نحمي استثمارك بأحدث التقنيات الألمانية وبأيدي خبراء معتمدين. حلول
            نهائية لمشاكل التسربات مع ضمان حقيقي يصل إلى 10 سنوات.
          </p>
          <div className="cta-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary-container px-8 py-4 text-base font-semibold text-on-secondary-container shadow-lg transition-transform hover:scale-[1.02] sm:text-headline-md"
            >
              <Icon name="calendar_today" size="md" />
              اطلب معاينة مجانية
            </Link>
            <a
              href={`tel:${phoneE164}`}
              className="glass-card inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold transition-all hover:bg-white/25 sm:text-headline-md"
            >
              <Icon name="call" size="md" className="text-white" />
              اتصل بنا الآن
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
