import { ContactSection } from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";
import { Features } from "@/components/Features";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SiteHeader } from "@/components/SiteHeader";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <SiteHeader activePage="home" />
      <main>
        <Hero />
        <Features />
        <Services />
        <Testimonials />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
