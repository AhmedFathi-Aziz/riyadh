import { OptimizedImage } from "@/components/OptimizedImage";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const components: Components = {
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 border-r-4 border-secondary pr-4 text-headline-md font-semibold text-primary">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-body-lg font-semibold text-primary">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-body-lg leading-relaxed text-on-surface-variant">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="my-4 list-none space-y-2 pr-0 text-body-lg text-on-surface-variant [&>li]:relative [&>li]:pr-5 [&>li]:before:absolute [&>li]:before:right-0 [&>li]:before:top-[0.55em] [&>li]:before:size-1.5 [&>li]:before:rounded-full [&>li]:before:bg-secondary">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 list-decimal space-y-2 pr-6 text-body-lg text-on-surface-variant marker:font-semibold marker:text-primary">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed">{children}</li>
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
  table: ({ children }) => (
    <div
      className="service-table-wrap -mx-1 my-6 overflow-x-auto rounded-xl border border-outline-variant/25 bg-white shadow-soft sm:mx-0 sm:my-8"
      tabIndex={0}
      role="region"
      aria-label="جدول"
    >
      <table
        dir="rtl"
        className="service-comparison-table w-full min-w-[20rem] border-collapse text-right text-sm leading-relaxed sm:min-w-[28rem]"
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
      className="whitespace-normal px-3 py-3.5 align-middle text-sm font-bold leading-snug sm:px-4 sm:py-4 first:min-w-[7rem] sm:first:min-w-[9rem]"
    >
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="whitespace-normal px-3 py-3 align-top text-on-surface-variant sm:px-4 sm:py-3.5 first:min-w-[7rem] first:font-semibold first:text-primary sm:first:min-w-[9rem]">
      {children}
    </td>
  ),
  img: ({ src, alt }) => {
    if (!src || typeof src !== "string" || !src.startsWith("/images/")) {
      return null;
    }
    return (
      <figure className="my-8 overflow-hidden rounded-2xl">
        <div className="relative aspect-[21/9] w-full sm:aspect-video">
          <OptimizedImage
            src={src}
            alt={alt ?? ""}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1080px) 90vw, 720px"
            className="object-contain bg-surface-container-low"
          />
        </div>
      </figure>
    );
  },
};

type BlogMarkdownProps = {
  content: string;
};

export function BlogMarkdown({ content }: BlogMarkdownProps) {
  return (
    <div className="prose-blog mx-auto max-w-3xl space-y-6">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
