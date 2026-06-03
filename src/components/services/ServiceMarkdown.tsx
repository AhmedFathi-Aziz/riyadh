import { Children, isValidElement, type ReactNode } from "react";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Icon } from "@/components/Icon";
import { getMarkdownImageDimensions } from "@/lib/media/service-page-images";
import {
  roofInsulationComparisonIntro,
  roofInsulationSystemsComparison,
  ServiceSystemsComparisonTable,
} from "@/components/services/ServiceSystemsComparisonTable";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

type ServiceMarkdownProps = {
  content: string;
  serviceSlug?: string;
};

function flattenMarkdownChildren(children: ReactNode): string {
  return Children.toArray(children)
    .map((child) => {
      if (typeof child === "string") return child;
      if (isValidElement<{ children?: ReactNode }>(child) && child.props.children) {
        return flattenMarkdownChildren(child.props.children);
      }
      return "";
    })
    .join("")
    .trim();
}

export function ServiceMarkdown({ content, serviceSlug }: ServiceMarkdownProps) {
  let h2Counter = 0;

  const components: Components = {
    h2: ({ children }) => {
      const id = `section-${h2Counter++}`;
      return (
        <h2
          id={id}
          className="scroll-mt-24 mt-10 mb-4 border-r-4 border-secondary bg-gradient-to-l from-surface-container-low/80 to-transparent py-2.5 pr-3 text-lg font-bold leading-snug text-primary sm:scroll-mt-28 sm:mt-12 sm:mb-5 sm:py-3 sm:pr-4 sm:text-headline-md"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const title = flattenMarkdownChildren(children);
      const showRoofComparison =
        serviceSlug === "roof-insulation-riyadh" &&
        title.includes("مقارنة سريعة");

      return (
        <>
          <h3 className="mt-5 mb-2.5 flex items-start gap-2 rounded-lg border border-outline-variant/20 bg-white px-3 py-2.5 text-base font-semibold leading-snug text-primary shadow-soft sm:mt-6 sm:mb-3 sm:items-center sm:rounded-xl sm:px-4 sm:py-3 sm:text-body-lg">
            <Icon
              name="table_chart"
              size="sm"
              className="mt-0.5 shrink-0 text-secondary sm:mt-0"
            />
            <span className="min-w-0 flex-1">{children}</span>
          </h3>
          {showRoofComparison ? (
            <ServiceSystemsComparisonTable
              columns={[...roofInsulationSystemsComparison.columns]}
              rows={[...roofInsulationSystemsComparison.rows]}
              intro={roofInsulationComparisonIntro}
              note={
                <>
                  <strong className="font-bold text-primary">
                    توجيه من الفريق:
                  </strong>{" "}
                  لا نختار النظام حسب السعر فقط؛ نختاره حسب العمر الافتراضي
                  للمبنى، واستخدام السطح (سكني، تقني، مشاة)، وميزانيتك على مدى
                  عشر سنوات — وليس يوم التنفيذ فقط.
                </>
              }
            />
          ) : null}
        </>
      );
    },
    p: ({ children }) => (
      <p className="text-body-md leading-[1.8] text-on-surface-variant sm:text-body-lg sm:leading-[1.85]">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="service-list-unordered my-4 space-y-3 rounded-xl border border-outline-variant/20 bg-surface-container-low/40 p-4 sm:my-5 sm:space-y-3.5 sm:rounded-2xl sm:p-5 md:p-6">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="service-list-ordered my-4 list-decimal space-y-2.5 rounded-xl border border-outline-variant/20 bg-white p-4 pr-7 sm:my-5 sm:space-y-3 sm:rounded-2xl sm:p-5 sm:pr-8 md:p-6 marker:font-bold marker:text-secondary">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="service-list-item text-[15px] leading-[1.75] text-on-surface-variant sm:text-body-lg sm:leading-relaxed [&>p]:m-0">
        <span className="service-list-item__body block min-w-0">{children}</span>
      </li>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="font-semibold text-secondary underline decoration-secondary/30 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary/40"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-primary">{children}</strong>
    ),
    hr: () => (
      <hr className="my-10 border-0 border-t border-outline-variant/30" />
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-5 rounded-xl border border-secondary/25 border-r-4 border-r-secondary bg-gradient-to-l from-secondary/8 to-transparent px-4 py-3.5 text-body-md leading-[1.8] text-on-surface-variant sm:my-6 sm:px-5 sm:py-4 sm:text-body-lg [&>p]:m-0">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div
        className="service-table-wrap -mx-1 my-5 overflow-x-auto rounded-xl border border-outline-variant/25 bg-white shadow-soft sm:mx-0 sm:my-6"
        tabIndex={0}
        role="region"
        aria-label="جدول مقارنة"
      >
        <table
          dir="rtl"
          className="service-comparison-table w-full min-w-[44rem] border-collapse text-right text-[13px] leading-relaxed sm:min-w-[48rem] sm:text-sm"
        >
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-primary text-on-primary">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-outline-variant/15">{children}</tbody>
    ),
    tr: ({ children }) => (
      <tr className="bg-white even:bg-surface-container-low/50">{children}</tr>
    ),
    th: ({ children }) => (
      <th
        scope="col"
        className="whitespace-normal px-3 py-3.5 align-middle text-[13px] font-bold leading-snug sm:px-4 sm:py-4 sm:text-sm first:min-w-[6.5rem]"
      >
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="whitespace-normal px-3 py-3 align-top text-on-surface-variant sm:px-4 sm:py-3.5 first:min-w-[6.5rem] first:font-semibold first:text-primary">
        {children}
      </td>
    ),
    img: ({ src, alt }) => {
      if (!src || typeof src !== "string" || !src.startsWith("/images/")) {
        return null;
      }

      const dims = getMarkdownImageDimensions(src);

      if (dims) {
        return (
          <figure className="-mx-1 my-8 overflow-hidden rounded-xl border border-outline-variant/20 shadow-soft-md sm:mx-0 sm:my-10 sm:rounded-2xl">
            <div className="flex w-full justify-center bg-white p-2 sm:p-3">
              <OptimizedImage
                src={src}
                alt={alt ?? ""}
                width={dims.width}
                height={dims.height}
                loading="lazy"
                quality={90}
                sizes="(max-width: 640px) 100vw, (max-width: 1080px) min(90vw, 1024px)"
                className="h-auto max-h-[min(85vh,1536px)] w-full max-w-full object-contain"
                style={{ aspectRatio: `${dims.width} / ${dims.height}` }}
              />
            </div>
            {alt ? (
              <figcaption className="bg-white px-4 py-3 text-label-sm text-on-surface-muted">
                {alt}
              </figcaption>
            ) : null}
          </figure>
        );
      }

      return (
        <figure className="-mx-1 my-8 overflow-hidden rounded-xl border border-outline-variant/20 shadow-soft-md sm:mx-0 sm:my-10 sm:rounded-2xl">
          <div className="relative aspect-video w-full bg-surface-container-low">
            <OptimizedImage
              src={src}
              alt={alt ?? ""}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1080px) 90vw, 800px"
              className="object-contain"
            />
          </div>
          {alt ? (
            <figcaption className="bg-white px-4 py-3 text-label-sm text-on-surface-muted">
              {alt}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  };

  return (
    <div className="service-prose space-y-5">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
