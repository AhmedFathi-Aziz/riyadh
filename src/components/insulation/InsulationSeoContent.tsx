import Link from "next/link";
import { insulationPage } from "@/lib/insulation-page";

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

export function InsulationSeoContent() {
  return (
    <section
      aria-labelledby="insulation-seo-heading"
      className="border-t border-outline-variant/20 bg-surface-container-low py-margin-desktop"
    >
      <div className="mx-auto max-w-max-width px-gutter">
        <div className="mx-auto max-w-3xl">
          <h2
            id="insulation-seo-heading"
            className="mb-8 text-headline-md font-semibold text-primary"
          >
            دليل عزل الأسطح في الرياض
          </h2>
          {insulationPage.seoSections.map((section) => (
            <div key={section.heading} className="mb-8">
              <h3 className="mb-3 text-body-lg font-bold text-primary">
                {section.heading}
              </h3>
              {section.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="mb-4 text-body-lg leading-relaxed text-on-surface-muted"
                >
                  {renderParagraph(p)}
                </p>
              ))}
            </div>
          ))}
          <ul className="mb-8 grid gap-2 sm:grid-cols-2">
            <li>
              <Link
                href="/services/roof-insulation-riyadh"
                className="font-semibold text-secondary hover:underline"
              >
                عزل أسطح بالرياض — التفاصيل
              </Link>
            </li>
            <li>
              <Link
                href="/services/foam-insulation-riyadh"
                className="font-semibold text-secondary hover:underline"
              >
                عزل فوم بالرياض
              </Link>
            </li>
            <li>
              <Link
                href="/services/عزل-مائي-بالرياض"
                className="font-semibold text-secondary hover:underline"
              >
                عزل مائي بالرياض
              </Link>
            </li>
            <li>
              <Link
                href="/services/عزل-حراري-بالرياض"
                className="font-semibold text-secondary hover:underline"
              >
                عزل حراري بالرياض
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
