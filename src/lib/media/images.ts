/**
 * صور الموقع الأصلية — نفس روابط التصميم (Google CDN).
 * Next/Image يُحسّنها تلقائياً (WebP/AVIF + المقاس المناسب).
 */
import { blogImageSources } from "./blog-images";
import { originalImageSources, type ImageSourceEntry } from "./original-sources";

export const IMAGE_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
};

function originalSiteImage(source: ImageSourceEntry): SiteImage {
  return {
    src: source.url,
    alt: source.alt,
    width: source.width,
    height: source.height,
    blurDataURL: IMAGE_BLUR,
  };
}

export const siteImages = {
  hero: originalSiteImage(originalImageSources.hero),
  services: originalSiteImage(originalImageSources.services),
  logo: originalSiteImage(originalImageSources.logo),
} as const;

export const serviceImages = {
  leakDetection: originalSiteImage(originalImageSources.leakDetection),
  tank: originalSiteImage(originalImageSources.tank),
  roof: originalSiteImage(originalImageSources.roof),
  bathroom: originalSiteImage(originalImageSources.bathroom),
  restoration: originalSiteImage(originalImageSources.restoration),
} as const;

export const insulationImages = {
  hero: originalSiteImage(originalImageSources.insulationHero),
  water: originalSiteImage(originalImageSources.insulationWater),
  thermal: originalSiteImage(originalImageSources.insulationThermal),
  portfolioFoam: originalSiteImage(originalImageSources.portfolioFoam),
  portfolioCommercial: originalSiteImage(originalImageSources.portfolioCommercial),
  portfolioTank: originalSiteImage(originalImageSources.portfolioTank),
} as const;

export const blogImages: Record<string, SiteImage> = Object.fromEntries(
  Object.entries(blogImageSources).map(([slug, source]) => [
    slug,
    originalSiteImage(source),
  ]),
);
