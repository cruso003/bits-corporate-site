import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Responsible disclosure",
  description:
    "How to report a security vulnerability in BITS systems, and what we promise in return.",
  alternates: { canonical: "/security/" },
};

const inScope = [
  "bits-innovate.com and all subdomains",
  "Any application or API operated by BITS",
];
const outScope = [
  "Client systems. Report those to the client directly",
  "Denial of service, load or volumetric testing",
  "Social engineering or phishing of BITS staff",
  "Physical attacks against offices or data centres",
  "Missing best-practice headers with no demonstrated impact",
  "Findings from automated scanners without a working proof",
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Responsible disclosure"
        title={
          <>
            Found a hole in our systems?{" "}
            <span className="text-muted">
              We&apos;d rather hear it from you.
            </span>
          </>
        }
        lede="We test other people's security for a living, so we'd be hypocrites not to welcome reports about our own. Act in good faith and we won't pursue legal action. Simple as that."
      />
      <Container className="pb-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                How to report
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Email{" "}
                <a
                  href={`mailto:${site.securityEmail}`}
                  className="font-mono text-signal hover:text-fg"
                >
                  {site.securityEmail}
                </a>{" "}
                with a description of the issue, steps to reproduce, the
                affected URL or asset, and the impact you believe it has.
                Screenshots or a short video help. Please give us reasonable
                time to fix things before telling anyone else.
              </p>
            </section>
            <section className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-signal/30 bg-signal/[0.04] p-6">
                <h3 className="font-semibold">In scope</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {inScope.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-signal">+</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-line p-6">
                <h3 className="font-semibold">Out of scope</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {outScope.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-alert">−</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Ground rules
              </h2>
              <ul className="mt-4 space-y-3 leading-relaxed text-muted">
                <li>
                  Only access data you need to prove the issue. Never modify or
                  delete it.
                </li>
                <li>
                  Stop and report as soon as you reach personal data or
                  credentials.
                </li>
                <li>Don&apos;t degrade service for other users.</li>
                <li>
                  Keep the details confidential until we&apos;ve confirmed a
                  fix.
                </li>
              </ul>
            </section>
          </div>
          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-line bg-ink-2/70 p-6 lg:sticky lg:top-28">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
                Our commitments
              </p>
              <dl className="mt-5 space-y-5">
                {[
                  ["Acknowledge", "within 2 working days"],
                  ["Initial assessment", "within 5 working days"],
                  ["Status updates", "at least every 14 days"],
                  ["Credit", "public thanks, if you want it"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-sm font-medium text-fg">{k}</dt>
                    <dd className="font-mono text-xs text-muted">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 border-t border-line pt-5 font-mono text-[11px] text-dim">
                Machine-readable policy at{" "}
                <a
                  href="/.well-known/security.txt"
                  className="text-muted hover:text-signal"
                >
                  /.well-known/security.txt
                </a>
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
