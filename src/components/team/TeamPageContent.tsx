import Link from "next/link";
import { Icon } from "@/components/Icon";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { AboutSectionHeader } from "@/components/about/AboutSectionHeader";
import {
  teamMembers,
  teamPageIntro,
  teamPageStats,
} from "@/lib/team-page";
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

export function TeamPageContent() {
  return (
    <div className="space-y-20 pb-8 sm:space-y-28">
      <section aria-labelledby="team-intro">
        <AboutSectionHeader
          id="team-intro"
          eyebrow="من يزور موقعك؟"
          title="مهندسون وفنيون — أسماء حقيقية"
          description={teamPageIntro.lead.replace(/\*\*/g, "")}
        />
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="about-story-feature lg:col-span-7">
            <p className="text-body-lg leading-relaxed text-on-surface-variant">
              {renderBold(teamPageIntro.paragraphs[0]!)}
            </p>
          </div>
          <div className="grid gap-4 lg:col-span-5">
            {teamPageIntro.paragraphs.slice(1).map((p) => (
              <div
                key={p.slice(0, 40)}
                className="about-card-lift rounded-2xl border border-outline-variant/20 bg-white p-5 shadow-soft"
              >
                <p className="text-body-md leading-relaxed text-on-surface-variant">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="team-stats">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {teamPageStats.map((stat, i) => (
            <li
              key={stat.label}
              className="about-stat-card rounded-2xl p-5 text-center sm:p-6"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <p className="about-stat-value mb-1 text-display-sm font-bold md:text-display-lg-mobile">
                {stat.value}
              </p>
              <p className="text-label-sm text-on-surface-variant">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="team-members">
        <AboutSectionHeader
          id="team-members"
          eyebrow="الأسماء"
          title="تعرف على الفريق"
          description="كل بطاقة تمثل عضواً ميدانياً — دوره، خبرته، ونوع المشاريع التي يشرف عليها."
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <li key={member.id}>
              <TeamMemberCard member={member} index={i} />
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="team-cta"
        className="about-cta-premium relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-16"
      >
        <div
          className="about-hero-glow about-hero-glow--light pointer-events-none absolute inset-0"
          aria-hidden
        />
        <div className="relative z-10">
          <Icon
            name="groups"
            size="xl"
            className="mx-auto mb-4 text-secondary"
          />
          <h2
            id="team-cta"
            className="mb-3 text-headline-md font-bold text-primary sm:text-[1.75rem]"
          >
            اطلب معاينة — يرسل لك من يناسب مشروعك
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-body-lg text-on-surface-variant">
            معاينة مجانية في الرياض — مهندس كشف أو مشرف موقع حسب نوع العطل.
            اتصل بـ {siteConfig.name} الآن.
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
              href="/about"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-primary bg-white px-8 py-3.5 text-label-sm font-semibold text-primary shadow-soft transition-all hover:bg-primary hover:text-on-primary"
            >
              <Icon name="info" size="sm" />
              من نحن
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
