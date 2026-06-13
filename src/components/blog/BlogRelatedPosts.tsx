import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { BlogPost } from "@/lib/blog";

type BlogRelatedPostsProps = {
  currentSlug: string;
  category: string;
  posts: BlogPost[];
};

export function BlogRelatedPosts({
  currentSlug,
  category,
  posts,
}: BlogRelatedPostsProps) {
  const related = posts
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      const aMatch = a.category === category ? 1 : 0;
      const bMatch = b.category === category ? 1 : 0;
      if (aMatch !== bMatch) return bMatch - aMatch;
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    })
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section
      className="mt-12 border-t border-outline-variant/30 pt-10"
      aria-labelledby="related-posts-heading"
    >
      <h2
        id="related-posts-heading"
        className="mb-2 text-xl font-bold text-primary sm:text-headline-md"
      >
        مقالات ذات صلة
      </h2>
      <p className="mb-6 text-body-md text-on-surface-muted">
        اقرأ المزيد عن عزل وكشف التسربات في الرياض
      </p>
      <ul className="grid gap-4 sm:grid-cols-3">
        {related.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-outline-variant/25 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-soft-md"
            >
              <span className="mb-2 text-label-sm text-secondary">
                {post.category}
              </span>
              <span className="mb-2 flex-1 font-bold text-primary line-clamp-2">
                {post.title}
              </span>
              <span className="inline-flex items-center gap-1 text-label-sm font-semibold text-secondary">
                اقرأ المقال
                <Icon
                  name="arrow_back"
                  size="sm"
                  className="transition-transform group-hover:-translate-x-1"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-6">
        <Link
          href="/services/leak-detection-water-riyadh"
          className="text-label-sm font-semibold text-secondary hover:underline"
        >
          كشف تسربات المياه بالرياض
        </Link>
        {" · "}
        <Link
          href="/services/roof-insulation-riyadh"
          className="text-label-sm font-semibold text-secondary hover:underline"
        >
          عزل أسطح بالرياض
        </Link>
        {" · "}
        <Link
          href="/blog"
          className="text-label-sm font-semibold text-secondary hover:underline"
        >
          كل المقالات
        </Link>
      </p>
    </section>
  );
}
