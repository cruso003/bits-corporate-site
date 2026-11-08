import type { Metadata } from "next";
import { CTA } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { Principles } from "@/components/sections/principles";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Building Innovative Technical Solutions Limited is a Nigerian technology firm combining offensive security, resilience planning and software engineering.",
  alternates: { canonical: "/about/" },
};

const facts = [
  { k: "Legal name", v: site.legalName },
  { k: "Incorporated", v: `${site.incorporated}, Federal Republic of Nigeria` },
  { k: "Governing law", v: "Companies and Allied Matters Act, 2020" },
  { k: "Company type", v: "Private company limited by shares" },
  { k: "Headquarters", v: site.location },
  { k: "Serving", v: "Nigeria and clients across Africa" },
];

const mandate = [
  "Design, develop and distribute software solutions",
  "Technical consultancy and IT infrastructure services",
  "Build and maintain applications for businesses, individuals and government",
  "Research and development in AI, IoT and blockchain",
  "Market and supply technology products and services",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BITS"
        title={
          <>
            Built by people who got tired of{" "}
            <span className="text-muted">
              security being somebody else&apos;s problem.
            </span>
          </>
        }
      />

      <Container className="pb-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7">
            <Reveal>
              <p className="text-2xl leading-snug text-fg">
                Nigerian organisations are digitising fast. Banking, government
                services, health records, payments. The attack surface grew
                faster than the people defending it.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                We kept seeing the same pattern. One firm builds the app.
                Another tests it, months later, after launch. A third writes a
                continuity plan that nobody has ever rehearsed. And when
                something breaks at 2am, all three point at each other.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                BITS, Building Innovative Technical Solutions, was set up in
                2025 to close that gap. Offensive security, defensive
                operations, continuity planning and engineering in one firm, so
                the people who know how systems fail are in the room when
                they&apos;re designed.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                We&apos;re deliberately small and senior. You won&apos;t get a
                partner at the pitch and a graduate on the job. The people who
                scope your work do your work.
              </p>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-line bg-ink-2/70 p-7 lg:sticky lg:top-28">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
                Company record
              </p>
              <dl className="mt-5 divide-y divide-line">
                {facts.map((f) => (
                  <div key={f.k} className="grid grid-cols-5 gap-4 py-3.5">
                    <dt className="col-span-2 text-sm text-dim">{f.k}</dt>
                    <dd className="col-span-3 text-sm text-fg">{f.v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
                Our registered mandate
              </p>
              <ul className="mt-4 space-y-2.5">
                {mandate.map((m) => (
                  <li key={m} className="flex gap-3 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>

      <Principles />
      <CTA
        title="Work with us. Or work here."
        body={`We're always talking to strong pentesters, SOC analysts, cloud engineers and developers. Send your work to ${site.email}.`}
      />
    </>
  );
}
