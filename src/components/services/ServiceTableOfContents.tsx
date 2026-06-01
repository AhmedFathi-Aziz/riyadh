"use client";

import { Icon } from "@/components/Icon";
import type { ServiceTocItem } from "@/lib/services/prepare-markdown";

type ServiceTableOfContentsProps = {
  items: ServiceTocItem[];
  serviceName: string;
  /** mobile: قائمة قابلة للطي | desktop: شريط جانبي ثابت */
  layout?: "mobile" | "desktop";
  className?: string;
};

function TocLinks({ items }: { items: ServiceTocItem[] }) {
  return (
    <ol className="max-h-[50vh] space-y-0.5 overflow-y-auto overscroll-contain border-r-2 border-surface-container-high pr-3 lg:max-h-[calc(100vh-12rem)]">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="block rounded-lg py-2 pr-2 text-label-sm leading-snug text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-secondary"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

function TocCta({ serviceName }: { serviceName: string }) {
  return (
    <div className="mt-5 rounded-xl bg-surface-container-low p-4">
      <p className="mb-2 text-label-sm font-semibold text-primary">
        تحتاج مساعدة سريعة؟
      </p>
      <p className="mb-3 text-label-sm leading-relaxed text-on-surface-muted">
        احجز معاينة مجانية لـ{serviceName} في حيّك بالرياض.
      </p>
      <a
        href="#service-cta"
        className="inline-flex w-full min-h-11 items-center justify-center rounded-lg bg-secondary px-4 py-2.5 text-label-sm font-bold text-on-secondary transition-opacity hover:opacity-90"
      >
        احجز الآن
      </a>
    </div>
  );
}

export function ServiceTableOfContents({
  items,
  serviceName,
  layout = "desktop",
  className = "",
}: ServiceTableOfContentsProps) {
  if (items.length === 0) return null;

  if (layout === "mobile") {
    return (
      <details
        className={`group rounded-2xl border border-outline-variant/25 bg-white shadow-soft open:shadow-soft-md ${className}`}
      >
        <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 p-4 text-label-sm font-bold text-primary [&::-webkit-details-marker]:hidden">
          <span className="flex items-center gap-2">
            <Icon name="toc" size="sm" className="text-secondary" />
            محتويات الصفحة ({items.length})
          </span>
          <Icon
            name="expand_more"
            size="sm"
            className="shrink-0 text-on-surface-muted transition-transform duration-200 group-open:rotate-180"
          />
        </summary>
        <div className="border-t border-outline-variant/15 px-4 pb-4 pt-3">
          <TocLinks items={items} />
          <TocCta serviceName={serviceName} />
        </div>
      </details>
    );
  }

  return (
    <nav
      aria-label="محتويات الصفحة"
      className={`rounded-2xl border border-outline-variant/25 bg-white p-4 shadow-soft sm:p-5 ${className}`}
    >
      <p className="mb-3 text-label-sm font-bold text-primary">في هذه الصفحة</p>
      <TocLinks items={items} />
      <TocCta serviceName={serviceName} />
    </nav>
  );
}
