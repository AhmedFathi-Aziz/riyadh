import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const serviceHighlights = [
  {
    icon: "water_damage",
    title: "كشف التسربات بدون تكسير",
    description:
      "تحديد دقيق للأعطال في خطوط التغذية والصرف باستخدام النيتروجين.",
  },
  {
    icon: "layers",
    title: "عزل الأسطح والخزانات",
    description:
      "عزل مائي وحراري (فوم، إيبوكسي، بيتومين) بأفضل المواصفات العالمية.",
  },
];

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
              alt={images.services.alt}
              placeholder="blur"
              blurDataURL={images.services.blurDataURL}
              sizes="(max-width: 768px) 100vw, 50vw"
              width={640}
              height={480}
              className="relative z-10 rounded-3xl shadow-2xl"
            />
          </div>

          <div className="md:w-1/2">
            <span className="mb-4 block text-label-sm font-semibold text-secondary">
              خدماتنا المتكاملة
            </span>
            <h2
              id="services-heading"
              className="mb-6 text-display-lg-mobile font-bold text-primary md:text-display-lg"
            >
              حلول هندسية لمشاكل الرطوبة والتسرب
            </h2>
            <p className="mb-8 text-body-lg text-on-surface-variant">
              نقدم خدمات احترافية تلبي تطلعات سكان الرياض، مع مراعاة الظروف
              المناخية القاسية والحلول المستدامة.
            </p>

            <ul className="mb-10 space-y-6">
              {serviceHighlights.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span
                    className="material-symbols-outlined rounded-lg bg-primary p-2 text-secondary-container"
                    aria-hidden
                  >
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-headline-md font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/insulation"
              className="inline-flex items-center gap-3 font-bold text-primary transition-all hover:gap-5"
            >
              عرض جميع الخدمات
              <span className="material-symbols-outlined" aria-hidden>
                arrow_back
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
