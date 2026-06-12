import { Icon } from "@/components/Icon";
import { aboutEquipment } from "@/lib/about-page";

const tabIcons = ["hearing", "layers", "fact_check"] as const;
const tabIds = ["equip-detect", "equip-apply", "equip-test"] as const;

export function AboutEquipmentTabs() {
  return (
    <div className="about-equipment-panel about-equipment-tabs overflow-hidden rounded-3xl border border-outline-variant/25 bg-white shadow-soft-lg">
      {aboutEquipment.categories.map((cat, i) => (
        <input
          key={tabIds[i]}
          type="radio"
          name="about-equipment-tab"
          id={tabIds[i]}
          className="about-equipment-tab-input"
          defaultChecked={i === 0}
          aria-controls={`equip-panel-${i}`}
        />
      ))}

      <div
        role="tablist"
        aria-label="فئات المعدات"
        className="about-equipment-tablist flex flex-col gap-1 border-b border-outline-variant/20 bg-white p-2 sm:flex-row"
      >
        {aboutEquipment.categories.map((cat, i) => (
          <label
            key={cat.title}
            htmlFor={tabIds[i]}
            role="tab"
            id={`equip-tab-${i}`}
            className="about-equipment-tab-label flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 text-label-sm font-semibold transition-all"
          >
            <Icon name={tabIcons[i] ?? "build"} size="sm" />
            {cat.title}
          </label>
        ))}
      </div>

      <div className="about-equipment-panels">
        {aboutEquipment.categories.map((cat, i) => (
          <div
            key={cat.title}
            role="tabpanel"
            id={`equip-panel-${i}`}
            aria-labelledby={`equip-tab-${i}`}
            className="about-equipment-panel-content p-6 sm:p-8"
            data-panel={i}
          >
            <ul className="grid gap-3 sm:grid-cols-2">
              {cat.items.map((item) => (
                <li
                  key={item.slice(0, 40)}
                  className="about-equipment-item flex gap-3 rounded-xl border border-outline-variant/15 bg-white p-4 transition-colors hover:border-secondary/30 hover:bg-secondary-container/5"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon name="check" size="sm" className="text-secondary" />
                  </span>
                  <span className="text-body-md leading-relaxed text-on-surface-variant">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
