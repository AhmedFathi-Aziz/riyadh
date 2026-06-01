# نشر الموقع على Cloudflare Pages (Static)

المشروع مُعدّ للتصدير الثابت (`output: "export"`). بعد البناء تُنسخ الملفات إلى مجلد `out/`.

## 1) من لوحة Cloudflare (موصى به)

1. ادخل [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. اختر المستودع وفرع `main`.
3. إعدادات البناء:

| الحقل | القيمة |
|--------|--------|
| Framework preset | **None** |
| Build command | `npm run build` (لا تستخدم `npx next build` وحده — `prebuild` يولّد `sitemap.xml` تلقائياً) |
| Build output directory | `out` |
| Root directory | `/` (جذر المشروع) |

4. **Environment variables** (Production):

| المتغير | القيمة |
|---------|--------|
| `NODE_VERSION` | `20` |
| `NEXT_PUBLIC_SITE_URL` | `https://manzilcare.com` (أو نطاقك على Pages مؤقتاً) |

5. **Save and Deploy**. بعد النشر اربط النطاق من **Custom domains**.

إذا فشل البناء بخطأ `manifest.webmanifest` أو `robots.txt`:
- تأكد أن آخر commit على GitHub **حذف** `src/app/manifest.ts` و `robots.ts` و `sitemap.ts`.
- من Cloudflare: **Deployments** → **Retry deployment** → فعّل **Clear build cache**.
- تأكد أن **Build command** = `npm run build` وليس `npx next build` فقط.

إذا فشل البناء عند `npm ci` ورسالة مثل `Missing: @emnapi/core` أو `package-lock.json`:
- تأكد أن **`package-lock.json` مرفوع مع المشروع** على GitHub (لا تحذفه من Git).
- بعد أي تغيير في `package.json` شغّل محلياً `npm install` ثم ارفع `package-lock.json` مع التعديل.
- أعد النشر مع **Clear build cache**.

## 2) من الطرفية (Wrangler)

```bash
npm ci
npm run build
npx wrangler pages deploy out --project-name=manzilcare
```

أول مرة قد يُطلب تسجيل الدخول: `npx wrangler login`.

## 3) معاينة محلية قبل الرفع

```bash
npm run build
npm run preview:static
```

يفتح المجلد `out/` كموقع ثابت على `http://localhost:3000` (أو المنفذ الذي يعرضه `serve`).

## Sitemap تلقائي عند النشر

عند كل `npm run build` (محلياً أو على Cloudflare) يُشغَّل `prebuild` ويُحدَّث:

- `public/sitemap.xml` — من الخدمات (`content/services/*.md`)، الأحياء (`data/riyadh-neighborhoods.json`)، والمدونة
- `public/robots.txt` و `manifest.webmanifest`

**لا تحتاج** تشغيل سكربت يدوي قبل `git push`. أضف المحتوى → ارفع → النشر يبني الموقع والـ sitemap معاً.

تأكد في Cloudflare أن **Build command** = `npm run build` وليس `npx next build` فقط.

## الصور = نفس اللوكال

كل الصور من مجلد `public/images/` فقط (لا روابط Google CDN في الكود). عند البناء يتحقق السكربت `verify-public-images.mjs` أن الملفات موجودة.

1. أي صورة جديدة: ضعها في `public/images/` و**ارفعها مع Git**.
2. بعد النشر إن ظهرت صور قديمة: **Deployments → Retry → Clear build cache** ثم Purge cache من Cloudflare للموقع.
3. معاينة ما سيُنشر محلياً: `npm run build` ثم `npm run preview:static` — نفس مجلد `out/` الذي يرفع.

## ملاحظات

- لا يوجد خادم Node بعد النشر؛ كل الصفحات مُولَّدة مسبقاً (بما فيها `/blog/[slug]`).
- نموذج الاتصال يفتح واتساب من المتصفح فقط (لا API على السيرفر).
- حدّث `NEXT_PUBLIC_SITE_URL` ليطابق النطاق النهائي حتى تكون روابط الـ sitemap و Open Graph صحيحة.
