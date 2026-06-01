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
