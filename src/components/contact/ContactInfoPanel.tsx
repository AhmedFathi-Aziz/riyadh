import Link from "next/link";
import { Icon } from "@/components/Icon";
import { serviceAreas } from "@/lib/contact-page";
import { formatPhoneDisplay, formatSiteAddress, siteConfig } from "@/lib/site";
import { primaryCtaOnDark } from "@/lib/ui/button-styles";

const contactMethods = [
  {
    icon: "call",
    title: "اتصل مباشرة",
    value: formatPhoneDisplay(),
    href: `tel:${siteConfig.phoneE164}`,
    dir: "ltr" as const,
  },
  {
    icon: "chat",
    title: "واتساب",
    value: "رد فوري على مدار الساعة",
    href: `https://wa.me/${siteConfig.whatsapp}`,
    external: true,
  },
  {
    icon: "mail",
    title: "البريد الإلكتروني",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    dir: "ltr" as const,
  },
  {
    icon: "location_on",
    title: "العنوان",
    value: formatSiteAddress(),
    href: `https://www.google.com/maps/search/?api=1&query=${siteConfig.geo.latitude},${siteConfig.geo.longitude}`,
    external: true,
  },
  {
    icon: "schedule",
    title: "ساعات العمل",
    value: "يومياً من 8 صباحاً حتى 10 مساءً — طوارئ 24/7",
    href: `tel:${siteConfig.phoneE164}`,
  },
];

export function ContactInfoPanel() {
  const mapsQuery = encodeURIComponent(
    `${siteConfig.name} ${siteConfig.address.addressLocality}`,
  );

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4 text-headline-md font-semibold text-primary">
          قنوات التواصل
        </h2>
        <ul className="space-y-4">
          {contactMethods.map((method) => (
            <li key={method.title}>
              <Link
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 rounded-2xl border border-outline-variant/30 bg-surface-container-low p-4 transition-colors hover:border-secondary/40 hover:bg-surface-container"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-on-primary">
                  <Icon name={method.icon} size="md" />
                </span>
                <div>
                  <p className="font-bold text-primary">{method.title}</p>
                  <p
                    className="text-on-surface-variant"
                    dir={method.dir}
                  >
                    {method.value}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl bg-primary p-6 text-on-primary">
        <h3 className="mb-3 font-bold">معاينة مجانية</h3>
        <p className="mb-4 text-sm opacity-90">
          نقدم معاينة وفحص أولي لحالة العزل أو التسربات في منزلك أو مبناك التجاري
          بالرياض — بدون التزام.
        </p>
        <Link
          href={`tel:${siteConfig.phoneE164}`}
          className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold ${primaryCtaOnDark}`}
        >
          <Icon name="calendar_today" size="sm" className="text-primary" />
          احجز موعدك
        </Link>
      </div>

      <div>
        <h3 className="mb-3 text-headline-md font-semibold text-primary">
          نغطي أحياء الرياض
        </h3>
        <ul className="flex flex-wrap gap-2">
          {serviceAreas.map((area) => (
            <li
              key={area}
              className="rounded-full bg-surface-container-high px-3 py-1 text-label-sm text-on-surface-variant"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-outline-variant py-8 text-secondary transition-colors hover:border-secondary hover:bg-surface-container-low"
      >
        <Icon name="map" size="lg" />
        <span className="font-bold">عرض موقعنا على خرائط جوجل</span>
      </Link>
    </div>
  );
}
