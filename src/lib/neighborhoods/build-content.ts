import {
  ERA_LABELS,
  FEATURED_INTROS,
  PROFILE_BUILDINGS,
  PROFILE_PROBLEMS,
  PROFILE_SERVICES,
  REGION_LABELS,
  REGION_PROBLEMS,
  SERVICE_CATALOG,
} from "./content-profiles";
import type { NeighborhoodPage, NeighborhoodRecord } from "./types";

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

function pick<T>(arr: T[], seed: number, count: number, offset = 0): T[] {
  const out: T[] = [];
  for (let i = 0; i < count; i++) {
    out.push(arr[(seed + offset + i) % arr.length]!);
  }
  return out;
}

function unique<T>(items: T[]): T[] {
  return [...new Set(items)];
}

function buildAboutSection(n: NeighborhoodRecord, seed: number): string {
  const regionLabel = REGION_LABELS[n.region];
  const eraLabel = ERA_LABELS[n.era];
  const featured = FEATURED_INTROS[n.slug];

  const openers = [
    `**كشف تسربات المياه حي ${n.nameAr}** خدمة نقدّمها في ${regionLabel} ضمن تغطية **ManzilCare** لجميع أنحاء العاصمة. ${n.landmark} يمنح الحي طابعاً مميزاً، بينما يظهر في ميداننا غالباً أن ${n.housingNote}.`,
    `سكان **حي ${n.nameAr}** في ${regionLabel} يواجهون تحديات مياه مرتبطة بمناخ الرياض: حرارة عالية، أمطار موسمية مركزة، وتمدد خرساني. نبدأ بمعاينة مجانية وخطة واضحة قبل أي تكسير.`,
    `إذا كنت تبحث عن **كشف تسربات المياه حي ${n.nameAr}** فأنت تحتاج فريقاً يعرف خصوصية ${regionLabel} وليس حلاً عاماً. ${n.housingNote} — وهذا يغيّر طريقة الفحص والأدوات المستخدمة.`,
  ];

  const middles = [
    `الحي ضمن مرحلة **${eraLabel}**؛ هذا يؤثر على حالة شبكات المياه ونوع العزل الموجود على الأسطح. نراجع الخزانات العلوية، مناور الأسطح، حمامات الطوابق العليا، وخطوط التكييف المركزي عند وجودها.`,
    `زياراتنا لـ**حي ${n.nameAr}** تشمل توثيقاً بالصور والتسجيل الصوتي/الحراري عند الحاجة، وتقريراً يحدد موقع التسرب بدقة. ننصح أحياناً بدمج **عزل الأسطح** أو **عزل الخزانات** إذا كان السبب هيكلياً لا مؤقتاً.`,
    `نغطي ${n.nameAr} ضمن جداول يومية؛ الطوارئ عند تسرب نشط تُعالج بأولوية. بعد التشخيص نربطك بخدمات الإصلاح والعزل المناسبة دون الالتفاف على السبب الجذري.`,
  ];

  const closers = [
    `سواء كنت في فيلا أو شقة أو مبنى تجاري داخل **حي ${n.nameAr}**، الهدف واحد: مبنى جاف، فاتورة مياه منطقية، وضمان مكتوب على العمل المنفّذ.`,
    `لا ننصح بتأجيل الفحص عند ظهور بقع رطوبة أو ارتفاع فاتورة المياه؛ في ${regionLabel} التسربات الخفية قد تستمر أشهراً تحت البلاط أو الجدران.`,
    `تواصل عبر الهاتف أو واتساب لحجز معاينة في **حي ${n.nameAr}** — دون رسوم زيارة أولية ودون التزام بتنفيذ حتى تطلع على التقرير.`,
  ];

  const parts = [
    featured ?? openers[seed % openers.length]!,
    middles[(seed >> 3) % middles.length]!,
    closers[(seed >> 5) % closers.length]!,
  ];

  return parts.join("\n\n");
}

function buildProblemsSection(n: NeighborhoodRecord, seed: number): string {
  const base = PROFILE_PROBLEMS[n.profile];
  const regional = REGION_PROBLEMS[n.region];
  const combined = unique([
    ...pick(base, seed, 4, 0),
    ...pick(regional, seed, 2, 2),
    ...pick(base, seed, 2, 5),
  ]).slice(0, 6);

  const intro =
    seed % 2 === 0
      ? `في **حي ${n.nameAr}** نسجّل بشكل متكرر الأنماط التالية — قد يختلف السبب من مبنى لآخر لكن التشخيص يبدأ من هذه النقاط:`
      : `أبرز بلاغات التسرب في **حي ${n.nameAr}** (${REGION_LABELS[n.region]}) تتمحور حول:`;

  const bullets = combined.map((p) => `- ${p}`).join("\n");
  const extra =
    seed % 3 === 0
      ? `\n\nتذكير: ارتفاع فاتورة المياه دون استخدام واضح، أو رائحة رطوبة في غرفة مغلقة، مؤشران يستحقان **كشف تسربات** فورياً في ${n.nameAr}.`
      : `\n\nننصح بعد كل موسم أمطار بفحص سريع للأسطح والمناور في ${n.nameAr} — خاصة إذا لاحظت تشققات جديدة حول مواسير التكييف.`;

  return `${intro}\n\n${bullets}${extra}`;
}

function buildBuildingsSection(n: NeighborhoodRecord, seed: number): string {
  const types = PROFILE_BUILDINGS[n.profile];
  const ordered = pick(types, seed, types.length, 1);
  const lines = ordered.map((t) => `- ${t}`).join("\n");

  return `## أنواع المباني في حي ${n.nameAr}

${n.housingNote}. في زياراتنا لمباني **حي ${n.nameAr}** نتعامل غالباً مع:

${lines}

اختلاف نوع المبنى يحدد أداة الكشف: الموجات الصوتية للشبكات المخفية، الكاميرا الحرارية للرطوبة تحت البلاط، أو فحص الضغط للخزانات — دون تخمين.`;
}

function buildServicesSection(n: NeighborhoodRecord, seed: number): string {
  const slugs = PROFILE_SERVICES[n.profile];
  const lines = slugs
    .map((slug) => {
      const s = SERVICE_CATALOG[slug]!;
      return `- [**${s.title}**](/services/${slug}) — ${s.reason} في سياق **حي ${n.nameAr}**.`;
    })
    .join("\n");

  const tips = [
    `للملاك في ${n.nameAr}: ابدأ بـ**كشف تسربات المياه** قبل شراء عزل جديد؛ طبقة عزل فوق تسرب قائم تضيع الاستثمار.`,
    `في ${REGION_LABELS[n.region]}، دمج **كشف بدون تكسير** مع **إصلاح موضعي** يقلل تكلفة الترميم الكامل للحمام أو المطبخ.`,
    `خزانات علوية في ${n.nameAr} تستحق فحصاً دورياً كل 18–24 شهراً حسب عمر الخزان ونوع الطلاء الداخلي.`,
  ];

  const profileLabel: Record<string, string> = {
    villa_luxury: "فلل راقية",
    villa_standard: "فلل متوسطة",
    apartment_towers: "أبراج سكنية",
    mixed_residential: "سكن مختلط",
    compound_gated: "مجمعات مغلقة",
    commercial_mix: "تجاري وسكني",
    heritage_dense: "مباني قديمة",
    industrial_edge: "حافة صناعية",
  };

  return `## الخدمات المناسبة لحي ${n.nameAr}

بناءً على نمط السكن (${profileLabel[n.profile] ?? n.profile}) والموقع (${REGION_LABELS[n.region]})، نوصي غالباً بـ:

${lines}

${tips[seed % tips.length]}`;
}

function buildFaqSection(n: NeighborhoodRecord, seed: number): string {
  const faqs: [string, string][] = [
    [
      `كم تستغرق معاينة كشف التسرب في حي ${n.nameAr}؟`,
      `المعاينة الأولية في **حي ${n.nameAr}** تستغرق عادة 45–90 دقيقة حسب مساحة المبنى وعدد الشكاوى (رطوبة، فاتورة، خزان). نقدّم تقريراً مبدئياً في نفس اليوم أو خلال 24 ساعة.`,
    ],
    [
      `هل تقدمون كشف تسربات بدون تكسير في ${n.nameAr}؟`,
      `نعم. في **حي ${n.nameAr}** نستخدم أجهزة صوتية وحرارية وغاز تتبع عند الحاجة لتحديد الموقع قبل فتح أي بلاط — مناسب للفلل والشقق المشطبة.`,
    ],
    [
      `ما أشهر أسباب التسرب في حي ${n.nameAr}؟`,
      `الأكثر شيوعاً هنا: ${pick(PROFILE_PROBLEMS[n.profile], seed, 2, 0).join("؛ ")}. نؤكد السبب ميدانياً ولا نكتفي بالتخمين.`,
    ],
    [
      `هل تغطون حي ${n.nameAr} في نفس يوم الطلب؟`,
      `نسعى لجدولة **حي ${n.nameAr}** خلال 24–48 ساعة عمل؛ الحالات الطارئة (تسرب نشط) لها أولوية أعلى في ${REGION_LABELS[n.region]}.`,
    ],
    [
      `هل يوجد ضمان بعد الإصلاح في ${n.nameAr}؟`,
      `نعم — نقدّم ضماناً مكتوباً على أعمال الإصلاح والعزل المنفذة بعد **كشف تسربات المياه حي ${n.nameAr}**، مع توصيات صيانة موسمية.`,
    ],
    [
      `هل تختلف أسعار الكشف بين ${n.nameAr} وباقي الرياض؟`,
      `التسعير يعتمد على نوع المبنى وعدد نقاط الفحص وليس على الحي فقط. المعاينة الأولية في **حي ${n.nameAr}** مجانية لتحديد نطاق العمل.`,
    ],
  ];

  const ordered = pick(faqs, seed, 5, 0);
  return `## الأسئلة الشائعة — حي ${n.nameAr}

${ordered.map(([q, a]) => `### ${q}\n\n${a}`).join("\n\n")}`;
}

function buildClosing(n: NeighborhoodRecord, seed: number): string {
  const variants = [
    `**ManzilCare** شريكك في **حي ${n.nameAr}** لمسار متكامل: كشف، إصلاح، عزل، وضمان. لا تنتظر ظهور عفن أو تصدعات — اتصل الآن لحجز معاينة مجانية.`,
    `لحماية مبناك في **حي ${n.nameAr}** ابدأ بتشخيص دقيق. فريقنا جاهز في ${REGION_LABELS[n.region]} بخبرة تمتد لأكثر من 15 عاماً في كشف التسربات والعزل.`,
    `سواء كان تسربك من خزان أو سطح أو حمام علوي في ${n.nameAr}، نحدد السبب ونعالجه. تواصل معنا عبر الهاتف أو واتساب من صفحة [اتصل بنا](/contact).`,
  ];
  return variants[seed % variants.length]!;
}

export function buildNeighborhoodContent(n: NeighborhoodRecord): string {
  const seed = hashSlug(n.slug);
  return [
    buildAboutSection(n, seed),
    "",
    `## مشاكل التسرب الشائعة في حي ${n.nameAr}`,
    "",
    buildProblemsSection(n, seed),
    "",
    buildBuildingsSection(n, seed),
    "",
    buildServicesSection(n, seed),
    "",
    buildFaqSection(n, seed),
    "",
    buildClosing(n, seed),
  ].join("\n");
}

export function toNeighborhoodPage(
  n: NeighborhoodRecord,
  all: NeighborhoodRecord[],
): NeighborhoodPage {
  const seed = hashSlug(n.slug);
  const sameRegion = all.filter(
    (o) => o.region === n.region && o.slug !== n.slug,
  );
  const relatedSlugs = pick(sameRegion, seed, 3, 0).map((r) => r.slug);

  const keyword = `كشف تسربات المياه حي ${n.nameAr}`;
  const title = keyword;
  const description = `كشف تسربات المياه في حي ${n.nameAr} بالرياض — معاينة مجانية، أجهزة دقيقة بدون تكسير، وإصلاح وعزل. ${n.housingNote}. اتصل الآن.`;

  return {
    ...n,
    keyword,
    title,
    description,
    content: buildNeighborhoodContent(n),
    relatedSlugs,
    serviceSlugs: PROFILE_SERVICES[n.profile],
  };
}
