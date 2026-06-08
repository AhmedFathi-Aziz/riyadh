import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import { homeServiceLinks } from "@/lib/home-page";
import { siteConfig } from "@/lib/site";

export function Services() {
  const { images } = siteConfig;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="overflow-hidden bg-surface-container-low py-margin-desktop"
    >
      <div className="mx-auto w-full max-w-max-width px-gutter">
        <div className="flex flex-col items-center gap-16 md:flex-row">
          <div className="relative md:w-1/2">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-secondary-container/20 blur-3xl" />
            <OptimizedImage
              src={images.services.src}
              alt="خدمات كشف تسربات المياه وعزل الأسطح بالرياض — ManzilCare"
              placeholder="blur"
              blurDataURL={images.services.blurDataURL}
              sizes="(max-width: 768px) 100vw, 50vw"
              width={images.services.width}
              height={images.services.height}
              className="relative z-10 w-full rounded-3xl shadow-2xl"
            />
          </div>

          <div className="md:w-1/2">
            <span className="mb-4 block text-label-sm font-semibold text-secondary">
              خدماتنا المتكاملة
            </span>
            <h2
              id="services-heading"
              className="mb-4 text-display-lg-mobile font-bold text-primary md:text-display-lg"
            >
              كشف تسربات وعزل في الرياض
            </h2>
            <p className="mb-6 text-body-md font-medium text-primary">
              حلول هندسية لمشاكل الرطوبة والتسرب — من الكشف إلى الإصلاح والعزل
            </p>
            <p className="mb-8 text-body-lg text-on-surface-muted">
              نقدم خدمات احترافية تلبي تطلعات سكان الرياض: حرارة تتجاوز 50°م
              صيفاً، أمطار موسمية تختبر الأسطح، وشبكات مياه قديمة في العمائر.
              ننفّذ أكثر من 500 مشروع كشف وعزل في العاصمة منذ 2018.
            </p>

            <ul className="mb-10 space-y-4">
              {homeServiceLinks.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-start gap-3 rounded-xl border border-outline-variant/20 bg-white p-4 transition-shadow hover:shadow-soft-md"
                  >
                    <span
                      className="material-symbols-outlined shrink-0 rounded-lg bg-primary p-2 text-secondary-container"
                      aria-hidden
                    >
                      check_circle
                    </span>
                    <span className="text-body-md font-semibold text-primary group-hover:text-secondary">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 font-bold text-primary transition-all hover:gap-5"
              >
                عرض جميع الخدمات
                <span className="material-symbols-outlined" aria-hidden>
                  arrow_back
                </span>
              </Link>
              <Link
                href="/insulation"
                className="inline-flex items-center gap-2 text-label-sm font-semibold text-secondary hover:underline"
              >
                صفحة العزل الاحترافية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
