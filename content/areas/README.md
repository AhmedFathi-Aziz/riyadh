# صفحات أحياء الرياض

- البيانات: `data/riyadh-neighborhoods.json` (يُولَّد عبر `npm run areas:data`)
- المحتوى: يُبنى ديناميكياً في `src/lib/neighborhoods/build-content.ts` حسب ملف الحي (المنطقة، نمط السكن، العمر، الملاحظات)
- المسار: `/areas/[slug]` — مثال: `/areas/al-narjis` → «كشف تسربات المياه حي النرجس»

لإضافة حي: أضف صفاً في `scripts/build-neighborhoods-registry.mjs` ثم شغّل `npm run areas:data`.
