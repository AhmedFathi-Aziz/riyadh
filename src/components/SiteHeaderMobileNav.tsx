"use client";

import { OptimizedImage } from "@/components/OptimizedImage";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { mainNavLinks, type NavPageId } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { whatsappButtonClass } from "@/lib/ui/whatsapp-styles";

const POPOVER_ID = "site-mobile-menu-popover";

type SiteHeaderMobileNavProps = {
  activePage: NavPageId;
};

function MenuIcon({ open }: { open?: boolean }) {
  if (open) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.42L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"
        />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M4 7h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2z"
      />
    </svg>
  );
}

export function SiteHeaderMobileNav({ activePage }: SiteHeaderMobileNavProps) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [useLegacyMenu, setUseLegacyMenu] = useState(false);
  const [legacyOpen, setLegacyOpen] = useState(false);

  useEffect(() => {
    setUseLegacyMenu(
      typeof HTMLElement.prototype.showPopover !== "function",
    );
  }, []);

  const closeMenu = useCallback(() => {
    if (useLegacyMenu) {
      setLegacyOpen(false);
      return;
    }
    popoverRef.current?.hidePopover?.();
  }, [useLegacyMenu]);

  const toggleLegacyMenu = useCallback(() => {
    setLegacyOpen((v) => !v);
  }, []);

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `مرحباً ${siteConfig.name}، أرغب في الاستفسار عن خدماتكم.`,
  )}`;

  const menuCard = (
        <div className="site-mobile-popover__card">
          <div className="flex items-center justify-between gap-3 border-b border-outline-variant/20 px-4 py-3">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex min-w-0 items-center"
              aria-label={`${siteConfig.name} — الرئيسية`}
            >
              <OptimizedImage
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
                sizes="140px"
                className="h-10 w-auto max-w-[9rem] object-contain"
              />
            </Link>
            <button
              type="button"
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-primary hover:bg-surface-container-low"
              aria-label="إغلاق القائمة"
              onClick={closeMenu}
            >
              <MenuIcon open />
            </button>
          </div>

          <nav
            aria-label="صفحات الموقع"
            className="max-h-[min(50vh,16rem)] overflow-y-auto overscroll-contain px-2 py-2"
          >
            <ul className="space-y-0.5">
              {mainNavLinks.map((link) => {
                const isActive =
                  "pageId" in link && link.pageId === activePage;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`block rounded-lg px-3 py-2.5 text-body-md font-semibold transition-colors ${
                        isActive
                          ? "bg-secondary-container/25 text-primary"
                          : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-outline-variant/20 p-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className={`flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-4 text-label-sm font-bold shadow-sm ${whatsappButtonClass}`}
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              تواصل عبر واتساب
            </a>
          </div>
        </div>
  );

  if (useLegacyMenu) {
    return (
      <div className="site-mobile-nav relative z-[120] md:hidden">
        <button
          type="button"
          className="site-mobile-nav__trigger inline-flex size-11 shrink-0 touch-manipulation items-center justify-center rounded-lg border border-outline-variant/25 bg-surface text-primary shadow-sm transition-colors hover:bg-surface-container-low active:scale-95"
          aria-label={legacyOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={legacyOpen}
          onClick={toggleLegacyMenu}
        >
          <MenuIcon open={legacyOpen} />
        </button>

        {legacyOpen ? (
          <>
            <button
              type="button"
              className="site-mobile-popover__backdrop fixed inset-0 z-[9998] bg-primary/45"
              aria-label="إغلاق القائمة"
              onClick={closeMenu}
            />
            <div
              role="dialog"
              aria-label="القائمة الرئيسية"
              className="site-mobile-popover site-mobile-popover--legacy-open fixed z-[9999]"
            >
              {menuCard}
            </div>
          </>
        ) : null}
      </div>
    );
  }

  return (
    <div className="site-mobile-nav relative z-[120] md:hidden">
      <button
        type="button"
        className="site-mobile-nav__trigger inline-flex size-11 shrink-0 touch-manipulation items-center justify-center rounded-lg border border-outline-variant/25 bg-surface text-primary shadow-sm transition-colors hover:bg-surface-container-low active:scale-95"
        aria-label="فتح القائمة"
        aria-controls={POPOVER_ID}
        aria-haspopup="dialog"
        popoverTarget={POPOVER_ID}
        popoverTargetAction="toggle"
      >
        <MenuIcon />
      </button>

      <div
        ref={popoverRef}
        id={POPOVER_ID}
        popover="auto"
        role="dialog"
        aria-label="القائمة الرئيسية"
        className="site-mobile-popover"
      >
        {menuCard}
      </div>
    </div>
  );
}
