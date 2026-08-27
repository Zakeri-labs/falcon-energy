import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
  variant?: "up" | "fall";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const isMobileFall =
    variant === "fall" && typeof window !== "undefined" && window.innerWidth < 1024;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observerOptions =
      variant === "fall" && window.innerWidth < 1024
        ? { threshold: 0.4, rootMargin: "0px 0px -80px 0px" }
        : { threshold: 0.12, rootMargin: "0px 0px -60px 0px" };
    const io = new IntersectionObserver((entries) => {
      setShown(!!entries[0]?.isIntersecting);
    }, observerOptions);
    io.observe(el);
    return () => io.disconnect();
  }, [variant]);

  const Component = Tag as "div";

  return (
    <Component
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        ...(isMobileFall
          ? { transitionDuration: "0.9s, 1.3s", transitionProperty: "opacity, transform" }
          : {}),
      }}
      className={cn(
        variant === "fall" ? "reveal-fall" : "reveal",
        shown && (variant === "fall" ? "reveal-fall-in" : "reveal-in"),
        className,
      )}
    >
      {children}
    </Component>
  );
}
