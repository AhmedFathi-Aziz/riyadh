import Link from "next/link";
import { areasPageIntro } from "@/lib/areas-page";

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

export function AreasSeoIntro() {
  return (
    <div className="mb-12 max-w-3xl space-y-4">
      {areasPageIntro.paragraphs.map((p) => (
        <p
          key={p.slice(0, 50)}
          className="text-body-lg leading-relaxed text-on-surface-variant"
        >
          {renderParagraph(p)}
        </p>
      ))}
      <p>
        <Link
          href="/contact"
          className="text-label-sm font-semibold text-secondary hover:underline"
        >
          احجز كشف تسربات في حيّك ←
        </Link>
      </p>
    </div>
  );
}
