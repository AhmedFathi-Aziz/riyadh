import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function BlogFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 w-full bg-primary px-gutter py-margin-desktop rtl">
      <div className="mx-auto mb-12 grid max-w-max-width grid-cols-1 gap-12 md:grid-cols-4">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="mb-6 inline-block">
            <OptimizedImage
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              sizes="200px"
              className="h-28 w-auto max-w-[200px] rounded-lg bg-white object-contain p-2 shadow-soft"
            />
          </Link>
          <p className="max-w-sm text-on-primary/70">
            الشركة الرائدة في مجال العزل المائي والحراري والكشف عن تسربات
            المياه في مدينة الرياض باستخدام أحدث التقنيات العالمية.
          </p>
        </div>

        <nav aria-label="روابط سريعة">
          <h3 className="mb-6 font-bold text-on-primary">روابط سريعة</h3>
          <ul className="space-y-4">
            <li>
              <Link
                href="/#faq"
                className="text-on-primary/80 transition-all hover:text-on-primary hover:underline"
              >
                الأسئلة الشائعة
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-on-primary/80 transition-all hover:text-on-primary hover:underline"
              >
                فحص تسربات المياه
              </Link>
            </li>
            <li>
              <Link
                href="/insulation"
                className="text-on-primary/80 transition-all hover:text-on-primary hover:underline"
              >
                خدمات العزل
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="mb-6 font-bold text-on-primary">تواصل معنا</h3>
          <div className="flex flex-col gap-4 text-on-primary/80">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary" aria-hidden>
                call
              </span>
              <a href={`tel:${siteConfig.phoneE164}`} dir="ltr" className="hover:underline">
                {siteConfig.phoneE164}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-secondary"
                aria-hidden
              >
                location_on
              </span>
              <span>الرياض، المملكة العربية السعودية</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-on-primary/10 pt-12 text-center">
        <p className="text-label-sm text-on-primary/60">
          © {year} جميع الحقوق محفوظة لـ{siteConfig.legalName}
        </p>
      </div>
    </footer>
  );
}
