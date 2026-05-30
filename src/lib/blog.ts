import { getAllPosts, type BlogPost } from "./blog/load-posts";

export type { BlogPost };

export const blogMeta = {
  title: "المدونة",
  description:
    "تعرف على أفضل نصائح عزل الأسطح، الكشف عن تسربات المياه، وأحدث تقنيات العزل المناسبة لمناخ الرياض في مدونتنا المتخصصة.",
  path: "/blog",
};

/** كل المقالات من content/blog/*.md */
export const blogPosts: BlogPost[] = getAllPosts();

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost {
  return blogPosts.find((p) => p.featured) ?? blogPosts[0];
}

export function getSidebarPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.sidebar);
}

export function getLatestPosts(): BlogPost[] {
  return blogPosts.filter((p) => !p.featured && !p.sidebar);
}
