import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function InsulationFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary px-gutter py-margin-desktop text-on-primary rtl">
      <div className="mx-auto max-w-max-width">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 flex items-center gap-4">
              <OptimizedImage
                src={siteConfig.logo.src}
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="font-display text-headline-md font-extrabold">
                {siteConfig.name}
              </span>
            </div>
            <p className="mb-6 max-w-md leading-relaxed text-on-primary/70">
              الشركة الرائدة في مجال عزل الأسطح وكشف تسربات المياه في مدينة
              الرياض. نعتمد على التقنيات الألمانية والحلول الهندسية المبتكرة
              لضمان راحة عملائنا وحماية استثماراتهم العقارية.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.website}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-on-primary/10 transition-colors hover:bg-secondary"
                aria-label="وسائل التواصل"
              >
                <span className="material-symbols-outlined text-sm" aria-hidden>
                  social_leaderboard
                </span>
              </a>
              <a
                href={siteConfig.social.website}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-on-primary/10 transition-colors hover:bg-secondary"
                aria-label="مشاركة"
              >
                <span className="material-symbols-outlined text-sm" aria-hidden>
                  share
                </span>
              </a>
            </div>
          </div>

          <nav aria-label="روابط سريعة">
            <h3 className="mb-6 font-bold text-secondary-container">
              روابط سريعة
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-on-primary/80 transition-all hover:text-on-primary hover:underline"
                >
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-on-primary/80 transition-all hover:text-on-primary hover:underline"
                >
                  الشروط والأحكام
                </Link>
              </li>
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
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  href="/services#leak-detection"
                  className="text-on-primary/80 transition-all hover:text-on-primary hover:underline"
                >
                  فحص تسربات المياه
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="mb-6 font-bold text-secondary-container">
              تواصل معنا
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-on-primary/80">
                <span
                  className="material-symbols-outlined text-secondary-container"
                  aria-hidden
                >
                  location_on
                </span>
                <span>الرياض، حي الصحافة، طريق الملك فهد</span>
              </div>
              <div className="flex items-center gap-3 text-on-primary/80">
                <span
                  className="material-symbols-outlined text-secondary-container"
                  aria-hidden
                >
                  call
                </span>
                <a href={`tel:${siteConfig.phoneE164}`} className="hover:underline">
                  0500 000 000
                </a>
              </div>
              <div className="flex items-center gap-3 text-on-primary/80">
                <span
                  className="material-symbols-outlined text-secondary-container"
                  aria-hidden
                >
                  mail
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-on-primary/10 pt-8 text-sm text-on-primary/60 md:flex-row">
          <p>© {year} جميع الحقوق محفوظة لـ{siteConfig.legalName}</p>
          <div className="flex gap-6">
            <span>تحت إشراف هندسي متكامل</span>
            <span>ضمان يصل إلى 15 عاماً</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
