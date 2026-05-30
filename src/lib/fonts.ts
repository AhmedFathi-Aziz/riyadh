import { Almarai, Tajawal } from "next/font/google";

/** Body & UI — وضوح عالي في الفقرات والنماذج */
export const bodyFont = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
  preload: true,
});

/** العناوين — مألوف في السعودية، أوضح للهيرو والعناوين */
export const displayFont = Almarai({
  subsets: ["arabic"],
  weight: ["700", "800"],
  variable: "--font-almarai",
  display: "swap",
  preload: true,
});

export const fontVariables = `${bodyFont.variable} ${displayFont.variable}`;
