import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileBottomNav } from "./MobileBottomNav";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      {/* spacer for mobile sticky bottom nav */}
      <div className="h-14 lg:hidden" />
      <MobileBottomNav />
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-navy-deep pt-28 pb-14 text-navy-foreground sm:pt-32 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h1 className="font-display max-w-3xl text-3xl font-bold sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-navy-foreground/75 sm:text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
