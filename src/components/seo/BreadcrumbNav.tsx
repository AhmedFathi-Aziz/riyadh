import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/seo/structured-data";

type BreadcrumbNavProps = {
  items: BreadcrumbItem[];
  /** آخر عنصر كنص فقط (الصفحة الحالية) */
  currentLabel?: string;
};

export function BreadcrumbNav({ items, currentLabel }: BreadcrumbNavProps) {
  const trail = currentLabel
    ? [...items.slice(0, -1), { ...items[items.length - 1]!, name: currentLabel }]
    : items;

  return (
    <nav
      aria-label="مسار التنقل"
      className="mb-8 text-label-sm text-on-surface-variant"
    >
      {trail.map((item, index) => {
        const isLast = index === trail.length - 1;
        return (
          <span key={`${item.path}-${index}`}>
            {index > 0 && <span className="mx-2">/</span>}
            {isLast ? (
              <span className="text-primary">{item.name}</span>
            ) : (
              <Link href={item.path} className="hover:text-primary">
                {item.name}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
