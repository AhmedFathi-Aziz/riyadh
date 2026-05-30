import type { Metadata } from "next";
import { BlogMarkdown } from "@/components/blog/BlogMarkdown";
import { OptimizedImage } from "@/components/OptimizedImage";
import { blogImages } from "@/lib/media/images";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "@/components/blog/ArticleJsonLd";
import { BlogFooter } from "@/components/blog/BlogFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category, "عزل الرياض", "كشف تسربات"],
    image: post.image,
  });
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const cover = blogImages[slug];

  return (
    <>
      <ArticleJsonLd post={post} />
      <SiteHeader activePage="blog" />
      <article className="mx-auto max-w-max-width px-6 pt-32 pb-16">
        <nav aria-label="مسار التنقل" className="mb-8 text-label-sm text-on-surface-variant">
          <Link href="/" className="hover:text-primary">
            الرئيسية
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-primary">
            المدونة
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{post.category}</span>
        </nav>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-secondary-container px-3 py-1 text-label-sm text-on-secondary-container">
            {post.category}
          </span>
          <span className="text-label-sm text-on-surface-variant">
            {post.readTime}
          </span>
          <time
            dateTime={post.publishedAt}
            className="text-label-sm text-on-surface-variant"
          >
            {new Date(post.publishedAt).toLocaleDateString("ar-SA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <h1 className="mb-8 text-display-lg-mobile font-bold text-primary md:text-display-lg">
          {post.title}
        </h1>

        <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl">
          <OptimizedImage
            src={post.image.src}
            alt={post.image.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
            placeholder="blur"
            blurDataURL={cover?.blurDataURL}
            className="object-cover"
          />
        </div>

        <BlogMarkdown content={post.content} />

        <div className="mt-12 rounded-2xl bg-surface-container-low p-8 text-center">
          <h2 className="mb-4 text-headline-md font-semibold text-primary">
            تحتاج مساعدة في {post.category}؟
          </h2>
          <p className="mb-6 text-on-surface-variant">
            فريق {siteConfig.name} جاهز لمعاينة مجانية في الرياض.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="rounded-xl bg-primary px-8 py-3 font-bold text-on-primary"
            >
              اتصل الآن
            </a>
            <Link
              href="/services"
              className="rounded-xl border border-primary px-8 py-3 font-bold text-primary"
            >
              خدماتنا
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-bold text-primary"
          >
            <span className="material-symbols-outlined" aria-hidden>
              arrow_forward
            </span>
            العودة للمدونة
          </Link>
        </div>
      </article>
      <BlogFooter />
    </>
  );
}
