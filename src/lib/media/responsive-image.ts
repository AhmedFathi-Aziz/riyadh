/**
 * Static export (unoptimized next/image): build src/srcSet from -1080 WebP siblings.
 * Convention: `…-hero.webp` / `…-field.webp` with optional `…-hero-1080.webp`.
 */
export type ResponsiveImageSources = {
  src: string;
  srcSet?: string;
};

const HERO_FIELD_PATTERN = /^(.+)-(hero|field)\.webp$/;

export function getResponsiveImageSources(
  src: string,
  options?: { lcp?: boolean },
): ResponsiveImageSources {
  const match = src.match(HERO_FIELD_PATTERN);
  if (!match) {
    return { src };
  }

  const [, base, role] = match;
  const w1080 = `${base}-${role}-1080.webp`;
  const main = src;
  const srcSet = `${w1080} 1080w, ${main} 1920w`;

  return {
    src: options?.lcp !== false ? w1080 : main,
    srcSet,
  };
}
