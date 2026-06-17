import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import { formatSiteAddress, siteConfig } from "@/lib/site";

export function ServicesFooter() {
  const year = new Date().getFullYear();
  const { phoneE164, email } = siteConfig;

  return (
    <footer className="w-full bg-primary px-4 py-12 text-on-primary sm:px-gutter sm:py-margin-desktop rtl">
      <div className="mx-auto mb-10 grid max-w-max-width grid-cols-1 gap-10 sm:mb-12 sm:gap-12 md:grid-cols-3">
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

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 md:col-span-2">
          <nav aria-label="روابط سريعة">
            <h3 className="mb-4 text-lg font-semibold sm:mb-6 sm:text-headline-md">
              روابط سريعة
            </h3>
            <ul className="space-y-3 sm:space-y-4">
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
            <h3 className="mb-4 text-lg font-semibold sm:mb-6 sm:text-headline-md">
              تواصل معنا
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-on-primary/80">
                <span
                  className="material-symbols-outlined mt-0.5 shrink-0 text-secondary-container"
                  aria-hidden
                >
                  location_on
                </span>
                <span className="min-w-0 flex-1 text-body-md leading-relaxed">
                  {formatSiteAddress()}
                </span>
              </li>
              <li className="flex items-start gap-3 text-on-primary/80">
                <span
                  className="material-symbols-outlined mt-0.5 shrink-0 text-secondary-container"
                  aria-hidden
                >
                  call
                </span>
                <a
                  href={`tel:${phoneE164}`}
                  dir="ltr"
                  className="min-w-0 whitespace-nowrap text-body-md hover:underline"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3 text-on-primary/80">
                <span
                  className="material-symbols-outlined mt-0.5 shrink-0 text-secondary-container"
                  aria-hidden
                >
                  mail
                </span>
                <a
                  href={`mailto:${email}`}
                  className="min-w-0 break-all text-body-md hover:underline sm:break-normal"
                >
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-max-width flex-col items-center justify-between gap-4 border-t border-on-primary/10 pt-6 text-center sm:pt-8 md:flex-row md:text-start">
        <p className="text-label-sm text-on-primary/60">
          © {year} جميع الحقوق محفوظة لـ{siteConfig.legalName}
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6" aria-hidden>
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
