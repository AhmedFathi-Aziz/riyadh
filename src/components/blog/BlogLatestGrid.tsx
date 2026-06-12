import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import { getLatestPosts } from "@/lib/blog";
import { blogImages } from "@/lib/media/images";

export function BlogLatestGrid() {
  const posts = getLatestPosts();

  return (
    <>
      <h2 className="mb-8 border-r-4 border-secondary pr-4 text-headline-md font-semibold text-primary">
        آخر المقالات التعليمية
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const cover = blogImages[post.slug];
          return (
          <article
            key={post.slug}
            className="flex flex-col overflow-hidden rounded-xl border border-outline-variant/20 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="h-48 overflow-hidden">
              <OptimizedImage
                src={post.image.src}
                alt={post.image.alt}
                width={cover?.width ?? 640}
                height={cover?.height ?? 360}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={cover?.blurDataURL}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-grow p-6">
              <span className="mb-3 inline-block rounded bg-secondary/10 px-2 py-0.5 text-label-sm text-secondary-fixed-dim">
                {post.category}
              </span>
              <p className="mb-2 text-label-sm text-on-surface-variant">
                {post.author.name}
              </p>
              <h3 className="mb-3 text-[18px] font-semibold text-primary">
                {post.title}
              </h3>
              <p className="line-clamp-3 text-on-surface-variant">
                {post.excerpt}
              </p>
            </div>
            <div className="border-t border-outline-variant/10 p-6">
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-2 font-bold text-primary"
              >
                اقرأ المقال
                <span className="material-symbols-outlined text-sm" aria-hidden>
                  arrow_back
                </span>
              </Link>
            </div>
          </article>
        );
        })}
      </div>
    </>
  );
}
