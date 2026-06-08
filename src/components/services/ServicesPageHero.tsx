import Link from "next/link";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/site";
import { primaryCta } from "@/lib/ui/button-styles";

export function ServicesPageHero() {
  const { phoneE164 } = siteConfig;

  return (
    <section className="mx-auto mb-12 max-w-max-width px-gutter text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary-container/10 px-4 py-1 text-label-sm text-secondary">
        <Icon name="verified" size="sm" className="text-secondary" />
        <span>أكثر من 500 مشروع في الرياض · ضمان حتى 10 سنوات</span>
      </div>
      <h1 className="mb-6 text-display-lg font-bold text-primary md:text-display-lg">
        كشف تسربات المياه وعزل الأسطح بالرياض
      </h1>
      <p className="mx-auto mb-4 max-w-3xl text-body-lg leading-relaxed text-on-surface-variant">
        <strong className="font-semibold text-primary">
          كشف تسربات المياه وعزل الأسطح بالرياض
        </strong>{" "}
        مع ManzilCare — معاينة مجانية، فحص بدون تكسير بأجهزة صوتية وحرارية،
        وعزل مائي وحراري بمواد معتمدة: فوم بولي يوريثان، بيتومين SBS/APP،
        وإيبوكسي للخزانات.
      </p>
      <p className="mx-auto mb-8 max-w-3xl text-body-md text-on-surface-muted">
        نغطي كل أحياء العاصمة — فلل، عمائر، مباني تجارية، ومستودعات. كل خدمة
        لها صفحة مستقلة بمحتوى فريد وأسئلة شائعة.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/contact"
          className={`inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-label-sm font-semibold transition-all hover:opacity-90 ${primaryCta}`}
        >
          <Icon name="calendar_today" size="sm" />
          معاينة مجانية
        </Link>
        <a
          href={`tel:${phoneE164}`}
          className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-2.5 text-label-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-on-primary"
        >
          <Icon name="call" size="sm" />
          اتصل الآن
        </a>
        <Link
          href="/insulation"
          className="inline-flex items-center gap-2 rounded-lg border border-outline-variant px-6 py-2.5 text-label-sm font-semibold text-primary transition-colors hover:bg-surface-container"
        >
          <Icon name="layers" size="sm" />
          صفحة العزل
        </Link>
      </div>
    </section>
  );
}
