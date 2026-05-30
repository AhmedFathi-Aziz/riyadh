import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/site";

export function FloatingContact() {
  const { whatsapp, phoneE164 } = siteConfig;

  return (
    <aside
      aria-label="اتصال سريع"
      className="fixed bottom-8 end-8 z-50 flex flex-col gap-4"
    >
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110"
        aria-label="تواصل عبر واتساب"
      >
        <Icon name="chat" size="lg" className="text-white" />
      </a>
      <a
        href={`tel:${phoneE164}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container shadow-2xl transition-transform hover:scale-110"
        aria-label="اتصل بنا"
      >
        <Icon name="call" size="lg" />
      </a>
    </aside>
  );
}
