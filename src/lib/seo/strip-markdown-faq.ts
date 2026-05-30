/** يزيل قسم الأسئلة الشائعة من Markdown لعرضه في مكوّن FAQ الموحّد */
export function stripFaqSection(content: string): string {
  return content
    .replace(/## الأسئلة الشائعة[^\n]*[\s\S]*?(?=\n## |\n*$)/, "")
    .trim();
}
