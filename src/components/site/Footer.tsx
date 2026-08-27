import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/falcon-logo.png";
import facility from "@/assets/footer-facility.jpg";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { t } = useI18n();

  const links = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.about, to: "/about" },
    { label: t.nav.services, to: "/services" },
    { label: t.nav.contact, to: "/contact" },
  ];

  const socials = [
    {
      Icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/people/Falcon-Oilfield-Services/100065248102230/",
    },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/falcon-oilfield-services/",
    },
    { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/falcon_group_oman/" },
  ];

  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="relative overflow-hidden">
        <img
          src={facility}
          alt={t.footer.alt}
          loading="lazy"
          width={1400}
          height={800}
          className="h-52 w-full object-cover opacity-45 sm:h-64 rtl:scale-x-[-1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-6 lg:px-8">
          <p className="font-display max-w-xl text-xl font-bold sm:text-2xl">{t.footer.slogan}</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" loading="lazy" width={52} height={52} className="size-13" />
            <span className="font-display text-sm font-bold">{t.brand}</span>
          </div>
          <p className="text-sm leading-relaxed text-navy-foreground/70">{t.hero.eyebrow}</p>
          <Button asChild variant="gold" size="default">
            <Link to="/contact">{t.cta.consult}</Link>
          </Button>
        </div>

        <nav>
          <h3 className="text-xs font-bold tracking-[0.16em] text-gold uppercase">
            {t.footer.navTitle}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-navy-foreground/75 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-bold tracking-[0.16em] text-gold uppercase">
            {t.footer.contactTitle}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/75">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-steel-light" />
              {t.contact.address}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-steel-light" />
              <span dir="ltr">{t.contact.phone}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-steel-light" />
              <span dir="ltr">{t.contact.email}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-steel-light" />
              {t.contact.hours}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.16em] text-gold uppercase">
            {t.footer.followTitle}
          </h3>
          <ul className="mt-4 flex gap-2">
            {socials.map(({ Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-md border border-navy-foreground/20 text-navy-foreground/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10 py-5">
        <p className="mx-auto max-w-7xl px-4 text-xs text-navy-foreground/55 lg:px-8">
          © {new Date().getFullYear()} {t.brand}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
