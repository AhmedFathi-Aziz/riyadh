import Image, { type ImageProps } from "next/image";
import { getResponsiveImageSources } from "@/lib/media/responsive-image";

/** توازن وضوح/سرعة — مناسب لصور الخدمات بعد تحسين Next */
const DEFAULT_QUALITY = 85;

type OptimizedImageProps = ImageProps & {
  quality?: number;
  /** يبني srcSet من نسخة -1080 عند التصدير الثابت */
  responsive?: boolean;
  /** LCP: يفضّل -1080 كـ src الافتراضي */
  lcp?: boolean;
};

/**
 * صور محسّنة: WebP، srcSet للنسخ -1080، وجودة معتدلة.
 */
export function OptimizedImage({
  quality = DEFAULT_QUALITY,
  alt,
  placeholder,
  blurDataURL,
  responsive = true,
  lcp = false,
  priority,
  src,
  ...props
}: OptimizedImageProps) {
  const useBlur =
    placeholder === "blur" || (blurDataURL && placeholder !== "empty");

  const responsiveSources =
    responsive && typeof src === "string" && !("srcSet" in props)
      ? getResponsiveImageSources(src, { lcp })
      : null;

  const loading = priority || lcp ? undefined : ("lazy" as const);

  return (
    <Image
      {...props}
      alt={alt}
      src={responsiveSources?.src ?? src}
      {...(responsiveSources?.srcSet
        ? { srcSet: responsiveSources.srcSet }
        : {})}
      quality={quality}
      priority={priority}
      loading={loading}
      placeholder={useBlur ? "blur" : placeholder}
      blurDataURL={useBlur ? blurDataURL : undefined}
    />
  );
}
