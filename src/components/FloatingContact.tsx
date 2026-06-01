import { Icon } from "@/components/Icon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { siteConfig } from "@/lib/site";
import { whatsappButtonClass } from "@/lib/ui/whatsapp-styles";

const fab =
  "flex h-14 w-14 items-center justify-center rounded-full shadow-soft-lg ring-4 ring-white transition-all duration-200 hover:scale-110 hover:shadow-soft-md active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function FloatingContact() {
  const { whatsapp, phoneE164 } = siteConfig;

  return (
    <aside
      aria-label="اتصال سريع"
      className="fixed bottom-6 end-6 z-50 flex flex-col gap-4 sm:bottom-8 sm:end-8"
    >
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${fab} ${whatsappButtonClass}`}
        aria-label="تواصل عبر واتساب"
        title="واتساب"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      <a
        href={`tel:${phoneE164}`}
        className={`${fab} bg-primary text-on-primary`}
        aria-label="اتصل بنا"
        title="اتصل بنا"
      >
        <Icon name="call" size="lg" className="text-on-primary" />
      </a>
    </aside>
  );
}
