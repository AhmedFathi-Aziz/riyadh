import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function ServicesFooter() {
  const year = new Date().getFullYear();
  const { phoneE164, email, address } = siteConfig;

  return (
    <footer className="w-full bg-primary px-gutter py-margin-desktop rtl">
      <div className="mx-auto mb-12 grid max-w-max-width grid-cols-1 gap-12 md:grid-cols-3">
        <div>
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
          <p className="mb-6 text-body-md leading-relaxed text-on-primary/80">
            الشركة الرائدة في حلول العزل وكشف التسربات في منطقة الرياض، نجمع
            بين التكنولوجيا الحديثة والخبرة المحلية لحماية استثماراتكم.
          </p>
          <div className="flex gap-4">
            <a
              href={siteConfig.social.website}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-on-primary/20 text-on-primary transition-all hover:bg-on-primary/10"
              aria-label="مشاركة"
            >
              <span className="material-symbols-outlined" aria-hidden>
                share
              </span>
            </a>
            <a
              href={siteConfig.social.website}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-on-primary/20 text-on-primary transition-all hover:bg-on-primary/10"
              aria-label="الموقع"
            >
              <span className="material-symbols-outlined" aria-hidden>
                public
              </span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-2">
          <nav aria-label="روابط سريعة">
            <h3 className="mb-6 text-headline-md font-semibold text-on-primary">
              روابط سريعة
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-body-md text-on-primary/80 transition-all hover:text-on-primary hover:underline"
                >
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-body-md text-on-primary/80 transition-all hover:text-on-primary hover:underline"
                >
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-body-md text-on-primary/80 transition-all hover:text-on-primary hover:underline"
                >
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link
                  href="/services#leak-detection"
                  className="text-body-md text-on-primary/80 transition-all hover:text-on-primary hover:underline"
                >
                  فحص تسربات المياه
                </Link>
              </li>
              <li>
                <Link
                  href="/insulation"
                  className="text-body-md text-on-primary/80 transition-all hover:text-on-primary hover:underline"
                >
                  خدمات العزل
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="mb-6 text-headline-md font-semibold text-on-primary">
              تواصل معنا
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-on-primary/80">
                <span
                  className="material-symbols-outlined text-secondary-container"
                  aria-hidden
                >
                  location_on
                </span>
                <span className="text-body-md">
                  {address.addressLocality}، المملكة العربية السعودية
                </span>
              </li>
              <li className="flex items-center gap-3 text-on-primary/80">
                <span
                  className="material-symbols-outlined text-secondary-container"
                  aria-hidden
                >
                  call
                </span>
                <a
                  href={`tel:${phoneE164}`}
                  dir="ltr"
                  className="text-body-md hover:underline"
                >
                  +966 500 000 000
                </a>
              </li>
              <li className="flex items-center gap-3 text-on-primary/80">
                <span
                  className="material-symbols-outlined text-secondary-container"
                  aria-hidden
                >
                  mail
                </span>
                <a
                  href={`mailto:${email}`}
                  className="text-body-md hover:underline"
                >
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-max-width flex-col items-center justify-between gap-4 border-t border-on-primary/10 pt-8 md:flex-row">
        <p className="text-label-sm text-on-primary/60">
          © {year} جميع الحقوق محفوظة لـ{siteConfig.legalName}
        </p>
        <div className="flex gap-6" aria-hidden>
          <span className="material-symbols-outlined text-4xl text-secondary-container">
            verified_user
          </span>
          <span className="material-symbols-outlined text-4xl text-secondary-container">
            shield_with_heart
          </span>
        </div>
      </div>
    </footer>
  );
}
