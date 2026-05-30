import { IBM_Plex_Sans_Arabic } from "next/font/google";

/**
 * IBM Plex Sans Arabic — وضوح عالي للنصوص والعناوين في الواجهات العربية.
 */
export const arabicFont = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
  preload: true,
});

export const bodyFont = arabicFont;
export const displayFont = arabicFont;

export const fontVariables = arabicFont.variable;
