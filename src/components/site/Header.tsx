import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe, ChevronDown, ArrowRight } from "lucide-react";
import logo from "@/assets/falcon-logo.png";
import { useI18n, type Lang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = { key: keyof ReturnType<typeof useI18n>["t"]["nav"]; to: string; hash?: string };

const navItems: NavItem[] = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "services", to: "/services" },
  { key: "portfolio", to: "/", hash: "portfolio" },
  { key: "testimonials", to: "/", hash: "testimonials" },
  { key: "contact", to: "/contact" },
];

function LangSwitch({ onDark }: { onDark: boolean }) {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={t.lang.label}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex h-9 items-center gap-1.5 rounded-md border px-3 text-xs font-semibold transition-colors",
          onDark
            ? "border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10"
            : "border-border text-foreground hover:bg-secondary",
        )}
      >
        <Globe className="size-4" />
        {lang === "en" ? "EN" : "AR"}
        <ChevronDown className="size-3.5" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <ul className="absolute end-0 top-11 z-50 w-40 overflow-hidden rounded-md border border-border bg-popover py-1 shadow-elevated">
            {(["en", "ar"] as Lang[]).map((l) => (
              <li key={l}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(l);
                    setOpen(false);
                  }}
                  className={cn(
                    "block w-full px-3 py-2 text-start text-sm text-popover-foreground hover:bg-secondary",
                    lang === l && "font-semibold text-steel",
                  )}
                >
                  {t.lang[l]}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent py-2"
          : "bg-background/85 shadow-header backdrop-blur-md supports-[backdrop-filter]:bg-background/70",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-18 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label={t.brand}>
          <img
            src={logo}
            alt="Falcon Oilfield Services falcon emblem logo"
            width={44}
            height={44}
            className="size-9 shrink-0 sm:size-11"
          />
          <span className="flex flex-col leading-tight">
            <span
              className={cn(
                "font-display text-[0.82rem] font-bold tracking-tight sm:text-base",
                transparent ? "text-navy-foreground" : "text-foreground",
              )}
            >
              {t.brand}
            </span>
            <span
              className={cn(
                "text-[0.6rem] tracking-wide sm:text-[0.7rem]",
                transparent ? "text-navy-foreground/70" : "text-muted-foreground",
              )}
            >
              {t.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              hash={item.hash}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                transparent
                  ? "text-navy-foreground/85 hover:text-gold"
                  : "text-foreground/80 hover:text-steel",
              )}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LangSwitch onDark={transparent} />
          <Button asChild variant="gold" size="default">
            <Link to="/contact">{t.cta.talk}</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className={cn(
            "flex size-10 items-center justify-center rounded-md border transition-colors lg:hidden",
            transparent
              ? "border-navy-foreground/30 text-navy-foreground"
              : "border-border text-foreground",
          )}
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* Mobile drawer — opens from the inline end (right in LTR, left in RTL) */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-navy-deep/60 transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
        />
        <aside
          className={cn(
            "absolute inset-y-0 end-0 flex w-[82%] max-w-xs flex-col bg-background shadow-elevated transition-transform duration-300",
            menuOpen ? "translate-x-0" : "translate-x-full rtl:-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" width={32} height={32} className="size-8" />
              <span className="font-display text-sm font-bold">{t.brand}</span>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex size-9 items-center justify-center rounded-md border border-border"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                hash={item.hash}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-md px-3 py-3.5 text-base font-medium text-foreground hover:bg-secondary"
              >
                {t.nav[item.key]}
                <ArrowRight className="size-4 text-steel rtl:rotate-180" />
              </Link>
            ))}
          </nav>
          <div className="space-y-3 border-t border-border p-4">
            <LangSwitch onDark={false} />
            <Button asChild variant="gold" size="lg" className="w-full">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                {t.cta.consult}
              </Link>
            </Button>
          </div>
        </aside>
      </div>
    </header>
  );
}
