import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfoPanel } from "@/components/contact/ContactInfoPanel";
import { ContactPageJsonLd } from "@/components/contact/ContactPageJsonLd";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { contactPageMeta } from "@/lib/contact-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: contactPageMeta.title,
  description: contactPageMeta.description,
  path: contactPageMeta.path,
  keywords: [
    "اتصل بنا عزل الرياض",
    "رقم شركة عزل الرياض",
    "معاينة مجانية عزل",
    "كشف تسربات الرياض هاتف",
    "واتساب عزل مائي الرياض",
  ],
});

export default function ContactPage() {
  return (
    <>
      <ContactPageJsonLd />
      <SiteHeader activePage="contact" />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-max-width px-gutter">
          <nav
            aria-label="مسار التنقل"
            className="mb-6 text-label-sm text-on-surface-variant"
          >
            <Link href="/" className="hover:text-primary">
              الرئيسية
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">اتصل بنا</span>
          </nav>

          <header className="mb-12 text-center md:mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary-container/10 px-4 py-1 text-label-sm text-secondary">
              <span>نرد خلال دقائق</span>
            </div>
            <h1 className="mb-4 text-display-lg-mobile font-bold text-primary md:text-display-lg">
              اتصل بنا — عزل الرياض للمحترفين
            </h1>
            <p className="mx-auto max-w-2xl text-body-lg text-on-surface-variant">
              فريقنا في الرياض جاهز لاستقبال طلبات المعاينة المجانية، كشف
              التسربات، وعزل الأسطح والخزانات. تواصل بالطريقة الأنسب لك.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <ContactInfoPanel />
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
