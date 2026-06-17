import { siteImages } from "@/lib/media/images";

const DEFAULT_STREET =
  "طريق الملك فهد، حي الصحافة، الرياض";

/** Central site configuration — override via NEXT_PUBLIC_* env vars before production. */
export const siteConfig = {
  name: "ManzilCare",
  legalName: "ManzilCare",
  tagline: "متخصصون في العزل وكشف تسربات المياه",
  description:
    "ManzilCare — شركة متخصصة في كشف تسربات المياه وعزل الأسطح والخزانات بالرياض. معاينة مجانية، فحص بدون تكسير، تقرير مصور، وضمان مكتوب يصل إلى 10 سنوات.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://manzilcare.com",
  locale: "ar_SA",
  language: "ar",
  country: "SA",
  phoneDisplay:
    process.env.NEXT_PUBLIC_PHONE_DISPLAY?.trim() || "0500000000",
  phoneE164:
    process.env.NEXT_PUBLIC_PHONE_E164?.trim() || "+966500000000",
  whatsapp:
    process.env.NEXT_PUBLIC_WHATSAPP?.trim() || "966500000000",
  email:
    process.env.NEXT_PUBLIC_EMAIL?.trim() || "info@manzilcare.com",
  address: {
    streetAddress:
      process.env.NEXT_PUBLIC_STREET_ADDRESS?.trim() || DEFAULT_STREET,
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
    "ManzilCare",
    "manzilcare",
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

/** Single NAP string for footers and contact UI — matches LocalBusiness schema. */
export function formatSiteAddress(): string {
  const { streetAddress, addressLocality } = siteConfig.address;
  if (streetAddress.includes(addressLocality)) {
    return `${streetAddress}، المملكة العربية السعودية`;
  }
  return `${streetAddress}، ${addressLocality}، المملكة العربية السعودية`;
}

/** Human-readable phone for UI (supports spaced env override). */
export function formatPhoneDisplay(): string {
  const raw = siteConfig.phoneDisplay.replace(/\D/g, "");
  if (raw.length === 10 && raw.startsWith("05")) {
    return `${raw.slice(0, 4)} ${raw.slice(4, 7)} ${raw.slice(7)}`;
  }
  return siteConfig.phoneDisplay;
}
