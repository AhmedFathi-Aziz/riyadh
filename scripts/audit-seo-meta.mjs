import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function formatPageTitle(title, suffix = "ManzilCare") {
  return `${title} | ${suffix}`;
}

function buildSeoDescription(text) {
  const trimmed = text.replace(/\s+/g, " ").trim();
  if (trimmed.length <= 165) return trimmed;
  const cut = trimmed.slice(0, 158);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 145 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}

const metas = {
  home: {
    title: "كشف تسربات المياه بالرياض — معاينة مجانية",
    desc: "كشف تسربات المياه بالرياض بدون تكسير — أجهزة صوتية وحرارية، معاينة مجانية في كل الأحياء، تقرير مصور، وضمان حتى 10 سنوات. اتصل بـ ManzilCare اليوم.",
  },
  services: {
    title: "كشف تسربات وعزل أسطح بالرياض — خدمات متكاملة",
    desc: "خدمات كشف تسربات المياه وعزل الأسطح والخزانات بالرياض — فحص بدون تكسير، معاينة مجانية، تقرير مصور، وضمان حتى 10 سنوات. احجز مع ManzilCare الآن.",
  },
  areas: {
    title: "كشف تسربات المياه في أحياء الرياض — دليل شامل",
    desc: "كشف تسربات المياه في أحياء الرياض — دليل لكل حي: مشاكل التسرب، أنواع المباني، والخدمات المناسبة. معاينة مجانية وتغطية 140+ حي. اتصل بـ ManzilCare.",
  },
  insulation: {
    title: "عزل أسطح بالرياض — مائي وحراري وضمان 10 سنوات",
    desc: "عزل أسطح بالرياض مائي وحراري — فوم بولي يوريثان، بيتومين، وإيبوكسي. معاينة مجانية، تقرير مصور، وضمان مكتوب حتى 10 سنوات. احجز مع ManzilCare الآن.",
  },
  about: {
    title: "من نحن — خبراء كشف تسربات وعزل بالرياض",
    desc: "تعرف على ManzilCare: شركة عزل وكشف تسربات منذ 2018 في الرياض. +500 مشروع، فريق هندسي معتمد، أجهزة معايرة، وضمان مكتوب حتى 10 سنوات على الأعمال.",
  },
  team: {
    title: "فريق ManzilCare — مهندسو كشف التسربات بالرياض",
    desc: "تعرف على مهندسي وفنيي ManzilCare في الرياض: متخصصون في كشف تسربات المياه والعزل المائي — خبرة ميدانية حقيقية منذ 2018، +500 مشروع، وضمان مكتوب.",
  },
  contact: {
    title: "اتصل بنا — كشف تسربات المياه بالرياض مجاناً",
    desc: "اتصل بـ ManzilCare — معاينة مجانية لكشف تسربات المياه وعزل الأسطح والخزانات في الرياض. هاتف، واتساب، ونموذج تواصل. نرد خلال دقائق في أوقات العمل.",
  },
  blog: {
    title: "مدونة عزل وكشف تسربات المياه بالرياض — نصائح خبراء",
    desc: "نصائح عزل الأسطح وكشف تسربات المياه في الرياض — فوم بولي يوريثان، بيتومين، وصيانة دورية. مقالات من مهندسي ManzilCare بخبرة ميدانية منذ 2018.",
  },
};

const metaRaw = fs.readFileSync(
  path.join(root, "src/lib/services/service-pages-meta.ts"),
  "utf8",
);
for (const b of metaRaw.split(/\{\s*\n\s*slug:/).slice(1)) {
  const slug = b.match(/slug:\s*"([^"]+)"/)?.[1];
  const title = b.match(/title:\s*"([^"]+)"/)?.[1];
  const desc = b.match(/description:\s*\n\s*"([^"]+)"/)?.[1];
  if (slug) metas[`svc:${slug}`] = { title, desc };
}

const blogDir = path.join(root, "content/blog");
for (const f of fs.readdirSync(blogDir)) {
  if (!f.endsWith(".md") || f.startsWith("_")) continue;
  const raw = fs.readFileSync(path.join(blogDir, f), "utf8");
  const title = raw.match(/^title:\s*(.+)$/m)?.[1];
  const excerptBlock = raw.match(/^excerpt:\s*>-\s*\n((?:\s+.+\n?)+)/m)?.[1];
  const excerpt =
    excerptBlock?.replace(/\s+/g, " ").trim() ||
    raw.match(/^excerpt:\s*"([^"]+)"/)?.[1];
  if (title) {
    metas[`blog:${f.replace(".md", "")}`] = {
      title,
      desc: buildSeoDescription(excerpt ?? ""),
    };
  }
}

console.log("PAGE | FULL_TITLE | DESC | FLAGS");
for (const [k, v] of Object.entries(metas)) {
  const full = formatPageTitle(v.title);
  const desc = buildSeoDescription(v.desc ?? "");
  const flags = [];
  if (full.length < 55 || full.length > 70) flags.push(`title:${full.length}`);
  if (desc.length < 145 || desc.length > 165) flags.push(`desc:${desc.length}`);
  console.log(`${k} | ${full.length} | ${desc.length} | ${flags.join(", ") || "ok"}`);
}
