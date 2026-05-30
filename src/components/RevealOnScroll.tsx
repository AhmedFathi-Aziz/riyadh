"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
};

function revealElement(el: HTMLElement) {
  el.classList.remove("translate-y-10", "opacity-0");
  el.classList.add("translate-y-0", "opacity-100");
}

export function RevealOnScroll({ children, className = "" }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const showIfVisible = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        revealElement(el);
        setVisible(true);
        return true;
      }
      return false;
    };

    if (showIfVisible()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealElement(el);
            setVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.05, rootMargin: "50px" },
    );

    observer.observe(el);

    // Fallback: never leave content hidden if observer fails
    const fallback = window.setTimeout(() => {
      revealElement(el);
      setVisible(true);
      observer.disconnect();
    }, 800);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
