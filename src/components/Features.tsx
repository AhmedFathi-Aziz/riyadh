import { Icon } from "@/components/Icon";

const features = [
  {
    icon: "bolt",
    title: "سرعة الاستجابة",
    description:
      "نقدر وقتك؛ فريقنا يتحرك فور اتصالك لضمان عدم تفاقم أضرار المياه في منزلك.",
    variant: "default" as const,
  },
  {
    icon: "biotech",
    title: "دقة متناهية",
    description:
      "نستخدم أجهزة الكشف الحراري والموجات الصوتية لتحديد مكان التسريب بدقة 100% دون تكسير.",
    variant: "highlight" as const,
  },
  {
    icon: "verified_user",
    title: "ضمان حقيقي",
    description:
      "شهادة ضمان معتمدة على كافة أعمال العزل والإصلاح، تمنحك راحة البال لسنوات طويلة.",
    variant: "default" as const,
  },
];

export function Features() {
  return (
    <section
      aria-labelledby="features-heading"
      className="bg-surface py-margin-desktop"
    >
      <div className="mx-auto w-full max-w-max-width px-gutter">
        <div className="mb-16 text-center">
          <h2
            id="features-heading"
            className="mb-4 text-headline-md font-semibold text-primary"
          >
            المميزات
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-secondary-container" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) =>
            feature.variant === "highlight" ? (
              <article
                key={feature.title}
                className="flex transform flex-col gap-4 rounded-3xl bg-primary p-8 text-on-primary shadow-xl md:-translate-y-4"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary-container">
                  <Icon
                    name={feature.icon}
                    size="xl"
                    className="text-on-secondary-container"
                  />
                </div>
                <h3 className="text-headline-md font-semibold">
                  {feature.title}
                </h3>
                <p className="opacity-90">{feature.description}</p>
              </article>
            ) : (
              <article
                key={feature.title}
                className="flex flex-col gap-4 rounded-3xl border border-outline-variant bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-fixed">
                  <Icon name={feature.icon} size="xl" className="text-primary" />
                </div>
                <h3 className="text-headline-md font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="text-on-surface-variant">{feature.description}</p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
