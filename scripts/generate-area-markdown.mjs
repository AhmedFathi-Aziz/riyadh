/**
 * يولّد content/areas/{slug}.md لكل حي في riyadh-neighborhoods.json
 * تشغيل: node scripts/generate-area-markdown.mjs
 *         node scripts/generate-area-markdown.mjs --force  (يستبدل الملفات الموجودة)
 *         node scripts/generate-area-markdown.mjs --slug al-yasmin
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "content", "areas");
const registryPath = path.join(root, "data", "riyadh-neighborhoods.json");

const REGION_LABELS = {
  north: "شمال الرياض",
  east: "شرق الرياض",
  west: "غرب الرياض",
  south: "جنوب الرياض",
  central: "وسط الرياض",
};

const ERA_LABELS = {
  new_2010s: "مخططات حديثة منذ 2010",
  growth_2000s: "توسع سكني منذ أوائل الألفية",
  established_1990s: "أحياء مستقرة من تسعينيات وما قبل",
};

const PROFILE_LABELS = {
  villa_luxury: "فلل راقية",
  villa_standard: "فلل متوسطة",
  apartment_towers: "أبراج سكنية",
  mixed_residential: "سكن مختلط",
  compound_gated: "مجمعات مغلقة",
  commercial_mix: "تجاري وسكني",
  heritage_dense: "مباني قديمة",
  industrial_edge: "حافة صناعية",
};

const PROFILE_BUILDINGS = {
  villa_luxury: [
    "فلل مستقلة بمساحات واسعة وأسطح مسطحة أو قليلة الميل",
    "خزانات مياه علوية كبيرة وغرف تمديدات على السطح",
    "مسابح خاصة وملحقات مجلس تحتاج عزل مائي دقيق",
    "وحدات تكييف مركزي أو مخفي بأسقف مستعارة",
    "مجمعات سكنية مغلقة ببوابات ومراقبة",
  ],
  villa_standard: [
    "فلل متوسطة المساحة بحديقة أمامية",
    "عمائر سكنية منخفضة (دورين إلى أربعة)",
    "أسطح خرسانية مع فتحات سطحية ومواسير ظاهرة",
    "خزانات علوية تقليدية تحتاج فحص دوري",
  ],
  apartment_towers: [
    "أبراج سكنية متعددة الطوابق",
    "شقق بشبكات صرف داخلية معقدة",
    "أسطح مشتركة وخزانات جماعية",
    "مواقف underground قد تتأثر بتسربات علوية",
  ],
  mixed_residential: [
    "مزيج فلل وعمائر ومحلات تجارية على نفس المحور",
    "مباني بأعمار مختلفة على نفس الشارع",
    "أسطح متنوعة: بيتومين قديم، فوم جزئي، أو بدون عزل",
  ],
  compound_gated: [
    "مجمعات مغلقة بفلل متشابهة",
    "صيانة مشتركة للأسطح والممرات",
    "خزانات ومحطات ضخ متقاربة",
  ],
  commercial_mix: [
    "أبراج مكاتب وشقق فندقية",
    "واجهات زجاجية وأسطح معدات",
    "محلات وقبوهات تحتاج عزل رطوبة",
  ],
  heritage_dense: [
    "مباني قديمة بشبكات مياه متهالكة",
    "أسقف مستعارة وحمامات صغيرة",
    "جدران سميكة قد تخفي تسربات طويلة",
  ],
  industrial_edge: [
    "ورش ومستودعات بأسطح معدنية",
    "مباني سكنية ملاصقة لمناطق عمل",
    "خزانات أرضية وخطوط رئيسية",
  ],
};

const PROFILE_PROBLEMS = {
  villa_luxury: [
    "تسربات من خزانات علوية تظهر كبقع على أسقف غرف النوم",
    "تمددات حرارية في أسطح الفلل تسبب تشققات عند المناور",
    "تسربات مسابح خاصة نحو الأساسات أو الجدران المشتركة",
    "تكثيف مياه التكييف على الأسطح يتحول إلى رطوبة داخلية",
    "وصلات غير محكمة حول أغطية الصرف بعد أمطار غزيرة",
    "عزل سطح منتهي بعد 10–15 سنة دون صيانة",
  ],
  villa_standard: [
    "تسربات بطيئة من مواسير علوية داخل الجدران",
    "خزانات قديمة بدون إيبوكسي تسرب للأسقف السفلية",
    "ميول أسطح غير كافية وتجمع مياه أمطار",
    "رطوبة في الحمامات العلوية دون أسباب ظاهرة",
    "تشققات في مواسير PVC بعد تمدد صيفي متكرر",
  ],
  apartment_towers: [
    "تسربات بين الطوابق من حمامات علوية",
    "ضغط شبكات صرف مشتركة يسبب ارتجاعاً للمياه",
    "خزانات جماعية على السطح تؤثر على عدة شقق",
    "تسربات من وحدات التكييف المركزي في الممرات",
  ],
  mixed_residential: [
    "اختلاف جودة العزل بين مباني متجاورة على نفس الشارع",
    "تسربات من محلات أرضية تؤثر على شقق علوية",
    "شبكات مياه قديمة بجانب تمديدات حديثة غير متوافقة",
  ],
  compound_gated: [
    "تسربات متكررة في فلل متشابهة — نمط بناء واحد",
    "صيانة مشتركة للأسطح تؤخر اكتشاف مصدر التسرب",
    "محطات ضخ متقاربة — ضوضاء صوتية تُربك التشخيص",
  ],
  commercial_mix: [
    "تسربات في أنظمة إطفاء وخطوط رئيسية",
    "أسطح معدات HVAC بمجاري تصريف مسدودة",
    "رطوبة في قبوهات مواقف السيارات",
  ],
  heritage_dense: [
    "مواسير حديدية أو galvanized مهترئة",
    "تسربات خفية تحت بلاط قديم",
    "أسقف مستعارة تخفي تلفاً لأشهر",
  ],
  industrial_edge: [
    "تسربات في خطوط رئيسية ومحابس كبيرة",
    "أسطح معدنية ببراغي تسرب عند الأمطار",
    "خزانات أرضية بقرب تربة رملية نفّاذة",
  ],
};

const REGION_PROBLEMS = {
  north: [
    "أسطح مسطحة واسعة تتأثر بتمدد حراري شديد صيفاً",
    "خزانات علوية كبيرة في الفلل الحديثة",
    "أمطار موسمية تختبر مصارف الأسطح بعد جفاف طويل",
  ],
  east: [
    "كثافة سكنية أعلى — تسربات بين طوابق متجاورة",
    "تنوع أعمار المباني على نفس المحور",
  ],
  west: [
    "مستودعات وأسطح معدنية بجانب سكن",
    "تربة رملية — تصريف سريع لكن تسربات خزانات أرضية",
  ],
  south: [
    "مباني أقدم — شبكات مياه تجاوزت 20 سنة",
    "تسربات متكررة في عمائر الإسكان الكثيف",
  ],
  central: [
    "أنظمة مياه قديمة في مباني مركزية",
    "تحديثات تشطيب دون عزل وقائي كافٍ",
  ],
};

const PROFILE_SERVICES = {
  villa_luxury: [
    "leak-detection-water-riyadh",
    "leak-detection-no-damage-riyadh",
    "كشف-تسربات-الخزانات-بالرياض",
    "roof-insulation-riyadh",
    "كشف-تسربات-المسابح-بالرياض",
  ],
  villa_standard: [
    "leak-detection-water-riyadh",
    "leak-repair-water-riyadh",
    "كشف-تسربات-الخزانات-بالرياض",
    "roof-insulation-riyadh",
  ],
  apartment_towers: [
    "leak-detection-water-riyadh",
    "leak-detection-no-damage-riyadh",
    "leak-repair-water-riyadh",
    "عزل-حمامات-بالرياض",
  ],
  mixed_residential: [
    "leak-detection-water-riyadh",
    "leak-detection-no-damage-riyadh",
    "leak-repair-water-riyadh",
    "roof-insulation-riyadh",
  ],
  compound_gated: [
    "leak-detection-water-riyadh",
    "كشف-تسربات-الخزانات-بالرياض",
    "tank-insulation-riyadh",
    "roof-insulation-riyadh",
  ],
  commercial_mix: [
    "leak-detection-water-riyadh",
    "leak-repair-water-riyadh",
    "roof-insulation-riyadh",
    "foam-insulation-riyadh",
  ],
  heritage_dense: [
    "leak-detection-no-damage-riyadh",
    "leak-detection-water-riyadh",
    "leak-repair-water-riyadh",
    "عزل-حمامات-بالرياض",
  ],
  industrial_edge: [
    "leak-detection-water-riyadh",
    "كشف-تسربات-الخزانات-بالرياض",
    "roof-insulation-riyadh",
    "foam-insulation-riyadh",
  ],
};

const SERVICE_CATALOG = {
  "leak-detection-water-riyadh": {
    title: "كشف تسربات المياه بالرياض",
    reason: "تحديد مصدر التسرب بدقة قبل أي تكسير",
  },
  "leak-detection-no-damage-riyadh": {
    title: "كشف تسربات بدون تكسير",
    reason: "مناسب للشقق والفلل ذات التشطيبات الحساسة",
  },
  "leak-repair-water-riyadh": {
    title: "إصلاح تسربات المياه",
    reason: "إغلاق التسرب بعد التشخيص مع ضمان",
  },
  "كشف-تسربات-الخزانات-بالرياض": {
    title: "كشف تسربات الخزانات",
    reason: "فحص الخزانات العلوية والأرضية الشائعة في الحي",
  },
  "tank-insulation-riyadh": {
    title: "عزل الخزانات",
    reason: "حماية المياه ومنع تسربات طويلة الأمد",
  },
  "roof-insulation-riyadh": {
    title: "عزل الأسطح",
    reason: "منع مياه الأمطار وتقليل الحرارة على السطح",
  },
  "foam-insulation-riyadh": {
    title: "عزل الفوم",
    reason: "حل متكامل حراري ومائي للأسطح الواسعة",
  },
  "عزل-حمامات-بالرياض": {
    title: "عزل حمامات",
    reason: "منع تسرب الرطوبة للأدوار السفلية",
  },
  "كشف-تسربات-المسابح-بالرياض": {
    title: "كشف تسربات المسابح",
    reason: "للفلل ذات المسابح الخاصة",
  },
};

const LANDMARK_CONTEXT = {
  "واجهة شمال الرياض":
    "يقع الحي ضمن امتداد شمال العاصمة حيث تتمركز فلل واسعة وأسطح مسطحة — ما يزيد حساسية العزل المائي بعد الأمطار الموسمية.",
  "قرب طريق الملك فهد":
    "قربه من محور حركة رئيسي يعني كثافة تجارية وسكنية — تنوع المباني يتطلب تشخيصاً يميّز بين تسرب شبكة وتكثيف مكيفات.",
  "امتداد النرجس":
    "امتداد سكني حديث يجمع فلل جديدة بمواصفات عزل متفاوتة — المعاينة المبكرة بعد السكن توفر تكلفة إصلاح لاحقة.",
  "قرب مطار الملك خالد":
    "القرب من محور شرقي رئيسي يعني أبراجاً وفللاً متجاورة — تسربات بين الطوابق شائعة في العمائر الكثيفة.",
  "قرب وادي حنيفة":
    "قربه من مجرى وادي حنيفة يعني تربة رملية نفّاذة — تسربات الخزانات الأرضية قد تظهر ببطء على الأساسات.",
  "وسط تجاري":
    "وسط حيوي يجمع مكاتب وشققاً فندقية — أنظمة مياه وإطفاء معقدة تحتاج فريقاً يعرف المباني التجارية.",
  "قرب الحرم":
    "منطقة مركزية بمباني عمرها عقود — شبكات مياه قديمة وتحديثات تشطيب دون عزل وقائي كافٍ.",
};

function hashSlug(slug) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

function pick(arr, seed, count, offset = 0) {
  const out = [];
  for (let i = 0; i < count; i++) {
    out.push(arr[(seed + offset + i) % arr.length]);
  }
  return out;
}

function unique(items) {
  return [...new Set(items)];
}

function modIndex(n, len) {
  return ((n % len) + len) % len;
}

function buildSeoDescription(n) {
  const variants = [
    `كشف تسربات المياه في حي ${n.nameAr} بالرياض — ${n.housingNote}. معاينة مجانية، كشف بدون تكسير، تقرير مصور، وضمان حتى 10 سنوات. احجز مع ManzilCare.`,
    `خدمة كشف تسربات المياه حي ${n.nameAr} — ${REGION_LABELS[n.region]}. أجهزة صوتية وحرارية، إصلاح وعزل، وضمان مكتوب. معاينة مجانية من ManzilCare.`,
    `كشف تسربات المياه حي ${n.nameAr} بالرياض: ${n.landmark}. فحص دقيق بدون تكسير، +500 مشروع، وضمان حتى 10 سنوات. اتصل بـ ManzilCare الآن.`,
  ];
  return variants[modIndex(hashSlug(n.slug), variants.length)];
}

function buildSeoTitle(n) {
  const variants = [
    `كشف تسربات المياه حي ${n.nameAr} — معاينة مجانية`,
    `كشف تسربات حي ${n.nameAr} بالرياض — ManzilCare`,
    `كشف تسربات المياه في حي ${n.nameAr} — ${REGION_LABELS[n.region]}`,
  ];
  return variants[modIndex(hashSlug(n.slug) >>> 2, variants.length)];
}

function getRelatedSlugs(n, all) {
  const sameRegion = all.filter((o) => o.region === n.region && o.slug !== n.slug);
  return pick(sameRegion, hashSlug(n.slug), 4, 0).map((r) => r.slug);
}

function buildIntro(n, seed) {
  const keyword = `كشف تسربات المياه حي ${n.nameAr}`;
  const openers = [
    `هل لاحظت رطوبة في السقف أو ارتفاعاً غير مبرر في فاتورة المياه في **حي ${n.nameAr}**؟ في **${REGION_LABELS[n.region]}** — حيث الحرارة العالية والأمطار الموسمية — تتعرض شبكات المياه والأسطح لضغط يومي. **${keyword}** مع **ManzilCare** يبدأ بمعاينة مجانية وتقرير مصور قبل أي تكسير.`,
    `سكان **حي ${n.nameAr}** يبحثون غالباً عن فريق يعرف خصوصية **${REGION_LABELS[n.region]}** وليس حلاً عاماً. ${n.housingNote} — وهذا يغيّر أدوات الفحص وخطة الإصلاح.`,
    `**${keyword}** خدمة نقدّمها يومياً في **حي ${n.nameAr}**. ${n.landmark} يمنح المنطقة طابعاً مميزاً، بينما ${n.housingNote.toLowerCase()}. نبدأ بالتشخيص ثم نربطك بالإصلاح أو العزل المناسب.`,
  ];
  const middles = [
    `نفذنا مشاريع متعددة في **${n.nameAr}** منذ 2018 — من [كشف بدون تكسير](/services/leak-detection-no-damage-riyadh) إلى [عزل أسطح](/services/roof-insulation-riyadh) و[كشف تسربات الخزانات](/services/كشف-تسربات-الخزانات-بالرياض).`,
    `زياراتنا لـ**حي ${n.nameAr}** تشمل توثيقاً بالصور والتسجيل الصوتي/الحراري. التقرير يحدد موقع التسرب — لا «فتح عشوائي» يكلفك تشطيباً بلا نتيجة.`,
    `الحي ضمن مرحلة **${ERA_LABELS[n.era]}**؛ عمر الشبكات والعزل يؤثر على نوع البلاغ. نراجع الخزانات، الأسطح، الحمامات العلوية، وخطوط التكييف.`,
  ];
  const closers = [
    `سواء كنت في فيلا أو شقة أو مبنى تجاري داخل **${n.nameAr}**، الهدف: مبنى جاف، فاتورة منطقية، وضمان مكتوب.`,
    `لا تؤجل الفحص عند بقعة رطوبة — في **${REGION_LABELS[n.region]}** التسربات الخفية قد تستمر أشهراً تحت البلاط.`,
    `[احجز معاينة مجانية](/contact) في **حي ${n.nameAr}** — دون التزام بتنفيذ حتى تطلع على التقرير.`,
  ];
  return [openers[seed % 3], middles[modIndex(seed >>> 2, 3)], closers[modIndex(seed >>> 4, 3)]].join("\n\n");
}

function buildAbout(n, seed) {
  const landmarkCtx =
    LANDMARK_CONTEXT[n.landmark] ??
    `**${n.landmark}** يميّز **حي ${n.nameAr}** عن أحياء أخرى في **${REGION_LABELS[n.region]}** — ويؤثر على أنماط البناء والصيانة.`;

  const paras = [
    `## عن حي ${n.nameAr} — موقع وخصائص المباني\n\n**حي ${n.nameAr}** يقع في **${REGION_LABELS[n.region]}** بالرياض. ${landmarkCtx}`,
    `**نمط السكن السائد:** ${PROFILE_LABELS[n.profile]}. ${n.housingNote}. مرحلة البناء: **${ERA_LABELS[n.era]}** — ما يعني أن حالة شبكات المياه والعزل تختلف من شارع لآخر حتى داخل نفس الحي.`,
    seed % 2 === 0
      ? `كثير من ملاك **${n.nameAr}** يصلون إلينا بعد محاولات إصلاح سطحية: طلاء فوق بقعة رطوبة، أو تغيير خلاط، دون إثبات مصدر التسرب. في **ManzilCare** المنهجية واضحة: تشخيص → إثبات → إصلاح → ضمان.`
      : `**${REGION_LABELS[n.region]}** تتأثر بحرارة صيف تتجاوز 50°م وأمطار موسمية مركزة. في **${n.nameAr}** هذا يضغط على الأسطح والخزانات ووصلات التكييف — [كشف تسربات المياه بالرياض](/services/leak-detection-water-riyadh) المبكر يوفر أسابيع من التخمين.`,
    `**${n.landmark}** يمنح **حي ${n.nameAr}** طابعاً مميزاً في **${REGION_LABELS[n.region]}**. ${n.housingNote} — وهذا يحدد أولويات الفحص: خزانات، أسطح، حمامات علوية، أو شبكات صرف حسب نوع العقار.`,
  ];
  return paras.join("\n\n");
}

function buildClimate(n, seed) {
  const pressures = pick(
    [
      "حرارة صيفية تتجاوز 48°م — تمدد يومي للمواسير",
      "أمطار موسمية غزيرة — اختبار مصارف الأسطح",
      "تكييف مكثف — تصريف المكيفات مصدر رطوبة شائع",
      "جفاف طويل ثم أمطار — تشققات مفاجئة في العزل",
    ],
    seed,
    3,
    0,
  );
  return `### خصوصية مناخ الرياض في حي ${n.nameAr}

**${n.nameAr}** في **${REGION_LABELS[n.region]}** يتأثر بـ:

${pressures.map((p) => `- ${p}`).join("\n")}

${n.housingNote}. ننصح بفحص دوري قبل موسم الأمطار ومراجعة الخزانات كل 18–24 شهراً في **${n.nameAr}**.`;
}

function buildCaseStudy(n, seed) {
  const scenarios = [
    `وصلنا بلاغاً من **${n.nameAr}**: رطوبة في سقف علوي دون صنبور قريب. الكشف الحراري حدد مساراً من الخزان. الإصلاح الموضعي وفر ترميماً كاملاً.`,
    `في **${n.nameAr}**، ارتفع عداد المياه 30% دون تغيّر الاستخدام. غاز التتبع كشف وصلة ضعيفة تحت البلاط — فتح موضعي واحد فقط.`,
    `فيلا في **${n.nameAr}** — تجمع ماء على السطح بعد المطر. السبب: انسداد مصرف وليس تسرب شبكة. تنظيف + فحص عزل وقّى المالك تلفاً لاحقاً.`,
    `شقة في **${n.nameAr}**: رطوبة في حمام علوي. [كشف بدون تكسير](/services/leak-detection-no-damage-riyadh) حدد تسرباً في خط صرف — إصلاح في يوم واحد.`,
  ];
  return `### مثال من ميداننا — ${n.nameAr}

${scenarios[seed % scenarios.length]}`;
}

function buildLocalTips(n, seed) {
  const tips = pick(
    [
      `افحص مصارف السطح في **${n.nameAr}** قبل أول مطرة — خاصة مع ${n.housingNote.toLowerCase()}.`,
      `راقب عداد المياه ليلاً عند إغلاق كل الصنبور — مؤشر سريع في **${n.nameAr}**.`,
      `لا تطلُ عزل سطح جديداً فوق تسرب قائم — ابدأ بـ[كشف تسربات](/services/leak-detection-water-riyadh).`,
      `خزانات **${n.nameAr}** الكبيرة تستحق فحص ضغط سنوي.`,
      `بعد أي ترميم في **${n.nameAr}** — احتفظ بتقرير ManzilCare لنقل الملكية.`,
    ],
    seed,
    4,
    1,
  );
  return `### نصائح لسكان حي ${n.nameAr}

${tips.map((t) => `- ${t}`).join("\n")}

**${n.nameAr}** (${PROFILE_LABELS[n.profile]}) — ${n.landmark}. ننصح بالاحتفاظ بتقرير الكشف بعد أي إصلاح لنقل الملكية أو مطالبات التأمين.`;
}

function buildExtendedServices(n, seed) {
  const slugs = PROFILE_SERVICES[n.profile];
  const blocks = slugs
    .map((slug, i) => {
      const s = SERVICE_CATALOG[slug];
      if (!s) return null;
      const problem = pick(PROFILE_PROBLEMS[n.profile], seed + i, 1, 0)[0];
      const templates = [
        `**[${s.title}](/services/${slug})** — ${s.reason}. في **${n.nameAr}** نبدأ بمعاينة مجانية ونحدد نقاط الفحص حسب ${n.housingNote.toLowerCase()}.`,
        `سكان **${n.nameAr}** يطلبون [${s.title}](/services/${slug}) عند ${problem}. نربط التشخيص بالإصلاح أو العزل المناسب.`,
        `[${s.title}](/services/${slug}) جزء من مسارنا في **${n.nameAr}**: تشخيص → تقرير مصور → تنفيذ → ضمان مكتوب.`,
      ];
      return templates[(seed + i) % 3];
    })
    .filter(Boolean);
  return `## خدمات مرتبطة بـ ${n.nameAr} — تفاصيل

${blocks.join("\n\n")}`;
}

function buildTechnology(n, seed) {
  const tools = pick(
    [
      "**كشف صوتي (Acoustic)** — يلتقط هسهسة الماء تحت البلاط أو داخل الجدران دون فتح.",
      "**مسح حراري (Thermal)** — يظهر مسارات الرطوبة الباردة من خزان أو شبكة تغذية.",
      "**غاز تتبع (Tracer Gas)** — للتسربات الخفية جداً في **" + n.nameAr + "** عندما يفشل الكشف التقليدي.",
      "**فحص ضغط الخزان** — يثبت تسرباً من قاعدة الخزان أو وصلة تمديد.",
      "**كاميرا داخلية** — لفحص جدران الخزان والوصلات غير المرئية.",
    ],
    seed,
    4,
    0,
  );
  return `## أجهزة الكشف التي نستخدمها في حي ${n.nameAr}

في **حي ${n.nameAr}** (${PROFILE_LABELS[n.profile]}) نختار الأداة حسب نوع البلاغ — لا «حل واحد لكل الحالات»:

${tools.map((t) => `- ${t}`).join("\n")}

الهدف: تحديد موقع التسرب بخطأ ±30 سم في أغلب الحالات، ثم فتح موضعي واحد عند الضرورة فقط. [كشف بدون تكسير](/services/leak-detection-no-damage-riyadh) مناسب للمباني المشطبة في **${REGION_LABELS[n.region]}**.`;
}

function buildMaintenance(n, seed) {
  const tasks = pick(
    [
      `فحص مصارف السطح و«الكوات» قبل موسم الأمطار — خاصة في **${n.nameAr}** حيث ${n.housingNote.toLowerCase()}.`,
      `مراجعة الخزان العلوي كل 18–24 شهراً: قاعدة، وصلات، وطلاء إيبوكسي داخلي.`,
      `اختبار عداد المياه ليلاً عند إغلاق كل الصنبور — مؤشر سريع على تسرب خفي.`,
      `تنظيف مجاري تصريف المكيفات على السطح قبل الصيف — يمنع تكدس ماء يُظن أنه تسرب شبكة.`,
      `توثيق أي ترميم بـ[تقرير ManzilCare](/contact) — مفيد لنقل الملكية أو مطالبات التأمين.`,
    ],
    seed,
    4,
    1,
  );
  return `## صيانة وقائية لسكان حي ${n.nameAr}

**${n.nameAr}** في **${REGION_LABELS[n.region]}** يتأثر بحرارة صيف طويلة وأمطار موسمية مركزة. ننصح بـ:

${tasks.map((t) => `- ${t}`).join("\n")}

الصيانة الوقائية أرخص من ترميم سقف أو إزالة عفن بعد أشهر من التسرب الخفي.`;
}

function buildTrust(n, seed) {
  const points = pick(
    [
      `**+500 مشروع** كشف وعزل في الرياض منذ 2018 — منها عشرات في **${n.nameAr}**.`,
      `**تقرير PDF مصور** — موقع التسرب، القراءات، والتوصية قبل أي التزام مالي.`,
      `**ضمان مكتوب** حتى 10 سنوات على الإصلاح والعزل — بنود واضحة وليست شهادة فارغة.`,
      `**فريق ميداني** — مهندسو تشخيص وفنيو سباكة، وليس مكتب وساطة يبيع «كشفاً» ثم يختفي.`,
      `**معاينة مجانية** في **${n.nameAr}** — نحدد نطاق الفحص قبل التسعير.`,
    ],
    seed,
    3,
    2,
  );
  return `## ثقة وخبرة ManzilCare في ${n.nameAr}

${points.map((p) => `- ${p}`).join("\n")}

نلتزم بمسار واحد: **تشخيص → إثبات → إصلاح → ضمان**. لا نبيع عزل فوق تسرب قائم، ولا نفتح بلاطاً دون تقرير يثبت الموقع. [تعرّف علينا](/about) · [فريقنا](/team).`;
}

function buildWhenToCall(n, seed) {
  const signs = pick(
    [
      "بقعة رطوبة تتوسع على السقف أو الجدار دون سبب ظاهر",
      "ارتفاع فاتورة المياه 20% فأكثر دون تغيّر في الاستخدام",
      "صوت هسهسة أو تنقيط عند إغلاق كل الصنبور",
      "رائحة عفن في غرفة مغلقة أو خزانة",
      "تصدعات جديدة في البلاط أو دهانات متقشرة",
      "انخفاض مستوى خزان أو مسبح يومياً",
      "ماء على السطح 48 ساعة بعد المطر",
    ],
    seed,
    5,
    0,
  );
  return `## متى تطلب كشف تسربات في حي ${n.nameAr}؟

لا تنتظر حتى يظهر العفن. في **${n.nameAr}** هذه العلامات تستحق [معاينة مجانية](/contact):

${signs.map((s) => `- ${s}`).join("\n")}

كلما أسرعت في **${`كشف تسربات المياه حي ${n.nameAr}`}**، قلّت تكلفة الإصلاح واحتمال تلف الحديد أو العزل.`;
}

function buildComparison(n, seed) {
  return `## كشف التسربات مقابل التخمين في ${n.nameAr}

كثير من ملاك **${n.nameAr}** يبدأون بـ«فتح البلاط عشوائياً» أو طلاء فوق الرطوبة — في **${REGION_LABELS[n.region]}** هذا يكلف آلاف الريال دون ضمان. **${`كشف تسربات المياه حي ${n.nameAr}`}** مع ManzilCare يعني:

- **تشخيص مُثبت** بتقرير مصور قبل أي تكسير
- **فتح موضعي** عند الضرورة فقط — لا ترميم كامل بلا سبب
- **تمييز** بين تسرب شبكة، تكثيف مكيف، أو تصريف مسدود
- **ضمان مكتوب** على الإصلاح — وليس «جرب وشوف»

[احجز معاينة مجانية](/contact) في **${n.nameAr}** — المعاينة الأولية دون التزام بتنفيذ حتى تطلع على التقرير.`;
}

function buildKeywords(n) {
  const keyword = `كشف تسربات المياه حي ${n.nameAr}`;
  return `## الكلمات المفتاحية — ${n.nameAr}

عملاؤنا في **${REGION_LABELS[n.region]}** يبحثون غالباً عن: **${keyword}**، **كشف تسربات بدون تكسير ${n.nameAr}**، **شركة كشف تسربات ${n.nameAr}**، **فحص خزان ${n.nameAr}**، و**عزل أسطح ${n.nameAr}**. صفحتنا هذه تجمع ما تحتاج معرفته — من أنماط البناء المحلية (${n.housingNote.toLowerCase()}) إلى خطوات الخدمة والضمان. [احجز معاينة](/contact) أو اطّلع على [جميع الأحياء](/areas).`;
}

function buildProblems(n, seed) {
  const base = PROFILE_PROBLEMS[n.profile];
  const regional = REGION_PROBLEMS[n.region];
  const combined = unique([
    ...pick(base, seed, 4, 0),
    ...pick(regional, seed, 2, 1),
    ...pick(base, seed, 2, 6),
  ]).slice(0, 8);

  const intro =
    seed % 2 === 0
      ? `## مشاكل التسرب والعزل الشائعة في حي ${n.nameAr}\n\nفي **حي ${n.nameAr}** (${PROFILE_LABELS[n.profile]}) نسجّل بانتظام:`
      : `## مشاكل التسرب والعزل الشائعة في حي ${n.nameAr}\n\nأبرز بلاغات **${n.nameAr}** في **${REGION_LABELS[n.region]}**:`;

  const bullets = combined
    .map((p, i) => {
      const detail = pick(
        [
          `غالباً نبدأ بفحص غير إتلافي قبل أي تكسير.`,
          `نميّز بين تسرب شبكة وتكثيف مكيف أو تصريف مسدود.`,
          `التقرير يوثّق السبب — لا «تخمين» من المقاول.`,
        ],
        seed + i,
        1,
        0,
      )[0];
      return `**${i + 1}.** ${p} ${detail}`;
    })
    .join("\n\n");

  const extra = [
    `\n\n**تذكير:** ارتفاع فاتورة المياه أو رائحة عفن في غرفة مغلقة — مؤشران لـ**كشف تسربات** فوري في **${n.nameAr}**.`,
    `\n\nننصح بعد موسم الأمطار بفحص مصارف الأسطح في **${n.nameAr}** — خاصة مع ${n.housingNote.toLowerCase()}.`,
    `\n\n[كشف تسربات بدون تكسير](/services/leak-detection-no-damage-riyadh) يناسب **${n.nameAr}** عندما يكون التشطيب حساساً — نحدد الموقع قبل فتح البلاط.`,
  ][seed % 3];

  return `${intro}\n\n${bullets}${extra}\n\n${buildClimate(n, seed)}\n\n${buildCaseStudy(n, seed)}`;
}

function buildBuildings(n, seed) {
  const types = pick(PROFILE_BUILDINGS[n.profile], seed, PROFILE_BUILDINGS[n.profile].length, 1);
  const lines = types.map((t) => `- ${t}`).join("\n");

  return `## أنواع العقارات في حي ${n.nameAr}

${n.housingNote}. في زياراتنا لـ**${n.nameAr}** نتعامل غالباً مع:

${lines}

اختلاف نوع المبنى يحدد أداة الكشف: صوتي للشبكات المخفية، حراري للرطوبة، أو ضغط للخزانات — [تفاصيل الخدمة](/services/leak-detection-water-riyadh).`;
}

function buildProcess(n, seed) {
  const steps = [
    {
      t: "المعاينة المجانية",
      b: `نأخذ وصف المشكلة ونوع المبنى في **حي ${n.nameAr}**. موعد زيارة دون التزام بتنفيذ. نراجع عداد المياه، البقع الظاهرة، وتاريخ آخر ترميم.`,
    },
    {
      t: "الفحص غير الإتلافي",
      b: "كشف صوتي، مسح حراري، فحص ضغط، أو غاز تتبع — حسب الحالة. الهدف: تحديد موقع التسرب بدقة بخطأ ±30 سم في أغلب الحالات.",
    },
    {
      t: "التقرير وخطة العمل",
      b: "صور، قراءات، وتوصية إصلاح مع تقدير تكلفة. تقرير PDF للتأمين أو نقل الملكية — يوضح السبب قبل أي تكسير.",
    },
    {
      t: "الإصلاح والضمان",
      b: `[إصلاح](/services/leak-repair-water-riyadh) أو [عزل](/services/roof-insulation-riyadh) مع اختبار ضغط/تصريف وضمان مكتوب حتى 10 سنوات على بنود محددة.`,
    },
  ];
  const order = pick(steps, seed, 4, 0);
  const body = order
    .map((s, i) => `**${i + 1}. ${s.t}**\n${s.b}`)
    .join("\n\n");

  return `## كيف ننفّذ كشف التسربات في حي ${n.nameAr}

${body}`;
}

function buildWhyChoose(n, seed) {
  const points = pick(
    [
      `**خبرة منذ 2018** — +500 مشروع كشف وعزل في الرياض.`,
      `**أجهزة معايرة** — صوتي، حراري، غاز تتبع، كاميرا خزانات.`,
      `**كشف قبل العزل** — لا نبيع عزل فوق تسرب قائم.`,
      `**تقرير مصور** — قبل أي التزام مالي.`,
      `**فريق ميداني** — مهندسو تشخيص، وليس مكتب وساطة.`,
      `**تغطية ${REGION_LABELS[n.region]}** — جداول يومية تشمل **${n.nameAr}**.`,
    ],
    seed,
    5,
    0,
  );

  return `## لماذا يختار سكان حي ${n.nameAr} ManzilCare؟

${points.map((p) => `- ${p}`).join("\n")}`;
}

function buildBenefits(n, seed) {
  const items = [
    {
      t: "سرعة الاستجابة",
      b: `جدولة **${n.nameAr}** خلال 24–48 ساعة؛ الطوارئ لها أولوية.`,
    },
    {
      t: "دقة التشخيص",
      b: "تحديد موقع التسرب قبل التكسير — فتح موضعي عند الضرورة فقط.",
    },
    {
      t: "ضمان مكتوب",
      b: "بنود واضحة على الإصلاح والعزل — ليس شهادة فارغة.",
    },
    {
      t: "شفافية التسعير",
      b: `المعاينة مجانية في **${n.nameAr}**. السعر حسب نقاط الفحص لا الحي.`,
    },
  ];
  const picked = pick(items, seed, 4, 0);
  return `## مميزات الخدمة في حي ${n.nameAr}

${picked.map((x) => `- **${x.t}:** ${x.b}`).join("\n")}`;
}

function buildLinks(n, relatedRecords, serviceSlugs) {
  const services = serviceSlugs
    .map((slug) => {
      const s = SERVICE_CATALOG[slug];
      return s ? `- [${s.title}](/services/${slug}) — ${s.reason}` : null;
    })
    .filter(Boolean)
    .join("\n");

  const areas = relatedRecords
    .map(
      (r) =>
        `- [كشف تسربات المياه حي ${r.nameAr}](/areas/${r.slug})`,
    )
    .join("\n");

  return `## روابط مفيدة — خدمات وأحياء قريبة

**خدمات في ${n.nameAr}:**

${services}

**أحياء مجاورة في ${REGION_LABELS[n.region]}:**

${areas}

[عرض جميع أحياء الرياض](/areas) · [اتصل بنا](/contact) · [مدونة النصائح](/blog)`;
}

function buildFaq(n, seed) {
  const problems = pick(PROFILE_PROBLEMS[n.profile], seed, 2, 0);
  const faqs = [
    [
      `كم تستغرق معاينة كشف التسرب في حي ${n.nameAr}؟`,
      `45–90 دقيقة حسب مساحة المبنى. تقرير مبدئي في نفس اليوم أو خلال 24 ساعة.`,
    ],
    [
      `هل تقدمون كشف تسربات بدون تكسير في ${n.nameAr}؟`,
      `نعم — أجهزة صوتية وحرارية في **حي ${n.nameAr}** قبل فتح البلاط.`,
    ],
    [
      `ما أشهر سبب تسرب في ${n.nameAr}؟`,
      `${problems[0]}؛ وأحياناً ${problems[1]}. نؤكد ميدانياً.`,
    ],
    [
      `هل تغطون ${n.nameAr} بسرعة؟`,
      `24–48 ساعة عمل في **${REGION_LABELS[n.region]}**؛ الطوارئ أولوية.`,
    ],
    [
      `هل يوجد ضمان بعد الإصلاح؟`,
      `ضمان مكتوب على أعمال **كشف تسربات المياه حي ${n.nameAr}** — حتى 10 سنوات حسب الخدمة.`,
    ],
    [
      `هل أسعار ${n.nameAr} أعلى من باقي الرياض؟`,
      `لا — المعاينة مجانية والسعر حسب نقاط الفحص.`,
    ],
    [
      `هل تفحصون خزانات ${n.nameAr}؟`,
      `نعم — [كشف تسربات الخزانات](/services/كشف-تسربات-الخزانات-بالرياض) بضغط وكاميرا.`,
    ],
    [
      `متى أطلب عزل سطح؟`,
      `عندما يثبت التقرير عزل ناقص — [عزل أسطح](/services/roof-insulation-riyadh) بعد إغلاق التسرب.`,
    ],
  ];
  const ordered = pick(faqs, seed, 8, 0);
  const body = ordered
    .map(([q, a], i) => {
      const extra = pick(
        [
          `في **${REGION_LABELS[n.region]}** نغطي **${n.nameAr}** ضمن جداول يومية منذ 2018.`,
          `**${n.housingNote}** — نأخذ ذلك بعين الاعتبار عند اختيار أداة الكشف.`,
          `[احجز معاينة مجانية](/contact) في **${n.nameAr}** دون التزام بتنفيذ.`,
        ],
        seed + i,
        1,
        0,
      )[0];
      return `### ${q}\n\n${a} ${extra}`;
    })
    .join("\n\n");

  return `## الأسئلة الشائعة — حي ${n.nameAr}

${body}`;
}

function buildClosing(n, seed) {
  const variants = [
    `**ManzilCare** شريكك في **حي ${n.nameAr}**: كشف، إصلاح، عزل، وضمان. [احجز معاينة مجانية](/contact) الآن — المعاينة الأولية دون التزام بتنفيذ.`,
    `لحماية مبناك في **${n.nameAr}** ابدأ بتشخيص دقيق. [اتصل بنا](/contact) أو اطّلع على [خدماتنا](/services). نغطي **${REGION_LABELS[n.region]}** بجداول يومية.`,
    `لا تنتظر عفن أو تصدعات — **كشف تسربات المياه حي ${n.nameAr}** يبدأ بمعاينة مجانية. [تواصل معنا](/contact). تقرير مصور قبل أي تكسير.`,
  ];
  return `## الخلاصة

${variants[seed % variants.length]}

**${`كشف تسربات المياه حي ${n.nameAr}`}** في **${REGION_LABELS[n.region]}** — ManzilCare منذ 2018، +500 مشروع، وضمان مكتوب.`;
}

function generateMarkdown(n, all) {
  const seed = hashSlug(n.slug);
  const keyword = `كشف تسربات المياه حي ${n.nameAr}`;
  const relatedRecords = pick(
    all.filter((o) => o.region === n.region && o.slug !== n.slug),
    seed,
    4,
    0,
  );
  const relatedSlugs = relatedRecords.map((r) => r.slug);
  const serviceSlugs = PROFILE_SERVICES[n.profile];

  const content = [
    buildIntro(n, seed),
    "",
    buildAbout(n, seed),
    "",
    buildProblems(n, seed),
    "",
    buildBuildings(n, seed),
    "",
    buildKeywords(n),
    "",
    buildProcess(n, seed),
    "",
    buildComparison(n, seed),
    "",
    buildWhyChoose(n, seed),
    "",
    buildBenefits(n, seed),
    "",
    buildExtendedServices(n, seed),
    "",
    buildTechnology(n, seed),
    "",
    buildWhenToCall(n, seed),
    "",
    buildTrust(n, seed),
    "",
    buildMaintenance(n, seed),
    "",
    buildLocalTips(n, seed),
    "",
    buildLinks(n, relatedRecords, serviceSlugs),
    "",
    buildFaq(n, seed),
    "",
    buildClosing(n, seed),
  ].join("\n");

  const fm = {
    slug: n.slug,
    keyword,
    seoTitle: buildSeoTitle(n),
    seoDescription: buildSeoDescription(n),
    relatedSlugs,
    serviceSlugs,
  };

  const yaml = [
    "---",
    `slug: ${fm.slug}`,
    `keyword: ${fm.keyword}`,
    `seoTitle: "${fm.seoTitle.replace(/"/g, '\\"')}"`,
    `seoDescription: "${fm.seoDescription.replace(/"/g, '\\"')}"`,
    "relatedSlugs:",
    ...relatedSlugs.map((s) => `  - ${s}`),
    "serviceSlugs:",
    ...serviceSlugs.map((s) => `  - ${s}`),
    "---",
  ].join("\n");

  return `${yaml}\n\n${content}\n`;
}

function countWords(text) {
  return text
    .replace(/[#*_\[\]()!|`]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1).length;
}

const PREMIUM_HANDCRAFTED = new Set(["al-narjis", "al-yasmin"]);

// ─── main ───
const force = process.argv.includes("--force");
const slugEq = process.argv.find((a) => a.startsWith("--slug="));
const slugFlagIdx = process.argv.indexOf("--slug");
const slugArg =
  slugEq?.split("=")[1] ??
  (slugFlagIdx >= 0 ? process.argv[slugFlagIdx + 1] : undefined);

const all = JSON.parse(fs.readFileSync(registryPath, "utf8"));
fs.mkdirSync(outDir, { recursive: true });

const targets = slugArg ? all.filter((n) => n.slug === slugArg) : all;

if (slugArg && targets.length === 0) {
  console.error(`Slug not found: ${slugArg}`);
  process.exit(1);
}

let written = 0;
let skipped = 0;

for (const n of targets) {
  try {
  const outPath = path.join(outDir, `${n.slug}.md`);
  if (!force && fs.existsSync(outPath)) {
    skipped++;
    continue;
  }
  if (PREMIUM_HANDCRAFTED.has(n.slug) && fs.existsSync(outPath)) {
    skipped++;
    continue;
  }
  const md = generateMarkdown(n, all);
  fs.writeFileSync(outPath, md, "utf8");
  const words = countWords(md);
  written++;
  if (words < 1500) {
    console.warn(`⚠ ${n.slug}: ~${words} words (target 1500+)`);
  }
} catch (err) {
  console.error(`✗ ${n.slug}: ${err.message}`);
  process.exitCode = 1;
}
}

console.log(
  `Area markdown: ${written} written, ${skipped} skipped (existing). Output: content/areas/`,
);
if (skipped > 0 && !force) {
  console.log("Use --force to overwrite. al-narjis hand-crafted file preserved.");
}
