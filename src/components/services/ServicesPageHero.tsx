import Link from "next/link";
import { Icon } from "@/components/Icon";

export function ServicesPageHero() {
  return (
    <section className="mx-auto mb-20 max-w-max-width px-gutter text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary-container/10 px-4 py-1 text-label-sm text-secondary">
        <Icon name="verified" size="sm" className="text-secondary" />
        <span>خبراء العزل المعتمدون في الرياض</span>
      </div>
      <h1 className="mb-6 text-display-lg font-bold text-primary md:text-display-lg">
        كشف تسربات المياه وعزل الأسطح بالرياض
      </h1>
      <p className="mx-auto mb-8 max-w-3xl text-body-lg leading-relaxed text-on-surface-variant">
        نقدم حلولاً احترافية لحماية منزلك وممتلكاتك من مخاطر التسربات والرطوبة
        باستخدام أحدث التقنيات العالمية والكوادر الهندسية المتخصصة.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/insulation"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-label-sm text-on-primary transition-all hover:opacity-90"
        >
          <Icon name="layers" size="sm" />
          صفحة العزل الاحترافية
        </Link>
      </div>
    </section>
  );
}
