import { siteImages } from "@/lib/media/images";

/** Central site configuration — update phone, URL, and email before production. */
export const siteConfig = {
  name: "عزل الرياض للمحترفين",
  legalName: "شركة عزل الرياض للمحترفين",
  tagline: "كشف تسربات وعزل مائي بالرياض",
  description:
    "الشركة الرائدة في كشف تسربات المياه وعزل الأسطح والخزانات بالرياض. دقة، سرعة، وضمان معتمد يصل إلى 10 سنوات.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://manzilcare.com",
  locale: "ar_SA",
  language: "ar",
  country: "SA",
  phoneDisplay: "0500000000",
  phoneE164: "+966500000000",
  whatsapp: "966500000000",
  email: "info@manzilcare.com",
  address: {
    streetAddress: "الرياض، المملكة العربية السعودية",
    addressLocality: "الرياض",
    addressRegion: "منطقة الرياض",
    postalCode: "11564",
    addressCountry: "SA",
  },
  geo: {
    latitude: 24.7136,
    longitude: 46.6753,
  },
  openingHours: ["Mo-Su 08:00-22:00"],
  priceRange: "$$",
  foundingYear: 2018,
  logo: {
    src: siteImages.logo.src,
    width: siteImages.logo.width,
    height: siteImages.logo.height,
    alt: siteImages.logo.alt,
  },
  images: {
    hero: {
      src: siteImages.hero.src,
      alt: siteImages.hero.alt,
      width: siteImages.hero.width,
      height: siteImages.hero.height,
      blurDataURL: siteImages.hero.blurDataURL,
    },
    services: {
      src: siteImages.services.src,
      alt: siteImages.services.alt,
      width: siteImages.services.width,
      height: siteImages.services.height,
      blurDataURL: siteImages.services.blurDataURL,
    },
  },
  keywords: [
    "كشف تسربات المياه الرياض",
    "عزل أسطح الرياض",
    "عزل خزانات الرياض",
    "شركة عزل مائي الرياض",
    "كشف تسربات بدون تكسير",
    "عزل فوم الرياض",
    "عزل حراري الرياض",
    "إصلاح تسربات المياه",
    "عزل خزانات أرضية",
    "عزل حمامات الرياض",
    "ترميم منازل الرياض",
    "خدمات عزل مائي الرياض",
  ],
  services: [
    {
      name: "كشف تسربات المياه بدون تكسير",
      description:
        "تحديد دقيق للأعطال في خطوط التغذية والصرف باستخدام النيتروجين والكشف الحراري والموجات الصوتية.",
    },
    {
      name: "عزل الأسطح",
      description:
        "عزل مائي وحراري (فوم، إيبوكسي، بيتومين) بأفضل المواصفات العالمية لمناخ الرياض.",
    },
    {
      name: "عزل الخزانات",
      description: "عزل خزانات علوية وأرضية بمواد معتمدة وضمان طويل الأمد.",
    },
    {
      name: "عزل الحمامات والمطابخ",
      description: "حماية من الرطوبة والتسربات في المناطق الرطبة.",
    },
    {
      name: "ترميم المنازل",
      description:
        "ترميم شامل للواجهات والتصدعات والأنظمة الداخلية بأعلى معايير الجودة.",
    },
  ],
  social: {
    website: "https://manzilcare.com",
    email: "mailto:info@manzilcare.com",
  },
} as const;
