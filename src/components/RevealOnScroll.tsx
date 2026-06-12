"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
};

/**
 * يُظهر المحتوى فوراً (SSR-safe) ثم يضيف حركة خفيفة عند الظهور.
 * لا نستخدم opacity-0 في التحميل الأول — حتى لا تبدو الصفحة فارغة بدون JS.
 */
export function RevealOnScroll({ children, className = "" }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimated(true);
      return;
    }

    const reveal = () => {
      setAnimated(true);
      observer.disconnect();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) reveal();
      },
      { threshold: 0.05, rootMargin: "40px" },
    );

    observer.observe(el);

    const fallback = window.setTimeout(reveal, 400);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        animated ? "translate-y-0 opacity-100" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}
