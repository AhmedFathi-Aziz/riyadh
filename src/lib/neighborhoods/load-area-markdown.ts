import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { NeighborhoodRecord } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "areas");

export type AreaMarkdownFrontmatter = {
  slug: string;
  keyword: string;
  seoTitle: string;
  seoDescription: string;
  relatedSlugs?: string[];
  serviceSlugs?: string[];
};

export type AreaMarkdownFile = AreaMarkdownFrontmatter & {
  content: string;
};

export function getAreaMarkdownPath(slug: string): string {
  return path.join(CONTENT_DIR, `${slug}.md`);
}

export function areaMarkdownExists(slug: string): boolean {
  return fs.existsSync(getAreaMarkdownPath(slug));
}

export function loadAreaMarkdown(slug: string): AreaMarkdownFile | null {
  const filePath = getAreaMarkdownPath(slug);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as Partial<AreaMarkdownFrontmatter>;

  if (!fm.keyword || !fm.seoDescription) {
    throw new Error(
      `محتوى الحي "${slug}" ناقص: keyword و seoDescription مطلوبان في frontmatter.`,
    );
  }

  return {
    slug: fm.slug ?? slug,
    keyword: fm.keyword,
    seoTitle: fm.seoTitle ?? fm.keyword,
    seoDescription: fm.seoDescription,
    relatedSlugs: fm.relatedSlugs,
    serviceSlugs: fm.serviceSlugs,
    content: content.trim(),
  };
}

export function listAreaMarkdownSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter(
      (name) =>
        name.endsWith(".md") &&
        !name.startsWith("_") &&
        name !== "README.md",
    )
    .map((name) => name.replace(/\.md$/, ""));
}

export function mergeRecordWithMarkdown(
  record: NeighborhoodRecord,
  md: AreaMarkdownFile,
): {
  keyword: string;
  title: string;
  description: string;
  content: string;
  relatedSlugs?: string[];
  serviceSlugs?: string[];
} {
  return {
    keyword: md.keyword,
    title: md.seoTitle,
    description: md.seoDescription,
    content: md.content,
    relatedSlugs: md.relatedSlugs,
    serviceSlugs: md.serviceSlugs,
  };
}
