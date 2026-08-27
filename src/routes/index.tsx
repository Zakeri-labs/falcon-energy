import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Award,
  BadgeCheck,
  ClipboardList,
  Compass,
  Cpu,
  Database,
  Gauge,
  Globe2,
  HardHat,
  MapPin,
  MessageCircle,
  Quote,
  Radar,
  Ruler,
  ShieldCheck,
  Star,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import heroImg from "@/assets/hero-oilfield.jpg";
import aboutImg from "@/assets/about-team.jpg";
import workField from "@/assets/work-field.jpg";
import workEquipment from "@/assets/work-equipment.jpg";
import workData from "@/assets/work-data.jpg";
import workSafety from "@/assets/work-safety.jpg";
import capabilitiesBg from "@/assets/Capabilities-section.webp";
import { useI18n } from "@/lib/i18n";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Falcon Oilfield Services | Wireline Logging & Well Intervention Oman",
      },
      {
        name: "description",
        content:
          "Oman-based independent oilfield services company delivering wireline logging, perforation, well intervention and reservoir monitoring for critical well operations.",
      },
      {
        property: "og:title",
        content: "Falcon Oilfield Services | Wireline Logging & Well Intervention Oman",
      },
      {
        property: "og:description",
        content:
          "Reliable wireline, intervention and reservoir intelligence solutions for Oman's energy sector.",
      },
    ],
  }),
  component: Home,
});

const serviceIcons = [Ruler, Zap, Radar, ShieldCheck];
const trustIcons = [Award, Users, Cpu, BadgeCheck, MapPin];
const aboutIcons = [Compass, Ruler, Globe2, ShieldCheck];
const processIcons = [ClipboardList, Ruler, HardHat, Database];
const workImages = [workField, workEquipment, aboutImg, workSafety];

function Home() {
  const { t, isRtl } = useI18n();

  return (
    <SiteLayout>
      {/* 1. HERO */}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-navy-deep">
        <img
          src={heroImg}
          alt={t.hero.alt}
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover rtl:scale-x-[-1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/10 rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/60" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-20 lg:px-8">
          <div className="me-auto max-w-2xl text-start">
            <Reveal>
              <span className="eyebrow rule-gold text-steel-light">{t.hero.eyebrow}</span>
              <h1 className="font-display mt-4 text-3xl leading-[1.1] font-bold text-navy-foreground sm:text-5xl lg:text-6xl">
                {t.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
                {t.hero.sub}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="gold" size="xl">
                  <Link to="/contact">
                    {t.cta.consult}
                    <ArrowRight className="rtl:rotate-180" />
                  </Link>
                </Button>
                <Button asChild variant="onDark" size="xl">
                  <Link to="/services">{t.cta.explore}</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section aria-label="Company credentials" className="border-y border-border bg-navy py-4">
        <div className="group flex overflow-hidden">
          <ul
            className={cn(
              "flex w-max shrink-0 items-center gap-10 pe-10 group-hover:[animation-play-state:paused]",
              isRtl ? "animate-marquee-rtl" : "animate-marquee-ltr",
            )}
          >
            {[...t.trust, ...t.trust].map((item, i) => {
              const Icon = trustIcons[i % trustIcons.length]!;
              return (
                <li
                  key={`${item}-${i}`}
                  className="flex items-center gap-2.5 text-sm font-semibold whitespace-nowrap text-navy-foreground/85"
                >
                  <Icon className="size-4 text-gold" />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section id="services" className="relative overflow-hidden bg-navy-deep py-20 sm:py-28">
        <img
          src={capabilitiesBg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1672}
          height={941}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:px-8">
          <Reveal className="order-2 self-start lg:order-1">
            <SectionHeading
              eyebrow={t.services.eyebrow}
              title={t.services.title}
              subtitle={t.services.sub}
              onDark
            />
          </Reveal>
          <ul className="order-1 grid grid-cols-2 gap-4 sm:gap-5 lg:order-2">
            {t.services.items.map((item, i) => {
              const Icon = serviceIcons[i]!;
              return (
                <Reveal as="li" key={item.title} delay={i * 80}>
                  <article className="group flex aspect-square h-full flex-col rounded-lg border border-navy-foreground/12 bg-navy/70 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 sm:p-5">
                    <span className="flex size-10 items-center justify-center rounded-md bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display mt-3 line-clamp-2 text-sm font-bold text-navy-foreground sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-navy-foreground/70">
                      {item.desc}
                    </p>
                    <Link
                      to="/services"
                      className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-semibold text-steel-light hover:text-gold"
                    >
                      {t.cta.learn}
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 4. ABOUT */}
      <section id="about" className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <Reveal className="order-2 lg:order-1">
            <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.about.body}</p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {t.about.points.map((p, i) => {
                const Icon = aboutIcons[i]!;
                return (
                  <li key={p.title} className="flex gap-3">
                    <Icon className="mt-0.5 size-5 shrink-0 text-steel" />
                    <div>
                      <h3 className="text-sm font-bold text-foreground">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <Button asChild variant="navy" size="lg" className="mt-8">
              <Link to="/about">{t.nav.about}</Link>
            </Button>
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={100}>
            <div className="relative">
              <img
                src={aboutImg}
                alt={t.about.alt}
                loading="lazy"
                width={1408}
                height={1008}
                className="w-full rounded-lg object-cover shadow-elevated"
              />
              <div className="absolute -bottom-5 start-5 rounded-md bg-navy px-5 py-4 text-navy-foreground shadow-elevated">
                <p className="font-display text-2xl font-bold text-gold">20+</p>
                <p className="text-xs tracking-wide text-navy-foreground/75">{t.trust[0]}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. PORTFOLIO */}
      <section id="portfolio" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow={t.work.eyebrow} title={t.work.title} subtitle={t.work.sub} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {t.work.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 70}>
                <article className="group relative h-full overflow-hidden rounded-lg bg-navy-deep">
                  <img
                    src={workImages[i]!}
                    alt={`${item.title} — Falcon Oilfield Services capability placeholder image`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-64 w-full object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-85 sm:h-72"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-block rounded-sm bg-gold px-2.5 py-1 text-[0.65rem] font-bold tracking-wider text-gold-foreground uppercase">
                      {item.tag}
                    </span>
                    <h3 className="font-display mt-3 text-lg font-bold text-navy-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm text-navy-foreground/75">{item.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. PROCESS */}
      <section id="process" className="relative overflow-hidden bg-navy-deep py-20 sm:py-28">
        <img
          src={workData}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1200}
          height={900}
          className="absolute inset-0 size-full object-cover opacity-15"
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} onDark />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((step, i) => {
              const Icon = processIcons[i]!;
              return (
                <Reveal as="li" key={step.title} delay={i * 90}>
                  <div className="relative h-full rounded-lg border border-navy-foreground/12 bg-navy/70 p-6 backdrop-blur-sm transition-colors hover:border-gold/50">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-3xl font-bold text-gold/45">
                        0{i + 1}
                      </span>
                      <Icon className="size-6 text-steel-light" />
                    </div>
                    <h3 className="font-display mt-5 text-base font-bold text-navy-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">
                      {step.desc}
                    </p>
                    {i < 3 && (
                      <span className="absolute top-1/2 -end-3 hidden size-6 items-center justify-center rounded-full bg-gold text-gold-foreground lg:flex">
                        <ArrowRight className="size-3.5 rtl:rotate-180" />
                      </span>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section id="testimonials" className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow={t.testi.eyebrow}
            title={t.testi.title}
            subtitle={t.testi.sub}
            center
          />
          <ul className="mt-12 grid gap-5 lg:grid-cols-3">
            {t.testi.items.map((item, i) => (
              <Reveal as="li" key={item.role} delay={i * 80}>
                <figure className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-elevated">
                  <Quote className="size-7 text-gold rtl:rotate-180" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                    “{item.quote}”
                  </blockquote>
                  <div className="mt-5 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                    <span className="flex size-10 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold">
                      <Users className="size-4" />
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">{item.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-12">
            <p className="text-center text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              {t.testi.partners}
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {[Activity, Gauge, Cpu, Wrench, Database].map((Icon, i) => (
                <li
                  key={i}
                  className="flex h-16 items-center justify-center gap-2 rounded-md border border-dashed border-border bg-background text-muted-foreground"
                >
                  <Icon className="size-5" />
                  <span className="text-xs font-semibold tracking-wide">LOGO</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section id="contact" className="bg-navy py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              subtitle={t.contact.sub}
              onDark
            />
            <div className="mt-8 space-y-3">
              <p className="text-sm font-semibold text-navy-foreground/80">{t.contact.direct}</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="gold" size="lg">
                  <a href="https://wa.me/96822000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle />
                    {t.cta.whatsapp}
                  </a>
                </Button>
                <Button asChild variant="onDark" size="lg">
                  <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
                </Button>
              </div>
              <p className="pt-2 text-sm text-navy-foreground/65">{t.contact.address}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-lg border border-navy-foreground/12 bg-navy-deep/60 p-6 shadow-elevated sm:p-8">
              <ContactForm onDark />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
