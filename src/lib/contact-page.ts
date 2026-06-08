/** Contact page content and local SEO areas. */
export const contactPageMeta = {
  title: "اتصل بنا — كشف تسربات بالرياض",
  description:
    "اتصل بـ ManzilCare — معاينة مجانية لكشف تسربات المياه وعزل الأسطح والخزانات في الرياض. هاتف، واتساب، ونموذج تواصل. نرد خلال دقائق.",
  path: "/contact",
};

export const contactPageIntro = {
  heading: "تواصل مع فريق ManzilCare في الرياض",
  paragraphs: [
    "سواء كنت تبحث عن **كشف تسربات المياه بالرياض**، **عزل أسطح**، أو **عزل خزانات** — فريقنا جاهز لاستقبال طلبك. المعاينة الأولية مجانية في كل أحياء العاصمة: شمال (النرجس، الياسمين، الملقا)، وسط (العليا، قرطبة)، شرق، غرب، وجنوب.",
    "نرد على الهاتف وواتساب خلال دقائق في أوقات العمل (8 صباحاً – 10 مساءً يومياً). املأ النموذج أدناه أو اتصل مباشرة — نُحدّد موعد زيارة ونُسلّم تقريراً مصوراً قبل أي التزام مالي.",
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
