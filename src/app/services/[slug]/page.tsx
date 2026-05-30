import type { Metadata } from "next";
import { BlogMarkdown } from "@/components/blog/BlogMarkdown";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServicePageCta } from "@/components/services/ServicePageCta";
import { ServicesFooter } from "@/components/ServicesFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Icon } from "@/components/Icon";
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { StandardPageSections } from "@/components/seo/StandardPageSections";
import {
  getAllServicePages,
  getServicePageBySlug,
} from "@/lib/services/load-pages";
import { getServiceMetaBySlug } from "@/lib/services/service-pages-meta";
import { breadcrumbs } from "@/lib/seo/breadcrumbs";
import { extractFaqFromMarkdown } from "@/lib/seo/extract-markdown-faq";
import { getFaqsForPage } from "@/lib/seo/page-faqs";
import { createPageMetadata } from "@/lib/seo";
import { buildServiceSchema } from "@/lib/seo/structured-data";
import { stripFaqSection } from "@/lib/seo/strip-markdown-faq";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServicePages().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePageBySlug(slug);
  if (!page) return {};

  return createPageMetadata({
    title: page.keyword,
    description: page.description,
    path: `/services/${page.slug}`,
    keywords: [
      page.keyword,
      `${page.keyword} شركة`,
      "ManzilCare",
      "معاينة مجانية",
    ],
  });
}

export default async function ServiceLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getServicePageBySlug(slug);
  if (!page) notFound();

  const pageUrl = `${siteConfig.url}/services/${page.slug}`;
  const markdownFaqs = extractFaqFromMarkdown(page.content);
  const faqs = getFaqsForPage({
    extras: markdownFaqs,
    serviceSlug: page.slug,
    max: 5,
  });
  const bodyContent = stripFaqSection(page.content);
  const crumb = breadcrumbs.service(page.keyword, page.slug);

  const related = page.relatedSlugs
    .map((s) => getServiceMetaBySlug(s))
    .filter(Boolean);

  return (
    <>
      <PageStructuredData
        breadcrumbs={crumb}
        faqs={faqs}
        extra={[
          buildServiceSchema({
            name: page.keyword,
            description: page.description,
            pageUrl,
          }),
        ]}
      />
      <SiteHeader activePage="services" />
      <article className="mx-auto max-w-max-width px-gutter pt-32 pb-20">
        <BreadcrumbNav items={crumb} />

        <header className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary-container/10 px-4 py-1 text-label-sm text-secondary">
            <Icon name={page.icon} size="sm" />
            <span>خدمة معتمدة في الرياض</span>
          </div>
          <h1 className="mb-4 text-display-lg-mobile font-bold text-primary md:text-display-lg">
            {page.keyword}
          </h1>
          <p className="max-w-3xl text-body-lg text-on-surface-variant">
            {page.description}
          </p>
        </header>

        <BlogMarkdown content={bodyContent} />

        <StandardPageSections
          faqs={faqs}
          servicesIntro={`خدمات مكمّلة لـ${page.keyword} في الرياض:`}
        />

        <ServicePageCta serviceName={page.keyword} />

        {related.length > 0 && (
          <section className="mt-16 border-t border-outline-variant/30 pt-12">
            <h2 className="mb-6 text-headline-md font-semibold text-primary">
              خدمات ذات صلة
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) =>
                r ? (
                  <li key={r.slug}>
                    <Link
                      href={`/services/${r.slug}`}
                      className="block rounded-xl border border-outline-variant/30 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <span className="font-semibold text-primary">
                        {r.keyword}
                      </span>
                      <p className="mt-2 text-label-sm text-on-surface-variant line-clamp-2">
                        {r.description}
                      </p>
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
          </section>
        )}
      </article>
      <ServicesFooter />
    </>
  );
}
