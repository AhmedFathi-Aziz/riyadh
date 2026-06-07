import type { FaqItem } from "./structured-data";

export const GLOBAL_FAQS: FaqItem[] = [
  {
    question: "كيف يتم كشف تسربات المياه بدون تكسير في الرياض؟",
    answer:
      "نستخدم أجهزة الكشف الحراري والموجات الصوتية والغاز التتبع لتحديد مكان التسريب بدقة دون الحاجة لتكسير الجدران أو الأرضيات في أغلب الحالات.",
  },
  {
    question: "ما مدة ضمان أعمال العزل وكشف التسربات؟",
    answer:
      "نقدم شهادة ضمان معتمدة على أعمال العزل والإصلاح تصل مدتها إلى 10 سنوات حسب نوع الخدمة والمواد المستخدمة.",
  },
  {
    question: "هل تقدمون خدمة معاينة مجانية في الرياض؟",
    answer:
      "نعم، يمكنك طلب معاينة مجانية عبر الموقع أو الاتصال بنا، ويتحرك فريقنا بسرعة لمنع تفاقم أضرار المياه في جميع أحياء الرياض.",
  },
  {
    question: "كم تستغرق زيارة الكشف في الرياض؟",
    answer:
      "المعاينة الأولية تستغرق عادة 45 إلى 90 دقيقة حسب مساحة المبنى، مع تقرير مبدئي في نفس اليوم أو خلال 24 ساعة.",
  },
  {
    question: "هل تغطون جميع أحياء الرياض؟",
    answer:
      "نعم، نغطي شمال وشرق وغرب وجنوب ووسط الرياض مع فرق متخصصة لكل نوع مبنى: فلل، عمائر، ومجمعات.",
  },
];

const SERVICE_FAQ_EXTRAS: Record<string, FaqItem[]> = {
  "leak-detection-water-riyadh": [
    {
      question: "ما أجهزة كشف تسربات المياه التي تستخدمونها؟",
      answer:
        "نستخدم كاشفات صوتية، كاميرات حرارية، وأحياناً غاز نيتروجين تتبع لتحديد موقع التسرب بدقة قبل أي تكسير.",
    },
  ],
  "leak-detection-no-damage-riyadh": [
    {
      question: "متى يكون الكشف بدون تكسير كافياً؟",
      answer:
        "عندما يكون التسرب في شبكة ضغط أو صرف يمكن تتبعه acoustically أو حرارياً؛ نحدد ذلك في المعاينة الأولية.",
    },
  ],
  "roof-insulation-riyadh": [
    {
      question: "هل يجب كشف التسرب قبل عزل السطح؟",
      answer:
        "نعم في أغلب الحالات؛ عزل سطح فيه تسرب نشط يخفي المشكلة ويزيد تكلفة الإصلاح لاحقاً.",
    },
  ],
  "foam-insulation-riyadh": [
    {
      question: "هل يجب حماية UV بعد رش الفوم على السطح؟",
      answer:
        "نعم إلزامياً في الرياض؛ الفوم المعرّض للشمس دون طلاء عاكس يتدهور خلال مواسم قليلة.",
    },
  ],
  "عزل-مائي-بالرياض": [
    {
      question: "هل يكفي دهان مقاوم للماء دون نظام عزل متكامل؟",
      answer:
        "لا في أغلب الحالات؛ العزل المائي الاحترافي يتضمن تحضيراً، طبقات متعددة، ومعالجة تفاصيل المناور والصرف.",
    },
  ],
  "عزل-حراري-بالرياض": [
    {
      question: "هل الطلاء العاكس يكفي بدون عزل حراري سميك؟",
      answer:
        "في أغلب الفلل والعمائر لا؛ الطلاء العاكس يكمّل العزل ولا يُعوّض ألواح XPS أو EPS بسماكة مناسبة لمناخ الرياض.",
    },
  ],
};

export function getFaqsForPage(options?: {
  extras?: FaqItem[];
  serviceSlug?: string;
  max?: number;
}): FaqItem[] {
  const max = options?.max ?? 5;
  const serviceExtra = options?.serviceSlug
    ? (SERVICE_FAQ_EXTRAS[options.serviceSlug] ?? [])
    : [];
  const merged = [...(options?.extras ?? []), ...serviceExtra, ...GLOBAL_FAQS];
  const seen = new Set<string>();
  const unique: FaqItem[] = [];
  for (const faq of merged) {
    if (seen.has(faq.question)) continue;
    seen.add(faq.question);
    unique.push(faq);
    if (unique.length >= max) break;
  }
  return unique;
}

export function neighborhoodFaqsToItems(
  pairs: [string, string][],
): FaqItem[] {
  return pairs.map(([question, answer]) => ({
    question: question.replace(/\*\*/g, ""),
    answer: answer.replace(/\*\*/g, ""),
  }));
}
