"use client";

import { FormEvent, useState } from "react";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/site";
import { primaryCtaOnDark } from "@/lib/ui/button-styles";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email")?.toString();
    if (email) {
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent("اشتراك النشرة البريدية")}&body=${encodeURIComponent(`أرغب بالاشتراك: ${email}`)}`;
    }
    setDone(true);
  }

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
      <Icon name="mail" size="xl" className="mb-6 text-secondary" />
      <h2 className="mb-4 text-display-lg-mobile font-bold text-on-primary md:text-display-lg">
        اشترك في نشرتنا البريدية
      </h2>
      <p className="mb-10 max-w-lg text-body-lg text-primary-fixed/90">
        كن أول من يحصل على نصائح الخبراء في صيانة المباني وعروضنا الحصرية
        المخصصة لمشتركي النشرة.
      </p>
      {done ? (
        <p className="text-lg text-primary-fixed">شكراً لاشتراكك! سنتواصل معك قريباً.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-lg flex-col gap-4 sm:flex-row sm:items-stretch"
        >
          <input
            name="email"
            type="email"
            required
            placeholder="بريدك الإلكتروني"
            dir="ltr"
            className="min-w-0 flex-1 rounded-xl border border-outline-variant bg-surface-container-lowest px-6 py-4 text-on-surface outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30"
          />
          <button
            type="submit"
            className={`shrink-0 rounded-xl px-8 py-4 font-bold ${primaryCtaOnDark}`}
          >
            اشترك الآن
          </button>
        </form>
      )}
      <p className="mt-4 text-label-sm text-primary-fixed/70">
        نحن نحترم خصوصيتك، يمكنك إلغاء الاشتراك في أي وقت.
      </p>
    </div>
  );
}
