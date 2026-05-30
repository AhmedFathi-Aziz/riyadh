/**
 * يولّد data/riyadh-neighborhoods.json — تشغيل: node scripts/build-neighborhoods-registry.mjs
 * كل صف: [slug, nameAr, region, profile, era, landmark, housingNote]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "data", "riyadh-neighborhoods.json");

/** @type {[string, string, string, string, string, string, string][]} */
const rows = [
  // شمال — فلل ومجمعات
  ["al-narjis", "النرجس", "north", "villa_luxury", "growth_2000s", "واجهة شمال الرياض", "فلل مستقلة بأسطح مسطحة وخزانات علوية كبيرة"],
  ["al-yasmin", "الياسمين", "north", "villa_luxury", "growth_2000s", "محور الشمال التجاري", "فلل حديثة ومجمعات سكنية مغلقة"],
  ["al-malqa", "الملقا", "north", "villa_luxury", "growth_2000s", "قرب بوليفارد الرياض", "فلل فاخرة وعمائر سكنية منخفضة"],
  ["hittin", "حطين", "north", "villa_luxury", "growth_2000s", "منطقة شمال غربية راقية", "فلل واسعة مع مسابح وأسطح عازلة"],
  ["al-sahafa", "الصحافة", "north", "mixed_residential", "growth_2000s", "قرب طريق الملك فهد", "مزيج فلل وعمائر ومحلات تجارية"],
  ["al-arid", "العارض", "north", "villa_standard", "new_2010s", "توسع سكني شمالي", "فلل متوسطة وعمائر حديثة"],
  ["al-nafil", "النفل", "north", "villa_standard", "growth_2000s", "شمال الرياض", "فلل وشقق في عمائر منخفضة"],
  ["al-aqiq", "العقيق", "north", "villa_luxury", "growth_2000s", "شمال غرب الرياض", "فلل راقية ومجمعات"],
  ["al-rabie", "الربيع", "north", "compound_gated", "growth_2000s", "مجمعات سكنية", "مجمعات مغلقة وفلل"],
  ["al-nakheel", "النخيل", "north", "villa_standard", "established_1990s", "شمال الرياض", "فلل قديمة ومتوسطة تحتاج صيانة دورية"],
  ["al-wadi", "الوادي", "north", "villa_standard", "growth_2000s", "شمال الرياض", "فلل على طرازات متعددة"],
  ["al-ghadir", "الغدير", "north", "villa_luxury", "growth_2000s", "شمال الرياض", "فلل حديثة بمساحات خضراء"],
  ["al-muhammadiyah", "المحمدية", "north", "mixed_residential", "established_1990s", "شمال وسط", "فلل وعمائر وخدمات تجارية"],
  ["al-sulaimaniyah", "السليمانية", "north", "apartment_towers", "established_1990s", "شمال وسط الرياض", "أبراج سكنية وعمائر قديمة"],
  ["al-murooj", "المروج", "north", "villa_standard", "growth_2000s", "شمال الرياض", "فلل وعمائر سكنية"],
  ["king-fahd-district", "الملك فهد", "north", "commercial_mix", "established_1990s", "محور تجاري شمالي", "أبراج ومكاتب ومباني مختلطة"],
  ["al-qirawan", "القيروان", "north", "villa_standard", "new_2010s", "شمال شرق", "فلل جديدة وطرق واسعة"],
  ["salahuddin", "صلاح الدين", "north", "mixed_residential", "established_1990s", "شمال الرياض", "عمائر سكنية ومحلات"],
  ["al-mughrazat", "المغرزات", "north", "villa_standard", "growth_2000s", "شمال", "فلل متوسطة"],
  ["al-mursalat", "المرسلات", "north", "mixed_residential", "growth_2000s", "شمال", "عمائر وفلل"],
  ["al-nuzha", "النزهة", "north", "mixed_residential", "established_1990s", "شمال وسط", "عمائر سكنية كثيفة"],
  ["al-waha", "الواحة", "north", "villa_standard", "growth_2000s", "شمال", "فلل وحدائق"],
  ["al-izdihar", "الازدهار", "north", "villa_luxury", "growth_2000s", "شمال", "فلل حديثة"],
  ["al-khuzama", "الخزامى", "north", "villa_luxury", "new_2010s", "شمال", "فلل راقية حديثة"],
  ["al-thumamah", "الثمامة", "north", "villa_luxury", "new_2010s", "مخططات شمالية", "فلل فاخرة جديدة"],
  ["king-abdullah", "الملك عبدالله", "north", "villa_luxury", "new_2010s", "مخطط ملكي", "فلل ومجمعات حديثة"],
  ["king-khalid", "الملك خالد", "north", "villa_standard", "growth_2000s", "شمال", "فلل وعمائر"],
  ["al-rafiah", "الرفيعة", "north", "villa_standard", "established_1990s", "شمال", "فلل قديمة تحتاج عزل دوري"],
  ["al-andalus", "الأندلس", "north", "mixed_residential", "growth_2000s", "شمال غرب", "عمائر وفلل"],
  ["al-zahra", "الزهراء", "north", "mixed_residential", "established_1990s", "شمال", "عمائر سكنية"],
  ["al-mather", "المعذر", "north", "mixed_residential", "established_1990s", "قرب المعذر", "فلل وعمائر"],
  ["umm-al-hamam-west", "أم الحمام الغربي", "north", "mixed_residential", "growth_2000s", "غرب شمال", "عمائر وفلل"],
  ["al-aqrabiyah", "العقربية", "north", "villa_standard", "established_1990s", "شمال", "فلل وعمائر"],
  ["al-olaya", "العليا", "central", "commercial_mix", "established_1990s", "قلب الرياض التجاري", "أبراج ومكاتب وشقق فندقية"],
  ["al-faisaliyah", "الفيصلية", "central", "commercial_mix", "established_1990s", "برج الفيصلية", "مكاتب وعمارات تجارية"],
  ["al-mutamarat", "المؤتمرات", "central", "commercial_mix", "growth_2000s", "مركز المعارض", "مباني خدمية وفنادق"],
  ["al-safa", "الصفا", "central", "mixed_residential", "established_1990s", "وسط الرياض", "عمائر سكنية وتجارية"],
  ["al-rahmaniyah", "الرحمانية", "central", "mixed_residential", "established_1990s", "وسط", "عمائر وفلل"],
  ["al-wurud", "الورود", "central", "mixed_residential", "established_1990s", "وسط الرياض", "عمائر سكنية"],
  ["al-murabba", "المربع", "central", "heritage_dense", "established_1990s", "تاريخي وسط البلد", "مباني قديمة وأسوار تقليدية"],
  ["al-foutah", "الفوطة", "central", "heritage_dense", "established_1990s", "وسط تاريخي", "مباني قديمة وشقق"],
  ["al-wizarat", "الوزارات", "central", "commercial_mix", "established_1990s", "مكاتب حكومية", "مباني إدارية"],
  ["al-malaz", "الملز", "central", "heritage_dense", "established_1990s", "جنوب وسط", "عمائر قديمة وأسواق"],
  ["skakah", "سكاكا", "central", "mixed_residential", "established_1990s", "وسط", "عمائر سكنية"],
  ["al-mansourah", "المنصورة", "central", "mixed_residential", "established_1990s", "وسط", "عمائر ومحلات"],
  ["al-shumaisi", "الشميسي", "central", "heritage_dense", "established_1990s", "وسط قديم", "مباني قديمة وشوارع ضيقة"],
  ["al-dubbat", "الضباط", "central", "mixed_residential", "established_1990s", "وسط", "عمائر سكنية"],
  ["al-batha", "البطحاء", "central", "heritage_dense", "established_1990s", "وسط تاريخي", "مباني قديمة وأسواق"],
  ["manfouha", "منفوحة", "central", "heritage_dense", "established_1990s", "جنوب وسط", "مباني قديمة كثيفة"],
  ["al-oud", "العود", "central", "mixed_residential", "established_1990s", "وسط", "عمائر سكنية"],
  ["al-murqab", "المرقب", "central", "heritage_dense", "established_1990s", "وسط", "مباني قديمة"],
  // شرق
  ["qurtubah", "قرطبة", "east", "mixed_residential", "growth_2000s", "شرق الرياض", "فلل وعمائر وازدحام سكاني"],
  ["al-yarmuk", "اليرموك", "east", "mixed_residential", "established_1990s", "شرق الرياض", "عمائر قديمة وحديثة"],
  ["ishbiliyah", "اشبيلية", "east", "mixed_residential", "growth_2000s", "شرق", "فلل وعمائر"],
  ["al-khalij", "الخليج", "east", "apartment_towers", "growth_2000s", "شرق", "أبراج سكنية"],
  ["al-rawdah", "الروضة", "east", "mixed_residential", "established_1990s", "شرق وسط", "عمائر وفلل"],
  ["al-hamra", "الحمراء", "east", "mixed_residential", "growth_2000s", "شرق", "عمائر سكنية"],
  ["al-rimal", "الرمال", "east", "villa_standard", "new_2010s", "شرق الرياض", "فلل وعمائر جديدة"],
  ["al-naseem-east", "النسيم الشرقي", "east", "mixed_residential", "growth_2000s", "شرق", "فلل وعمائر"],
  ["al-naseem-west", "النسيم الغربي", "east", "mixed_residential", "growth_2000s", "شرق", "عمائر كثيفة"],
  ["al-munsiyah", "المونسية", "east", "villa_standard", "growth_2000s", "شرق شمال", "فلل وعمائر"],
  ["al-falah", "الفلاح", "east", "mixed_residential", "established_1990s", "شرق", "عمائر سكنية"],
  ["al-nahdah", "النهضة", "east", "mixed_residential", "established_1990s", "شرق", "عمائر"],
  ["al-saadah", "السعادة", "east", "mixed_residential", "established_1990s", "شرق", "عمائر سكنية"],
  ["al-maizaliyah", "المعيزلية", "east", "villa_standard", "growth_2000s", "شرق", "فلل وعمائر"],
  ["al-shuhada", "الشهداء", "east", "mixed_residential", "growth_2000s", "شرق", "عمائر وفلل"],
  ["al-rawabi", "الروابي", "east", "mixed_residential", "growth_2000s", "شرق", "عمائر"],
  ["al-manar", "المنار", "east", "mixed_residential", "growth_2000s", "شرق", "فلل وعمائر"],
  ["al-janadriyah", "الجنادرية", "east", "villa_standard", "established_1990s", "مهرجان الجنادريية", "فلل واستراحات"],
  ["al-qadisiyah", "القادسية", "east", "mixed_residential", "established_1990s", "شرق", "عمائر كثيفة"],
  ["al-namudhajiyah", "النموذجية", "east", "villa_standard", "established_1990s", "شرق", "فلل نموذجية"],
  ["al-dubiyat", "الدوبيات", "east", "villa_standard", "growth_2000s", "شرق", "فلل"],
  ["al-farooq", "الفاروق", "east", "mixed_residential", "established_1990s", "شرق", "عمائر"],
  ["al-rayyan-east", "الريان", "east", "mixed_residential", "growth_2000s", "شرق", "عمائر وفلل"],
  ["al-salam-east", "السلام", "east", "mixed_residential", "established_1990s", "شرق", "عمائر"],
  ["al-jamiyah", "الجامعة", "east", "mixed_residential", "established_1990s", "قرب الجامعة", "عمائر طلابية وسكنية"],
  ["al-nasriyah", "الناصرية", "east", "mixed_residential", "established_1990s", "شرق", "عمائر"],
  ["al-khaleej-north", "الخليج الشمالي", "east", "apartment_towers", "new_2010s", "شرق", "أبراج حديثة"],
  ["al-dahiyah", "الضاحية", "east", "mixed_residential", "established_1990s", "شرق", "عمائر"],
  ["al-rabwah-east", "الربوة", "east", "mixed_residential", "growth_2000s", "شرق", "فلل وعمائر"],
  ["al-shemaysi-east", "الشميسي الشرقي", "east", "heritage_dense", "established_1990s", "شرق قديم", "مباني قديمة"],
  ["al-aziziyah-east", "العزيزية الشرقية", "east", "mixed_residential", "established_1990s", "شرق", "عمائر"],
  ["al-sinaiyah-east", "الصناعية الشرقية", "east", "industrial_edge", "established_1990s", "منطقة ورش", "ورش ومستودعات ومساكن"],
  // غرب
  ["dhahrat-laban", "ظهرة لبن", "west", "villa_standard", "growth_2000s", "غرب الرياض", "فلل على تلال غربية"],
  ["al-suwaidi", "السويدي", "west", "mixed_residential", "established_1990s", "غرب", "عمائر وفلل قديمة"],
  ["al-ariqah", "العريجاء", "west", "villa_standard", "growth_2000s", "غرب", "فلل وعمائر"],
  ["al-sultanah", "السلطانة", "west", "mixed_residential", "established_1990s", "غرب", "عمائر سكنية"],
  ["laban", "لبن", "west", "villa_standard", "growth_2000s", "غرب", "فلل متوسطة"],
  ["al-duraihimiyah", "الدريهمية", "west", "mixed_residential", "established_1990s", "غرب", "عمائر"],
  ["tuwaiq", "طويق", "west", "villa_standard", "new_2010s", "غرب", "فلل جديدة"],
  ["namar", "نمار", "west", "villa_standard", "growth_2000s", "جنوب غرب", "فلل واستراحات"],
  ["al-awali", "العوالي", "west", "villa_standard", "growth_2000s", "غرب", "فلل"],
  ["al-badee", "البديع", "west", "villa_standard", "growth_2000s", "غرب", "فلل"],
  ["al-mahdiyah", "المهدية", "west", "mixed_residential", "growth_2000s", "غرب", "عمائر وفلل"],
  ["al-hazm-west", "الحزم", "west", "mixed_residential", "growth_2000s", "غرب", "عمائر"],
  ["al-suwaidi-west", "السويدي الغربي", "west", "mixed_residential", "established_1990s", "غرب", "عمائر كثيفة"],
  ["diriyah", "الدرعية", "west", "heritage_dense", "established_1990s", "الدرعية التاريخية", "مباني تراثية وفلل جديدة"],
  ["al-uyaynah", "العيينة", "west", "villa_standard", "established_1990s", "غرب", "فلل"],
  ["al-jubailah", "الجبيلة", "west", "villa_standard", "growth_2000s", "غرب", "فلل"],
  ["shubra", "شبرا", "west", "mixed_residential", "established_1990s", "غرب", "عمائر"],
  ["al-awaly-west", "العوالي الغربية", "west", "villa_standard", "new_2010s", "غرب", "فلل حديثة"],
  ["al-ghroob", "الغروب", "west", "villa_standard", "new_2010s", "غرب", "فلل"],
  ["al-hada-west", "الهدا", "west", "villa_luxury", "new_2010s", "غرب مرتفع", "فلل بإطلالات"],
  ["al-mahamid", "المحاميد", "west", "villa_standard", "growth_2000s", "غرب", "فلل"],
  ["al-salam-west", "السلام الغربي", "west", "mixed_residential", "established_1990s", "غرب", "عمائر"],
  // جنوب
  ["al-aziziyah", "العزيزية", "south", "mixed_residential", "established_1990s", "جنوب الرياض", "عمائر كثيفة"],
  ["al-shifa", "الشفا", "south", "mixed_residential", "growth_2000s", "جنوب", "فلل وعمائر"],
  ["badr", "بدر", "south", "villa_standard", "growth_2000s", "جنوب", "فلل"],
  ["al-maseef", "المصيف", "south", "mixed_residential", "established_1990s", "جنوب", "عمائر"],
  ["al-manakh", "المناخ", "south", "mixed_residential", "established_1990s", "جنوب", "عمائر قديمة"],
  ["al-marwah", "المروة", "south", "mixed_residential", "growth_2000s", "جنوب", "فلل وعمائر"],
  ["al-yamamah", "اليمامة", "south", "heritage_dense", "established_1990s", "جنوب", "مباني قديمة"],
  ["al-dar-al-bayda", "الدار البيضاء", "south", "mixed_residential", "established_1990s", "جنوب", "عمائر"],
  ["al-uqayqiyah", "العكيشية", "south", "mixed_residential", "established_1990s", "جنوب", "عمائر"],
  ["khashm-al-an", "خشم العان", "south", "villa_standard", "growth_2000s", "جنوب شرق", "فلل"],
  ["al-hazm-south", "الحزم الجنوبي", "south", "mixed_residential", "growth_2000s", "جنوب", "عمائر"],
  ["al-iskan-south", "الإسكان", "south", "apartment_towers", "established_1990s", "إسكان شعبي", "أبراج إسكان"],
  ["al-shemaysi-south", "الشميسي الجنوبي", "south", "heritage_dense", "established_1990s", "جنوب", "مباني قديمة"],
  ["al-fakhriyah", "الفاخرية", "south", "mixed_residential", "established_1990s", "جنوب", "عمائر"],
  ["al-mansourah-south", "المنصورة الجنوبية", "south", "mixed_residential", "established_1990s", "جنوب", "عمائر"],
  ["al-shaab", "الشعب", "south", "heritage_dense", "established_1990s", "جنوب", "مباني قديمة كثيفة"],
  ["al-zahra-south", "الزهراء الجنوبية", "south", "mixed_residential", "growth_2000s", "جنوب", "عمائر"],
  ["al-safa-south", "الصفا الجنوبية", "south", "mixed_residential", "established_1990s", "جنوب", "عمائر"],
  ["al-rawdah-south", "الروضة الجنوبية", "south", "mixed_residential", "established_1990s", "جنوب", "عمائر"],
  ["al-nafl-south", "النفل الجنوبي", "south", "villa_standard", "growth_2000s", "جنوب", "فلل"],
  ["al-ajwad", "الأجواد", "south", "mixed_residential", "growth_2000s", "جنوب", "عمائر"],
  ["al-masani", "المصانع", "south", "industrial_edge", "established_1990s", "منطقة صناعية", "مصانع ومساكن"],
  ["al-shubra-south", "شبرا الجنوبية", "south", "mixed_residential", "established_1990s", "جنوب", "عمائر"],
  // إضافي للوصول ~125
  ["al-amal", "العمل", "central", "commercial_mix", "established_1990s", "وسط", "مكاتب وورش"],
  ["al-sinaiyah", "الصناعية", "central", "industrial_edge", "established_1990s", "وسط صناعي", "ورش ومستودعات"],
  ["al-nakhil-central", "النخيل المركزي", "central", "mixed_residential", "established_1990s", "وسط", "عمائر"],
  ["al-faiha", "الفيحاء", "east", "mixed_residential", "established_1990s", "شرق", "عمائر"],
  ["al-wadi-east", "الوادي الشرقي", "east", "villa_standard", "growth_2000s", "شرق", "فلل"],
  ["al-ghadir-east", "الغدير الشرقي", "east", "villa_standard", "new_2010s", "شرق", "فلل جديدة"],
  ["al-narjis-east", "النرجس الشرقي", "north", "villa_luxury", "new_2010s", "امتداد النرجس", "فلل حديثة"],
  ["al-yasmin-south", "الياسمين الجنوبي", "north", "villa_luxury", "new_2010s", "جنوب الياسمين", "فلل"],
  ["al-malqa-east", "الملقا الشرقية", "north", "villa_luxury", "new_2010s", "امتداد الملقا", "فلل فاخرة"],
  ["al-sahafa-south", "الصحافة الجنوبية", "north", "mixed_residential", "growth_2000s", "جنوب الصحافة", "عمائر وفلل"],
  ["al-arid-west", "العارض الغربي", "north", "villa_standard", "new_2010s", "غرب العارض", "فلل جديدة"],
  ["al-nafal-north", "النفل الشمالي", "north", "villa_standard", "growth_2000s", "شمال النفل", "فلل"],
  ["al-qirawan-east", "القيروان الشرقي", "north", "villa_standard", "new_2010s", "شرق القيروان", "فلل"],
  ["al-rabie-west", "الربيع الغربي", "north", "compound_gated", "growth_2000s", "مجمعات", "مجمعات مغلقة"],
  ["al-nakheel-north", "النخيل الشمالي", "north", "villa_standard", "growth_2000s", "شمال النخيل", "فلل"],
];

const featured = new Set([
  "al-narjis",
  "al-yasmin",
  "al-malqa",
  "al-arid",
  "al-rimal",
  "al-sahafa",
  "qurtubah",
]);

const neighborhoods = rows.map(
  ([slug, nameAr, region, profile, era, landmark, housingNote]) => ({
    slug,
    nameAr,
    region,
    profile,
    era,
    landmark,
    housingNote,
    featured: featured.has(slug),
  }),
);

if (neighborhoods.length < 100) {
  console.error(`Expected 100+ neighborhoods, got ${neighborhoods.length}`);
  process.exit(1);
}

const slugs = neighborhoods.map((n) => n.slug);
if (new Set(slugs).size !== slugs.length) {
  console.error("Duplicate slugs detected");
  process.exit(1);
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `${JSON.stringify(neighborhoods, null, 2)}\n`, "utf8");
console.log(`Wrote ${neighborhoods.length} neighborhoods to ${outPath}`);
