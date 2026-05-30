const testimonials = [
  {
    quote:
      "خدمة متميزة جداً، تم اكتشاف تسريب كان يسبب لنا رطوبة مزمنة في الجدران خلال دقائق وبدون أي تكسير. فريق محترم ومحترف.",
    name: "م. أحمد القحطاني",
    area: "حي الملقا، الرياض",
    featured: false,
  },
  {
    quote:
      "اعتمدت عليهم في عزل خزان المياه الأرضي، والنتائج كانت مبهرة. انقطعت فاتورة المياه المرتفعة تماماً. أنصح بهم بشدة.",
    name: "أ. سارة التميمي",
    area: "حي النرجس، الرياض",
    featured: true,
  },
  {
    quote:
      "الضمان الذي قدموه لي كان حقيقياً، حدثت مشكلة بسيطة بعد شهر وجاء الفريق وصيانتها مجاناً في نفس اليوم.",
    name: "د. خالد العتيبي",
    area: "حي الياسمين، الرياض",
    featured: false,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-surface py-margin-desktop"
    >
      <div className="mx-auto w-full max-w-max-width px-gutter text-center">
        <h2
          id="testimonials-heading"
          className="mb-12 text-headline-md font-semibold text-primary"
        >
          ماذا يقول عملائنا؟
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className={`glass-card relative rounded-3xl p-8 text-right ${
                item.featured ? "border border-secondary-container" : ""
              }`}
              cite="#"
            >
              <span
                className="material-symbols-outlined absolute -top-4 -right-4 rounded-full bg-primary p-2 text-secondary-container"
                aria-hidden
              >
                format_quote
              </span>
              <p className="mb-6 leading-relaxed text-on-surface-variant italic">
                {item.quote}
              </p>
              <footer className="flex items-center gap-4">
                <div
                  className="h-12 w-12 rounded-full bg-surface-container-high"
                  aria-hidden
                />
                <div>
                  <cite className="font-bold text-primary not-italic">
                    {item.name}
                  </cite>
                  <p className="text-sm opacity-60">{item.area}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
