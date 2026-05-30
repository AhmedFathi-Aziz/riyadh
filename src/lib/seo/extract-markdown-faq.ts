import type { FaqItem } from "./structured-data";

/** يستخرج أسئلة ### من قسم ## الأسئلة الشائعة في Markdown */
export function extractFaqFromMarkdown(content: string): FaqItem[] {
  const faqMatch = content.match(/## الأسئلة الشائعة[^\n]*[\s\S]*?(?=\n## |$)/);
  if (!faqMatch) return [];

  const pairs: FaqItem[] = [];
  const blocks = faqMatch[0].split(/### /).slice(1);
  for (const block of blocks) {
    const lines = block.trim().split("\n");
    const question = lines[0]?.replace(/\*\*/g, "").trim();
    const answer = lines
      .slice(1)
      .join(" ")
      .replace(/\*\*/g, "")
      .trim();
    if (question && answer) {
      pairs.push({ question, answer });
    }
  }
  return pairs;
}
