import Link from "next/link";
import { Icon } from "@/components/Icon";
import { AboutEquipmentTabs } from "@/components/about/AboutEquipmentTabs";
import { AboutSectionHeader } from "@/components/about/AboutSectionHeader";
import {
  aboutCities,
  aboutPageIntro,
  aboutProjects,
  aboutServices,
  aboutTeam,
  aboutTimeline,
  aboutValues,
  aboutEquipment,
} from "@/lib/about-page";
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

export function AboutPageContent() {
  return (
    <div className="about-page-body space-y-24 pb-8 pt-16 sm:space-y-32 sm:pt-20">
      {/* قصتنا */}
      <section aria-labelledby="about-story" className="about-section-in">
          <AboutSectionHeader
            id="about-story"
            eyebrow="قصتنا"
            title="خبرة ميدانية — لا مكتب وساطة"
          />
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="about-story-feature lg:col-span-7">
              <p className="text-body-lg leading-relaxed text-on-surface-variant">
                {renderBold(aboutPageIntro.paragraphs[0]!)}
              </p>
            </div>
            <div className="about-story-side grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {aboutPageIntro.paragraphs.slice(1).map((p) => (
                <div
                  key={p.slice(0, 40)}
                  className="about-card-lift rounded-2xl border border-outline-variant/20 bg-white p-5 shadow-soft"
                >
                  <p className="text-body-md leading-relaxed text-on-surface-variant">
                    {renderBold(p)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Timeline */}
      <section aria-labelledby="about-timeline" className="about-section-in">
          <AboutSectionHeader
            id="about-timeline"
            eyebrow="المسيرة"
            title="تاريخ التأسيس — خطوة بخطوة"
            align="center"
          />
          <ol className="about-timeline relative mx-auto max-w-3xl space-y-0">
            {aboutTimeline.map((item, i) => (
              <li
                key={item.period}
                className="about-timeline-item relative flex gap-6 pb-10 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="about-timeline-dot flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-on-secondary shadow-soft-md">
                    <Icon name={item.icon} size="md" />
                  </div>
                  {i < aboutTimeline.length - 1 && (
                    <div className="about-timeline-line mt-2 w-0.5 flex-1 bg-gradient-to-b from-secondary/60 to-secondary/10" />
                  )}
                </div>
                <div className="about-card-lift flex-1 rounded-2xl border border-outline-variant/20 bg-white p-5 shadow-soft md:p-6">
                  <span className="mb-2 inline-block rounded-full bg-secondary-container/15 px-3 py-0.5 text-label-sm font-bold text-secondary">
                    {item.period}
                  </span>
                  <h3 className="mb-2 font-bold text-primary">{item.title}</h3>
                  <p className="text-body-md leading-relaxed text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

      {/* Cities */}
      <section aria-labelledby="about-cities" className="about-section-in">
          <AboutSectionHeader
            id="about-cities"
            eyebrow="التغطية"
            title={aboutCities.heading}
            description={aboutCities.intro.replace(/\*\*/g, "")}
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutCities.cities.map((city, i) => (
              <li
                key={city.name}
                className="about-city-card about-card-lift group overflow-hidden rounded-2xl"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="relative h-full border border-outline-variant/20 bg-white p-6 shadow-soft transition-all group-hover:border-secondary/40 group-hover:shadow-soft-lg">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-container/15 text-secondary transition-transform group-hover:scale-110">
                      <Icon name="location_on" size="md" />
                    </div>
                    <Icon
                      name="north_west"
                      size="sm"
                      className="text-secondary opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-primary">
                    {city.name}
                  </h3>
                  <p className="text-body-md text-on-surface-variant">
                    {city.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-2xl border border-outline-variant/20 bg-white px-5 py-4 text-body-md text-on-surface-variant shadow-soft">
            {aboutCities.note}
          </p>
        </section>

      {/* Projects — شريط مميز */}
      <section
        aria-labelledby="about-projects"
        className="about-section-in about-projects-band relative overflow-hidden rounded-3xl px-6 py-12 sm:px-10 sm:py-14"
      >
          <div
            className="about-hero-glow about-hero-glow--light pointer-events-none absolute inset-0 opacity-70"
            aria-hidden
          />
          <header className="relative z-10 mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className="about-eyebrow mb-3 text-label-sm font-semibold uppercase tracking-wide text-secondary">
              الأرقام
            </p>
            <h2
              id="about-projects"
              className="about-section-title about-section-title--center mb-4 text-headline-md font-bold text-primary sm:text-[1.75rem]"
            >
              {aboutProjects.heading}
            </h2>
          </header>
          <ul className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutProjects.items.map((item, i) => (
              <li
                key={item.slice(0, 30)}
                className="about-project-card rounded-2xl border border-outline-variant/15 bg-white p-5 shadow-soft sm:p-6"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="text-body-md leading-relaxed text-on-surface-variant">
                  {renderBold(item)}
                </span>
              </li>
            ))}
          </ul>
        </section>

      {/* Services grid */}
      <section aria-labelledby="about-services" className="about-section-in">
          <AboutSectionHeader
            id="about-services"
            eyebrow="13 تخصصاً"
            title={aboutServices.heading}
            description={aboutServices.intro}
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aboutServices.services.map((service, i) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="about-service-link group flex items-center gap-4 rounded-2xl border border-outline-variant/20 bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-secondary/35 hover:shadow-soft-lg sm:p-5"
                  style={{ animationDelay: `${i * 30}ms` }}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary-container/15 text-secondary transition-transform group-hover:scale-105">
                    <Icon name={service.icon} size="md" />
                  </span>
                  <span className="flex-1 text-body-md font-semibold text-primary group-hover:text-secondary">
                    {service.label}
                  </span>
                  <Icon
                    name="arrow_back"
                    size="sm"
                    className="shrink-0 text-secondary opacity-0 transition-all group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>

      {/* Equipment tabs */}
      <section aria-labelledby="about-equipment" className="about-section-in">
          <AboutSectionHeader
            id="about-equipment"
            eyebrow="التقنية"
            title={aboutEquipment.heading}
            description={aboutEquipment.intro}
          />
          <AboutEquipmentTabs />
        </section>

      {/* Team */}
      <section aria-labelledby="about-team" className="about-section-in">
          <AboutSectionHeader
            id="about-team"
            eyebrow="الفريق"
            title={aboutTeam.heading}
            description={aboutTeam.intro}
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aboutTeam.roles.map((role, i) => (
              <li
                key={role.title}
                className="about-card-lift group relative overflow-hidden rounded-2xl border border-outline-variant/20 bg-white p-6 shadow-soft"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="about-team-glow pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary-container/30 to-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Icon name={role.icon} size="lg" />
                </div>
                <h3 className="relative mb-2 font-bold text-primary">
                  {role.title}
                </h3>
                <p className="relative text-body-md leading-relaxed text-on-surface-variant">
                  {role.description}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-2xl border border-outline-variant/20 bg-white px-5 py-4 text-body-md text-on-surface-variant shadow-soft">
            {aboutTeam.note}
          </p>
          <div className="mt-6 text-center">
            <Link
              href="/team"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-primary bg-white px-7 py-3.5 text-label-sm font-semibold text-primary shadow-soft transition-all hover:bg-primary hover:text-on-primary"
            >
              <Icon name="groups" size="sm" />
              تعرف على أعضاء الفريق بالأسماء
            </Link>
          </div>
        </section>

      {/* Values */}
      <section aria-labelledby="about-values" className="about-section-in">
          <AboutSectionHeader
            id="about-values"
            eyebrow="الفرق"
            title={aboutValues.heading}
            align="center"
          />
          <ul className="grid gap-5 sm:grid-cols-2">
            {aboutValues.items.map((item, i) => (
              <li
                key={item.title}
                className="about-value-card about-card-lift rounded-2xl p-6 sm:p-8"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-on-secondary text-label-sm font-bold">
                  {i + 1}
                </span>
                <h3 className="mb-3 text-lg font-bold text-primary">
                  {item.title}
                </h3>
                <p className="text-body-md leading-relaxed text-on-surface-variant">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </section>

      {/* CTA */}
      <section
        aria-labelledby="about-cta"
        className="about-section-in about-cta-premium relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-16"
      >
          <div
            className="about-hero-glow about-hero-glow--light pointer-events-none absolute inset-0"
            aria-hidden
          />
          <div
            className="about-hero-orb about-hero-orb--light about-hero-orb--1 pointer-events-none absolute opacity-50"
            aria-hidden
          />
          <div className="relative z-10">
          <Icon
            name="handshake"
            size="xl"
            className="mx-auto mb-4 text-secondary"
          />
          <h2
            id="about-cta"
            className="mb-3 text-headline-md font-bold text-primary sm:text-[1.75rem]"
          >
            جاهزون لزيارة موقعك في الرياض
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-body-lg text-on-surface-variant">
            معاينة مجانية — تقرير مصور، مواصفات واضحة، وضمان مكتوب. اتصل
            بـ {siteConfig.name} الآن.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-label-sm font-bold shadow-soft-md transition-all hover:scale-[1.02] hover:shadow-soft-lg ${primaryCta}`}
            >
              <Icon name="calendar_today" size="sm" />
              احجز معاينة مجانية
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-primary bg-white px-8 py-3.5 text-label-sm font-semibold text-primary shadow-soft transition-all hover:bg-primary hover:text-on-primary"
            >
              <Icon name="grid_view" size="sm" />
              تصفّح خدماتنا
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-outline-variant bg-white px-8 py-3.5 text-label-sm font-semibold text-primary transition-colors hover:bg-secondary-container/10"
            >
              <Icon name="chat" size="sm" />
              واتساب
            </a>
          </div>
          </div>
        </section>
    </div>
  );
}
