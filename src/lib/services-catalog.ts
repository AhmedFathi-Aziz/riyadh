/** Service cards for the /services bento grid — used for UI and structured data. */
import { serviceImages } from "@/lib/media/images";

export const servicesCatalog = {
  featured: {
    id: "leak-detection",
    icon: "search_check",
    title: "كشف تسربات المياه بأحدث الأجهزة",
    description:
      "نستخدم أجهزة الموجات الصوتية والكاميرات الحرارية لتحديد مكان التسريب بدقة ملليمترية دون الحاجة إلى تكسير الجدران أو الأرضيات.",
    image: serviceImages.leakDetection,
  },
  cards: [
    {
      id: "tank-insulation",
      icon: "water_drop",
      title: "عزل الخزانات",
      description:
        "حماية مياه الشرب من التلوث ومنع التسربات الأرضية التي تهدد سلامة الأساسات باستخدام مواد عزل معتمدة عالمياً.",
      image: serviceImages.tank,
    },
    {
      id: "roof-insulation",
      icon: "wb_sunny",
      title: "عزل الأسطح",
      description:
        "حلول عزل مائي وحراري متكاملة لتقليل استهلاك الكهرباء وحماية منزلك من حرارة الصيف الشديدة وأمطار الشتاء.",
      image: serviceImages.roof,
    },
    {
      id: "bathroom-insulation",
      icon: "bathtub",
      title: "عزل الحمامات والمطابخ",
      description:
        "عزل وقائي للمناطق الرطبة يمنع تسرب المياه للأدوار السفلية ويحافظ على سلامة الهيكل الخرساني للمبنى.",
      image: serviceImages.bathroom,
    },
    {
      id: "home-restoration",
      icon: "home_repair_service",
      title: "ترميم المنازل",
      description:
        "خدمات ترميم شاملة لإعادة الرونق لمنزلك، معالجة التصدعات، وتحديث الواجهات والأنظمة الداخلية بأعلى معايير الجودة.",
      image: serviceImages.restoration,
    },
  ],
} as const;

export const trustStats = [
  { value: "+15", label: "عشر عاماً من الخبرة" },
  { value: "100%", label: "ضمان على العمل" },
  { value: "+5000", label: "عميل راضٍ" },
  { value: "24/7", label: "دعم فني وطوارئ" },
] as const;
