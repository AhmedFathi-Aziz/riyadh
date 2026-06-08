import { getAllPosts, type BlogPost } from "./blog/load-posts";

export type { BlogPost };

export const blogMeta = {
  title: "مدونة عزل وكشف التسربات بالرياض",
  description:
    "نصائح عزل الأسطح وكشف تسربات المياه في الرياض — فوم بولي يوريثان، بيتومين، وصيانة دورية. مقالات من خبراء ManzilCare. اقرأ الآن.",
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
