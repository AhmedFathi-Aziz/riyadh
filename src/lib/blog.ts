import { postsContent } from "./blog/posts-content";
import { blogImages } from "./media/images";

/**
 * المدونة — كل المقالات في مصفوفة `blogPosts` أدناه.
 *
 * لإضافة مقال جديد:
 * 1. انسخ كائن مقال داخل `blogPosts`.
 * 2. `slug`: رابط إنجليزي فريد (مثال: my-new-post) → الصفحة: /blog/my-new-post
 * 3. `featured: true` لمقال واحد فقط (يظهر كبطاقة رئيسية).
 * 4. `sidebar: true` لحد مقالين (شريط جانبي بجانب المميز).
 * 5. بدون featured/sidebar → يظهر في شبكة «آخر المقالات».
 * 6. أضف المحتوى في `posts-content.ts` تحت نفس الـ slug (## عنوان فرعي ، ### عنوان فرعي صغير).
 * 7. الصورة: أضفها في `src/lib/media/blog-images.ts` وضع الملف في `public/images/`
 * 8. احفظ الملف — Sitemap وصفحات المقالات تُحدَّث تلقائياً عند البناء.
 */
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  image: { src: string; alt: string };
  featured?: boolean;
  sidebar?: boolean;
  icon?: "stars" | "tips_and_updates";
  sidebarLabel?: string;
  paragraphs: string[];
};

type BlogPostMeta = Omit<BlogPost, "paragraphs" | "image"> & {
  image: { alt: string };
};

export const blogMeta = {
  title: "المدونة",
  description:
    "تعرف على أفضل نصائح عزل الأسطح، الكشف عن تسربات المياه، وأحدث تقنيات العزل المناسبة لمناخ الرياض في مدونتنا المتخصصة.",
  path: "/blog",
};

const blogPostsMeta: BlogPostMeta[] = [
  {
    slug: "best-waterproofing-riyadh-climate",
    title: "أفضل أنواع العزل المائي للأسطح في مناخ الرياض القاسي",
    excerpt:
      "دليل شامل لأفضل أنواع العزل المائي للأسطح في الرياض: بيتومين، بولي يوريثان، فوم، وأسمنتي — مع مقارنة، مراحل التنفيذ، أخطاء شائعة، ونصائح ضمان.",
    category: "دليل العزل",
    readTime: "١٢ دقيقة قراءة",
    publishedAt: "2024-11-15",
    featured: true,
    image: {
      alt: "عمال يطبقون عزل بيتوميني على سطح مبنى في الرياض",
    },
  },
  {
    slug: "detect-water-leaks-without-tiling",
    title: "كيف تكتشف تسربات المياه في منزلك دون تكسير؟",
    excerpt:
      "دليل كامل لاكتشاف تسربات المياه في منزلك بالرياض دون تكسير: العلامات، أماكن التسرب، تقنيات الكشف الحديثة، والإصلاح الذكي.",
    category: "كشف التسربات",
    readTime: "١١ دقيقة قراءة",
    publishedAt: "2024-10-28",
    sidebar: true,
    icon: "stars",
    sidebarLabel: "الأكثر قراءة",
    image: {
      alt: "فني يكشف تسربات المياه في مطبخ حديث بدون تكسير بأجهزة الكشف الصوتي",
    },
  },
  {
    slug: "foam-insulation-commercial-warehouses",
    title: "أهمية العزل الفوم للمستودعات التجارية",
    excerpt: "لماذا يعتبر عزل الفوم الخيار الأول للمشاريع الكبرى في المملكة؟",
    category: "عزل الفوم",
    readTime: "١٠ دقائق قراءة",
    publishedAt: "2024-10-10",
    sidebar: true,
    icon: "tips_and_updates",
    sidebarLabel: "نصائح سريعة",
    image: {
      alt: "عامل يرش عزل فوم على سطح مستودع تجاري في الرياض",
    },
  },
  {
    slug: "roof-insulation-maintenance-schedule",
    title: "جدول الصيانة الدورية لعزل الأسطح",
    excerpt:
      "نصائح للحفاظ على كفاءة العزل لسنوات طويلة وتجنب تكاليف الإصلاح الباهظة.",
    category: "صيانة دورية",
    readTime: "١٠ دقائق قراءة",
    publishedAt: "2024-09-22",
    image: {
      alt: "فريق يشرف على أعمال عزل وصيانة الأسطح في موقع بناء",
    },
  },
  {
    slug: "tank-leaks-building-foundation",
    title: "مخاطر تسربات الخزانات على أساسات المبنى",
    excerpt:
      "كيف يمكن لتسرب بسيط في الخزان الأرضي أن يهدد سلامة الهيكل الإنشائي لمنزلك؟",
    category: "تسربات المياه",
    readTime: "١١ دقيقة قراءة",
    publishedAt: "2024-09-05",
    image: {
      alt: "عزل وصيانة خزانات المياه لحماية أساسات المبنى",
    },
  },
  {
    slug: "cement-vs-epoxy-waterproofing",
    title: "مقارنة بين العزل الأسمنتي والعزل الإيبوكسي",
    excerpt:
      "دليل شامل لاختيار المادة الأنسب لعزل خزانات المياه والمسابح حسب احتياجك.",
    category: "تقنيات حديثة",
    readTime: "١٢ دقيقة قراءة",
    publishedAt: "2024-08-18",
    image: {
      alt: "تطبيق طلاء إيبوكسي عازل للمياه على أرضية صناعية",
    },
  },
  {
    slug: "bathroom-waterproofing-riyadh-guide",
    title: "دليل عزل الحمامات والمطابخ في الرياض — متى تحتاج التدخل؟",
    excerpt:
      "الرطوبة خلف البلاط والفواصل المتسربة من أشهر أسباب تلف الجدران. نشرح خطوات العزل الصحيح قبل وبعد التشطيب.",
    category: "عزل الحمامات",
    readTime: "١٢ دقيقة قراءة",
    publishedAt: "2025-03-12",
    image: {
      alt: "حمام حديث بتشطيب عصري يحتاج عزل مائي احترافي قبل التبليط",
    },
  },
  {
    slug: "roof-insulation-save-electricity-riyadh",
    title: "كيف يقلل عزل الأسطح فاتورة الكهرباء في صيف الرياض؟",
    excerpt:
      "العزل الحراري والمائي معاً يخفض حرارة السطح ويُطيل عمر المكيفات. أرقام وتجارب عملية لأصحاب الفلل والعمائر.",
    category: "عزل حراري",
    readTime: "١١ دقيقة قراءة",
    publishedAt: "2025-02-20",
    image: {
      alt: "تركيب عزل حراري عاكس على سطح مبنى في الرياض",
    },
  },
  {
    slug: "signs-roof-needs-waterproofing",
    title: "٧ علامات تخبرك أن سطح منزلك يحتاج عزل مائي عاجل",
    excerpt:
      "تجمع مياه، فقاعات في الطلاء، أو رائحة رطوبة في العلية؟ لا تؤجل — التأخير يضاعف تكلفة الإصلاح.",
    category: "دليل العزل",
    readTime: "٩ دقائق قراءة",
    publishedAt: "2025-01-28",
    image: {
      alt: "فحص وتطبيق عزل مائي بيتوميني على سطح منزل",
    },
  },
  {
    slug: "ac-condensation-leaks-riyadh-homes",
    title: "تسربات مياه التكييف في الرياض — الأسباب والحلول بدون تكسير",
    excerpt:
      "قطرة ماء من وحدة التكييف أو رطوبة تحت المكيف؟ غالباً المشكلة في التصريف أو العزل وليست «تسرب شبكة».",
    category: "كشف التسربات",
    readTime: "١٠ دقائق قراءة",
    publishedAt: "2025-01-10",
    image: {
      alt: "فني يكشف تسرب مياه التكييف على سطح مبنى بأجهزة كشف صوتية متخصصة",
    },
  },
  {
    slug: "waterproofing-warranty-checklist",
    title: "ماذا يجب أن يتضمن ضمان العزل المائي في السعودية؟",
    excerpt:
      "شهادة ضمان بدون بنود واضحة لا تساوي شيئاً. قائمة تحقق قبل التوقيع على عقد عزل السطح أو الخزان.",
    category: "نصائح للعملاء",
    readTime: "١٠ دقائق قراءة",
    publishedAt: "2024-12-05",
    image: {
      alt: "فني يطبق طلاء عزل مائي أسود على سطح مبنى في الرياض",
    },
  },
];

export const blogPosts: BlogPost[] = blogPostsMeta.map((post) => {
  const image = blogImages[post.slug];
  if (!image) {
    throw new Error(`صورة المدونة مفقودة للمقال: ${post.slug}`);
  }
  return {
    ...post,
    image: { src: image.src, alt: image.alt },
    paragraphs: postsContent[post.slug] ?? [],
  };
});

function byNewestFirst(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost {
  return blogPosts.find((p) => p.featured) ?? blogPosts[0];
}

export function getSidebarPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.sidebar);
}

export function getLatestPosts(): BlogPost[] {
  return byNewestFirst(
    blogPosts.filter((p) => !p.featured && !p.sidebar),
  );
}
