import { getServicePageBySlug } from "@/lib/services/load-pages";

/** يُطبّع slug من الرابط (يدعم العربية و decodeURIComponent). */
export function resolveServiceSlug(raw: string): string {
  let slug = raw;
  try {
    slug = decodeURIComponent(raw);
  } catch {
    slug = raw;
  }
  return slug.normalize("NFC");
}

export function findServicePageByParam(raw: string) {
  const slug = resolveServiceSlug(raw);
  return getServicePageBySlug(slug);
}
