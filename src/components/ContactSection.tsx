import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  const { phoneDisplay, phoneE164, email, address, whatsapp } = siteConfig;
  const waText = encodeURIComponent(
    "مرحباً، أريد حجز معاينة مجانية في الرياض",
  );

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
            تواصل معنا — كشف تسربات المياه بالرياض
          </h2>
          <p className="mb-8 text-on-surface-variant">
            اطلب معاينة مجانية لـ<strong className="font-semibold text-primary">
              {" "}
              كشف تسربات المياه بالرياض
            </strong>{" "}
            أو استفساراً عن عزل الأسطح والخزانات — فريق ManzilCare جاهز في كل
            أحياء العاصمة.
          </p>
          <address className="mb-8 space-y-3 not-italic text-on-surface">
            <p>
              <span className="font-semibold text-primary">الهاتف: </span>
              <a href={`tel:${phoneE164}`} className="hover:underline">
                {phoneDisplay}
              </a>
            </p>
            <p>
              <span className="font-semibold text-primary">واتساب: </span>
              <a
                href={`https://wa.me/${whatsapp}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                راسلنا الآن
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
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-primary px-8 py-3 font-bold text-on-primary transition-opacity hover:opacity-90"
            >
              صفحة اتصل بنا الكاملة
            </Link>
            <a
              href={`tel:${phoneE164}`}
              className="inline-flex rounded-lg border border-primary px-8 py-3 font-bold text-primary transition-colors hover:bg-primary hover:text-on-primary"
            >
              اتصل الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
