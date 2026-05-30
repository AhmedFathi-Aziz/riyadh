import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  const { phoneDisplay, phoneE164, email, address } = siteConfig;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-surface-container py-margin-desktop"
    >
      <div className="mx-auto w-full max-w-max-width px-gutter">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="contact-heading"
            className="mb-4 text-headline-md font-semibold text-primary"
          >
            تواصل معنا في الرياض
          </h2>
          <p className="mb-8 text-on-surface-variant">
            اطلب معاينة مجانية أو استفساراً عن عزل الأسطح وكشف التسربات — فريقنا
            جاهز على مدار الساعة.
          </p>
          <address className="mb-8 space-y-3 not-italic text-on-surface">
            <p>
              <span className="font-semibold text-primary">الهاتف: </span>
              <a href={`tel:${phoneE164}`} className="hover:underline">
                {phoneDisplay}
              </a>
            </p>
            <p>
              <span className="font-semibold text-primary">البريد: </span>
              <a href={`mailto:${email}`} className="hover:underline">
                {email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-primary">الموقع: </span>
              {address.addressLocality}، المملكة العربية السعودية
            </p>
          </address>
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-primary px-8 py-3 font-bold text-on-primary transition-opacity hover:opacity-90"
          >
            صفحة اتصل بنا الكاملة
          </Link>
        </div>
      </div>
    </section>
  );
}
