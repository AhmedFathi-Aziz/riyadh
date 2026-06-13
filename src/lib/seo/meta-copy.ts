import { DEFAULT_TITLE_SUFFIX } from "./constants";
import { formatPageTitle } from "./structured-data";

/** Google SERP targets — Arabic titles/descriptions (character count). */
export const SEO_TITLE_MIN = 55;
export const SEO_TITLE_MAX = 70;
export const SEO_TITLE_TARGET = 62;
export const SEO_DESC_MIN = 145;
export const SEO_DESC_MAX = 165;
export const SEO_DESC_TARGET = 158;

/** Builds a page title with brand suffix and trims if over max. */
export function buildSeoTitle(
  keyword: string,
  suffix: string = DEFAULT_TITLE_SUFFIX,
): string {
  const full = formatPageTitle(keyword, suffix);
  if (full.length <= SEO_TITLE_MAX) return full;

  const budget = SEO_TITLE_MAX - suffix.length - 3; // " | "
  return formatPageTitle(keyword.slice(0, Math.max(20, budget)).trim(), suffix);
}

/** Normalizes meta description length toward ~160 characters. */
export function buildSeoDescription(text: string): string {
  const trimmed = text.replace(/\s+/g, " ").trim();
  if (trimmed.length <= SEO_DESC_MAX) return trimmed;

  const cut = trimmed.slice(0, SEO_DESC_TARGET);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > SEO_DESC_MIN ? cut.slice(0, lastSpace) : cut).trim()}…`;
}
