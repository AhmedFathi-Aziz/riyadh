export type BlogAuthor = {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  /** نبذة قصيرة تظهر في سكشن المؤلف */
  bio: string;
  /** مجالات يكتب عنها — E-E-A-T */
  expertise: readonly string[];
  icon: string;
};

export const blogAuthors: Record<string, BlogAuthor> = {
  "ahmed-fathy": {
    id: "ahmed-fathy",
    name: "أ. أحمد فتحي",
    role: "مدير التقنية والذكاء الاصطناعي",
    experienceYears: 8,
    bio: "مدير التقنية والذكاء الاصطناعي في ManzilCare. يكتب عن التحول الرقمي في قطاع كشف التسربات والعزل — تقارير ذكية، أنظمة متابعة، وكيف تدعم التقنية التشخيص الميداني دون غياب المهندس.",
    expertise: [
      "التحول الرقمي",
      "تقارير المشاريع",
      "دعم التشخيص بالبيانات",
    ],
    icon: "smart_toy",
  },
  "mohammed-ahmed": {
    id: "mohammed-ahmed",
    name: "م. محمد أحمد",
    role: "مهندس كشف تسربات المياه",
    experienceYears: 10,
    bio: "مهندس ميداني في ManzilCare منذ 2018. يكتب عن كشف التسربات الصوتي والحراري وغاز التتبع — بناءً على مشاريع فعلية في فلل وعمائر الرياض.",
    expertise: ["كشف التسربات", "تسربات الخزانات", "كشف دون تكسير"],
    icon: "engineering",
  },
  "khalid-otaibi": {
    id: "khalid-otaibi",
    name: "م. خالد العتيبي",
    role: "مشرف مواقع وعزل مائي",
    experienceYears: 8,
    bio: "مشرف تنفيذ في ManzilCare. يراجع مقالات العزل والأسطح ويشرح مواصفات التسليم واختبار الماء كما تُطبَّق على المواقع.",
    expertise: ["عزل الأسطح", "عزل الحمامات", "ضمان الأعمال"],
    icon: "supervisor_account",
  },
  "abdulrahman-ghamdi": {
    id: "abdulrahman-ghamdi",
    name: "م. عبدالرحمن الغامدي",
    role: "فني عزل معتمد",
    experienceYears: 9,
    bio: "متخصص في تطبيق بيتومين وفوم PU وعزل أسمنتي. يشرح في المدونة الفروق بين المواد واختيار النظام المناسب لمناخ الرياض.",
    expertise: ["عزل مائي", "فوم بولي يوريثان", "مقارنة المواد"],
    icon: "construction",
  },
  "sultan-harbi": {
    id: "sultan-harbi",
    name: "م. سلطان الحربي",
    role: "مهندس تشخيص وكاميرات حرارية",
    experienceYears: 6,
    bio: "يركز على التسربات الخفية والرطوبة خلف الجدران. يكتب عن الكشف الحراري وتكييف الرطوبة في المباني السكنية.",
    expertise: ["كاميرات حرارية", "رطوبة الجدران", "تسربات التكييف"],
    icon: "thermostat",
  },
  "noura-shamri": {
    id: "noura-shamri",
    name: "م. نورة الشمري",
    role: "منسقة مشاريع وخدمة عملاء",
    experienceYears: 5,
    bio: "تتابع تجربة العملاء بعد التسليم. تشرح في المدونة كيف تقرأ عروض الأسعار وشروط الضمان قبل التوقيع.",
    expertise: ["خدمة العملاء", "شروط الضمان", "تقارير PDF"],
    icon: "support_agent",
  },
};

export const DEFAULT_BLOG_AUTHOR_ID = "mohammed-ahmed";

/** تصنيف → مؤلف افتراضي عند غياب حقل author في frontmatter */
export const blogCategoryDefaultAuthor: Record<string, string> = {
  "كشف التسربات": "mohammed-ahmed",
  "تسربات المياه": "mohammed-ahmed",
  "عزل الحمامات": "khalid-otaibi",
  "دليل العزل": "khalid-otaibi",
  "عزل حراري": "abdulrahman-ghamdi",
  "عزل الفوم": "abdulrahman-ghamdi",
  "تقنيات حديثة": "ahmed-fathy",
  "صيانة دورية": "khalid-otaibi",
  "نصائح للعملاء": "ahmed-fathy",
};

export function getBlogAuthor(id: string | undefined, category?: string): BlogAuthor {
  const resolvedId =
    (id && blogAuthors[id] ? id : undefined) ??
    (category && blogCategoryDefaultAuthor[category]) ??
    DEFAULT_BLOG_AUTHOR_ID;

  const author = blogAuthors[resolvedId];
  if (!author) {
    return blogAuthors[DEFAULT_BLOG_AUTHOR_ID]!;
  }
  return author;
}

export function blogAuthorTeamUrl(authorId: string): string {
  return `/team#${authorId}`;
}
