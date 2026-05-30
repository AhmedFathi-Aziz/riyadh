"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

const inputClass =
  "w-full rounded-xl border border-outline-variant/40 bg-white p-2.5 text-body-md text-on-surface outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/25";

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
    <div className="shadow-soft-md rounded-2xl bg-white p-6">
      <h3 className="mb-5 text-body-lg font-bold text-primary">
        اطلب استشارة مجانية
      </h3>
      {submitted ? (
        <p className="text-label-sm text-on-surface-muted">
          شكراً لك! تم فتح واتساب لإرسال طلبك. سيتواصل معك فريقنا قريباً.
        </p>
      ) : (
        <form className="space-y-3.5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="lead-name"
              className="mb-1 block text-label-sm font-semibold text-primary"
            >
              الاسم
            </label>
            <input
              id="lead-name"
              name="name"
              type="text"
              required
              placeholder="اسمك الكريم"
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="lead-phone"
              className="mb-1 block text-label-sm font-semibold text-primary"
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
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="lead-district"
              className="mb-1 block text-label-sm font-semibold text-primary"
            >
              الحي / المنطقة
            </label>
            <input
              id="lead-district"
              name="district"
              type="text"
              placeholder="مثلاً: الملقا"
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-primary py-3 text-body-md font-bold text-on-primary shadow-sm transition-opacity hover:opacity-90"
          >
            إرسال الطلب
          </button>
        </form>
      )}
    </div>
  );
}
