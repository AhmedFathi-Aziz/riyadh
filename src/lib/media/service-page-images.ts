/** أبعاد صور صفحات الخدمات المحسّنة (WebP) — تمنع CLS مع next/image */
export const servicePageImages = {
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
} as const;

export function getServicePageImages(slug: string) {
  return servicePageImages[slug as keyof typeof servicePageImages];
}
