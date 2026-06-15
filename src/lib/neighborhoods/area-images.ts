import type { SiteImage } from "@/lib/media/images";
import { IMAGE_BLUR, insulationImages } from "@/lib/media/images";

/** أسماء أحياء — للتأكد من كتابة عربية صحيحة في الواجهة */
const NEIGHBORHOOD_NAMES: Partial<Record<string, string>> = {
  "al-narjis": "النرجس",
  "al-yasmin": "الياسمين",
};

export function getNeighborhoodDisplayName(slug: string, fallback: string): string {
  return NEIGHBORHOOD_NAMES[slug] ?? fallback;
}

export type AreaMidImage = SiteImage & { caption?: string };

type AreaImageConfig = {
  hero: SiteImage;
  mid?: AreaMidImage;
  /** يُقسَّم المحتوى قبل هذا العنوان (## ...) */
  midSplitBefore?: string;
};

const AREA_IMAGE_CONFIG: Partial<Record<string, AreaImageConfig>> = {
  "al-narjis": {
    hero: {
      src: insulationImages.portfolioFoam.src,
      alt: "فيلا بسطح مسطح معزول في حي النرجس شمال الرياض — كشف تسربات وعزل ManzilCare",
      width: insulationImages.portfolioFoam.width,
      height: insulationImages.portfolioFoam.height,
      blurDataURL: insulationImages.portfolioFoam.blurDataURL,
    },
    mid: {
      src: "/images/areas/al-narjis-neighborhood.webp",
      alt: "حي النرجس شمال الرياض — شوارع واسعة وفلل مستقلة بأسطح مسطحة ونخيل",
      width: 1536,
      height: 864,
      blurDataURL: IMAGE_BLUR,
      caption: `حي ${NEIGHBORHOOD_NAMES["al-narjis"]} — واجهة شمال الرياض، فلل مستقلة وأسطح مسطحة`,
    },
    midSplitBefore: "## مشاكل التسرب",
  },
  "al-yasmin": {
    hero: {
      src: insulationImages.portfolioCommercial.src,
      alt: "فيلا ومجمع سكني في حي الياسمين شمال الرياض — كشف تسربات وعزل ManzilCare",
      width: insulationImages.portfolioCommercial.width,
      height: insulationImages.portfolioCommercial.height,
      blurDataURL: insulationImages.portfolioCommercial.blurDataURL,
    },
    mid: {
      src: "/images/services-roof-insulation-riyadh.png",
      alt: "حي الياسمين شمال الرياض — فلل حديثة ومجمعات سكنية مغلقة قرب محور الشمال التجاري",
      width: 1024,
      height: 686,
      blurDataURL: IMAGE_BLUR,
      caption: `حي ${NEIGHBORHOOD_NAMES["al-yasmin"]} — فلل حديثة ومجمعات مغلقة شمال الرياض`,
    },
    midSplitBefore: "## مشاكل التسرب",
  },
};

export function getAreaHeroImage(slug: string): SiteImage | null {
  return AREA_IMAGE_CONFIG[slug]?.hero ?? null;
}

export function splitContentForAreaMidImage(
  slug: string,
  content: string,
): { before: string; after: string; mid: AreaMidImage | null } {
  const config = AREA_IMAGE_CONFIG[slug];
  if (!config?.mid) {
    return { before: content, after: "", mid: null };
  }

  const anchor = config.midSplitBefore ?? findMidHeading(content);
  const idx = content.indexOf(anchor);
  if (idx === -1) {
    return { before: content, after: "", mid: config.mid };
  }

  return {
    before: content.slice(0, idx).trimEnd(),
    after: content.slice(idx).trimStart(),
    mid: config.mid,
  };
}

function findMidHeading(content: string): string {
  const headings = [...content.matchAll(/^## .+$/gm)];
  if (headings.length < 2) return "";
  const mid = headings[Math.floor(headings.length / 2)];
  return mid?.[0] ?? "";
}
