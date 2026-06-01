import { Cairo } from "next/font/google";

/**
 * Cairo — خط عربي هندسي حديث (sans-serif) للنصوص والعناوين.
 */
export const arabicFont = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
  preload: true,
});

export const bodyFont = arabicFont;
export const displayFont = arabicFont;

export const fontVariables = arabicFont.variable;
