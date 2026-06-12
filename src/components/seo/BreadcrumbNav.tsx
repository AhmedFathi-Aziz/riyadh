import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/seo/structured-data";

type BreadcrumbNavProps = {
  items: BreadcrumbItem[];
  /** آخر عنصر كنص فقط (الصفحة الحالية) */
  currentLabel?: string;
  className?: string;
  tone?: "default" | "on-dark";
};

export function BreadcrumbNav({
  items,
  currentLabel,
  className = "",
  tone = "default",
}: BreadcrumbNavProps) {
  const trail = currentLabel
    ? [...items.slice(0, -1), { ...items[items.length - 1]!, name: currentLabel }]
    : items;

  const linkClass =
    tone === "on-dark"
      ? "text-on-primary/75 hover:text-on-primary"
      : "hover:text-primary";
  const lastClass =
    tone === "on-dark" ? "text-on-primary" : "text-primary";
  const mutedClass =
    tone === "on-dark" ? "text-on-primary/45" : "text-on-surface-muted";

  return (
    <nav
      aria-label="مسار التنقل"
      className={`mb-6 overflow-x-auto overscroll-x-contain text-[13px] text-on-surface-variant [-webkit-overflow-scrolling:touch] sm:mb-8 sm:text-label-sm ${className}`}
    >
      <div className="flex min-w-min flex-nowrap items-center gap-x-2 whitespace-nowrap pb-0.5">
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1;
          return (
            <span key={`${item.path}-${index}`} className="inline-flex shrink-0 items-center">
              {index > 0 && (
                <span className={`mx-1.5 sm:mx-2 ${mutedClass}`}>/</span>
              )}
              {isLast ? (
                <span className={`max-w-[min(70vw,20rem)] truncate sm:max-w-none ${lastClass}`}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className={linkClass}>
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
