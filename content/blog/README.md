# مقالات المدونة (Markdown)

كل مقال = ملف `.md` في هذا المجلد. اسم الملف = **slug** الرابط.

مثال: `my-new-post.md` → `https://manzilcare.com/blog/my-new-post`

## إضافة مقال جديد

1. انسخ `_template.md` إلى `slug-بالانجليزي.md`
2. عدّل الـ **frontmatter** (البيانات بين `---` في أعلى الملف)
3. اكتب المحتوى تحت الخط الفاصل بصيغة Markdown
4. أضف **صورة الغلاف** (انظر القسم التالي)
5. `git add` → `commit` → `push` → Cloudflare يبني الموقع تلقائياً

## صورة الغلاف (Cover)

**الأفضل: ملف على السيرفر** (`public/images/`) — موثوق مع Cloudflare Pages، لا روابط مكسورة، وأسرع.

1. ضع الصورة في `public/images/` (مثلاً `my-cover.jpg`)
2. في frontmatter المقال:

```yaml
coverImage: my-cover.jpg
imageAlt: وصف الصورة بالعربية
```

اختياري: `coverWidth` و `coverHeight` (افتراضي 1024×768).

**لا ننصح بـ URL خارجي** للغلاف حالياً — النظام مضبوط على `/images/...` المحلية. صور داخل نص المقال يمكن أن تكون `/images/...` فقط أيضاً.

> المقالات القديمة بدون `coverImage` ما زالت تعمل عبر `src/lib/media/blog-images.ts`.

## حقول frontmatter

| الحقل | مطلوب | الوصف |
|--------|--------|--------|
| `title` | نعم | عنوان المقال |
| `excerpt` | نعم | ملخص للبطاقة و SEO |
| `category` | نعم | التصنيف (مثل: كشف التسربات) |
| `readTime` | نعم | مثل: `١٠ دقائق قراءة` |
| `publishedAt` | نعم | تاريخ `YYYY-MM-DD` |
| `author` | نعم* | معرّف الكاتب — انظر `src/lib/blog/authors.ts` (مثل `mohammed-ahmed`) |
| `coverImage` | نعم* | اسم ملف في `public/images/` (مثل `blog-cover.jpg`) |
| `imageAlt` | نعم | وصف صورة الغلاف |
| `coverWidth` | لا | عرض الصورة (افتراضي 1024) |
| `coverHeight` | لا | ارتفاع الصورة (افتراضي 768) |

\* أو تسجيل الصورة في `blog-images.ts` للمقالات القديمة

## المؤلفون

كل مقال يحتاج حقل `author` في frontmatter. المعرّفات المتاحة:

| المعرّف | الاسم | التخصص |
|--------|--------|--------|
| `ahmed-fathy` | أ. أحمد فتحي | التقنية والذكاء الاصطناعي |
| `mohammed-ahmed` | م. محمد أحمد | كشف تسربات |
| `khalid-otaibi` | م. خالد العتيبي | عزل وأسطح |
| `abdulrahman-ghamdi` | م. عبدالرحمن الغامدي | مواد العزل |
| `sultan-harbi` | م. سلطان الحربي | تشخيص حراري |
| `noura-shamri` | م. نورة الشمري | ضمان وعملاء |

إذا حذفت `author`، يُختار مؤلف افتراضي حسب `category`.

| `draft` | لا | `true` = لا يُنشر (مخفي) |
| `featured` | لا | `true` = بطاقة رئيسية (واحد فقط) |
| `sidebar` | لا | `true` = شريط جانبي (حد أقصى 2) |
| `icon` | لا | `stars` أو `tips_and_updates` |
| `sidebarLabel` | لا | نص الشارة الجانبية |

## Markdown مدعوم

- `## عنوان` و `### عنوان أصغر`
- فقرات عادية
- `![نص بديل](/images/photo.png)` لصور داخل المقال
- قوائم وروابط (GitHub Flavored Markdown)

## لا تعدّل يدوياً

- `src/lib/blog/posts-content.ts` — **محذوف**؛ المحتوى هنا فقط
