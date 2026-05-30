import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  getServiceMetaBySlug,
  servicePagesMeta,
  type ServicePageMeta,
} from "./service-pages-meta";

const CONTENT_DIR = path.join(process.cwd(), "content", "services");

export type ServicePage = ServicePageMeta & {
  content: string;
  wordCount: number;
};

function countArabicWords(text: string): number {
  return text
    .replace(/[#*_\[\]()!]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1).length;
}

function loadPage(meta: ServicePageMeta): ServicePage {
  const filePath = path.join(CONTENT_DIR, `${meta.slug}.md`);
  if (!fs.existsSync(filePath)) {
    throw new Error(
      `محتوى الخدمة مفقود: content/services/${meta.slug}.md`,
    );
  }
  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);
  const trimmed = content.trim();
  const wordCount = countArabicWords(trimmed);
  if (wordCount < 3000) {
    console.warn(
      `تحذير: ${meta.slug} يحتوي ~${wordCount} كلمة (المطلوب 3000+).`,
    );
  }
  return { ...meta, content: trimmed, wordCount };
}

let cached: ServicePage[] | null = null;

export function getAllServicePages(): ServicePage[] {
  if (!cached) {
    cached = servicePagesMeta.map(loadPage);
  }
  return cached;
}

export function getServicePageBySlug(slug: string): ServicePage | undefined {
  return getAllServicePages().find((p) => p.slug === slug);
}
