import Link from "next/link";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Icon } from "@/components/Icon";
import {
  blogAuthorTeamUrl,
  type BlogAuthor,
} from "@/lib/blog/authors";
import { siteConfig } from "@/lib/site";

type BlogAuthorBylineProps = {
  author: BlogAuthor;
};

/** سطر المؤلف أعلى المقال */
export function BlogAuthorByline({ author }: BlogAuthorBylineProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-label-sm text-on-surface-variant">
      <Icon name="person" size="sm" className="text-secondary" />
      <span>بقلم</span>
      <Link
        href={blogAuthorTeamUrl(author.id)}
        className="font-semibold text-primary transition-colors hover:text-secondary"
      >
        {author.name}
      </Link>
      <span className="hidden sm:inline">· {author.role}</span>
    </div>
  );
}

type BlogAuthorSectionProps = {
  author: BlogAuthor;
};

/** سكشن المؤلف بعد نص المقال */
export function BlogAuthorSection({ author }: BlogAuthorSectionProps) {
  return (
    <section
      id="article-author"
      aria-labelledby="article-author-heading"
      className="mt-12 rounded-2xl border border-outline-variant/20 bg-white p-6 shadow-soft sm:p-8"
    >
      <p className="about-eyebrow mb-3 text-label-sm font-semibold uppercase tracking-wide text-secondary">
        عن الكاتب
      </p>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-outline-variant/20 bg-white p-2 shadow-soft">
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
          <h2
            id="article-author-heading"
            className="mb-1 text-headline-md font-bold text-primary"
          >
            {author.name}
          </h2>
          <p className="mb-2 text-body-md font-semibold text-secondary">
            {author.role}
          </p>
          <p className="mb-3 inline-flex items-center gap-1.5 text-label-sm text-on-surface-variant">
            <Icon name="schedule" size="sm" className="text-secondary" />
            {author.experienceYears} سنوات خبرة · {siteConfig.name}
          </p>
          <p className="mb-4 text-body-md leading-relaxed text-on-surface-variant">
            {author.bio}
          </p>

          <ul className="mb-5 flex flex-wrap gap-2">
            {author.expertise.map((item) => (
              <li
                key={item}
                className="rounded-full border border-secondary/15 bg-secondary-container/10 px-3 py-0.5 text-label-sm text-secondary"
              >
                {item}
              </li>
            ))}
          </ul>

          <Link
            href={blogAuthorTeamUrl(author.id)}
            className="inline-flex items-center gap-2 text-label-sm font-bold text-primary transition-colors hover:text-secondary"
          >
            <Icon name="groups" size="sm" />
            الملف في فريق {siteConfig.name}
            <Icon name="arrow_back" size="sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
