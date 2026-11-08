import { Check, Plus } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlowCard } from "@/components/ui/glow-card";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/section-heading";
import { getService, pillars, services } from "@/lib/services";
import { site } from "@/lib/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.name,
    description: s.summary,
    alternates: { canonical: `/services/${s.slug}/` },
    openGraph: { title: `${s.name} | ${site.name}`, description: s.tagline },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = services
    .filter((x) => x.slug !== s.slug && x.pillar === s.pillar)
    .concat(services.filter((x) => x.pillar !== s.pillar))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.summary,
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: { "@type": "Country", name: "Nigeria" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: s.name,
      itemListElement: s.offerings.map((o) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: o.title, description: o.body },
      })),
    },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-grid mask-radial"
        />
        <div
          aria-hidden="true"
          className="absolute -top-48 right-0 h-[520px] w-[820px] rounded-full bg-signal/[0.07] blur-[120px]"
        />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-dim">
            <Link href="/services/" className="hover:text-fg">
              services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-muted">{s.slug}</span>
          </nav>
          <div className="mt-8 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Eyebrow>
                {pillars[s.pillar].verb} · {s.code}
              </Eyebrow>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.03em] sm:text-6xl">
                {s.name}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-fg/80">
                {s.tagline}
              </p>
              <p className="mt-5 max-w-2xl leading-relaxed text-muted">
                {s.summary}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href={`/contact/?service=${s.slug}`}>
                  Scope this with us
                </Button>
                <Button href="#offerings" variant="ghost" arrow={false}>
                  What&apos;s included
                </Button>
              </div>
            </div>
            <aside className="lg:col-span-4">
              <div className="rounded-2xl border border-line bg-ink-2/80 p-6 backdrop-blur">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
                  Aligned to
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.standards.map((st) => (
                    <li
                      key={st}
                      className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-fg/80"
                    >
                      {st}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-line pt-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
                    In scope
                  </p>
                  <p className="mt-2 text-3xl font-semibold">
                    {s.offerings.length} services
                  </p>
                  <p className="text-sm text-muted">
                    Mix and match, or take the full programme.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section
        id="offerings"
        className="scroll-mt-24 border-t border-line py-24"
      >
        <Container>
          <SectionHeading
            eyebrow="What's included"
            title="Pick what you need. We'll tell you what you've missed."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {s.offerings.map((o, i) => (
              <Reveal key={o.title} delay={(i % 4) * 0.05}>
                <GlowCard className="h-full p-6">
                  <span className="font-mono text-xs text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-semibold tracking-tight">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {o.body}
                  </p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-ink-2/40 py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="How it runs" title="The process." />
              <ol className="mt-10 space-y-0">
                {s.process.map((p, i) => (
                  <li
                    key={p.title}
                    className="relative flex gap-5 pb-8 last:pb-0"
                  >
                    {i < s.process.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[15px] top-9 bottom-0 w-px bg-line-strong"
                      />
                    )}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-signal/50 font-mono text-xs text-signal">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold">{p.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {p.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <SectionHeading
                eyebrow="What you walk away with"
                title="Deliverables."
              />
              <ul className="mt-10 space-y-3">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex gap-3 rounded-xl border border-line bg-ink/60 p-4"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-signal"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-fg/90">
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="FAQ" title="Questions we get asked." />
            </div>
            <div className="divide-y divide-line border-y border-line lg:col-span-8">
              {s.faqs.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex cursor-pointer items-start justify-between gap-6 text-lg font-medium">
                    {f.q}
                    <Plus
                      className="mt-1 h-5 w-5 shrink-0 text-signal transition-transform duration-200 group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-4 max-w-3xl leading-relaxed text-muted">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-dim">
            Often paired with
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}/`}
                className="block"
              >
                <GlowCard className="group flex h-full items-start gap-4 p-6">
                  <r.icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-signal"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-semibold transition-colors group-hover:text-signal">
                      {r.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {r.tagline}
                    </p>
                  </div>
                </GlowCard>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title={`Let's talk about ${s.short.toLowerCase() === "advisory" ? "your roadmap" : s.short}.`}
        body="Send a few lines on what you need and when. You'll get a reply from a practitioner, not a sales rep, within one working day."
      />

      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqLd]) }}
      />
    </>
  );
}
