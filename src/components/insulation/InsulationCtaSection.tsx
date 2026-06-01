import Link from "next/link";
import { Icon } from "@/components/Icon";
import { LeadForm } from "@/components/insulation/LeadForm";
import { siteConfig } from "@/lib/site";
import { primaryCtaOnDark } from "@/lib/ui/button-styles";

export function InsulationCtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="mx-auto mb-margin-desktop max-w-max-width px-gutter rtl"
    >
      <div className="relative flex flex-col items-center justify-between gap-12 overflow-hidden rounded-[2.5rem] bg-primary p-10 text-on-primary md:flex-row md:p-16">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />

        <div className="relative z-10">
          <h2
            id="cta-heading"
            className="mb-6 text-display-lg-mobile font-bold md:text-display-lg"
          >
            جاهز لحماية عقارك؟
          </h2>
          <p className="mb-8 max-w-lg text-xl leading-relaxed opacity-90">
            اتصل بنا اليوم للحصول على فحص مجاني وتقرير مفصل عن حالة العزل في
            منزلك من خلال خبراء &quot;{siteConfig.name}&quot;.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-headline-md font-semibold ${primaryCtaOnDark}`}
            >
              <Icon name="call" size="md" className="text-primary" />
              اتصل الآن
            </a>
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-on-primary/20 bg-surface/10 px-8 py-4 text-headline-md font-semibold backdrop-blur-md transition-colors hover:bg-surface/20"
            >
              <Icon name="chat" size="md" />
              واتساب
            </Link>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-sm">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
