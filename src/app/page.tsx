import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HomeSeoContent } from "@/components/home/HomeSeoContent";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { SiteHeader } from "@/components/SiteHeader";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WorkStepsSection } from "@/components/WorkStepsSection";
import { homePageMeta } from "@/lib/home-page";
import { jsonLdGraphPath } from "@/lib/seo/jsonld-graph-path";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: homePageMeta.title,
  description: homePageMeta.description,
  path: homePageMeta.path,
  keywords: [
    "كشف تسربات المياه بالرياض",
    "كشف تسربات بدون تكسير",
    "شركة كشف تسربات الرياض",
    "عزل أسطح بالرياض",
    "ManzilCare",
  ],
});

export default function HomePage() {
  return (
    <>
      <PageStructuredData graphPath={jsonLdGraphPath.home()} />
      <SiteHeader activePage="home" />
      <main>
        <Hero />
        <Services />
        <WorkStepsSection />
        <Features />
        <HomeSeoContent />
        <Testimonials />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
