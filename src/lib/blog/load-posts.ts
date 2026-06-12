import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { blogImages } from "@/lib/media/images";
import {
  getBlogAuthor,
  type BlogAuthor,
} from "@/lib/blog/authors";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: BlogAuthor;
  image: { src: string; alt: string };
  featured?: boolean;
  sidebar?: boolean;
  icon?: "stars" | "tips_and_updates";
  sidebarLabel?: string;
  content: string;
};

type BlogFrontmatter = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  /** وصف صورة الغلاف (إمكانية الوصول + SEO) */
  imageAlt: string;
  /** اسم ملف الصورة داخل public/images/ — الطريقة المفضلة */
  coverImage?: string;
  coverWidth?: number;
  coverHeight?: number;
  featured?: boolean;
  sidebar?: boolean;
  icon?: "stars" | "tips_and_updates";
  sidebarLabel?: string;
  /** معرّف المؤلف — انظر src/lib/blog/authors.ts */
  author?: string;
  draft?: boolean;
};

function resolveCover(
  slug: string,
  fm: BlogFrontmatter,
): { src: string; alt: string; width: number; height: number } {
  if (fm.coverImage) {
    const file = fm.coverImage.replace(/^\/?images\//, "");
    return {
      src: `/images/${file}`,
      alt: fm.imageAlt,
      width: fm.coverWidth ?? 1024,
      height: fm.coverHeight ?? 768,
    };
  }

  const mapped = blogImages[slug];
  if (mapped) {
    return {
      src: mapped.src,
      alt: fm.imageAlt || mapped.alt,
      width: mapped.width,
      height: mapped.height,
    };
  }

  throw new Error(
    `صورة غلاف مفقودة للمقال "${slug}". أضف coverImage في ملف .md أو سجّل الصورة في src/lib/media/blog-images.ts`,
  );
}

function loadAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter(
      (name) =>
        name.endsWith(".md") &&
        !name.startsWith("_") &&
        name !== "README.md" &&
        /^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(name),
    );

  const posts: BlogPost[] = [];

  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const fm = data as BlogFrontmatter;

    if (fm.draft === true) {
      continue;
    }

    const image = resolveCover(slug, fm);

    posts.push({
      slug,
      title: fm.title,
      excerpt: fm.excerpt,
      category: fm.category,
      readTime: fm.readTime,
      publishedAt: fm.publishedAt,
      author: getBlogAuthor(fm.author, fm.category),
      featured: fm.featured,
      sidebar: fm.sidebar,
      icon: fm.icon,
      sidebarLabel: fm.sidebarLabel,
      image,
      content: content.trim(),
    });
  }

  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

let cached: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (!cached) {
    cached = loadAllPosts();
  }
  return cached;
}
