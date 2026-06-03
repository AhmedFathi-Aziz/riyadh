import { OptimizedImage } from "@/components/OptimizedImage";
import { SiteHeaderMobileNav } from "@/components/SiteHeaderMobileNav";
import Link from "next/link";
import { mainNavLinks, type NavPageId } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

type SiteHeaderProps = {
  activePage?: NavPageId;
  variant?: "default" | "glass" | "services";
};

export function SiteHeader({
  activePage = "home",
  variant = "default",
}: SiteHeaderProps) {
  const logoClass =
    variant === "services"
      ? "h-12 w-auto max-w-[9.5rem] object-contain sm:max-w-[11rem]"
      : "h-12 w-auto max-w-[10rem] object-contain sm:h-14 sm:max-w-[12rem]";
  const navLinkActive =
    variant === "glass"
      ? "active-nav-border border-b-2 border-primary pb-1 text-label-sm font-bold text-primary"
      : "border-b-2 border-primary pb-1 text-body-md font-bold text-primary";
  const navLinkInactive =
    variant === "glass"
      ? "text-label-sm text-on-surface-variant transition-colors hover:text-primary"
      : "text-body-md text-on-surface-variant transition-colors hover:text-primary";

  const inner = (
    <>
      <Link
        href="/"
        className="flex shrink-0 items-center"
        aria-label={`${siteConfig.name} — الرئيسية`}
      >
        <OptimizedImage
          src={siteConfig.logo.src}
          alt={siteConfig.logo.alt}
          width={siteConfig.logo.width}
          height={siteConfig.logo.height}
          sizes="(max-width: 768px) 152px, 192px"
          className={logoClass}
          responsive={false}
        />
      </Link>

      <nav
        aria-label="القائمة الرئيسية"
        className="hidden items-center gap-8 md:flex"
      >
        {mainNavLinks.map((link) => {
          const isActive = "pageId" in link && link.pageId === activePage;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={isActive ? navLinkActive : navLinkInactive}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="relative z-[60] flex shrink-0 items-center gap-2 sm:gap-3">
        <Link
          href="/contact"
          className={`hidden min-h-10 shrink-0 items-center justify-center rounded-lg bg-primary px-4 py-2 text-label-sm text-on-primary transition-all hover:opacity-90 md:inline-flex md:px-6 ${
            variant === "services" ? "md:py-2.5" : "md:py-2 md:shadow-md"
          }`}
        >
          اطلب اقتباس
        </Link>
        <SiteHeaderMobileNav activePage={activePage} />
      </div>
    </>
  );

  if (variant === "services") {
    return (
      <header className="fixed top-0 right-0 left-0 z-50 bg-surface/95 shadow-sm">
        <div className="mx-auto flex h-20 max-w-max-width items-center justify-between px-gutter rtl">
          {inner}
        </div>
      </header>
    );
  }

  if (variant === "glass") {
    return (
      <header className="glass-panel fixed top-0 left-0 z-50 h-20 w-full shadow-sm">
        <div className="mx-auto flex h-full max-w-max-width items-center justify-between px-gutter rtl">
          {inner}
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 z-50 flex h-20 w-full max-w-full items-center justify-between bg-surface/95 px-6 shadow-sm md:px-gutter rtl">
      <div className="mx-auto flex h-full w-full max-w-max-width items-center justify-between">
        {inner}
      </div>
    </header>
  );
}
