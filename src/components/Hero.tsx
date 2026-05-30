import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const { images, phoneE164 } = siteConfig;

  return (
    <header
      id="top"
      className="flex min-h-screen flex-col bg-white pt-20 lg:flex-row"
    >
      {/* النص — يمين في RTL */}
      <div className="relative z-20 flex flex-1 flex-col justify-center bg-white px-gutter py-12 shadow-soft-lg lg:py-20 lg:shadow-[-12px_0_40px_rgba(0,30,64,0.1)]">
        <div className="mx-auto w-full max-w-xl lg:mx-0">
          <h1 className="mb-6 text-display-lg-mobile leading-tight font-bold text-primary md:text-display-lg">
            كشف تسربات المياه بالرياض
          </h1>
          <p className="mb-10 text-body-lg text-on-surface-muted">
            نحمي استثمارك بأحدث التقنيات الألمانية وبأيدي خبراء معتمدين. حلول
            نهائية لمشاكل التسربات مع ضمان حقيقي يصل إلى 10 سنوات.
          </p>
          <div className="cta-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary-container px-8 py-4 text-base font-semibold text-on-secondary-container shadow-soft-md transition-all hover:scale-[1.02] hover:shadow-soft-lg sm:text-body-md"
            >
              <Icon name="calendar_today" size="md" />
              اطلب معاينة مجانية
            </Link>
            <a
              href={`tel:${phoneE164}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary shadow-soft-md transition-all hover:bg-primary hover:text-on-primary hover:shadow-soft-lg sm:text-body-md"
            >
              <Icon name="call" size="md" />
              اتصل بنا الآن
            </a>
          </div>
        </div>
      </div>

      {/* الصورة — شمال الشاشة (يسار) في RTL */}
      <div className="relative h-72 w-full shrink-0 lg:h-auto lg:min-h-[calc(100vh-5rem)] lg:w-[50%] xl:w-[55%]">
        <OptimizedImage
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 1024px) 100vw, 55vw"
          placeholder="blur"
          blurDataURL={images.hero.blurDataURL}
          className="object-cover object-center"
        />
      </div>
    </header>
  );
}
