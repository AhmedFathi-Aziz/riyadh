import Link from "next/link";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/site";
import { primaryCtaOnDark } from "@/lib/ui/button-styles";

type ServicePageCtaProps = {
  serviceName: string;
};

export function ServicePageCta({ serviceName }: ServicePageCtaProps) {
  const waText = encodeURIComponent(
    `السلام عليكم، أريد استفساراً عن: ${serviceName}`,
  );

  const btnOutline =
    "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-on-primary/40 px-6 py-3 text-label-sm font-bold sm:w-auto sm:min-w-[9.5rem]";

  return (
    <section
      id="service-cta"
      className="scroll-mt-24 mt-12 rounded-xl bg-primary p-5 text-on-primary sm:scroll-mt-28 sm:mt-16 sm:rounded-2xl sm:p-8 md:p-12"
    >
      <h2 className="mb-3 text-xl font-bold sm:mb-4 sm:text-headline-md">
        احجز معاينة مجانية في الرياض
      </h2>
      <p className="mb-6 max-w-2xl text-body-md opacity-90 sm:mb-8 sm:text-body-lg">
        فريق {siteConfig.name} جاهز لتقييم حالتك وتقديم تقرير واضح مع خطة عمل
        وضمان مكتوب — دون مفاجآت في السعر.
      </p>
      <div className="cta-row cta-row--stack-mobile">
        <a
          href={`tel:${siteConfig.phoneE164}`}
          className={`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-label-sm font-bold sm:w-auto ${primaryCtaOnDark}`}
        >
          <Icon name="call" size="sm" className="text-primary" />
          اتصل الآن
        </a>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className={btnOutline}
        >
          <Icon name="chat" size="sm" />
          واتساب
        </a>
        <Link href="/contact" className={btnOutline}>
          نموذج التواصل
        </Link>
      </div>
    </section>
  );
}
