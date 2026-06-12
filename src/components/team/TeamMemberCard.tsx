import { OptimizedImage } from "@/components/OptimizedImage";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/site";
import type { TeamMember } from "@/lib/team-page";

type TeamMemberCardProps = {
  member: TeamMember;
  index: number;
};

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <article
      id={member.id}
      className="about-card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-outline-variant/20 bg-white p-6 shadow-soft sm:p-7"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {member.isFounder && (
        <span className="absolute start-6 top-6 rounded-full bg-primary/10 px-3 py-0.5 text-label-sm font-bold text-primary">
          المؤسس
        </span>
      )}
      {member.isLead && (
        <span
          className={`absolute start-6 rounded-full bg-secondary-container/15 px-3 py-0.5 text-label-sm font-bold text-secondary ${
            member.isFounder ? "top-14" : "top-6"
          }`}
        >
          قائد الفريق الميداني
        </span>
      )}

      <div
        className={`mb-5 flex items-start gap-4 ${
          member.isFounder || member.isLead ? "mt-8" : ""
        }`}
      >
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-outline-variant/20 bg-white p-2 shadow-soft transition-transform group-hover:scale-105">
          <OptimizedImage
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            sizes="80px"
            className="h-auto w-full object-contain"
            responsive={false}
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="mb-1 text-lg font-bold text-primary">{member.name}</h3>
          <p className="mb-2 text-body-md font-semibold text-secondary">
            {member.role}
          </p>
          <p className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/25 bg-white px-3 py-0.5 text-label-sm text-on-surface-variant">
            <Icon name="schedule" size="sm" className="text-secondary" />
            {member.experienceYears} سنوات خبرة
          </p>
        </div>
      </div>

      <p className="mb-5 flex-1 text-body-md leading-relaxed text-on-surface-variant">
        {member.bio}
      </p>

      <ul className="space-y-2 border-t border-outline-variant/15 pt-4">
        {member.highlights.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-body-md text-on-surface-variant"
          >
            <Icon
              name={member.icon}
              size="sm"
              className="mt-0.5 shrink-0 text-secondary"
            />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
