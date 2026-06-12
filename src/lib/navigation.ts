export type NavPageId = "home" | "services" | "insulation" | "about" | "team" | "blog" | "contact";

export const mainNavLinks = [
  { href: "/", label: "الرئيسية", pageId: "home" as const },
  { href: "/services", label: "خدماتنا", pageId: "services" as const },
  { href: "/insulation", label: "العزل", pageId: "insulation" as const },
  { href: "/about", label: "من نحن", pageId: "about" as const },
  { href: "/team", label: "فريق العمل", pageId: "team" as const },
  { href: "/blog", label: "المدونة", pageId: "blog" as const },
  { href: "/contact", label: "اتصل بنا", pageId: "contact" as const },
] as const;
