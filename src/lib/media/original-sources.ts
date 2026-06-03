/**
 * صور الموقع — ملفات محلية فقط داخل public/images/ (تُنسخ إلى out عند البناء).
 * لا تستخدم روابط CDN هنا حتى يطابق النشر المحلي.
 */
export type ImageSourceEntry = {
  file: string;
  url: string;
  alt: string;
  width: number;
  height: number;
};

function localImage(
  file: string,
  alt: string,
  width: number,
  height: number,
): ImageSourceEntry {
  return { file, url: `/images/${file}`, alt, width, height };
}

export const originalImageSources = {
  logo: localImage(
    "manzilcare-logo.png",
    "شعار ManzilCare — متخصصون في العزل وكشف تسربات المياه",
    537,
    581,
  ),
  hero: localImage(
    "hero-leak-detection-riyadh.png",
    "كشف تسربات المياه بالرياض — فني ManzilCare بأحدث أجهزة الكشف بدون تكسير",
    1024,
    682,
  ),
  services: localImage(
    "services-roof-insulation-riyadh.png",
    "فريق عمل محترف يقوم بعزل أسطح في الرياض مع ظهور برج المملكة والفيصلية في الخلفية",
    1024,
    686,
  ),
  leakDetection: localImage(
    "service-leak-detection.png",
    "فني يكشف تسرب مياه على سطح مبنى بأجهزة كشف صوتية متخصصة في الرياض",
    1024,
    768,
  ),
  tank: localImage(
    "service-tank.jpg",
    "عزل خزانات بالرياض — طلاء إيبوكسي أزرق داخل خزان مياه بعد التنفيذ الاحترافي",
    1200,
    800,
  ),
  roof: localImage(
    "blog-bitumen-roof.png",
    "عمال يطبقون عزل بيتوميني على سطح مبنى في الرياض",
    1024,
    682,
  ),
  bathroom: localImage(
    "service-bathroom-kitchen-insulation.png",
    "عزل الحمامات والمطابخ — حماية من تسربات المياه والرطوبة في الرياض",
    1024,
    682,
  ),
  restoration: localImage(
    "blog-detect-leaks-without-tiling.png",
    "فني يصلح تسرب مياه في مطبخ بالرياض بأجهزة كشف دون تكسير البلاط",
    1024,
    682,
  ),
  insulationHero: localImage(
    "insulation-hero.jpg",
    "عامل محترف يطبق طلاء عزل سائل على سطح مبنى حديث في الرياض عند غروب الشمس",
    1920,
    1280,
  ),
  insulationWater: localImage(
    "insulation-water.jpg",
    "تطبيق غشاء بيتوميني عازل للمياه على أساس مبنى سكني",
    1200,
    800,
  ),
  insulationThermal: localImage(
    "insulation-thermal.jpg",
    "تركيب ألواح عزل حراري أبيض في جدار مبنى سكني حديث",
    1200,
    800,
  ),
  portfolioFoam: localImage(
    "portfolio-villa.jpg",
    "عزل فوم عاكس على سطح فيلا في حي الملقا بالرياض",
    1200,
    800,
  ),
  portfolioCommercial: localImage(
    "portfolio-commercial.jpg",
    "عزل حراري على سطح مبنى تجاري في الرياض",
    1200,
    800,
  ),
  portfolioTank: localImage(
    "portfolio-tank.jpg",
    "عزل داخلي لخزان مياه خرساني في مجمع سكني بالرياض",
    1200,
    800,
  ),
} as const;
