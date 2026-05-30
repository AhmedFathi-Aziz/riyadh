/** Contact page content and local SEO areas. */
export const contactPageMeta = {
  title: "اتصل بنا",
  description:
    "تواصل مع عزل الرياض للمحترفين — طلب معاينة مجانية، كشف تسربات، وعزل أسطح وخزانات في الرياض. هاتف، واتساب، وبريد إلكتروني. خدمة 24/7.",
  path: "/contact",
};

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
