import { Icon } from "@/components/Icon";

const TRUST_ITEMS = [
  { icon: "search_check", label: "تشخيص قبل التكسير" },
  { icon: "photo_camera", label: "تقرير مصور" },
  { icon: "hearing", label: "أجهزة كشف حديثة" },
  { icon: "verified", label: "ضمان مكتوب" },
] as const;

export function ServiceTrustBar() {
  return (
    <div className="mb-8 grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 sm:mb-10 sm:gap-3 lg:grid-cols-4">
      {TRUST_ITEMS.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-3 rounded-xl border border-outline-variant/25 bg-white px-3 py-3 shadow-soft sm:rounded-2xl sm:px-4 sm:py-4"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary-container/15 text-secondary sm:size-11 sm:rounded-xl">
            <Icon name={item.icon} size="md" />
          </span>
          <span className="text-[13px] font-semibold leading-snug text-primary sm:text-label-sm">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
