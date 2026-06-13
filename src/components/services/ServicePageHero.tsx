import { OptimizedImage } from "@/components/OptimizedImage";
import { Icon } from "@/components/Icon";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { primaryCtaOnDark } from "@/lib/ui/button-styles";

type ServicePageHeroProps = {
  title: string;
  description: string;
  icon: string;
  image: { src: string; alt: string };
};

const ctaSecondary =
  "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-on-primary/40 px-5 py-3 text-label-sm font-bold transition-colors sm:w-auto sm:min-w-[9rem]";

export function ServicePageHero({
  title,
  description,
  icon,
  image,
}: ServicePageHeroProps) {
  const waText = encodeURIComponent(`السلام عليكم، أريد طلب: ${title}`);

  return (
    <section className="relative mb-6 overflow-hidden rounded-2xl shadow-soft-lg sm:mb-8 sm:rounded-3xl">
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          fill
          priority
          lcp
          fetchPriority="high"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
          className="object-cover object-[center_30%] sm:object-center"
        />
        {/* تدرج أقوى من جهة اليمين (بداية RTL) لقراءة النص */}
        <div className="absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/70 to-primary/25 sm:via-primary/65" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 70% at 85% 70%, color-mix(in srgb, var(--color-primary-fixed-dim) 35%, transparent) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-[min(72vw,320px)] w-full flex-col items-start justify-end p-4 text-right text-on-primary sm:min-h-[380px] sm:p-6 md:min-h-[440px] md:p-10 lg:p-12">
        <div className="w-full max-w-2xl">
          <div className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-on-primary/25 bg-on-primary/10 px-3 py-1.5 text-[13px] backdrop-blur-sm sm:mb-4 sm:px-4 sm:text-label-sm">
            <Icon
              name={icon}
              size="sm"
              className="shrink-0 text-secondary-container"
            />
            <span>خدمة معتمدة في الرياض</span>
          </div>

          <h1 className="mb-3 text-[1.65rem] font-bold leading-tight sm:mb-4 sm:text-display-lg-mobile md:text-display-lg">
            {title}
          </h1>

          <p className="mb-6 text-body-md leading-relaxed opacity-95 sm:mb-8 sm:text-body-lg">
            {description}
          </p>

          <div className="cta-row cta-row--stack-mobile justify-start">
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className={`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-label-sm font-bold shadow-md sm:w-auto sm:min-w-[10rem] ${primaryCtaOnDark}`}
            >
              <Icon name="call" size="sm" className="text-primary" />
              معاينة مجانية
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaSecondary} bg-on-primary/10 backdrop-blur-sm hover:bg-on-primary/20`}
            >
              <Icon name="chat" size="sm" />
              واتساب
            </a>
            <Link
              href="/contact"
              className={`${ctaSecondary} hover:bg-on-primary/10`}
            >
              <Icon name="mail" size="sm" />
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
