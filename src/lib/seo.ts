import type { Metadata } from "next";
import { siteConfig } from "./site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: { src: string; alt: string };
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
}: PageMetadataOptions): Metadata {
  const { name, url, locale, keywords: siteKeywords, images } = siteConfig;
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const fullTitle = `${title} | ${name}`;
  const ogImage = image?.src ?? images.hero.src;
  const ogAlt = image?.alt ?? images.hero.alt;
  const allKeywords = [...new Set([...siteKeywords, ...keywords])];

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: canonicalPath,
      languages: { "ar-SA": canonicalPath },
    },
    openGraph: {
      type: "website",
      locale,
      url: canonicalPath,
      siteName: name,
      title: fullTitle,
      description,
      countryName: "Saudi Arabia",
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function getBaseMetadata(): Metadata {
  const { name, description, url, keywords, locale, language, images, tagline } =
    siteConfig;

  const title = `${name} | ${tagline}`;
  const ogImage = images.hero.src;

  return {
    metadataBase: new URL(url),
    title: {
      default: title,
      template: `%s | ${name}`,
    },
    description,
    keywords: [...keywords],
    authors: [{ name }],
    creator: name,
    publisher: name,
    category: "خدمات منزلية وعزل مائي",
    alternates: {
      canonical: "/",
      languages: {
        "ar-SA": "/",
      },
    },
    openGraph: {
      type: "website",
      locale,
      url: "/",
      siteName: name,
      title,
      description,
      countryName: "Saudi Arabia",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: images.hero.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    manifest: "/manifest.webmanifest",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
    },
    other: {
      "geo.region": "SA-01",
      "geo.placename": "Riyadh",
      "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
      ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
      "content-language": language,
    },
  };
}
