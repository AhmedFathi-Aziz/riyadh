import Image, { type ImageProps } from "next/image";

/** توازن وضوح/سرعة — مناسب لصور الخدمات بعد تحسين Next */
const DEFAULT_QUALITY = 90;

type OptimizedImageProps = ImageProps & {
  quality?: number;
};

/**
 * صور محسّنة: WebP/AVIF تلقائياً، جودة 88، وأحجام responsive.
 */
export function OptimizedImage({
  quality = DEFAULT_QUALITY,
  alt,
  placeholder,
  blurDataURL,
  ...props
}: OptimizedImageProps) {
  const useBlur =
    placeholder === "blur" || (blurDataURL && placeholder !== "empty");

  return (
    <Image
      alt={alt}
      quality={quality}
      placeholder={useBlur ? "blur" : placeholder}
      blurDataURL={useBlur ? blurDataURL : undefined}
      {...props}
    />
  );
}
