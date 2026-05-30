import Link from "next/link";
import { Icon } from "@/components/Icon";
import { servicePagesMeta } from "@/lib/services/service-pages-meta";

export function ServicesLandingList() {
  return (
    <section
      aria-labelledby="all-services-heading"
      className="mx-auto mt-20 max-w-max-width px-gutter"
    >
      <h2
        id="all-services-heading"
        className="mb-3 text-headline-md font-semibold text-primary"
      >
        جميع خدماتنا في الرياض
      </h2>
      <p className="mb-8 max-w-2xl text-body-lg text-on-surface-muted">
        صفحة مستقلة لكل خدمة — محتوى تفصيلي، معاينة مجانية، وضمان معتمد.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {servicePagesMeta.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="shadow-soft-md flex h-full flex-col rounded-2xl bg-white p-6 transition-shadow hover:shadow-soft-lg"
            >
              <span className="mb-4 inline-flex w-fit rounded-lg bg-primary-fixed/30 p-2.5">
                <Icon name={service.icon} size="md" className="text-primary" />
              </span>
              <span className="text-card-title mb-3 block">{service.keyword}</span>
              <span className="text-card-body flex-grow line-clamp-3">
                {service.description}
              </span>
              <span className="text-card-link mt-5 inline-flex items-center gap-1">
                اقرأ الدليل الكامل
                <Icon name="arrow_forward" size="sm" className="rtl:rotate-180" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
