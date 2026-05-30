import Link from "next/link";
import { Icon } from "@/components/Icon";
import {
  ADVANTAGES,
  CORE_SERVICES_LINKS,
  WORK_STEPS,
} from "@/lib/seo/page-sections-data";
import type { FaqItem } from "@/lib/seo/structured-data";

type StandardPageSectionsProps = {
  faqs: FaqItem[];
  servicesIntro?: string;
  showServices?: boolean;
  showSteps?: boolean;
  showAdvantages?: boolean;
};

export function StandardPageSections({
  faqs,
  servicesIntro = "خدماتنا الأساسية في الرياض — كشف تسربات وعزل متكامل:",
  showServices = true,
  showSteps = true,
  showAdvantages = true,
}: StandardPageSectionsProps) {
  return (
    <div className="mt-16 space-y-16 border-t border-outline-variant/30 pt-16">
      {showServices && (
        <section id="our-services" aria-labelledby="our-services-heading">
          <h2
            id="our-services-heading"
            className="mb-6 text-headline-md font-semibold text-primary"
          >
            خدماتنا
          </h2>
          <p className="mb-6 max-w-3xl text-body-lg text-on-surface-muted">
            {servicesIntro}
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {CORE_SERVICES_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="shadow-soft block rounded-xl bg-white px-4 py-3 text-body-md font-semibold text-primary transition-shadow hover:shadow-soft-md"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <Link
              href="/services"
              className="text-label-sm font-semibold text-secondary hover:underline"
            >
              عرض جميع الخدمات
            </Link>
            {" · "}
            <Link
              href="/areas"
              className="text-label-sm font-semibold text-secondary hover:underline"
            >
              أحياء الرياض
            </Link>
          </p>
        </section>
      )}

      {showSteps && (
      <section id="work-steps" aria-labelledby="work-steps-heading">
        <h2
          id="work-steps-heading"
          className="mb-6 text-headline-md font-semibold text-primary"
        >
          خطوات العمل
        </h2>
        <ol className="grid gap-4 sm:grid-cols-2">
          {WORK_STEPS.map((item) => (
            <li
              key={item.step}
              className="shadow-soft-md flex gap-4 rounded-2xl bg-white p-5"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-body-md font-bold text-on-primary"
                aria-hidden
              >
                {item.step}
              </span>
              <div>
                <h3 className="mb-1 text-body-lg font-bold text-primary">
                  {item.title}
                </h3>
                <p className="text-body-md text-on-surface-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      )}

      {showAdvantages && (
      <section id="advantages" aria-labelledby="advantages-heading">
        <h2
          id="advantages-heading"
          className="mb-6 text-headline-md font-semibold text-primary"
        >
          المميزات
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {ADVANTAGES.map((item) => (
            <li
              key={item.title}
              className="shadow-soft-md rounded-2xl bg-white p-6"
            >
              <Icon
                name={item.icon}
                size="lg"
                className="mb-3 text-secondary"
              />
              <h3 className="mb-2 text-body-lg font-bold text-primary">
                {item.title}
              </h3>
              <p className="text-body-md text-on-surface-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
      )}

      <section id="faq" aria-labelledby="faq-heading">
        <h2
          id="faq-heading"
          className="mb-6 text-headline-md font-semibold text-primary"
        >
          الأسئلة الشائعة
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-card group">
              <summary className="faq-question cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden">
                {faq.question}
              </summary>
              <p className="faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
