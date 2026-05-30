import Link from "next/link";
import { Icon } from "@/components/Icon";
import { getAllNeighborhoodPages } from "@/lib/neighborhoods/load-neighborhoods";

export function AreasPromo() {
  const count = getAllNeighborhoodPages().length;

  return (
    <section className="mx-auto mt-16 max-w-max-width px-gutter">
      <div className="rounded-2xl border border-secondary/20 bg-secondary-container/10 p-8 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="mb-3 text-headline-md font-semibold text-primary">
              كشف تسربات في أحياء الرياض
            </h2>
            <p className="text-body-md text-on-surface-variant">
              {count} حيّاً بصفحة مخصّصة: وصف المنطقة، مشاكل التسرب الشائعة، أنواع
              المباني، والخدمات المناسبة — مثل النرجس، الياسمين، الملقا، قرطبة،
              والرمال.
            </p>
          </div>
          <Link
            href="/areas"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-8 py-3 font-bold text-on-primary"
          >
            جميع الأحياء
            <Icon name="arrow_forward" size="sm" className="rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
