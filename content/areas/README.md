# صفحات أحياء الرياض

- **البيانات:** `data/riyadh-neighborhoods.json` — `npm run areas:data`
- **المحتوى:** `content/areas/{slug}.md` — `npm run areas:content`
- **المسار:** `/areas/[slug]` — مثال: `/areas/al-narjis`

## إضافة أو تحديث حي

1. أضف صفاً في `scripts/build-neighborhoods-registry.mjs` ثم `npm run areas:data`
2. ولّد المحتوى: `npm run areas:content` (يتخطى الملفات الموجودة)
3. لإعادة توليد الكل: `node scripts/generate-area-markdown.mjs --force`
4. لحي واحد: `node scripts/generate-area-markdown.mjs --slug=al-yasmin --force`

## frontmatter المطلوب

```yaml
slug: al-narjis
keyword: كشف تسربات المياه حي النرجس
seoTitle: عنوان SEO (60–65 حرفاً مع | ManzilCare)
seoDescription: وصف ~160 حرفاً
relatedSlugs: [al-yasmin, al-malqa]
serviceSlugs: [leak-detection-water-riyadh, ...]
```

صفحات **حي النرجس** (`al-narjis.md`) و**حي الياسمين** (`al-yasmin.md`) مكتوبة يدوياً كمرجع جودة — لا تُستبدل إلا بـ `--force`.
