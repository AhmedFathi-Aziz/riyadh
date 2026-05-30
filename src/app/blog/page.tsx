import type { Metadata } from "next";
import { BlogFeaturedGrid } from "@/components/blog/BlogFeaturedGrid";
import { BlogFooter } from "@/components/blog/BlogFooter";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogLatestGrid } from "@/components/blog/BlogLatestGrid";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { BlogPageJsonLd } from "@/components/blog/BlogPageJsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import { blogMeta } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: blogMeta.title,
  description: blogMeta.description,
  path: blogMeta.path,
  keywords: [
    "مدونة عزل الرياض",
    "نصائح عزل الأسطح",
    "كشف تسربات المياه",
    "عزل فوم بولي يوريثان",
    "صيانة عزل المباني",
  ],
});

export default function BlogPage() {
  return (
    <>
      <BlogPageJsonLd />
      <SiteHeader activePage="blog" />
      <BlogHero />
      <main className="mx-auto max-w-max-width px-6 py-12">
        <BlogFeaturedGrid />
        <BlogLatestGrid />
        <BlogNewsletter />
      </main>
      <BlogFooter />
    </>
  );
}
