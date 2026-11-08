import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const principles = [
  {
    k: "01",
    title: "Attackers and builders share a desk",
    body: "Our pentesters review the code our engineers write. Our engineers fix what our pentesters find. Security knowledge flows into every project instead of arriving as a surprise at the end.",
  },
  {
    k: "02",
    title: "Reports written for the people who fix things",
    body: "Every finding ships with proof, business impact and a specific fix. And a one-page summary your board will actually read. No 200-page PDFs of scanner output.",
  },
  {
    k: "03",
    title: "Built for how Nigeria actually works",
    body: "Unreliable grid power, fibre cuts, dollar-priced cloud bills, CBN circulars and the NDPA. We plan around local reality instead of copying a London playbook.",
  },
  {
    k: "04",
    title: "No vendor kickbacks",
    body: "We don't take referral fees from software or hardware vendors. When we recommend a tool, it's because it fits your problem, not our margin.",
  },
  {
    k: "05",
    title: "Your secrets stay secret",
    body: "NDAs before scoping, encrypted evidence handling, data destroyed on completion and we never name clients without written permission. Discretion is the job.",
  },
  {
    k: "06",
    title: "We tell you what you don't want to hear",
    body: "If your plan won't survive a real incident, or you don't need the expensive thing you asked for, we'll say so. Early and plainly.",
  },
];

export function Principles() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink-2/40 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-dots mask-fade-b opacity-60"
      />
      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="How we operate"
                title="Six rules we don't bend."
                lede="Trust is the whole product in security work. Here's what you can hold us to."
              />
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:col-span-8">
            {principles.map((p, i) => (
              <Reveal key={p.k} delay={(i % 2) * 0.06} className="bg-ink">
                <div className="h-full p-8">
                  <span className="font-mono text-xs text-signal">{p.k}</span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
