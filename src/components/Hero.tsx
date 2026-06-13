import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/site";
import { primaryCta } from "@/lib/ui/button-styles";

export function Hero() {
  const { images, phoneE164 } = siteConfig;

  return (
    <header
      id="top"
      className="flex min-h-0 flex-col bg-white pt-20 lg:min-h-[85vh] lg:flex-row"
    >
      {/* النص — يمين في RTL */}
      <div className="relative z-20 flex flex-1 flex-col justify-center bg-white px-gutter py-12 shadow-soft-lg lg:py-20 lg:shadow-[-12px_0_40px_rgba(0,30,64,0.1)]">
        <div className="mx-auto w-full max-w-xl lg:mx-0">
          <h1 className="mb-6 text-display-lg-mobile leading-tight font-bold text-primary md:text-display-lg">
            كشف تسربات المياه بالرياض
          </h1>
          <p className="mb-10 text-body-lg text-on-surface-muted">
            <strong className="font-semibold text-primary">
              كشف تسربات المياه بالرياض
            </strong>{" "}
            مع ManzilCare يبدأ بمعاينة مجانية. نستخدم أجهزة صوتية وحرارية لتحديد
            التسرب قبل أي تكسير. نحمي منزلك من الرطوبة والعفن وارتفاع الفواتير.
            ضمان مكتوب يصل إلى 10 سنوات.
          </p>
          <div className="cta-row">
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold shadow-soft-md hover:scale-[1.02] hover:shadow-soft-lg sm:text-body-md ${primaryCta}`}
            >
              <Icon name="calendar_today" size="md" className="text-on-primary" />
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

      {/* الصورة — أصغر وكاملة بدون قصّ (object-contain) لظهور أوضح */}
      <div className="flex w-full shrink-0 items-center justify-center bg-surface-container-low px-gutter py-6 lg:w-[48%] lg:py-10 xl:w-[50%]">
        <div className="relative aspect-[1024/682] w-full max-w-lg rounded-2xl border-4 border-white bg-white p-2 shadow-soft-lg lg:max-w-lg xl:max-w-xl">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <OptimizedImage
              src={images.hero.src}
              alt={images.hero.alt}
              fill
              priority
              fetchPriority="high"
              quality={95}
              sizes="(max-width: 1024px) 92vw, 36rem"
              placeholder="empty"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
