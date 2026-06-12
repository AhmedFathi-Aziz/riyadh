import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import {
  getFeaturedPost,
  getSidebarPosts,
  type BlogPost,
} from "@/lib/blog";
import { blogImages } from "@/lib/media/images";

function SidebarCard({ post }: { post: BlogPost }) {
  return (
    <article className="glass-card rounded-xl border border-outline-variant/30 p-6 transition-colors hover:bg-white">
      <div className="mb-3 flex items-center gap-2 text-secondary">
        <span
          className="material-symbols-outlined material-symbols-filled text-sm"
          aria-hidden
        >
          {post.icon ?? "article"}
        </span>
        <span className="text-label-sm">{post.sidebarLabel}</span>
      </div>
      <h3 className="mb-3 text-[20px] leading-tight font-semibold text-primary">
        {post.title}
      </h3>
      <p className="mb-4 line-clamp-2 text-on-surface-variant">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="border-b border-primary/20 pb-1 text-label-sm font-bold text-primary"
      >
        تابع القراءة
      </Link>
    </article>
  );
}

export function BlogFeaturedGrid() {
  const featured = getFeaturedPost();
  const sidebar = getSidebarPosts();
  const cover = blogImages[featured.slug];

  return (
    <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-12">
      <article className="group relative overflow-hidden rounded-xl border border-outline-variant/30 bg-white shadow-sm transition-all duration-500 hover:shadow-xl md:col-span-8">
        <div className="aspect-video w-full overflow-hidden">
          <OptimizedImage
            src={featured.image.src}
            alt={featured.image.alt}
            width={cover?.width ?? 1280}
            height={cover?.height ?? 720}
            sizes="(max-width: 768px) 100vw, 66vw"
            placeholder="blur"
            blurDataURL={cover?.blurDataURL}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>
        <div className="p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-secondary-container px-3 py-1 text-label-sm text-on-secondary-container">
              {featured.category}
            </span>
            <span className="text-label-sm text-on-surface-variant">
              {featured.readTime}
            </span>
            <span className="text-label-sm text-on-surface-variant">
              {featured.author.name}
            </span>
          </div>
          <h2 className="mb-4 text-headline-md font-semibold text-primary transition-colors group-hover:text-secondary">
            {featured.title}
          </h2>
          <p className="mb-6 line-clamp-3 text-on-surface-variant">
            {featured.excerpt}
          </p>
          <Link
            href={`/blog/${featured.slug}`}
            className="inline-flex items-center gap-2 font-bold text-primary transition-all group-hover:gap-4"
          >
            اقرأ المزيد
            <span className="material-symbols-outlined" aria-hidden>
              arrow_back
            </span>
          </Link>
        </div>
      </article>

      <div className="flex flex-col gap-8 md:col-span-4">
        {sidebar.map((post) => (
          <SidebarCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
