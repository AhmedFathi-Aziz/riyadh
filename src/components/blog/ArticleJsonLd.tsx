import type { BlogPost } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export function ArticleJsonLd({ post }: { post: BlogPost }) {
  const { url, name } = siteConfig;
  const articleUrl = `${url}/blog/${post.slug}`;

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    image: post.image.src,
    datePublished: post.publishedAt,
    inLanguage: "ar-SA",
    author: {
      "@type": "Organization",
      name,
      url,
    },
    publisher: {
      "@type": "Organization",
      name,
      logo: { "@type": "ImageObject", url: siteConfig.logo.src },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    articleSection: post.category,
    timeRequired: post.readTime,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: url },
      { "@type": "ListItem", position: 2, name: "المدونة", item: `${url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([article, breadcrumb]) }}
    />
  );
}
