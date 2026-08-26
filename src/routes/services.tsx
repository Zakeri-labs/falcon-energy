import { createFileRoute, Link } from "@tanstack/react-router";
import { Radar, Ruler, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Wireline Logging, Perforation & Well Intervention Oman" },
      {
        name: "description",
        content:
          "Wireline logging and formation evaluation, perforation and well intervention, reservoir monitoring and well integrity solutions across Oman.",
      },
      { property: "og:title", content: "Falcon Oilfield Services — Capabilities" },
      {
        property: "og:description",
        content: "Focused well-service capabilities engineered for measurable downhole outcomes.",
      },
    ],
  }),
  component: ServicesPage,
});

const icons = [Ruler, Zap, Radar, ShieldCheck];

function ServicesPage() {
  const { t } = useI18n();

  return (
    <SiteLayout>
      <PageHero title={t.pages.servicesTitle} subtitle={t.pages.servicesSub} />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ul className="grid gap-5 sm:grid-cols-2">
            {t.services.items.map((item, i) => {
              const Icon = icons[i]!;
              return (
                <Reveal as="li" key={item.title} delay={i * 70}>
                  <article className="h-full rounded-lg border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
                    <span className="flex size-12 items-center justify-center rounded-md bg-navy text-gold">
                      <Icon className="size-6" />
                    </span>
                    <h2 className="font-display mt-5 text-lg font-bold">{item.title}</h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </ul>
          <Reveal className="mt-12 rounded-lg bg-navy p-8 text-navy-foreground sm:p-10">
            <h2 className="font-display text-xl font-bold sm:text-2xl">{t.contact.title}</h2>
            <p className="mt-2 max-w-xl text-sm text-navy-foreground/75">{t.contact.sub}</p>
            <Button asChild variant="gold" size="lg" className="mt-6">
              <Link to="/contact">
                {t.cta.consult}
                <ArrowRight className="rtl:rotate-180" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
