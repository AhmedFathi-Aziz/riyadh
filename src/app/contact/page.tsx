import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfoPanel } from "@/components/contact/ContactInfoPanel";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { StandardPageSections } from "@/components/seo/StandardPageSections";
import { contactPageMeta } from "@/lib/contact-page";
import { breadcrumbs } from "@/lib/seo/breadcrumbs";
import { getFaqsForPage } from "@/lib/seo/page-faqs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "اتصل بنا — كشف تسربات وعزل بالرياض",
  titleSuffix: "معاينة مجانية 24/7",
  description: contactPageMeta.description,
  path: contactPageMeta.path,
  keywords: [
    "اتصل بنا ManzilCare",
    "رقم ManzilCare",
    "معاينة مجانية عزل",
    "كشف تسربات الرياض هاتف",
    "واتساب عزل مائي الرياض",
  ],
});

export default function ContactPage() {
  const crumb = breadcrumbs.contact();
  const faqs = getFaqsForPage();

  return (
    <>
      <PageStructuredData breadcrumbs={crumb} faqs={faqs} />
      <SiteHeader activePage="contact" />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-max-width px-gutter">
          <BreadcrumbNav items={crumb} />

          <header className="mb-12 text-center md:mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary-container/10 px-4 py-1 text-label-sm text-secondary">
              <span>نرد خلال دقائق</span>
            </div>
            <h1 className="mb-4 text-display-lg-mobile font-bold text-primary md:text-display-lg">
              اتصل بنا
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

          <StandardPageSections faqs={faqs} showServices={false} />
        </div>
      </main>
      <Footer />
    </>
  );
}
