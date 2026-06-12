import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import {
  aboutPageIntro,
  aboutPageStats,
} from "@/lib/about-page";
import { breadcrumbs } from "@/lib/seo/breadcrumbs";
import { siteConfig } from "@/lib/site";
import { primaryCta } from "@/lib/ui/button-styles";

function renderBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const match = part.match(/^\*\*([^*]+)\*\*$/);
    if (match) {
      return (
        <strong key={i} className="font-semibold text-primary">
          {match[1]}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function AboutHero() {
  const crumb = breadcrumbs.about();
  const { phoneE164 } = siteConfig;

  return (
    <section className="about-hero about-hero--light relative overflow-x-clip bg-white pt-24 pb-32 md:pt-28 md:pb-40">
      <div
        className="about-hero-glow about-hero-glow--light pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div
        className="about-hero-orb about-hero-orb--light about-hero-orb--1 pointer-events-none absolute"
        aria-hidden
      />
      <div
        className="about-hero-orb about-hero-orb--light about-hero-orb--2 pointer-events-none absolute"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-max-width px-gutter">
        <BreadcrumbNav items={crumb} className="mb-8" />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="about-hero-badge about-hero-badge--light mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-label-sm text-secondary">
              <Icon name="verified" size="sm" className="text-secondary" />
              <span>
                منذ {siteConfig.foundingYear} · +500 مشروع · ضمان 10 سنوات
              </span>
            </div>

            <h1 className="mb-5 text-display-lg-mobile font-bold leading-tight text-primary md:text-display-lg">
              {aboutPageIntro.heading}
            </h1>

            <p className="mb-8 max-w-xl text-body-lg leading-relaxed text-on-surface-muted">
              {renderBold(aboutPageIntro.lead)}
            </p>

            <div className="cta-row">
              <Link
                href="/contact"
                className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-label-sm font-bold shadow-soft-md transition-all hover:scale-[1.02] hover:shadow-soft-lg ${primaryCta}`}
              >
                <Icon name="calendar_today" size="sm" />
                احجز معاينة مجانية
              </Link>
              <a
                href={`tel:${phoneE164}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-primary bg-white px-7 py-3.5 text-label-sm font-semibold text-primary shadow-soft transition-all hover:bg-primary hover:text-on-primary"
              >
                <Icon name="call" size="sm" />
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="about-logo-frame relative">
              <div
                className="about-logo-ring about-logo-ring--light pointer-events-none absolute inset-0 rounded-3xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-3xl border border-outline-variant/20 bg-white p-8 shadow-soft-lg md:p-12">
                <OptimizedImage
                  src={siteConfig.logo.src}
                  alt={siteConfig.logo.alt}
                  width={siteConfig.logo.width}
                  height={siteConfig.logo.height}
                  sizes="(max-width: 768px) 220px, 280px"
                  className="mx-auto h-auto w-full max-w-[220px] object-contain md:max-w-[280px]"
                  responsive={false}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* بطاقات إحصائيات عائمة */}
      <div className="relative z-20 mx-auto -mb-24 mt-14 max-w-max-width px-gutter md:-mb-28 md:mt-16">
        <ul className="about-stats-grid grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {aboutPageStats.map((stat, i) => (
            <li
              key={stat.label}
              className="about-stat-card group rounded-2xl p-5 text-center sm:p-6"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <p className="about-stat-value mb-1 text-display-sm font-bold md:text-display-lg-mobile">
                {stat.value}
              </p>
              <p className="text-label-sm text-on-surface-variant">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
