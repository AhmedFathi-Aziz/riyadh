import Link from "next/link";
import {
  homeSeoSections,
  homeServiceLinks,
  homeAreaLinks,
} from "@/lib/home-page";
import { siteConfig } from "@/lib/site";

function renderInlineLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      return (
        <Link
          key={i}
          href={match[2]!}
          className="font-semibold text-secondary hover:underline"
        >
          {match[1]}
        </Link>
      );
    }
    const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((bp, j) => {
      const boldMatch = bp.match(/^\*\*([^*]+)\*\*$/);
      if (boldMatch) {
        return (
          <strong key={`${i}-${j}`} className="font-semibold text-primary">
            {boldMatch[1]}
          </strong>
        );
      }
      return <span key={`${i}-${j}`}>{bp}</span>;
    });
  });
}

export function HomeSeoContent() {
  const { phoneE164, phoneDisplay, whatsapp } = siteConfig;
  const waText = encodeURIComponent(
    "مرحباً، أريد حجز كشف تسربات في الرياض",
  );

  return (
    <section
      id="about-leak-detection"
      aria-labelledby="home-seo-heading"
      className="border-t border-outline-variant/20 bg-white py-margin-desktop"
    >
      <div className="mx-auto w-full max-w-max-width px-gutter">
        <div className="mx-auto max-w-3xl">
          <h2
            id="home-seo-heading"
            className="mb-6 text-headline-md font-semibold text-primary"
          >
            دليلك الشامل لـ كشف تسربات المياه بالرياض
          </h2>
          <p className="mb-10 text-body-lg leading-relaxed text-on-surface-muted">
            {renderInlineLinks(
              "هل لاحظت بقعة رطوبة في السقف، أو ارتفع عداد المياه دون سبب؟ **كشف تسربات المياه بالرياض** مع **ManzilCare** يبدأ بمعاينة مجانية وتشخيص دقيق — قبل أي تكسير. في هذا الدليل نشرح لماذا التأخير مكلف، وما الخدمات التي نقدمها، وكيف نعمل في كل أحياء العاصمة.",
            )}
          </p>

          {homeSeoSections.map((section) => (
            <div key={section.id} className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-primary sm:text-headline-md">
                {section.heading}
              </h2>
              {"paragraphs" in section &&
                section.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="mb-4 text-body-lg leading-relaxed text-on-surface-muted"
                  >
                    {renderInlineLinks(p)}
                  </p>
                ))}
              {"subsections" in section && (
                <div className="space-y-4">
                  {section.subsections.map((sub) => (
                    <div key={sub.title}>
                      <h3 className="mb-2 text-body-lg font-bold text-primary">
                        {sub.title}
                      </h3>
                      <p className="text-body-md leading-relaxed text-on-surface-muted">
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mb-10 rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6 sm:p-8">
            <h3 className="mb-4 text-body-lg font-bold text-primary">
              خدماتنا الأساسية — روابط سريعة
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {homeServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-md font-semibold text-secondary hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              <Link
                href="/services"
                className="text-label-sm font-semibold text-primary hover:underline"
              >
                عرض جميع الخدمات ←
              </Link>
            </p>
          </div>

          <div className="mb-10 rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6 sm:p-8">
            <h3 className="mb-4 text-body-lg font-bold text-primary">
              أحياء الرياض التي نخدمها
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {homeAreaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-md font-semibold text-secondary hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              <Link
                href="/areas"
                className="text-label-sm font-semibold text-primary hover:underline"
              >
                عرض جميع أحياء الرياض ←
              </Link>
            </p>
          </div>

          <div className="rounded-2xl bg-primary p-6 text-center text-on-primary sm:p-8">
            <h2 className="mb-3 text-headline-md font-semibold">
              احجز كشف تسربات المياه بالرياض الآن
            </h2>
            <p className="mb-6 text-body-md opacity-90">
              معاينة مجانية · تقرير مصور · ضمان حتى 10 سنوات · تغطية كل أحياء
              الرياض
            </p>
            <div className="cta-row justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-secondary-container px-8 py-3 font-semibold text-on-secondary-container transition-opacity hover:opacity-90"
              >
                اطلب معاينة مجانية
              </Link>
              <a
                href={`tel:${phoneE164}`}
                className="inline-flex items-center justify-center rounded-xl border border-on-primary/30 bg-white/10 px-8 py-3 font-semibold transition-colors hover:bg-white/20"
              >
                {phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${whatsapp}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-on-primary/30 bg-white/10 px-8 py-3 font-semibold transition-colors hover:bg-white/20"
              >
                واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
