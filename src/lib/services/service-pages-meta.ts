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
    coverImage: "blog-tank-leak.png",
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
    keyword: "عزل أسطح بالرياض",
    title: "عزل أسطح بالرياض",
    description:
      "عزل أسطح بالرياض مائي وحراري للفلل والعمائر والمستودعات: بيتومين، فوم، وأغشية معتمدة. معاينة مجانية وضمان حتى 10 سنوات.",
    coverImage: "roof-insulation-riyadh-hero.webp",
    imageAlt:
      "شعار ManzilCare — عزل أسطح بالرياض: عزل مائي وحراري للفلل والمباني التجارية",
    icon: "wb_sunny",
    relatedSlugs: [
      "عزل-حراري-بالرياض",
      "عزل-مائي-بالرياض",
      "foam-insulation-riyadh",
      "leak-detection-water-riyadh",
      "tank-insulation-riyadh",
    ],
  },
  {
    slug: "عزل-حراري-بالرياض",
    keyword: "عزل حراري بالرياض",
    title: "عزل حراري بالرياض",
    description:
      "عزل حراري بالرياض للفلل والعمائر والمستودعات: XPS، EPS، صوف صخري. خفض فاتورة التكييف، معاينة مجانية، وضمان مكتوب في كل الأحياء.",
    coverImage: "thermal-insulation-riyadh-hero.webp",
    imageAlt:
      "شعار ManzilCare — عزل حراري بالرياض: تقليل حرارة الأسطح وفواتير التكييف",
    icon: "device_thermostat",
    relatedSlugs: [
      "roof-insulation-riyadh",
      "foam-insulation-riyadh",
      "عزل-مائي-بالرياض",
      "leak-detection-water-riyadh",
    ],
  },
  {
    slug: "عزل-مائي-بالرياض",
    keyword: "عزل مائي بالرياض",
    title: "عزل مائي بالرياض",
    description:
      "عزل مائي بالرياض للفلل والعمائر والمستودعات: بيتومين، أغشية، إيبوكسي. معاينة مجانية، ضمان مكتوب، وتغطية كل أحياء الرياض.",
    coverImage: "waterproofing-riyadh-hero.webp",
    imageAlt:
      "شعار ManzilCare — عزل مائي بالرياض: حماية الأسطح والخزانات والحمامات",
    icon: "water_drop",
    relatedSlugs: [
      "عزل-حراري-بالرياض",
      "roof-insulation-riyadh",
      "bathroom-insulation-riyadh",
      "tank-insulation-riyadh",
      "leak-detection-water-riyadh",
    ],
  },
  {
    slug: "foam-insulation-riyadh",
    keyword: "عزل فوم بالرياض",
    title: "عزل فوم بالرياض",
    description:
      "عزل فوم بولي يوريثان بالرياض للفلل والعمائر والمستودعات: فوم مغلق، حماية UV، معاينة مجانية، وضمان مكتوب في كل الأحياء.",
    coverImage: "foam-insulation-riyadh-hero.webp",
    imageAlt:
      "شعار ManzilCare — عزل فوم بالرياض: عزل حراري ومائي للفلل والمباني التجارية",
    icon: "texture",
    relatedSlugs: [
      "عزل-حراري-بالرياض",
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
    coverImage: "service-tank.jpg",
    imageAlt:
      "عزل خزانات بالرياض — خزان مياه معزول من الداخل بطلاء إيبوكسي أزرق احترافي",
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
    title: "كشف تسربات بدون تكسير بالرياض | ManzilCare",
    description:
      "كشف تسربات بدون تكسير في الرياض: صوتي، حراري، وغاز تتبع. تحديد موقع التسرب بدقة قبل أي تكسير. معاينة مجانية في كل الأحياء.",
    coverImage: "leak-detection-no-damage-riyadh-hero.webp",
    imageAlt:
      "كشف تسربات بدون تكسير في فيلا بالرياض — فريق ManzilCare يحدد موقع التسرب قبل فتح البلاط",
    icon: "hearing",
    relatedSlugs: [
      "leak-detection-water-riyadh",
      "leak-repair-water-riyadh",
      "leak-detection-tanks-riyadh",
    ],
  },
];

/** الصفحات التفصيلية المعروضة في سيكشن مميز على /services */
export const SERVICES_PAGE_SPOTLIGHT_SLUGS = [
  "leak-detection-water-riyadh",
  "leak-detection-no-damage-riyadh",
  "roof-insulation-riyadh",
  "foam-insulation-riyadh",
  "عزل-مائي-بالرياض",
  "عزل-حراري-بالرياض",
] as const;

export type ServicesPageSpotlightSlug =
  (typeof SERVICES_PAGE_SPOTLIGHT_SLUGS)[number];

/** @deprecated استخدم SERVICES_PAGE_SPOTLIGHT_SLUGS */
export const SERVICES_PAGE_SPOTLIGHT_SLUG =
  SERVICES_PAGE_SPOTLIGHT_SLUGS[0];

export const SERVICES_PAGE_SPOTLIGHT_HIGHLIGHTS: Record<
  ServicesPageSpotlightSlug,
  readonly string[]
> = {
  "leak-detection-water-riyadh": [
    "كشف شامل للتغذية والصرف والخزانات والأسطح",
    "تقرير مصور، تقدير تكلفة، وخطة إصلاح واضحة",
    "معاينة مجانية وتغطية لأحياء الرياض",
  ],
  "leak-detection-no-damage-riyadh": [
    "تحديد موقع التسرب بالصوتيات والحرارة وغاز التتبع",
    "تقليل التكسير — فتح موضعي فقط عند الضرورة",
    "مناسب للفلل والشقق والمباني التجارية والمستودعات",
  ],
  "roof-insulation-riyadh": [
    "عزل مائي وحراري للفلل والعمائر والمستودعات",
    "مقارنة أنظمة العزل: بيتومين، فوم، أغشية، وXPS",
    "معاينة مجانية، عرض سعر شفاف، وضمان مكتوب",
  ],
  "foam-insulation-riyadh": [
    "فوم بولي يوريثان مغلق ومحمي من أشعة الشمس",
    "عزل حراري ومائي للفلل والمستودعات والمباني التجارية",
    "معاينة مجانية، مواصفات كثافة وسماكة، وضمان مكتوب",
  ],
  "عزل-مائي-بالرياض": [
    "بيتومين، أغشية سائلة، وإيبوكسي للأسطح والخزانات",
    "حماية من تسربات الأمطار والرطوبة في الفلل والعمائر",
    "معاينة مجانية، ضمان مكتوب، وتغطية كل أحياء الرياض",
  ],
  "عزل-حراري-بالرياض": [
    "XPS و EPS وصوف صخري للفلل والمستودعات والمباني التجارية",
    "تقليل حرارة الغرف العلوية وفاتورة التكييف في صيف الرياض",
    "معاينة مجانية، مواصفات سماكة وكثافة، وضمان مكتوب",
  ],
};

export function getServiceMetaBySlug(slug: string): ServicePageMeta | undefined {
  return servicePagesMeta.find((p) => p.slug === slug);
}

export function getServicesPageSpotlights(): ServicePageMeta[] {
  return SERVICES_PAGE_SPOTLIGHT_SLUGS.map((slug) =>
    getServiceMetaBySlug(slug),
  ).filter((meta): meta is ServicePageMeta => Boolean(meta));
}

/** @deprecated استخدم getServicesPageSpotlights */
export function getServicesPageSpotlight(): ServicePageMeta | undefined {
  return getServiceMetaBySlug(SERVICES_PAGE_SPOTLIGHT_SLUG);
}
