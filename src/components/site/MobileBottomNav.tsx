import { Link } from "@tanstack/react-router";
import { Home, Info, Layers, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function MobileBottomNav() {
  const { t } = useI18n();

  const items = [
    { label: t.nav.home, to: "/", icon: Home },
    { label: t.nav.about, to: "/about", icon: Info },
    { label: t.nav.services, to: "/services", icon: Layers },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
      <ul className="mx-auto flex max-w-lg items-stretch">
        {items.map((item) => (
          <li key={item.to} className="flex-1">
            <Link
              to={item.to}
              className="flex min-h-14 flex-col items-center justify-center gap-1 px-1 py-2 text-[0.65rem] font-medium text-muted-foreground"
              activeProps={{ className: "text-steel" }}
              activeOptions={{ exact: true }}
            >
              <item.icon className="size-5" />
              {item.label}
            </Link>
          </li>
        ))}
        <li className="flex-1">
          <a
            href="https://wa.me/96822000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 flex-col items-center justify-center gap-1 bg-gold px-1 py-2 text-[0.65rem] font-bold text-gold-foreground"
          >
            <MessageCircle className="size-5" />
            {t.cta.whatsapp}
          </a>
        </li>
      </ul>
    </nav>
  );
}
