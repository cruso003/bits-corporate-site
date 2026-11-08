import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { type Pillar, pillars, servicesByPillar } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Penetration testing, managed detection and response, GRC, business continuity and disaster recovery, cloud, software engineering, data and AI, and IT advisory.",
  alternates: { canonical: "/services/" },
};

const order: Pillar[] = ["secure", "continue", "build"];

const models = [
  {
    name: "Project",
    body: "Fixed scope, fixed price, fixed dates. Pentests, audits, BIAs, migrations, builds.",
  },
  {
    name: "Retainer",
    body: "Reserved hours and guaranteed response for incident response, vCISO and advisory.",
  },
  {
    name: "Managed service",
    body: "Monthly subscription for SOC monitoring, vulnerability management and infrastructure.",
  },
  {
    name: "Team extension",
    body: "Our engineers or security specialists embedded in your team for as long as you need.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Eight practices.{" "}
            <span className="text-muted">One accountable team.</span>
          </>
        }
        lede="Hire us for one thing or all of them. Either way you get senior people, written scopes and work that holds up when an auditor, a regulator or an attacker looks at it."
      />

      <Container className="space-y-24 pb-8">
        {order.map((p, pi) => (
          <section key={p} aria-labelledby={`pillar-${p}`}>
            <div className="flex flex-col gap-4 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-xs text-dim">
                  0{pi + 1} / {pillars[p].label}
                </p>
                <h2
                  id={`pillar-${p}`}
                  className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  {pillars[p].verb}.
                </h2>
              </div>
              <p className="max-w-md text-muted">{pillars[p].line}</p>
            </div>
            <div className="divide-y divide-line">
              {servicesByPillar(p).map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.05}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="group grid gap-6 py-10 transition-colors lg:grid-cols-12 lg:items-start"
                  >
                    <div className="flex items-center gap-4 lg:col-span-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-signal transition-colors group-hover:border-signal/50">
                        <s.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-mono text-[11px] text-dim">
                          {s.code}
                        </p>
                        <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-signal">
                          {s.name}
                        </h3>
                      </div>
                    </div>
                    <p className="leading-relaxed text-muted lg:col-span-4">
                      {s.tagline}
                    </p>
                    <ul className="flex flex-wrap gap-2 lg:col-span-4 lg:justify-end">
                      {s.offerings.slice(0, 4).map((o) => (
                        <li
                          key={o.title}
                          className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                        >
                          {o.title}
                        </li>
                      ))}
                      <li className="rounded-full px-3 py-1 font-mono text-xs text-signal">
                        +{s.offerings.length - 4} more →
                      </li>
                    </ul>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        <section
          aria-labelledby="models"
          className="rounded-3xl border border-line bg-ink-2/60 p-8 sm:p-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal">
            Ways to engage
          </p>
          <h2
            id="models"
            className="mt-4 text-3xl font-semibold tracking-tight"
          >
            Buy it the way that suits your budget cycle.
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {models.map((m) => (
              <div key={m.name} className="border-l border-signal/40 pl-5">
                <h3 className="font-semibold">{m.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <CTA />
    </>
  );
}
