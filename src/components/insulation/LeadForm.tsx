"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString() ?? "";
    const phone = data.get("phone")?.toString() ?? "";
    const district = data.get("district")?.toString() ?? "";
    const body = encodeURIComponent(
      `طلب استشارة عزل\nالاسم: ${name}\nالجوال: ${phone}\nالحي: ${district}`,
    );
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${body}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  }

  return (
    <div className="rounded-3xl bg-surface p-8 text-on-surface shadow-2xl">
      <h3 className="mb-6 text-headline-md font-semibold text-primary">
        اطلب استشارة مجانية
      </h3>
      {submitted ? (
        <p className="text-on-surface-variant">
          شكراً لك! تم فتح واتساب لإرسال طلبك. سيتواصل معك فريقنا قريباً.
        </p>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="lead-name" className="mb-1 block text-sm font-bold">
              الاسم
            </label>
            <input
              id="lead-name"
              name="name"
              type="text"
              required
              placeholder="اسمك الكريم"
              className="w-full rounded-xl border border-outline bg-surface-container-lowest p-3 outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div>
            <label
              htmlFor="lead-phone"
              className="mb-1 block text-sm font-bold"
            >
              رقم الجوال
            </label>
            <input
              id="lead-phone"
              name="phone"
              type="tel"
              required
              placeholder="05xxxxxxxx"
              dir="ltr"
              className="w-full rounded-xl border border-outline bg-surface-container-lowest p-3 outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div>
            <label
              htmlFor="lead-district"
              className="mb-1 block text-sm font-bold"
            >
              الحي / المنطقة
            </label>
            <input
              id="lead-district"
              name="district"
              type="text"
              placeholder="مثلاً: الملقا"
              className="w-full rounded-xl border border-outline bg-surface-container-lowest p-3 outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-primary py-4 text-lg font-bold text-on-primary shadow-lg transition-opacity hover:opacity-90"
          >
            إرسال الطلب
          </button>
        </form>
      )}
    </div>
  );
}
