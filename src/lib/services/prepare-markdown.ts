/** تنظيف Markdown قبل العرض — إزالة تعليقات SEO والفواصل الخام */
export function prepareServiceMarkdown(content: string): string {
  return content
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/^---\s*$/gm, "")
    .trim();
}

export type ServiceTocItem = { id: string; title: string };

const TOC_SKIP = new Set(["مقدمة", "الخاتمة", "الأسئلة الشائعة"]);

/** عناوين H2 للتنقل الجانبي */
const AREAS_SECTION_TITLE = "مناطق الخدمة في الرياض";

/** يفصل المحتوى عند قسم الأحياء لإدراج شبكة الروابط بين المقدمة والباقي */
export function splitContentAtAreasSection(content: string): {
  before: string;
  areasIntro: string;
  after: string;
} {
  const marker = `## ${AREAS_SECTION_TITLE}`;
  const idx = content.indexOf(marker);
  if (idx === -1) {
    return { before: content, areasIntro: "", after: "" };
  }

  const tail = content.slice(idx + marker.length);
  const nextH2 = tail.search(/\n## /);
  const introEnd = nextH2 === -1 ? tail.length : nextH2;
  const areasIntro = tail.slice(0, introEnd).trim();
  const after = (nextH2 === -1 ? "" : tail.slice(nextH2 + 1)).trim();
  const before = content.slice(0, idx).trim();

  return { before, areasIntro, after };
}

/** يزيل قسم «مناطق الخدمة» من جسم المقال — يُعرض شبكة الأحياء في نهاية الصفحة */
export function stripAreasSectionFromBody(content: string): {
  body: string;
  areasIntro: string;
} {
  const { before, areasIntro, after } = splitContentAtAreasSection(content);
  const body = [before, after].filter(Boolean).join("\n\n").trim();
  return { body, areasIntro };
}

export function extractServiceToc(content: string): ServiceTocItem[] {
  const headings = content.match(/^## (.+)$/gm) ?? [];
  return headings
    .map((line, index) => {
      const title = line.replace(/^## /, "").trim();
      if (TOC_SKIP.has(title)) return null;
      return { id: `section-${index}`, title };
    })
    .filter((item): item is ServiceTocItem => item !== null);
}
