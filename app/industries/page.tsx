import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { industries } from "@/lib/industries";
import { getService } from "@/lib/services";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Cybersecurity, continuity and engineering for banks, fintechs, government, telecoms, energy, healthcare, insurance, education and retail in Nigeria.",
  alternates: { canonical: "/industries/" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Every sector gets attacked.{" "}
            <span className="text-muted">Each one differently.</span>
          </>
        }
        lede="A fintech's biggest risk is a leaky API. A hospital's is twelve hours offline. A ministry's is a citizen database on a forum. We start from your sector's regulators, threats and failure modes."
      />
      <Container className="pb-8">
        <div className="grid gap-4 md:grid-cols-2">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 2) * 0.06}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-ink-2/60 p-8 transition-colors hover:border-line-strong">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-signal">
                    <ind.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[11px] text-dim">
                    {ind.pressure}
                  </span>
                </div>
                <h2 className="mt-8 text-2xl font-semibold tracking-tight">
                  {ind.name}
                </h2>
                <p className="mt-4 flex-1 leading-relaxed text-muted">
                  {ind.body}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6">
                  {ind.services.map((slug) => {
                    const s = getService(slug);
                    if (!s) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/services/${slug}/`}
                          className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:border-signal/50 hover:text-signal"
                        >
                          <s.icon className="h-3.5 w-3.5" aria-hidden="true" />
                          {s.short}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
      <CTA
        title="Your sector not listed?"
        body="The attack techniques don't change much between industries. The regulators and the cost of downtime do. Tell us about yours."
      />
    </>
  );
}
