import { WORK_STEPS } from "@/lib/seo/page-sections-data";

export function WorkStepsSection() {
  return (
    <section
      id="work-steps"
      aria-labelledby="work-steps-heading"
      className="bg-surface-container-low py-margin-desktop"
    >
      <div className="mx-auto w-full max-w-max-width px-gutter">
        <h2
          id="work-steps-heading"
          className="mb-10 text-center text-headline-md font-semibold text-primary"
        >
          خطوات العمل
        </h2>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WORK_STEPS.map((item) => (
            <li
              key={item.step}
              className="rounded-xl border border-outline-variant/30 bg-white p-6 text-center"
            >
              <span
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-headline-md font-bold text-on-primary"
                aria-hidden
              >
                {item.step}
              </span>
              <h3 className="mb-2 text-body-lg font-bold text-primary">
                {item.title}
              </h3>
              <p className="text-body-md text-on-surface-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
