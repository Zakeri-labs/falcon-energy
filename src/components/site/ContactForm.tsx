import { useState } from "react";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactForm({ onDark = false }: { onDark?: boolean }) {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  const field = cn(
    "h-11 w-full rounded-md border px-3 text-sm outline-none transition-colors focus:ring-2",
    onDark
      ? "border-navy-foreground/20 bg-navy-foreground/5 text-navy-foreground placeholder:text-navy-foreground/45 focus:border-gold focus:ring-gold/25"
      : "border-input bg-background text-foreground placeholder:text-muted-foreground focus:border-steel focus:ring-steel/20",
  );
  const labelCls = cn(
    "mb-1.5 block text-xs font-semibold tracking-wide uppercase",
    onDark ? "text-navy-foreground/70" : "text-muted-foreground",
  );

  const services = t.services.items.map((s) => s.title);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        toast.success(t.contact.success);
      }}
      className="grid gap-4 sm:grid-cols-2"
    >
      <div>
        <label className={labelCls} htmlFor="company">
          {t.contact.fields.company}
        </label>
        <input id="company" name="company" required className={field} />
      </div>
      <div>
        <label className={labelCls} htmlFor="person">
          {t.contact.fields.person}
        </label>
        <input id="person" name="person" required className={field} />
      </div>
      <div>
        <label className={labelCls} htmlFor="service">
          {t.contact.fields.service}
        </label>
        <select id="service" name="service" required defaultValue="" className={field}>
          <option value="" disabled>
            {t.contact.select}
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelCls} htmlFor="location">
          {t.contact.fields.location}
        </label>
        <input id="location" name="location" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="timeline">
          {t.contact.fields.timeline}
        </label>
        <input id="timeline" name="timeline" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="message">
          {t.contact.fields.message}
        </label>
        <textarea id="message" name="message" rows={4} className={cn(field, "h-auto py-2.5")} />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" variant="gold" size="xl" className="w-full sm:w-auto">
          {sent ? t.contact.success : t.contact.submit}
        </Button>
      </div>
    </form>
  );
}
