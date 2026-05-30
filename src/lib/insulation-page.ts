/** Content for the professional insulation landing page (/insulation). */
import { insulationImages } from "@/lib/media/images";

export const insulationPage = {
  meta: {
    title: "خدمات العزل الاحترافية",
    description:
      "خدمات عزل مائي وحراري وفوم بولي يوريثان للأسطح والخزانات في الرياض. فحص مجاني، منهجية احترافية، وضمان يصل إلى 15 عاماً.",
    path: "/insulation",
  },
  hero: {
    title: "عزل أسطح وخزانات بالرياض",
    subtitle:
      "نقدم أحدث تقنيات العزل المائي والحراري والفوم لضمان كفاءة الطاقة وحماية المباني من تسربات المياه وحرارة الصيف المرتفعة.",
    image: insulationImages.hero,
  },
  types: [
    {
      id: "water-insulation",
      icon: "water_drop",
      title: "العزل المائي",
      description:
        "حماية قصوى للخزانات، الأسطح، والحمامات ضد تسربات المياه التي قد تهدد سلامة الهيكل الإنشائي. نستخدم أغشية البيتومين والبولي يوريثان عالية الجودة.",
      image: insulationImages.water,
      layout: "featured" as const,
    },
    {
      id: "thermal-insulation",
      icon: "thermostat",
      title: "العزل الحراري",
      description:
        "تقليل انتقال الحرارة بنسبة تصل إلى 40%، مما يوفر بشكل كبير في فواتير الكهرباء ويحسن راحة العائلة داخل المنزل.",
      image: insulationImages.thermal,
      layout: "card" as const,
    },
    {
      id: "foam-insulation",
      icon: "texture",
      title: "عزل الفوم (بولي يوريثان)",
      description:
        "الحل الأمثل الذي يجمع بين العزل المائي والحراري في طبقة واحدة سلسة. خفيف الوزن، سريع التنفيذ، ومناسب لكافة أنواع الأسطح.",
      layout: "highlight" as const,
    },
  ],
  riyadhBenefits: {
    title: "لماذا عزل الأسطح في الرياض ضرورة وليس رفاهية؟",
    items: [
      {
        title: "توفير هائل للكهرباء",
        description: "يقلل الضغط على المكيفات ويخفض الاستهلاك الشهري.",
      },
      {
        title: "إطالة عمر المبنى",
        description: "يحمي الخرسانة من التآكل الناتج عن الرطوبة والأملاح.",
      },
    ],
  },
  processSteps: [
    {
      step: "01",
      icon: "search_check",
      title: "الفحص والمعاينة",
      description:
        "يقوم فريقنا بفحص السطح وتحديد نقاط الضعف والمواد الأنسب للعزل.",
    },
    {
      step: "02",
      icon: "cleaning_services",
      title: "تجهيز السطح",
      description:
        "تنظيف شامل ومعالجة التشققات لضمان التصاق مثالي لمواد العزل.",
    },
    {
      step: "03",
      icon: "layers",
      title: "التنفيذ والرش",
      description:
        "تطبيق العزل بأحدث الأجهزة مع مراعاة السماكة المطلوبة والمعايير الفنية.",
    },
    {
      step: "04",
      icon: "verified",
      title: "الاختبار والضمان",
      description:
        "اختبار الغمر بالماء لضمان الجودة، وتسليم شهادة ضمان مصدقة.",
    },
  ],
  portfolio: [
    {
      tag: "عزل فوم بولي يوريثان",
      title: "فيلا سكنية - حي الملقا",
      image: insulationImages.portfolioFoam,
    },
    {
      tag: "عزل مائي وحراري",
      title: "مجمع تجاري - طريق الملك فهد",
      image: insulationImages.portfolioCommercial,
    },
    {
      tag: "عزل خزانات مياه",
      title: "مجمع فلل - حي الصحافة",
      image: insulationImages.portfolioTank,
    },
  ],
} as const;
