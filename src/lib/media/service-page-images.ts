/** أبعاد صور صفحات الخدمات المحسّنة (WebP) — تمنع CLS مع next/image */
export const servicePageImages = {
  "roof-insulation-riyadh": {
    hero: {
      src: "/images/roof-insulation-riyadh-hero.webp",
      alt: "ManzilCare — عزل أسطح بالرياض: عزل مائي وحراري احترافي للفلل والعمائر",
      width: 1920,
      height: 1080,
    },
    field: {
      src: "/images/roof-insulation-riyadh-field.webp",
      alt: "فريق ManzilCare يطبق عزل أسطح مائي وحراري على سطح مبنى سكني في الرياض",
      width: 1024,
      height: 1536,
    },
  },
  "leak-detection-water-riyadh": {
    hero: {
      src: "/images/leak-detection-water-riyadh-hero.webp",
      alt: "فريق ManzilCare يكشف تسرب مياه في فيلا بالرياض بأجهزة كشف صوتية وحرارية دون تكسير عشوائي",
      width: 1024,
      height: 682,
    },
    field: {
      src: "/images/leak-detection-water-riyadh-field.webp",
      alt: "فحص شبكة مياه ومواسير داخل مبنى سكني في الرياض قبل الإصلاح الموضعي",
      width: 1280,
      height: 853,
    },
  },
  "foam-insulation-riyadh": {
    hero: {
      src: "/images/foam-insulation-riyadh-hero.webp",
      alt: "ManzilCare — عزل فوم بالرياض: عزل حراري ومائي للفلل والعمائر والمستودعات",
      width: 1920,
      height: 1080,
    },
    field: {
      src: "/images/foam-insulation-riyadh-field.webp",
      alt: "فريق ManzilCare يرش عزل فوم بولي يوريثان على سطح مستودع تجاري في الرياض",
      width: 1280,
      height: 853,
    },
  },
  "عزل-مائي-بالرياض": {
    hero: {
      src: "/images/waterproofing-riyadh-hero.webp",
      alt: "ManzilCare — عزل مائي بالرياض: حماية الأسطح والخزانات والحمامات",
      width: 1920,
      height: 1080,
    },
  },
  "عزل-حراري-بالرياض": {
    hero: {
      src: "/images/thermal-insulation-riyadh-hero.webp",
      alt: "ManzilCare — عزل حراري بالرياض: تقليل حرارة الأسطح وفواتير التكييف",
      width: 1920,
      height: 1080,
    },
  },
  "عزل-خزانات-بالرياض": {
    hero: {
      src: "/images/tanks-insulation-riyadh-hero.webp",
      alt: "ManzilCare — عزل خزانات بالرياض: حماية المياه ومنع التسربات",
      width: 1920,
      height: 1080,
    },
  },
  "كشف-تسربات-المسابح-بالرياض": {
    hero: {
      src: "/images/pool-leak-detection-riyadh-hero.webp",
      alt: "شعار ManzilCare على خلفية بيضاء — كشف تسربات المسابح بالرياض",
      width: 1920,
      height: 1080,
    },
    field: {
      src: "/images/pool-leak-detection-riyadh-field.webp",
      alt: "فريق ManzilCare يكشف تسرب مسبح في فيلا بالرياض بصبغة تتبعية واختبار مستوى الماء",
      width: 1200,
      height: 675,
    },
  },
  "كشف-تسربات-الخزانات-بالرياض": {
    hero: {
      src: "/images/tank-leak-detection-riyadh-hero.webp",
      alt: "شعار ManzilCare على خلفية بيضاء — كشف تسربات الخزانات بالرياض",
      width: 1920,
      height: 1080,
    },
    field: {
      src: "/images/tank-leak-detection-riyadh-field.webp",
      alt: "فريق ManzilCare يفحص خزان مياه علوي في فيلا بالرياض بأجهزة قياس رطوبة واختبار ضغط",
      width: 512,
      height: 512,
    },
  },
  "عزل-حمامات-بالرياض": {
    hero: {
      src: "/images/bathroom-insulation-riyadh-hero.webp",
      alt: "شعار ManzilCare على خلفية بيضاء — عزل حمامات بالرياض",
      width: 1920,
      height: 1080,
    },
    field: {
      src: "/images/bathroom-insulation-riyadh-field.webp",
      alt: "فريق ManzilCare ينفّذ عزل حمامات بالرياض — غشاء سائل وأشرطة زوايا قبل تركيب البلاط",
      width: 1200,
      height: 675,
    },
  },
  "leak-detection-no-damage-riyadh": {
    hero: {
      src: "/images/leak-detection-no-damage-riyadh-hero.webp",
      alt: "كشف تسربات بدون تكسير في فيلا بالرياض — فريق ManzilCare يحدد موقع التسرب قبل أي فتح للبلاط",
      width: 1080,
      height: 720,
    },
    field: {
      src: "/images/leak-detection-no-damage-riyadh-field.webp",
      alt: "فني يستخدم أجهزة كشف تسربات المياه دون تكسير في شقة سكنية بالرياض",
      width: 1280,
      height: 853,
    },
  },
} as const;

export function getServicePageImages(slug: string) {
  return servicePageImages[slug as keyof typeof servicePageImages];
}

/** أبعاد صور Markdown في مقالات الخدمات — عرض كامل بلا قص (يمنع CLS) */
const markdownImageDimensions: Record<string, { width: number; height: number }> =
  {};

for (const page of Object.values(servicePageImages)) {
  const images = [
    page.hero,
    "field" in page ? page.field : undefined,
  ];
  for (const img of images) {
    if (img) {
      markdownImageDimensions[img.src] = {
        width: img.width,
        height: img.height,
      };
    }
  }
}

export function getMarkdownImageDimensions(src: string) {
  return markdownImageDimensions[src];
}
