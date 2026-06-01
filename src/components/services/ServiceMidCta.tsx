import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/site";

type ServiceMidCtaProps = {
  serviceName: string;
};

export function ServiceMidCta({ serviceName }: ServiceMidCtaProps) {
  return (
    <aside className="my-10 overflow-hidden rounded-xl border border-secondary/20 bg-gradient-to-l from-secondary-container/15 via-white to-surface-container-low p-4 sm:my-12 sm:rounded-2xl sm:p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
      <div className="mb-4 md:mb-0">
        <p className="mb-2 flex items-center gap-2 text-label-sm font-bold text-secondary">
          <Icon name="schedule" size="sm" className="shrink-0" />
          استجابة سريعة في الرياض
        </p>
        <h2 className="mb-2 text-xl font-bold text-primary sm:text-headline-md">
          لاحظت علامات تسرب؟ لا تنتظر
        </h2>
        <p className="max-w-xl text-body-md leading-relaxed text-on-surface-muted">
          احجز معاينة مجانية لـ{serviceName} — نحدد المصدر بدقة قبل أي تكسير غير
          ضروري.
        </p>
      </div>
      <a
        href={`tel:${siteConfig.phoneE164}`}
        className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3.5 text-label-sm font-bold text-on-secondary shadow-soft-md transition-transform hover:scale-[1.02] active:scale-[0.98] md:w-auto md:px-8"
      >
        <Icon name="call" size="sm" />
        اتصل الآن
      </a>
    </aside>
  );
}
