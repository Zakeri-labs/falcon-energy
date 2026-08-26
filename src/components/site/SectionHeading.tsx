import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  onDark = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  onDark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <span className={cn("eyebrow rule-gold", onDark && "text-steel-light")}>{eyebrow}</span>
      <h2
        className={cn(
          "font-display mt-3 text-2xl font-bold sm:text-4xl",
          onDark ? "text-navy-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed",
            onDark ? "text-navy-foreground/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
