import { Icon } from "@/components/Icon";
import { insulationPage } from "@/lib/insulation-page";

export function InsulationProcessSteps() {
  return (
    <section
      id="work-steps"
      aria-labelledby="process-heading"
      className="relative overflow-hidden bg-primary-container/10 py-margin-desktop"
    >
      <div className="mx-auto max-w-max-width px-gutter rtl">
        <div className="mb-12">
          <h2
            id="process-heading"
            className="text-display-lg font-bold text-primary"
          >
            خطوات العمل
          </h2>
          <p className="mt-2 text-on-surface-variant">
            منهجية علمية تضمن نتائج تدوم لعقود.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {insulationPage.processSteps.map((step) => (
            <article
              key={step.step}
              className="relative rounded-2xl border border-outline-variant/20 bg-surface p-8 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div
                className="pointer-events-none absolute start-4 top-4 text-6xl font-bold text-primary/10"
                aria-hidden
              >
                {step.step}
              </div>
              <Icon name={step.icon} size="xl" className="relative z-10 mb-6 text-secondary" />
              <h3 className="relative z-10 mb-3 text-headline-md font-semibold text-primary">
                {step.title}
              </h3>
              <p className="relative z-10 text-sm leading-relaxed text-on-surface-variant">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
