/**
 * صور مقالات المدونة — ملفات محلية من الصور المرفقة.
 */
import type { ImageSourceEntry } from "./original-sources";

const local = (file: string, alt: string, width: number, height: number): ImageSourceEntry => ({
  file,
  url: `/images/${file}`,
  alt,
  width,
  height,
});

export const blogImageSources: Record<string, ImageSourceEntry> = {
  "best-waterproofing-riyadh-climate": local(
    "blog-bitumen-roof.png",
    "عمال يطبقون عزل بيتوميني على سطح مبنى في الرياض",
    1024,
    682,
  ),
  "detect-water-leaks-without-tiling": local(
    "blog-detect-leaks-without-tiling.png",
    "فني يكشف تسربات المياه في مطبخ حديث بدون تكسير بأجهزة الكشف الصوتي",
    1024,
    682,
  ),
  "foam-insulation-commercial-warehouses": local(
    "blog-foam-warehouse.png",
    "عامل يرش عزل فوم على سطح مستودع تجاري في الرياض",
    1024,
    682,
  ),
  "roof-insulation-maintenance-schedule": local(
    "blog-roof-maintenance-v2.jpg",
    "فريق يشرف على أعمال عزل وصيانة الأسطح في موقع بناء",
    1280,
    853,
  ),
  "tank-leaks-building-foundation": local(
    "blog-tank-leak.png",
    "عزل وصيانة خزانات المياه لحماية أساسات المبنى",
    1536,
    1024,
  ),
  "cement-vs-epoxy-waterproofing": local(
    "blog-epoxy-coating.png",
    "تطبيق طلاء إيبوكسي عازل للمياه على أرضية صناعية",
    1024,
    682,
  ),
  "bathroom-waterproofing-riyadh-guide": local(
    "service-bathroom-kitchen-insulation.png",
    "عزل الحمامات والمطابخ — حماية من تسربات المياه والرطوبة في الرياض",
    1024,
    682,
  ),
  "roof-insulation-save-electricity-riyadh": local(
    "blog-thermal-roof.png",
    "تركيب عزل حراري عاكس على سطح مبنى في الرياض",
    1024,
    682,
  ),
  "signs-roof-needs-waterproofing": local(
    "blog-bitumen-roof.png",
    "فحص وتطبيق عزل مائي بيتوميني على سطح منزل",
    1024,
    682,
  ),
  "ac-condensation-leaks-riyadh-homes": local(
    "blog-ac-leak-rooftop.png",
    "فني يكشف تسرب مياه التكييف على سطح مبنى بأجهزة كشف صوتية متخصصة",
    1024,
    768,
  ),
  "waterproofing-warranty-checklist": local(
    "blog-warranty-roof.png",
    "فني يطبق طلاء عزل مائي أسود على سطح مبنى في الرياض",
    1024,
    768,
  ),
};
