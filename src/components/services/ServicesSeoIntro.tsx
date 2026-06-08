import Link from "next/link";
import { servicesPageIntro } from "@/lib/services-page";

function renderParagraph(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const match = part.match(/^\*\*([^*]+)\*\*$/);
    if (match) {
      return (
        <strong key={i} className="font-semibold text-primary">
          {match[1]}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function ServicesSeoIntro() {
  return (
    <section
      aria-labelledby="services-intro-heading"
      className="mx-auto mb-16 max-w-max-width px-gutter"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="services-intro-heading"
          className="mb-6 text-headline-md font-semibold text-primary"
        >
          {servicesPageIntro.heading}
        </h2>
        {servicesPageIntro.paragraphs.map((p) => (
          <p
            key={p.slice(0, 50)}
            className="mb-4 text-body-lg leading-relaxed text-on-surface-variant"
          >
            {renderParagraph(p)}
          </p>
        ))}
        <p className="mt-6">
          <Link
            href="/contact"
            className="text-label-sm font-semibold text-secondary hover:underline"
          >
            اطلب معاينة مجانية ←
          </Link>
        </p>
      </div>
    </section>
  );
}
