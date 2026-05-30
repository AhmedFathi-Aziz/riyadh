import { blogMeta, blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export function BlogPageJsonLd() {
  const { url, name } = siteConfig;
  const pageUrl = `${url}${blogMeta.path}`;

  const blog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${pageUrl}#blog`,
    url: pageUrl,
    name: `${blogMeta.title} | ${name}`,
    description: blogMeta.description,
    inLanguage: "ar-SA",
    publisher: { "@id": `${url}/#organization` },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${url}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      image: post.image.src,
      author: { "@id": `${url}/#organization` },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: url },
      { "@type": "ListItem", position: 2, name: blogMeta.title, item: pageUrl },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([blog, breadcrumb]) }}
    />
  );
}
