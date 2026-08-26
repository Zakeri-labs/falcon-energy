import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Falcon Oilfield Services | Technical Consultation Oman" },
      {
        name: "description",
        content:
          "Request a technical consultation for wireline logging, perforation, well intervention or reservoir monitoring scopes in Oman.",
      },
      { property: "og:title", content: "Contact Falcon Oilfield Services" },
      {
        property: "og:description",
        content: "Our engineering desk responds to technical enquiries within one business day.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();

  return (
    <SiteLayout>
      <PageHero title={t.pages.contactTitle} subtitle={t.pages.contactSub} />
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <Reveal>
            <h2 className="font-display text-xl font-bold sm:text-2xl">{t.contact.direct}</h2>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-steel" />
                {t.contact.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 shrink-0 text-steel" />
                <span dir="ltr">{t.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 shrink-0 text-steel" />
                <span dir="ltr">{t.contact.email}</span>
              </li>
            </ul>
            <Button asChild variant="gold" size="lg" className="mt-7">
              <a href="https://wa.me/96822000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle />
                {t.cta.whatsapp}
              </a>
            </Button>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-8">
              <h2 className="font-display text-xl font-bold sm:text-2xl">{t.contact.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t.contact.sub}</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
