import type { ReactNode } from "react";
import { Icon } from "@/components/Icon";

export type ComparisonColumn = {
  id: string;
  title: string;
};

export type ComparisonRow = {
  criterion: string;
  values: Record<string, string>;
};

type ServiceSystemsComparisonTableProps = {
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  intro: ReactNode;
  note: ReactNode;
};

export function ServiceSystemsComparisonTable({
  columns,
  rows,
  intro,
  note,
}: ServiceSystemsComparisonTableProps) {
  return (
    <div className="my-5 sm:my-6">
      <div
        className="mb-4 rounded-xl border border-outline-variant/20 bg-surface-container-low/60 px-4 py-3.5 sm:mb-5 sm:px-5 sm:py-4"
        role="note"
        aria-label="شرح جدول المقارنة"
      >
        <div className="mb-2 flex items-center gap-2 text-label-sm font-bold text-primary">
          <Icon name="info" size="sm" className="text-secondary" />
          <span>ما هذا الجدول؟</span>
        </div>
        <div className="space-y-2.5 text-body-md leading-[1.8] text-on-surface-variant sm:text-body-lg">
          {intro}
        </div>
      </div>

      <p className="mb-3 flex items-center gap-2 text-label-sm text-on-surface-muted sm:mb-4">
        <Icon name="arrow_downward" size="sm" className="text-secondary md:hidden" />
        <Icon name="table_chart" size="sm" className="hidden text-secondary md:inline" />
        <span className="md:hidden">مرّر لأسفل لقراءة الأنظمة الأربعة (بطاقة لكل نظام)</span>
        <span className="hidden md:inline">
          جدول واحد يجمع الأنظمة الأربعة — الصف الأول اسم النظام، وباقي الصفوف
          معايير التقييم
        </span>
      </p>

      {/* جوال: بطاقات — كل نظام بعناوين واضحة */}
      <div className="space-y-4 md:hidden">
        {columns.map((col) => (
          <article
            key={col.id}
            className="overflow-hidden rounded-xl border border-outline-variant/25 bg-white shadow-soft"
          >
            <header className="bg-primary px-4 py-3 text-base font-bold text-on-primary">
              {col.title}
            </header>
            <dl className="divide-y divide-outline-variant/15">
              {rows.map((row) => (
                <div
                  key={`${col.id}-${row.criterion}`}
                  className="grid grid-cols-1 gap-1 px-4 py-3 even:bg-surface-container-low/40"
                >
                  <dt className="text-label-sm font-bold text-primary">
                    {row.criterion}
                  </dt>
                  <dd className="text-body-md leading-relaxed text-on-surface-variant">
                    {row.values[col.id]}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      {/* شاشات أكبر: جدول كامل مع رأس ثابت */}
      <div
        className="service-table-wrap hidden overflow-x-auto rounded-xl border border-outline-variant/25 bg-white shadow-soft md:block"
        role="region"
        aria-label="جدول مقارنة أنظمة العزل"
      >
        <table
          dir="rtl"
          className="service-comparison-table w-full min-w-[48rem] border-collapse text-right text-sm leading-relaxed"
        >
          <thead>
            <tr className="bg-primary text-on-primary">
              <th
                scope="col"
                className="px-4 py-4 font-bold leading-snug"
              >
                المعيار
              </th>
              {columns.map((col) => (
                <th
                  key={col.id}
                  scope="col"
                  className="px-4 py-4 font-bold leading-snug"
                >
                  {col.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/15">
            {rows.map((row) => (
              <tr
                key={row.criterion}
                className="bg-white even:bg-surface-container-low/50"
              >
                <th
                  scope="row"
                  className="px-4 py-3.5 font-semibold text-primary"
                >
                  {row.criterion}
                </th>
                {columns.map((col) => (
                  <td
                    key={col.id}
                    className="px-4 py-3.5 align-top text-on-surface-variant"
                  >
                    {row.values[col.id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <blockquote className="mt-5 rounded-xl border border-secondary/25 border-r-4 border-r-secondary bg-gradient-to-l from-secondary/8 to-transparent px-4 py-3.5 text-body-md leading-[1.8] text-on-surface-variant sm:mt-6 sm:px-5 sm:py-4 sm:text-body-lg">
        {note}
      </blockquote>
    </div>
  );
}

/** بيانات جدول «مقارنة سريعة بين الأنظمة» — صفحة عزل أسطح الرياض */
export const roofInsulationSystemsComparison = {
  columns: [
    { id: "bitumen", title: "البيتومين (رولات)" },
    { id: "foam", title: "فوم بولي يوريثان" },
    { id: "liquid", title: "الأغشية السائلة" },
    { id: "xps", title: "XPS + عزل مائي" },
  ],
  rows: [
    {
      criterion: "العزل الحراري",
      values: {
        bitumen: "منخفض إلى متوسط (مع طبقة عاكسة)",
        foam: "ممتاز",
        liquid: "منخفض",
        xps: "ممتاز",
      },
    },
    {
      criterion: "العزل المائي",
      values: {
        bitumen: "ممتاز عند التنفيذ الصحيح",
        foam: "جيد إلى ممتاز",
        liquid: "جيد",
        xps: "يعتمد على طبقة العزل المائي",
      },
    },
    {
      criterion: "مقاومة الأشعة (UV)",
      values: {
        bitumen: "يحتاج طبقة حماية",
        foam: "حماية UV إلزامية",
        liquid: "متوسطة",
        xps: "يحتاج طبقة حماية",
      },
    },
    {
      criterion: "سرعة التنفيذ",
      values: {
        bitumen: "متوسطة",
        foam: "سريعة",
        liquid: "متوسطة",
        xps: "أبطأ",
      },
    },
    {
      criterion: "الأنسب لـ",
      values: {
        bitumen: "عمائر وأسطح بسيطة",
        foam: "فلل ومستودعات",
        liquid: "مناور وتفاصيل كثيرة",
        xps: "مشاريع بمواصفات عزل حراري (R-value)",
      },
    },
  ],
} as const;

export const roofInsulationComparisonIntro = (
  <>
    <p className="m-0">
      هنا نقارن <strong className="text-primary">أربعة أنظمة عزل</strong>{" "}
      شائعة لأسطح المباني في الرياض — مثل البيتومين والفوم والأغشية السائلة
      وXPS — <strong className="text-primary">وليس</strong> أسعار شركات أو
      عروض تنافسية.
    </p>
    <p className="m-0">
      <strong className="text-primary">على الجوال:</strong> كل بطاقة زرقاء
      العنوان تمثل <em>نظاماً واحداً</em>؛ تحتها خمسة أسطر توضّح أداءه في
      العزل الحراري والمائي ومقاومة الشمس وسرعة التنفيذ ولمن يناسب (فيلا،
      عمارة، مستودع…).
    </p>
    <p className="m-0">
      الهدف أن تفهم <strong className="text-primary">الفرق التقني</strong> قبل
      المعاينة، ثم نختار معك النظام المناسب لسطحك بعد فحص الموقع — لأن
      «الأفضل» يعتمد على نوع المبنى وهل المشكلة حرارة أم تسرب أم الاثنان.
    </p>
  </>
);
