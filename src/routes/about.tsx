import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Globe2, Ruler, ShieldCheck } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import { useI18n } from "@/lib/i18n";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Falcon Oilfield Services | Independent Oman Well Services" },
      {
        name: "description",
        content:
          "Falcon Oilfield Services is an Oman-based independent partner delivering wireline, intervention and reservoir intelligence for critical well operations.",
      },
      { property: "og:title", content: "About Falcon Oilfield Services" },
      {
        property: "og:description",
        content: "Independent Omani expertise in wireline, intervention and reservoir intelligence.",
      },
    ],
  }),
  component: AboutPage,
});

const icons = [Compass, Ruler, Globe2, ShieldCheck];

function AboutPage() {
  const { t } = useI18n();

  return (
    <SiteLayout>
      <PageHero title={t.pages.aboutTitle} subtitle={t.pages.aboutSub} />
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">{t.about.title}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.about.body}</p>
            <ul className="mt-8 space-y-5">
              {t.about.points.map((p, i) => {
                const Icon = icons[i]!;
                return (
                  <li key={p.title} className="flex gap-3">
                    <Icon className="mt-0.5 size-5 shrink-0 text-steel" />
                    <div>
                      <h3 className="text-sm font-bold">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <Button asChild variant="gold" size="lg" className="mt-8">
              <Link to="/contact">{t.cta.consult}</Link>
            </Button>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={aboutImg}
              alt={t.about.alt}
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full rounded-lg object-cover shadow-elevated"
            />
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {t.trust.slice(0, 4).map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-secondary p-4 text-sm font-semibold"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
