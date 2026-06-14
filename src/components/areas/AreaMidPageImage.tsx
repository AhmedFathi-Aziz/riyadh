import { OptimizedImage } from "@/components/OptimizedImage";
import type { AreaMidImage } from "@/lib/neighborhoods/area-images";

type AreaMidPageImageProps = {
  image: AreaMidImage;
};

export function AreaMidPageImage({ image }: AreaMidPageImageProps) {
  return (
    <figure className="my-12 overflow-hidden rounded-2xl border border-outline-variant/20 shadow-soft-md sm:my-14 sm:rounded-3xl">
      <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1080px) 90vw, 960px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
      </div>
      {image.caption ? (
        <figcaption
          dir="rtl"
          lang="ar"
          className="border-t border-outline-variant/15 bg-surface-container-low px-4 py-3 text-center text-label-sm text-on-surface-variant sm:px-6 sm:py-4"
        >
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
