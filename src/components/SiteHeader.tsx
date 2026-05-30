import { OptimizedImage } from "@/components/OptimizedImage";
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
  const logoGap = variant === "services" ? "gap-3" : "gap-4";
  const logoClass =
    variant === "glass" ? "h-12 w-auto object-contain" : "h-12 w-12 object-contain";
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
      <Link href="/" className={`flex items-center ${logoGap}`}>
        <OptimizedImage
          src={siteConfig.logo.src}
          alt={siteConfig.logo.alt}
          width={siteConfig.logo.width}
          height={siteConfig.logo.height}
          sizes="48px"
          className={logoClass}
          priority
        />
        <span className="font-display text-headline-md font-bold text-primary">
          {siteConfig.name}
        </span>
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

      {variant === "services" ? (
        <Link
          href="/contact"
          className="rounded-lg bg-primary px-6 py-2.5 text-label-sm text-on-primary transition-all hover:opacity-90"
        >
          اطلب اقتباس
        </Link>
      ) : (
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className={`rounded-lg bg-primary text-label-sm text-on-primary transition-all hover:opacity-90 ${
              variant === "glass"
                ? "px-6 py-2 shadow-md"
                : "px-6 py-2 shadow-md"
            }`}
          >
            اطلب اقتباس
          </Link>
          <button
            type="button"
            className="text-primary md:hidden"
            aria-label="فتح القائمة"
          >
            <span className="material-symbols-outlined" aria-hidden>
              menu
            </span>
          </button>
        </div>
      )}
    </>
  );

  if (variant === "services") {
    return (
      <header className="fixed top-0 right-0 left-0 z-50 bg-surface/80 shadow-sm backdrop-blur-md">
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
    <nav
      aria-label="شريط التنقل العلوي"
      className="fixed top-0 left-0 z-50 flex h-20 w-full max-w-full items-center justify-between bg-surface/80 px-6 shadow-sm backdrop-blur-md md:px-gutter rtl"
    >
      <div className="mx-auto flex h-full w-full max-w-max-width items-center justify-between">
        {inner}
      </div>
    </nav>
  );
}
