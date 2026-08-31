import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Compass,
  Cpu,
  Database,
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
  Zap,
} from "lucide-react";
import heroImg from "@/assets/hero-oilfield.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import aboutImg from "@/assets/about-team.jpg";
import workField from "@/assets/work-field.jpg";
import workEquipment from "@/assets/work-equipment.jpg";
import workData from "@/assets/work-data.jpg";
import workSafety from "@/assets/work-safety.jpg";
import capabilitiesBg from "@/assets/Capabilities-section.webp";
import capabilitiesBgMobile from "@/assets/Capabilities-section-mobile.webp";
import logoPdo from "@/assets/Client Logo/01_PDO.png";
import logoOxy from "@/assets/Client Logo/02_OXY.png";
import logoPetrogasEp from "@/assets/Client Logo/03_Petrogas_EP.png";
import logoCced from "@/assets/Client Logo/04_CCED.png";
import logoMedcoEnergi from "@/assets/Client Logo/05_MedcoEnergi.png";
import logoDaleelPetroleum from "@/assets/Client Logo/06_Daleel_Petroleum.png";
import logoJannahHunt from "@/assets/Client Logo/07_Jannah_Hunt.png";
import logoPetroTelOman from "@/assets/Client Logo/08_PetroTel_Oman.png";
import logoHydrocarbonFinderEp from "@/assets/Client Logo/09_Hydrocarbon_Finder_EP.png";
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
const clientLogos = [
  { src: logoPdo, alt: "PDO" },
  { src: logoOxy, alt: "OXY" },
  { src: logoPetrogasEp, alt: "Petrogas EP" },
  { src: logoCced, alt: "CCED" },
  { src: logoMedcoEnergi, alt: "MedcoEnergi" },
  { src: logoDaleelPetroleum, alt: "Daleel Petroleum" },
  { src: logoJannahHunt, alt: "Jannah Hunt" },
  { src: logoPetroTelOman, alt: "PetroTel Oman" },
  { src: logoHydrocarbonFinderEp, alt: "Hydrocarbon Finder EP" },
];

function HeroVideoLoop({ alt }: { alt: string }) {
  const firstVideoRef = useRef<HTMLVideoElement>(null);
  const secondVideoRef = useRef<HTMLVideoElement>(null);
  const [visibleVideo, setVisibleVideo] = useState<0 | 1>(0);
  const transitionStartedRef = useRef(false);
  const crossfadeDuration = 0.75;

  const videoRefs = [firstVideoRef, secondVideoRef] as const;

  const startTransition = (currentIndex: 0 | 1) => {
    if (transitionStartedRef.current) return;

    const nextIndex = currentIndex === 0 ? 1 : 0;
    const nextVideo = videoRefs[nextIndex].current;
    if (!nextVideo) return;

    transitionStartedRef.current = true;
    nextVideo.currentTime = 0;
    void nextVideo.play();
    setVisibleVideo(nextIndex);
  };

  const handleTimeUpdate = (index: 0 | 1) => {
    const video = videoRefs[index].current;
    if (!video || !Number.isFinite(video.duration)) return;

    if (video.currentTime >= video.duration - crossfadeDuration) {
      startTransition(index);
    }
  };

  const handleEnded = (index: 0 | 1) => {
    const video = videoRefs[index].current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    if (!transitionStartedRef.current) {
      void video.play();
      return;
    }

    transitionStartedRef.current = false;
  };

  return (
    <div className="absolute inset-0" aria-label={alt}>
      {[firstVideoRef, secondVideoRef].map((ref, index) => (
        <video
          key={index}
          ref={ref}
          autoPlay={index === 0}
          muted
          playsInline
          preload="auto"
          poster={heroImg}
          aria-hidden={index === 1}
          onTimeUpdate={() => handleTimeUpdate(index as 0 | 1)}
          onEnded={() => handleEnded(index as 0 | 1)}
          className={cn(
            "absolute inset-0 size-full object-cover object-[65%_center] transition-opacity duration-700 ease-linear sm:scale-105 sm:object-center rtl:scale-x-[-1]",
            visibleVideo === index ? "opacity-100" : "opacity-0",
          )}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      ))}
    </div>
  );
}

function Home() {
  const { t, isRtl } = useI18n();
  const servicesScrollRef = useRef<HTMLUListElement>(null);
  const servicesPausedUntilRef = useRef(0);
  const scrollServices = (direction: 1 | -1) => {
    const el = servicesScrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85 * (isRtl ? -1 : 1) * direction;
    el.scrollBy({ left: amount, behavior: "smooth" });
    servicesPausedUntilRef.current = Date.now() + 4500;
  };

  useEffect(() => {
    const id = window.setInterval(() => {
      const el = servicesScrollRef.current;
      if (!el || window.innerWidth >= 1024) return;
      if (Date.now() < servicesPausedUntilRef.current) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;
      const atEnd = isRtl ? el.scrollLeft <= -maxScroll + 4 : el.scrollLeft >= maxScroll - 4;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: (isRtl ? -1 : 1) * el.clientWidth * 0.85, behavior: "smooth" });
      }
    }, 3200);
    return () => window.clearInterval(id);
  }, [isRtl]);

  const testiScrollRef = useRef<HTMLUListElement>(null);
  const testiPausedUntilRef = useRef(0);
  const scrollTesti = (direction: 1 | -1) => {
    const el = testiScrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85 * (isRtl ? -1 : 1) * direction;
    el.scrollBy({ left: amount, behavior: "smooth" });
    testiPausedUntilRef.current = Date.now() + 4500;
  };

  useEffect(() => {
    const id = window.setInterval(() => {
      const el = testiScrollRef.current;
      if (!el || window.innerWidth >= 1024) return;
      if (Date.now() < testiPausedUntilRef.current) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;
      const atEnd = isRtl ? el.scrollLeft <= -maxScroll + 4 : el.scrollLeft >= maxScroll - 4;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: (isRtl ? -1 : 1) * el.clientWidth * 0.85, behavior: "smooth" });
      }
    }, 3200);
    return () => window.clearInterval(id);
  }, [isRtl]);

  return (
    <SiteLayout>
      {/* 1. HERO */}
      <section className="relative isolate flex min-h-[82svh] items-center overflow-hidden bg-navy-deep sm:min-h-screen">
        <HeroVideoLoop alt={t.hero.alt} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 via-navy-deep/35 to-navy-deep/10 rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-navy-deep/25" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-20 lg:px-8">
          <div className="me-auto max-w-[70%] text-start sm:max-w-2xl">
            <Reveal>
              <span className="eyebrow rule-gold text-steel-light">{t.hero.eyebrow}</span>
              <h1 className="font-display mt-4 text-3xl leading-[1.1] font-bold text-navy-foreground sm:text-5xl lg:text-6xl">
                {t.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
                {t.hero.sub}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  variant="gold"
                  size="xl"
                  className="h-auto min-h-13 whitespace-normal py-3 text-center leading-snug sm:h-13 sm:whitespace-nowrap sm:py-0"
                >
                  <Link to="/contact">
                    {t.cta.consult}
                    <ArrowRight className="rtl:rotate-180" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="onDark"
                  size="xl"
                  className="h-auto min-h-13 whitespace-normal py-3 text-center leading-snug sm:h-13 sm:whitespace-nowrap sm:py-0"
                >
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
      <section id="services" className="relative overflow-hidden bg-navy-deep py-14 sm:py-28">
        <img
          src={capabilitiesBgMobile}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={941}
          height={1672}
          className="absolute inset-0 block size-full object-cover object-[center_38%] lg:hidden"
        />
        <img
          src={capabilitiesBg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1672}
          height={941}
          className="absolute inset-0 hidden size-full object-cover object-center lg:block"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-3 px-4 lg:grid-cols-2 lg:gap-10 lg:px-8">
          <Reveal className="order-1 self-start lg:order-1">
            <SectionHeading
              eyebrow={t.services.eyebrow}
              title={t.services.title}
              subtitle={t.services.sub}
              onDark
            />
          </Reveal>
          <div className="order-2 min-w-0 lg:order-2">
            <div className="mb-3 flex justify-end gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => scrollServices(-1)}
                aria-label={isRtl ? "بعدی" : "Previous"}
                className="flex size-9 items-center justify-center rounded-full bg-navy text-gold shadow-card transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                <ChevronLeft className="size-4 rtl:rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => scrollServices(1)}
                aria-label={isRtl ? "قبلی" : "Next"}
                className="flex size-9 items-center justify-center rounded-full bg-navy text-gold shadow-card transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                <ChevronRight className="size-4 rtl:rotate-180" />
              </button>
            </div>
            <ul
              ref={servicesScrollRef}
              onPointerDown={() => {
                servicesPausedUntilRef.current = Date.now() + 6000;
              }}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scroll-padding-inline:7%] [scrollbar-width:none] lg:grid lg:grid-cols-2 lg:gap-5 lg:overflow-visible lg:pb-0 lg:[scroll-padding-inline:0] [&::-webkit-scrollbar]:hidden"
            >
              {t.services.items.map((item, i) => {
                const Icon = serviceIcons[i]!;
                return (
                  <Reveal
                    as="li"
                    key={item.title}
                    delay={i * 80}
                    className="w-[86%] shrink-0 snap-center lg:w-auto"
                  >
                    <article className="group flex h-full min-h-64 flex-col rounded-lg border border-navy-foreground/12 bg-navy/70 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 sm:p-5 lg:aspect-square lg:min-h-0">
                      <span className="flex size-10 items-center justify-center rounded-md bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="font-display mt-3 text-sm font-bold text-navy-foreground sm:text-base lg:line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-navy-foreground/70 lg:line-clamp-3">
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
        </div>
      </section>

      {/* 4. ABOUT */}
      <section id="about" className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <Reveal className="order-1">
            <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.about.body}</p>
            <Reveal className="mt-6 lg:hidden" delay={60}>
              <div className="relative">
                <img
                  src={aboutImg}
                  alt={t.about.alt}
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="w-full rounded-lg object-cover shadow-elevated"
                />
                <div className="animate-float badge-glow-static absolute -bottom-5 start-5 rounded-md border border-gold/25 bg-navy px-5 py-4 text-navy-foreground">
                  <p className="font-display text-2xl font-bold text-gold">20+</p>
                  <p className="text-xs tracking-wide text-navy-foreground/75">{t.trust[0]}</p>
                </div>
              </div>
            </Reveal>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {t.about.points.map((p, i) => {
                const Icon = aboutIcons[i]!;
                return (
                  <Reveal
                    as="li"
                    key={p.title}
                    variant="fall"
                    delay={i * 120}
                    className="flex gap-3"
                  >
                    <Icon className="mt-0.5 size-5 shrink-0 text-steel" />
                    <div>
                      <h3 className="text-sm font-bold text-foreground">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
            <Button asChild variant="navy" size="lg" className="mt-8">
              <Link to="/about">{t.nav.about}</Link>
            </Button>
          </Reveal>
          <Reveal className="order-2 hidden lg:block" delay={100}>
            <div className="relative">
              <img
                src={aboutImg}
                alt={t.about.alt}
                loading="lazy"
                width={1408}
                height={1008}
                className="w-full rounded-lg object-cover shadow-elevated"
              />
              <div className="animate-float badge-glow-static absolute -bottom-5 start-5 rounded-md border border-gold/25 bg-navy px-5 py-4 text-navy-foreground">
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

          {/* Mobile: vertical timeline */}
          <ol className="mt-10 lg:hidden">
            {t.process.steps.map((step, i) => {
              const Icon = processIcons[i]!;
              const isLast = i === t.process.steps.length - 1;
              return (
                <Reveal as="li" key={step.title} delay={i * 90} className="flex gap-4">
                  <div className="flex shrink-0 flex-col items-center">
                    <span className="flex size-11 items-center justify-center rounded-full border border-gold/40 bg-navy">
                      <Icon className="size-5 text-gold" />
                    </span>
                    {!isLast && (
                      <span className="mt-1 min-h-14 w-0.5 flex-1 bg-navy-foreground/12" />
                    )}
                  </div>
                  <div className={cn("pb-7", isLast && "pb-0")}>
                    <h3 className="font-display text-base font-bold text-navy-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-foreground/70">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ol>

          {/* Desktop: horizontal timeline */}
          <ol className="relative mt-16 hidden lg:grid lg:grid-cols-4 lg:gap-6">
            <span className="absolute top-[22px] start-[12.5%] end-[12.5%] h-0.5 bg-navy-foreground/12" />
            {t.process.steps.map((step, i) => {
              const Icon = processIcons[i]!;
              return (
                <Reveal
                  as="li"
                  key={step.title}
                  delay={i * 90}
                  className="relative flex flex-col items-center text-center"
                >
                  <span className="relative flex size-11 items-center justify-center rounded-full border border-gold/40 bg-navy">
                    <Icon className="size-5 text-gold" />
                  </span>
                  <h3 className="font-display mt-5 text-base font-bold text-navy-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">
                    {step.desc}
                  </p>
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
          <div className="mt-12 flex justify-end gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => scrollTesti(-1)}
              aria-label={isRtl ? "بعدی" : "Previous"}
              className="flex size-9 items-center justify-center rounded-full bg-navy text-gold shadow-card transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              <ChevronLeft className="size-4 rtl:rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollTesti(1)}
              aria-label={isRtl ? "قبلی" : "Next"}
              className="flex size-9 items-center justify-center rounded-full bg-navy text-gold shadow-card transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              <ChevronRight className="size-4 rtl:rotate-180" />
            </button>
          </div>
          <ul
            ref={testiScrollRef}
            onPointerDown={() => {
              testiPausedUntilRef.current = Date.now() + 6000;
            }}
            className="mt-3 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scroll-padding-inline:7%] [scrollbar-width:none] lg:mt-12 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 lg:[scroll-padding-inline:0] [&::-webkit-scrollbar]:hidden"
          >
            {t.testi.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.role}
                delay={i * 80}
                className="w-[86%] shrink-0 snap-center lg:w-auto"
              >
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
            <div className="group mt-6 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <ul
                className={cn(
                  "flex w-max shrink-0 items-center gap-12 pe-12 group-hover:[animation-play-state:paused]",
                  isRtl ? "animate-marquee-rtl" : "animate-marquee-ltr",
                )}
              >
                {[...clientLogos, ...clientLogos].map((logo, i) => (
                  <li
                    key={`${logo.alt}-${i}`}
                    className="flex h-21 shrink-0 items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="h-15 w-auto max-w-[210px] object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                    />
                  </li>
                ))}
              </ul>
            </div>
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
                  <a href="https://wa.me/96822321114" target="_blank" rel="noopener noreferrer">
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
