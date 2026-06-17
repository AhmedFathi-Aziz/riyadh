import type { Metadata, Viewport } from "next";
import { FloatingContact } from "@/components/FloatingContact";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { jsonLdGraphPath } from "@/lib/seo/jsonld-graph-path";
import { bodyFont, fontVariables } from "@/lib/fonts";
import { getBaseMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = getBaseMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#001e40",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.language}
      dir="rtl"
      className={`${fontVariables} scroll-smooth`}
    >
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
      </head>
      <body
        className={`${bodyFont.className} min-h-screen bg-background font-sans text-on-surface antialiased`}
      >
        <PageStructuredData graphPath={jsonLdGraphPath.site()} />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
