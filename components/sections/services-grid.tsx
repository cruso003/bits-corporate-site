import Link from "next/link";
import { Container } from "@/components/ui/container";
import { GlowCard } from "@/components/ui/glow-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";
import { services } from "@/lib/services";

export function ServicesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className={cn(heading && "py-24 sm:py-32")}>
      <Container>
        {heading && (
          <SectionHeading
            eyebrow="Practice areas"
            title="Everything between the first line of code and the worst day of the year."
          />
        )}
        <div
          className={cn(
            "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
            heading && "mt-16",
          )}
        >
          {services.map((s, i) => (
            <Reveal
              key={s.slug}
              delay={(i % 4) * 0.06}
              className={cn((i < 2 || i >= 6) && "lg:col-span-2")}
            >
              <Link href={`/services/${s.slug}/`} className="block h-full">
                <GlowCard className="group flex h-full flex-col p-7">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-signal">
                      <s.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[11px] text-dim">
                      {s.code}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-semibold tracking-tight">
                    {s.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {s.tagline}
                  </p>
                  {(i < 2 || i >= 6) && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {s.offerings.slice(0, 5).map((o) => (
                        <li
                          key={o.title}
                          className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                        >
                          {o.title}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-dim transition-colors group-hover:text-signal">
                    Explore{" "}
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </GlowCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
