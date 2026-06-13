/** Contact page content and local SEO areas. */
export const contactPageMeta = {
  title: "اتصل بنا — كشف تسربات المياه بالرياض مجاناً",
  description:
    "اتصل بـ ManzilCare — معاينة مجانية لكشف تسربات المياه وعزل الأسطح والخزانات في الرياض. هاتف، واتساب، ونموذج تواصل. نرد خلال دقائق في أوقات العمل.",
  path: "/contact",
};

export const contactPageIntro = {
  heading: "اتصل بنا — كشف تسربات المياه بالرياض",
  paragraphs: [
    "هل تحتاج **كشف تسربات المياه بالرياض** أو **عزل أسطح** أو **عزل خزانات**؟ فريقنا جاهز. المعاينة الأولية مجانية في كل أحياء العاصمة.",
    "نرد على الهاتف وواتساب خلال دقائق (8 صباحاً – 10 مساءً). املأ النموذج أو اتصل مباشرة — نحدد موعد زيارة ونسلّم تقريراً مصوراً قبل أي التزام مالي.",
  ],
} as const;

export const serviceAreas = [
  "حي الملقا",
  "حي النرجس",
  "حي الصحافة",
  "حي الياسمين",
  "حي العليا",
  "حي الربيع",
  "حي النخيل",
  "طريق الملك فهد",
] as const;

export const serviceOptions = [
  { value: "leak-detection", label: "كشف تسربات المياه" },
  { value: "roof-insulation", label: "عزل الأسطح" },
  { value: "tank-insulation", label: "عزل الخزانات" },
  { value: "bathroom-insulation", label: "عزل الحمامات والمطابخ" },
  { value: "foam-insulation", label: "عزل الفوم" },
  { value: "other", label: "استفسار عام" },
] as const;
