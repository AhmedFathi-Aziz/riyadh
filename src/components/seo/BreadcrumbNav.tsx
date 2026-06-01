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
      className="mb-6 overflow-x-auto overscroll-x-contain text-[13px] text-on-surface-variant [-webkit-overflow-scrolling:touch] sm:mb-8 sm:text-label-sm"
    >
      <div className="flex min-w-min flex-nowrap items-center gap-x-2 whitespace-nowrap pb-0.5">
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1;
          return (
            <span key={`${item.path}-${index}`} className="inline-flex shrink-0 items-center">
              {index > 0 && (
                <span className="mx-1.5 text-on-surface-muted sm:mx-2">/</span>
              )}
              {isLast ? (
                <span className="max-w-[min(70vw,20rem)] truncate text-primary sm:max-w-none">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-primary">
                  {item.name}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
