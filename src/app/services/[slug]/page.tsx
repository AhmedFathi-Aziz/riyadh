import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { preload } from "react-dom";
import { ServicePageCta } from "@/components/services/ServicePageCta";
import { ServicePageHero } from "@/components/services/ServicePageHero";
import { ServiceTrustBar } from "@/components/services/ServiceTrustBar";
import { ServiceTableOfContents } from "@/components/services/ServiceTableOfContents";
import { ServiceMarkdown } from "@/components/services/ServiceMarkdown";
import { ServiceMidCta } from "@/components/services/ServiceMidCta";
import { ServiceAreasSection } from "@/components/services/ServiceAreasSection";
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
import {
  extractServiceToc,
  prepareServiceMarkdown,
  stripAreasSectionFromBody,
} from "@/lib/services/prepare-markdown";
import { getServiceMetaBySlug } from "@/lib/services/service-pages-meta";
import { getServicePageImages } from "@/lib/media/service-page-images";
import { getResponsiveImageSources } from "@/lib/media/responsive-image";
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
  const cleanedContent = prepareServiceMarkdown(page.content);
  const markdownFaqs = extractFaqFromMarkdown(cleanedContent);
  const faqs = getFaqsForPage({
    extras: markdownFaqs,
    serviceSlug: page.slug,
    max: 5,
  });
  const bodyContent = stripFaqSection(cleanedContent);
  const { body: articleBody, areasIntro } =
    stripAreasSectionFromBody(bodyContent);
  const toc = [
    ...extractServiceToc(articleBody),
    { id: "service-areas", title: "أحياء نغطيها في الرياض" },
  ];
  const crumb = breadcrumbs.service(page.keyword, page.slug);

  const related = page.relatedSlugs
    .map((s) => getServiceMetaBySlug(s))
    .filter(Boolean);
  const pageImages = getServicePageImages(page.slug);
  const heroImage = pageImages?.hero ?? {
    src: `/images/${page.coverImage}`,
    alt: page.imageAlt,
    width: 1200,
    height: 675,
  };
  const lcpHero = getResponsiveImageSources(heroImage.src, { lcp: true });
  preload(lcpHero.src, { as: "image", fetchPriority: "high" });

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
      <article className="mx-auto max-w-max-width overflow-x-hidden px-4 pb-16 pt-24 sm:px-gutter sm:pb-20 sm:pt-28 md:pt-32">
        <BreadcrumbNav items={crumb} />

        <ServicePageHero
          title={page.keyword}
          description={page.description}
          icon={page.icon}
          image={{ src: heroImage.src, alt: heroImage.alt }}
        />

        <ServiceTrustBar />

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-12 lg:hidden">
            <ServiceTableOfContents
              items={toc}
              serviceName={page.keyword}
              layout="mobile"
            />
          </div>

          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-6.5rem)] xl:top-28">
              <ServiceTableOfContents
                items={toc}
                serviceName={page.keyword}
                layout="desktop"
              />
            </div>
          </aside>

          <div className="min-w-0 lg:col-span-9">
            <ServiceMarkdown content={articleBody} />
            <ServiceMidCta serviceName={page.keyword} />

            <StandardPageSections
              faqs={faqs}
              servicesIntro={`خدمات مكمّلة لـ${page.keyword} في الرياض:`}
            />

            <ServicePageCta serviceName={page.keyword} />

            {related.length > 0 && (
              <section className="mt-12 border-t border-outline-variant/30 pt-8 sm:mt-16 sm:pt-12">
                <h2 className="mb-2 text-xl font-bold text-primary sm:text-headline-md">
                  خدمات ذات صلة
                </h2>
                <p className="mb-5 text-body-md text-on-surface-muted sm:mb-6">
                  قد تحتاج أيضاً إلى هذه الخدمات في الرياض
                </p>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  {related.map((r) =>
                    r ? (
                      <li key={r.slug}>
                        <Link
                          href={`/services/${r.slug}`}
                          className="group flex h-full flex-col rounded-2xl border border-outline-variant/25 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-soft-md"
                        >
                          <span className="mb-3 flex size-10 items-center justify-center rounded-xl bg-secondary-container/15 text-secondary transition-colors group-hover:bg-secondary group-hover:text-on-secondary">
                            <Icon name={r.icon} size="md" />
                          </span>
                          <span className="font-bold text-primary">
                            {r.keyword}
                          </span>
                          <p className="mt-2 flex-1 text-label-sm leading-relaxed text-on-surface-muted line-clamp-3">
                            {r.description}
                          </p>
                          <span className="mt-4 inline-flex items-center gap-1 text-label-sm font-semibold text-secondary">
                            اقرأ المزيد
                            <Icon
                              name="arrow_back"
                              size="sm"
                              className="transition-transform group-hover:-translate-x-1"
                            />
                          </span>
                        </Link>
                      </li>
                    ) : null,
                  )}
                </ul>
              </section>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-outline-variant/20 pt-8 sm:mt-16 sm:pt-12">
          <ServiceAreasSection
            serviceSlug={page.slug}
            intro={areasIntro || undefined}
          />
        </div>
      </article>
      <ServicesFooter />
    </>
  );
}
