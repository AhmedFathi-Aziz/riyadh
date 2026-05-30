# نشر الموقع على Cloudflare Pages (Static)

المشروع مُعدّ للتصدير الثابت (`output: "export"`). بعد البناء تُنسخ الملفات إلى مجلد `out/`.

## 1) من لوحة Cloudflare (موصى به)

1. ادخل [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. اختر المستودع وفرع `main`.
3. إعدادات البناء:

| الحقل | القيمة |
|--------|--------|
| Framework preset | **None** |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` (جذر المشروع) |

4. **Environment variables** (Production):

| المتغير | القيمة |
|---------|--------|
| `NODE_VERSION` | `20` |
| `NEXT_PUBLIC_SITE_URL` | `https://manzilcare.com` (أو نطاقك على Pages مؤقتاً) |

5. **Save and Deploy**. بعد النشر اربط النطاق من **Custom domains**.

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

## ملاحظات

- لا يوجد خادم Node بعد النشر؛ كل الصفحات مُولَّدة مسبقاً (بما فيها `/blog/[slug]`).
- نموذج الاتصال يفتح واتساب من المتصفح فقط (لا API على السيرفر).
- حدّث `NEXT_PUBLIC_SITE_URL` ليطابق النطاق النهائي حتى تكون روابط الـ sitemap و Open Graph صحيحة.
