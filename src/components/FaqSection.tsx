import { GLOBAL_FAQS } from "@/lib/seo/page-faqs";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-white py-margin-desktop"
    >
      <div className="mx-auto w-full max-w-max-width px-gutter">
        <h2
          id="faq-heading"
          className="mb-8 text-center text-headline-md font-semibold text-primary"
        >
          الأسئلة الشائعة
        </h2>
        <div className="mx-auto max-w-3xl space-y-3">
          {GLOBAL_FAQS.map((faq) => (
            <details key={faq.question} className="faq-card group">
              <summary className="faq-question cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
                {faq.question}
              </summary>
              <p className="faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
