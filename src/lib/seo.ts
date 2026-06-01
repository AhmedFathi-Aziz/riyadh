import type { Metadata } from "next";
import { DEFAULT_META_DESCRIPTION, DEFAULT_TITLE_SUFFIX } from "./seo/constants";
import { formatPageTitle } from "./seo/structured-data";
import { siteConfig } from "./site";

type PageMetadataOptions = {
  /** الجزء الرئيسي — يطابق H1 */
  title: string;
  /** بعد | — الافتراضي: فحص دقيق بدون تكسير */
  titleSuffix?: string;
  description?: string;
  path: string;
  keywords?: string[];
  image?: { src: string; alt: string };
};

export function createPageMetadata({
  title,
  titleSuffix = DEFAULT_TITLE_SUFFIX,
  description = DEFAULT_META_DESCRIPTION,
  path,
  keywords = [],
  image,
}: PageMetadataOptions): Metadata {
  const { name, url, locale, keywords: siteKeywords, images } = siteConfig;
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const absoluteTitle = formatPageTitle(title, titleSuffix);
  const ogImage = image?.src ?? images.hero.src;
  const ogAlt = image?.alt ?? images.hero.alt;
  const allKeywords = [...new Set([...siteKeywords, ...keywords])];

  return {
    title: { absolute: absoluteTitle },
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
      title: absoluteTitle,
      description,
      countryName: "Saudi Arabia",
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle,
      description,
      images: [ogImage],
    },
  };
}

export function getBaseMetadata(): Metadata {
  const { name, description, url, keywords, locale, language, images } =
    siteConfig;

  const defaultTitle = formatPageTitle(
    "كشف تسربات المياه بالرياض",
    DEFAULT_TITLE_SUFFIX,
  );
  const ogImage = images.hero.src;

  return {
    metadataBase: new URL(url),
    title: {
      default: defaultTitle,
      template: "%s",
    },
    description: description || DEFAULT_META_DESCRIPTION,
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
      title: defaultTitle,
      description: description || DEFAULT_META_DESCRIPTION,
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
      title: defaultTitle,
      description: description || DEFAULT_META_DESCRIPTION,
      images: [ogImage],
    },
    icons: {
      icon: [
        { url: "/icon.png", type: "image/png", sizes: "128x128" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
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
