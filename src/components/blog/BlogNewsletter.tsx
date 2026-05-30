import { NewsletterForm } from "@/components/blog/NewsletterForm";

export function BlogNewsletter() {
  return (
    <section
      aria-labelledby="newsletter-heading"
      className="relative mt-24 overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center"
    >
      <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
      <h2 id="newsletter-heading" className="sr-only">
        النشرة البريدية
      </h2>
      <NewsletterForm />
    </section>
  );
}
