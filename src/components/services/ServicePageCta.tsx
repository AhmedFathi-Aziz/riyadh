import Link from "next/link";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/site";

type ServicePageCtaProps = {
  serviceName: string;
};

export function ServicePageCta({ serviceName }: ServicePageCtaProps) {
  const waText = encodeURIComponent(
    `السلام عليكم، أريد استفساراً عن: ${serviceName}`,
  );

  return (
    <section className="mt-16 rounded-2xl bg-primary p-8 text-on-primary md:p-12">
      <h2 className="mb-4 text-headline-md font-bold">
        احجز معاينة مجانية في الرياض
      </h2>
      <p className="mb-8 max-w-2xl text-body-lg opacity-90">
        فريق {siteConfig.name} جاهز لتقييم حالتك وتقديم تقرير واضح مع خطة عمل
        وضمان مكتوب — دون مفاجآت في السعر.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href={`tel:${siteConfig.phoneE164}`}
          className="inline-flex items-center gap-2 rounded-xl bg-secondary-container px-8 py-3 font-bold text-on-secondary-container"
        >
          <Icon name="call" size="sm" />
          اتصل الآن
        </a>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-on-primary/40 px-8 py-3 font-bold"
        >
          <Icon name="chat" size="sm" />
          واتساب
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl border border-on-primary/40 px-8 py-3 font-bold"
        >
          نموذج التواصل
        </Link>
      </div>
    </section>
  );
}
