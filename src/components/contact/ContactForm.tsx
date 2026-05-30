"use client";

import { FormEvent, useState } from "react";
import { serviceOptions } from "@/lib/contact-page";
import { siteConfig } from "@/lib/site";

const inputClass =
  "w-full rounded-xl border border-outline bg-surface-container-lowest p-3 text-on-surface outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/30";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name")?.toString() ?? "";
    const phone = data.get("phone")?.toString() ?? "";
    const district = data.get("district")?.toString() ?? "";
    const service =
      serviceOptions.find((s) => s.value === data.get("service"))?.label ??
      "غير محدد";
    const message = data.get("message")?.toString() ?? "";

    const body = encodeURIComponent(
      `طلب تواصل من الموقع\nالاسم: ${name}\nالجوال: ${phone}\nالحي: ${district}\nالخدمة: ${service}\nالتفاصيل: ${message || "—"}`,
    );
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${body}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  }

  return (
    <div className="rounded-3xl border border-outline-variant/30 bg-white p-8 shadow-lg">
      <h2 className="mb-2 text-headline-md font-semibold text-primary">
        أرسل طلبك الآن
      </h2>
      <p className="mb-6 text-on-surface-variant">
        املأ النموذج وسنتواصل معك خلال دقائق عبر واتساب أو الهاتف.
      </p>

      {submitted ? (
        <p className="rounded-xl bg-surface-container-low p-4 text-on-surface-variant">
          تم إرسال طلبك. شكراً لتواصلك — فريقنا جاهز لمساعدتك.
        </p>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="contact-name" className="mb-1 block text-sm font-bold">
              الاسم الكامل <span className="text-error">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="اسمك"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className="mb-1 block text-sm font-bold">
              رقم الجوال <span className="text-error">*</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="05xxxxxxxx"
              dir="ltr"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-district" className="mb-1 block text-sm font-bold">
              الحي / المنطقة
            </label>
            <input
              id="contact-district"
              name="district"
              type="text"
              placeholder="مثلاً: الملقا، النرجس"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-service" className="mb-1 block text-sm font-bold">
              نوع الخدمة
            </label>
            <select id="contact-service" name="service" className={inputClass} defaultValue="">
              <option value="" disabled>
                اختر الخدمة
              </option>
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-1 block text-sm font-bold">
              تفاصيل إضافية
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="صف مشكلتك أو اطلب معاينة مجانية..."
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-primary py-4 text-lg font-bold text-on-primary shadow-md transition-opacity hover:opacity-90"
          >
            إرسال عبر واتساب
          </button>
          <p className="text-center text-label-sm text-on-surface-variant">
            بالضغط على إرسال، ستُفتح محادثة واتساب مع فريقنا مباشرة.
          </p>
        </form>
      )}
    </div>
  );
}
