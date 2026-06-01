/** تعريف صفحات الخدمات المستقلة — كل صفحة تستهدف كلمة رئيسية واحدة */
export type ServicePageMeta = {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  coverImage: string;
  imageAlt: string;
  icon: string;
  relatedSlugs: string[];
};

export const servicePagesMeta: ServicePageMeta[] = [
  {
    slug: "leak-detection-water-riyadh",
    keyword: "كشف تسربات المياه بالرياض",
    title: "كشف تسربات المياه بالرياض",
    description:
      "كشف تسربات المياه بالرياض بدقة: صوتي، حراري، وغاز تتبع. تقرير مصور، إصلاح موضعي، ومعاينة مجانية في كل الأحياء.",
    coverImage: "leak-detection-water-riyadh-hero.webp",
    imageAlt:
      "فريق ManzilCare يكشف تسرب مياه في فيلا بالرياض بأجهزة كشف دون تكسير عشوائي",
    icon: "search_check",
    relatedSlugs: [
      "leak-detection-no-damage-riyadh",
      "leak-repair-water-riyadh",
      "leak-detection-tanks-riyadh",
    ],
  },
  {
    slug: "leak-detection-tanks-riyadh",
    keyword: "كشف تسربات الخزانات بالرياض",
    title: "كشف تسربات الخزانات بالرياض",
    description:
      "كشف تسربات الخزانات العلوية والأرضية في الرياض دون تخمين: فحص ضغط، كاميرا، وعزل إيبوكسي. حماية الأساسات ومياه الشرب.",
    coverImage: "service-tank.jpg",
    imageAlt: "فحص داخلي لخزان مياه معزول بالإيبوكسي في الرياض",
    icon: "water_drop",
    relatedSlugs: [
      "tank-insulation-riyadh",
      "leak-detection-water-riyadh",
      "leak-repair-water-riyadh",
    ],
  },
  {
    slug: "leak-detection-pools-riyadh",
    keyword: "كشف تسربات المسابح بالرياض",
    title: "كشف تسربات المسابح بالرياض",
    description:
      "تحديد تسربات المسابح في الرياض بالصبغة التتبعية والفحص الهيدروليكي. إصلاح الشقوق وعزل احترافي للفلل والاستراحات.",
    coverImage: "service-pool-leak.jpg",
    imageAlt:
      "فحص تسرب مسبح بصبغة تتبعية وأجهزة كشف في فيلا بالرياض",
    icon: "pool",
    relatedSlugs: [
      "pool-insulation-riyadh",
      "leak-repair-water-riyadh",
      "leak-detection-water-riyadh",
    ],
  },
  {
    slug: "leak-repair-water-riyadh",
    keyword: "إصلاح تسربات المياه بالرياض",
    title: "إصلاح تسربات المياه بالرياض",
    description:
      "إصلاح تسربات المياه في الرياض بعد التشخيص الدقيق: سباكة، عزل، ترميم موضعي بدون تكسير غير ضروري. ضمان مكتوب.",
    coverImage: "blog-detect-leaks-without-tiling.png",
    imageAlt:
      "فني يصلح تسرب مياه في مطبخ بالرياض بأجهزة كشف دون تكسير البلاط",
    icon: "plumbing",
    relatedSlugs: [
      "leak-detection-water-riyadh",
      "leak-detection-no-damage-riyadh",
      "bathroom-insulation-riyadh",
    ],
  },
  {
    slug: "roof-insulation-riyadh",
    keyword: "عزل الأسطح بالرياض",
    title: "عزل الأسطح بالرياض",
    description:
      "عزل أسطح مائي وحراري في الرياض: بيتومين، فوم، بولي يوريثان. تقليل الحرارة وفواتير الكهرباء مع ضمان يصل 10 سنوات.",
    coverImage: "blog-bitumen-roof.png",
    imageAlt: "عمال يطبقون عزل بيتوميني على سطح مبنى في الرياض",
    icon: "wb_sunny",
    relatedSlugs: [
      "foam-insulation-riyadh",
      "leak-detection-water-riyadh",
      "tank-insulation-riyadh",
    ],
  },
  {
    slug: "foam-insulation-riyadh",
    keyword: "عزل الفوم بالرياض",
    title: "عزل الفوم بالرياض",
    description:
      "عزل فوم بولي يوريثان مرشوش في الرياض للأسطح والمستودعات. عزل حراري ومائي متكامل، سرعة تنفيذ، وكفاءة طاقة.",
    coverImage: "blog-foam-warehouse.png",
    imageAlt: "عامل يرش عزل فوم على سطح مستودع تجاري في الرياض",
    icon: "texture",
    relatedSlugs: [
      "roof-insulation-riyadh",
      "tank-insulation-riyadh",
      "leak-detection-water-riyadh",
    ],
  },
  {
    slug: "tank-insulation-riyadh",
    keyword: "عزل الخزانات بالرياض",
    title: "عزل الخزانات بالرياض",
    description:
      "عزل خزانات علوية وأرضية في الرياض بإيبوكسي وأسمنتي مرن. حماية المياه، منع التسرب، وضمان طويل للفلل والعمائر.",
    coverImage: "blog-epoxy-coating.png",
    imageAlt: "تطبيق طلاء إيبوكسي عازل لعزل خزان مياه من الداخل في الرياض",
    icon: "water_drop",
    relatedSlugs: [
      "leak-detection-tanks-riyadh",
      "leak-repair-water-riyadh",
      "roof-insulation-riyadh",
    ],
  },
  {
    slug: "bathroom-insulation-riyadh",
    keyword: "عزل الحمامات بالرياض",
    title: "عزل الحمامات بالرياض",
    description:
      "عزل حمامات ومطابخ في الرياض قبل وبعد التشطيب. منع الرطوبة والتسرب للأدوار السفلية مع مواد معتمدة.",
    coverImage: "service-bathroom-kitchen-insulation.png",
    imageAlt:
      "عزل الحمامات والمطابخ — حماية من تسربات المياه والرطوبة في الرياض",
    icon: "bathtub",
    relatedSlugs: [
      "leak-repair-water-riyadh",
      "leak-detection-water-riyadh",
      "pool-insulation-riyadh",
    ],
  },
  {
    slug: "pool-insulation-riyadh",
    keyword: "عزل المسابح بالرياض",
    title: "عزل المسابح بالرياض",
    description:
      "عزل مسابح في الرياض: أغشية، إيبوكسي، ومعالجة شقوق. حماية من التسربات وتقليل استهلاك المياه والكيماويات.",
    coverImage: "service-pool-insulation.jpg",
    imageAlt:
      "مسبح فيلا يخضع لعزل مائي ومعالجة شقوق في الرياض",
    icon: "pool",
    relatedSlugs: [
      "leak-detection-pools-riyadh",
      "bathroom-insulation-riyadh",
      "leak-repair-water-riyadh",
    ],
  },
  {
    slug: "leak-detection-no-damage-riyadh",
    keyword: "كشف تسربات بدون تكسير بالرياض",
    title: "كشف تسربات بدون تكسير بالرياض",
    description:
      "كشف تسربات بدون تكسير في الرياض: موجات صوتية، غاز تتبع، كاميرا حرارية. تحديد الموقع بدقة ملليمترية.",
    coverImage: "blog-detect-leaks-collage.png",
    imageAlt:
      "طرق كشف التسربات بدون تكسير: صوتي، حراري، كاميرا، وغاز تتبع في الرياض",
    icon: "hearing",
    relatedSlugs: [
      "leak-detection-water-riyadh",
      "leak-repair-water-riyadh",
      "leak-detection-tanks-riyadh",
    ],
  },
];

export function getServiceMetaBySlug(slug: string): ServicePageMeta | undefined {
  return servicePagesMeta.find((p) => p.slug === slug);
}
