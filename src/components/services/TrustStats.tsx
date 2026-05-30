import { trustStats } from "@/lib/services-catalog";

export function TrustStats() {
  return (
    <section
      aria-labelledby="trust-stats-heading"
      className="mt-20 border-y border-outline-variant/20 bg-surface-container-low py-16"
    >
      <h2 id="trust-stats-heading" className="sr-only">
        إحصائيات الثقة
      </h2>
      <div className="mx-auto grid max-w-max-width grid-cols-2 gap-8 px-gutter text-center md:grid-cols-4">
        {trustStats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="mb-2 text-display-lg-mobile font-bold text-primary md:text-display-lg">
              {stat.value}
            </span>
            <span className="text-label-sm text-on-surface-variant">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
