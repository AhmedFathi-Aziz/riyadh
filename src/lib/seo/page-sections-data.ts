import { servicePagesMeta } from "@/lib/services/service-pages-meta";

export const WORK_STEPS = [
  {
    step: "1",
    title: "طلب المعاينة",
    description:
      "اتصل أو راسلنا عبر واتساب لتحديد موعد معاينة مجانية في موقعك بالرياض.",
  },
  {
    step: "2",
    title: "الفحص والتشخيص",
    description:
      "فحص بالأجهزة الحديثة (صوتي، حراري، ضغط) لتحديد مصدر التسرب بدقة.",
  },
  {
    step: "3",
    title: "تقرير وخطة عمل",
    description: "تقرير مصور مع تقدير التكلفة والمدة قبل أي تكسير أو عزل.",
  },
  {
    step: "4",
    title: "الإصلاح والضمان",
    description: "تنفيذ الإصلاح أو العزل مع شهادة ضمان مكتوبة على الأعمال.",
  },
] as const;

export const ADVANTAGES = [
  {
    icon: "bolt",
    title: "سرعة الاستجابة",
    description:
      "فريق جاهز للطوارئ والمعاينات اليومية في جميع أحياء الرياض.",
  },
  {
    icon: "biotech",
    title: "دقة متناهية",
    description:
      "كشف بدون تكسير في أغلب الحالات بفضل أجهزة متخصصة وخبرة ميدانية.",
  },
  {
    icon: "verified_user",
    title: "ضمان حقيقي",
    description: "ضمان يصل إلى 10 سنوات على أعمال العزل والإصلاح المعتمدة.",
  },
] as const;

export const CORE_SERVICES_LINKS = servicePagesMeta.slice(0, 6).map((s) => ({
  href: `/services/${s.slug}`,
  label: s.keyword,
}));
