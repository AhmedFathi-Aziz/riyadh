import type { BreadcrumbItem } from "./structured-data";

export const breadcrumbs = {
  home: (): BreadcrumbItem[] => [{ name: "الرئيسية", path: "/" }],
  services: (): BreadcrumbItem[] => [
    { name: "الرئيسية", path: "/" },
    { name: "خدماتنا", path: "/services" },
  ],
  service: (label: string, slug: string): BreadcrumbItem[] => [
    ...breadcrumbs.services(),
    { name: label, path: `/services/${slug}` },
  ],
  areas: (): BreadcrumbItem[] => [
    { name: "الرئيسية", path: "/" },
    { name: "أحياء الرياض", path: "/areas" },
  ],
  area: (label: string, slug: string): BreadcrumbItem[] => [
    ...breadcrumbs.areas(),
    { name: label, path: `/areas/${slug}` },
  ],
  blog: (): BreadcrumbItem[] => [
    { name: "الرئيسية", path: "/" },
    { name: "المدونة", path: "/blog" },
  ],
  post: (label: string, slug: string): BreadcrumbItem[] => [
    ...breadcrumbs.blog(),
    { name: label, path: `/blog/${slug}` },
  ],
  insulation: (): BreadcrumbItem[] => [
    { name: "الرئيسية", path: "/" },
    { name: "العزل", path: "/insulation" },
  ],
  contact: (): BreadcrumbItem[] => [
    { name: "الرئيسية", path: "/" },
    { name: "اتصل بنا", path: "/contact" },
  ],
};
