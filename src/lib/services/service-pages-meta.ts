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
    title: "كشف تسربات المياه بالرياض — فحص دقيق",
    description:
      "كشف تسربات المياه بالرياض بدقة: صوتي، حراري، وغاز تتبع. تقرير مصور، إصلاح موضعي، معاينة مجانية في كل الأحياء، وضمان مكتوب حتى 10 سنوات.",
    coverImage: "leak-detection-water-riyadh-hero.webp",
    imageAlt:
      "فريق ManzilCare يكشف تسرب مياه في فيلا بالرياض بأجهزة كشف دون تكسير عشوائي",
    icon: "search_check",
    relatedSlugs: [
      "leak-detection-no-damage-riyadh",
      "leak-repair-water-riyadh",
      "كشف-تسربات-الخزانات-بالرياض",
    ],
  },
  {
    slug: "كشف-تسربات-الخزانات-بالرياض",
    keyword: "كشف تسربات الخزانات بالرياض",
    title: "كشف تسربات الخزانات بالرياض — فحص ضغط",
    description:
      "كشف تسربات الخزانات بالرياض للفلل والعمائر: فحص ضغط، كاميرا، وغاز تتبع. معاينة مجانية، تقرير مصور، وضمان مكتوب حتى 10 سنوات. احجز مع ManzilCare.",
    coverImage: "tank-leak-detection-riyadh-hero.webp",
    imageAlt:
      "فني ManzilCare يفحص خزان مياه في فيلا بالرياض بجهاز كشف تسربات الخزانات",
    icon: "water_drop",
    relatedSlugs: [
      "عزل-خزانات-بالرياض",
      "tank-insulation-riyadh",
      "leak-detection-water-riyadh",
      "leak-repair-water-riyadh",
    ],
  },
  {
    slug: "كشف-تسربات-المسابح-بالرياض",
    keyword: "كشف تسربات المسابح بالرياض",
    title: "كشف تسربات المسابح بالرياض — اختبار دقيق",
    description:
      "كشف تسربات المسابح بالرياض للفلل والاستراحات: صبغة تتبعية، ضغط هيدروليكي، واختبار دلو. معاينة مجانية، تقرير مصور، وضمان مكتوب. احجز مع ManzilCare.",
    coverImage: "pool-leak-detection-riyadh-hero.webp",
    imageAlt:
      "فريق ManzilCare يكشف تسرب مسبح في فيلا بالرياض باختبار ضغط وصبغة تتبعية",
    icon: "pool",
    relatedSlugs: [
      "pool-insulation-riyadh",
      "leak-repair-water-riyadh",
      "leak-detection-water-riyadh",
      "عزل-حمامات-بالرياض",
    ],
  },
  {
    slug: "leak-repair-water-riyadh",
    keyword: "إصلاح تسربات المياه بالرياض",
    title: "إصلاح تسربات المياه بالرياض — إصلاح موضعي",
    description:
      "إصلاح تسربات المياه في الرياض بعد التشخيص الدقيق: سباكة، عزل، وترميم موضعي بدون تكسير غير ضروري. معاينة مجانية، تقرير مصور، وضمان مكتوب على الأعمال.",
    coverImage: "blog-detect-leaks-without-tiling.png",
    imageAlt:
      "فني يصلح تسرب مياه في مطبخ بالرياض بأجهزة كشف دون تكسير البلاط",
    icon: "plumbing",
    relatedSlugs: [
      "leak-detection-water-riyadh",
      "leak-detection-no-damage-riyadh",
      "عزل-حمامات-بالرياض",
    ],
  },
  {
    slug: "roof-insulation-riyadh",
    keyword: "عزل أسطح بالرياض",
    title: "عزل أسطح بالرياض — مائي وحراري معتمد",
    description:
      "عزل أسطح بالرياض مائي وحراري للفلل والعمائر والمستودعات: بيتومين، فوم، وأغشية معتمدة. معاينة مجانية، تقرير مصور، وضمان مكتوب حتى 10 سنوات.",
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
    title: "عزل حراري بالرياض — توفير فاتورة التكييف",
    description:
      "عزل حراري بالرياض للفلل والعمائر والمستودعات: XPS، EPS، وصوف صخري. خفض فاتورة التكييف، معاينة مجانية، تقرير مصور، وضمان مكتوب في كل الأحياء.",
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
    title: "عزل مائي بالرياض — حماية من تسربات الأمطار",
    description:
      "عزل مائي بالرياض للفلل والعمائر والمستودعات: بيتومين، أغشية، وإيبوكسي. معاينة مجانية، تقرير مصور، ضمان مكتوب، وتغطية كل أحياء الرياض. احجز مع ManzilCare.",
    coverImage: "waterproofing-riyadh-hero.webp",
    imageAlt:
      "شعار ManzilCare — عزل مائي بالرياض: حماية الأسطح والخزانات والحمامات",
    icon: "water_drop",
    relatedSlugs: [
      "عزل-حراري-بالرياض",
      "roof-insulation-riyadh",
      "عزل-حمامات-بالرياض",
      "tank-insulation-riyadh",
      "leak-detection-water-riyadh",
    ],
  },
  {
    slug: "foam-insulation-riyadh",
    keyword: "عزل فوم بالرياض",
    title: "عزل فوم بالرياض — بولي يوريثان مغلق",
    description:
      "عزل فوم بولي يوريثان بالرياض للفلل والعمائر والمستودعات: فوم مغلق، حماية UV، معاينة مجانية، مواصفات كثافة وسماكة، وضمان مكتوب في كل الأحياء.",
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
    slug: "عزل-خزانات-بالرياض",
    keyword: "عزل خزانات بالرياض",
    title: "عزل خزانات بالرياض — إيبوكسي معتمد",
    description:
      "عزل خزانات بالرياض للفلل والعمائر: إيبوكسي معتمد، معالجة تشققات، واختبار ضغط. معاينة مجانية، تقرير مصور، وضمان مكتوب في كل أحياء الرياض.",
    coverImage: "tanks-insulation-riyadh-hero.webp",
    imageAlt:
      "شعار ManzilCare — عزل خزانات بالرياض: حماية المياه ومنع التسربات",
    icon: "water_drop",
    relatedSlugs: [
      "كشف-تسربات-الخزانات-بالرياض",
      "leak-repair-water-riyadh",
      "عزل-مائي-بالرياض",
      "roof-insulation-riyadh",
    ],
  },
  {
    slug: "tank-insulation-riyadh",
    keyword: "عزل الخزانات بالرياض",
    title: "عزل الخزانات بالرياض — حماية المياه الصالحة",
    description:
      "عزل خزانات علوية وأرضية في الرياض بإيبوكسي وأسمنتي مرن. حماية المياه، منع التسرب، معاينة مجانية، وضمان مكتوب للفلل والعمائر في كل الأحياء.",
    coverImage: "service-tank.jpg",
    imageAlt:
      "عزل خزانات بالرياض — خزان مياه معزول من الداخل بطلاء إيبوكسي أزرق احترافي",
    icon: "water_drop",
    relatedSlugs: [
      "عزل-خزانات-بالرياض",
      "leak-repair-water-riyadh",
      "roof-insulation-riyadh",
    ],
  },
  {
    slug: "عزل-حمامات-بالرياض",
    keyword: "عزل حمامات بالرياض",
    title: "عزل حمامات بالرياض — أغشية سائلة معتمدة",
    description:
      "عزل حمامات بالرياض للفلل والعمائر: أغشية سائلة، عزل أسمنتي، وإيبوكسي. معاينة مجانية، اختبار ماء، تقرير مصور، وضمان مكتوب حتى 10 سنوات.",
    coverImage: "bathroom-insulation-riyadh-hero.webp",
    imageAlt:
      "فني ManzilCare يطبق عزل مائي في حمام بالرياض قبل تركيب البلاط",
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
    title: "عزل المسابح بالرياض — حماية من التسربات",
    description:
      "عزل مسابح في الرياض: أغشية، إيبوكسي، ومعالجة شقوق. حماية من التسربات، تقليل استهلاك المياه والكيماويات، معاينة مجانية، وضمان مكتوب.",
    coverImage: "service-pool-insulation.jpg",
    imageAlt:
      "مسبح فيلا يخضع لعزل مائي ومعالجة شقوق في الرياض",
    icon: "pool",
    relatedSlugs: [
      "كشف-تسربات-المسابح-بالرياض",
      "عزل-حمامات-بالرياض",
      "leak-repair-water-riyadh",
    ],
  },
  {
    slug: "leak-detection-no-damage-riyadh",
    keyword: "كشف تسربات بدون تكسير بالرياض",
    title: "كشف تسربات بدون تكسير بالرياض — أجهزة دقيقة",
    description:
      "كشف تسربات بدون تكسير في الرياض: صوتي، حراري، وغاز تتبع. تحديد موقع التسرب بدقة قبل أي تكسير. معاينة مجانية، تقرير مصور — اتصل بـ ManzilCare.",
    coverImage: "leak-detection-no-damage-riyadh-hero.webp",
    imageAlt:
      "كشف تسربات بدون تكسير في فيلا بالرياض — فريق ManzilCare يحدد موقع التسرب قبل فتح البلاط",
    icon: "hearing",
    relatedSlugs: [
      "leak-detection-water-riyadh",
      "leak-repair-water-riyadh",
      "كشف-تسربات-الخزانات-بالرياض",
    ],
  },
  {
    slug: "leak-detection-al-arid",
    keyword: "كشف تسربات المياه حي العارض",
    title: "كشف تسربات المياه حي العارض — شمال الرياض",
    description:
      "كشف تسربات المياه في حي العارض بالرياض — أجهزة صوتية وحرارية، بدون تكسير، معاينة مجانية، وضمان مكتوب. احجز مع ManzilCare.",
    coverImage: "leak-detection-water-riyadh-hero.webp",
    imageAlt:
      "فريق ManzilCare يكشف تسرب مياه في فيلا بحي العارض شمال الرياض بأجهزة دقيقة",
    icon: "search_check",
    relatedSlugs: [
      "leak-detection-water-riyadh",
      "leak-detection-no-damage-riyadh",
      "leak-repair-water-riyadh",
      "كشف-تسربات-الخزانات-بالرياض",
    ],
  },
];

/** الصفحات التفصيلية المعروضة في سيكشن مميز على /services */
export const SERVICES_PAGE_SPOTLIGHT_SLUGS = [
  "leak-detection-water-riyadh",
  "كشف-تسربات-الخزانات-بالرياض",
  "كشف-تسربات-المسابح-بالرياض",
  "leak-detection-no-damage-riyadh",
  "roof-insulation-riyadh",
  "foam-insulation-riyadh",
  "عزل-مائي-بالرياض",
  "عزل-حراري-بالرياض",
  "عزل-خزانات-بالرياض",
  "عزل-حمامات-بالرياض",
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
  "كشف-تسربات-الخزانات-بالرياض": [
    "فحص خزانات علوية وأرضية ومركزية في الفلل والعمائر",
    "اختبار ضغط، كاميرا داخلية، وغاز تتبع لتحديد مصدر التسرب",
    "معاينة مجانية، تقرير مصور، وضمان حتى 10 سنوات",
  ],
  "كشف-تسربات-المسابح-بالرياض": [
    "تمييز التبخر عن التسرب باختبار الدلو والصبغة التتبعية",
    "فحص هيكل المسبح وخطوط السيركليشن وغرفة المعدات",
    "معاينة مجانية للفلل والاستراحات والفنادق في كل أحياء الرياض",
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
  "عزل-خزانات-بالرياض": [
    "إيبوكسي معتمد للمياه الصالحة للشرب ومعالجة تشققات",
    "خزانات علوية وأرضية للفلل والعمائر والمباني التجارية",
    "معاينة مجانية، اختبار ضغط، وضمان مكتوب في كل الأحياء",
  ],
  "عزل-حمامات-بالرياض": [
    "أغشية سائلة، عزل أسمنتي مرن، وإيبوكسي تحت البلاط",
    "اختبار غمر ماء 24–48 ساعة قبل التشطيب",
    "معاينة مجانية للفلل والشقق والفنادق في كل أحياء الرياض",
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
