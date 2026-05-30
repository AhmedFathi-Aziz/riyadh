const faqs = [
  {
    question: "كيف يتم كشف تسربات المياه بدون تكسير في الرياض؟",
    answer:
      "نستخدم أجهزة الكشف الحراري والموجات الصوتية والنيتروجين لتحديد مكان التسريب بدقة دون الحاجة لتكسير الجدران أو الأرضيات.",
  },
  {
    question: "ما مدة ضمان أعمال العزل؟",
    answer:
      "نقدم شهادة ضمان معتمدة على أعمال العزل والإصلاح تصل مدتها إلى 10 سنوات حسب نوع الخدمة والمواد المستخدمة.",
  },
  {
    question: "هل تقدمون خدمة معاينة مجانية في الرياض؟",
    answer:
      "نعم، يمكنك طلب معاينة مجانية عبر الموقع أو الاتصال بنا، ويتحرك فريقنا بسرعة لمنع تفاقم أضرار المياه.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-surface py-margin-desktop"
    >
      <div className="mx-auto w-full max-w-max-width px-gutter">
        <h2
          id="faq-heading"
          className="mb-10 text-center text-headline-md font-semibold text-primary"
        >
          الأسئلة الشائعة
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-outline-variant bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-headline-md font-semibold text-primary marker:content-none [&::-webkit-details-marker]:hidden">
                {faq.question}
              </summary>
              <p className="mt-4 text-on-surface-variant">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
