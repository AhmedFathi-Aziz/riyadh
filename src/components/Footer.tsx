import { OptimizedImage } from "@/components/OptimizedImage";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "خدماتنا" },
  { href: "/insulation", label: "العزل" },
  { href: "/#testimonials", label: "آراء العملاء" },
  { href: "/contact", label: "اتصل بنا" },
];

const serviceLinks = siteConfig.services.map((s) => ({
  href: "/services",
  label: s.name,
}));

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary px-gutter py-margin-desktop text-on-primary rtl">
      <div className="mx-auto w-full max-w-max-width">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 flex items-center gap-4">
              <OptimizedImage
                src={siteConfig.logo.src}
                alt=""
                width={64}
                height={64}
                className="h-16 w-16 brightness-0 invert"
                aria-hidden
              />
              <span className="font-display text-headline-md font-extrabold">
                {siteConfig.name}
              </span>
            </div>
            <p className="mb-6 max-w-md opacity-80">
              نحن الشركة الرائدة في حلول كشف التسربات والعزل في منطقة الرياض.
              نجمع بين الخبرة المحلية والتقنيات العالمية لنضمن سلامة عقارك من
              أخطار المياه والرطوبة.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.website}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-secondary-container"
                aria-label="الموقع الإلكتروني"
              >
                <span className="material-symbols-outlined" aria-hidden>
                  public
                </span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-secondary-container"
                aria-label="البريد الإلكتروني"
              >
                <span className="material-symbols-outlined" aria-hidden>
                  mail
                </span>
              </a>
            </div>
          </div>

          <nav aria-label="روابط سريعة">
            <h3 className="mb-6 text-headline-md font-semibold">روابط سريعة</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-on-primary/80 transition-all hover:text-on-primary hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="خدماتنا">
            <h3 className="mb-6 text-headline-md font-semibold">خدماتنا</h3>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-on-primary/80 transition-all hover:text-on-primary hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-label-sm opacity-60">
            © {year} جميع الحقوق محفوظة لـ{siteConfig.legalName}
          </p>
          <div className="flex gap-6 text-label-sm opacity-60">
            <Link href="#" className="hover:text-on-primary">
              سياسة الخصوصية
            </Link>
            <Link href="#" className="hover:text-on-primary">
              الشروط والأحكام
            </Link>
            <Link href="/blog" className="hover:text-on-primary">
              المدونة
            </Link>
            <Link href="/#faq" className="hover:text-on-primary">
              الأسئلة الشائعة
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
