import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { SiteHeader } from "@/components/SiteHeader";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WorkStepsSection } from "@/components/WorkStepsSection";
import { breadcrumbs } from "@/lib/seo/breadcrumbs";
import { GLOBAL_FAQS } from "@/lib/seo/page-faqs";
import { createPageMetadata } from "@/lib/seo";
import { DEFAULT_META_DESCRIPTION } from "@/lib/seo/constants";

export const metadata: Metadata = createPageMetadata({
  title: "كشف تسربات المياه بالرياض",
  description: DEFAULT_META_DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <PageStructuredData
        breadcrumbs={breadcrumbs.home()}
        faqs={GLOBAL_FAQS}
      />
      <SiteHeader activePage="home" />
      <main>
        <Hero />
        <Services />
        <WorkStepsSection />
        <Features />
        <Testimonials />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
