import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    title: "Talk",
    time: "Day 1",
    body: "A 30-minute call under NDA. What worries you, what's due, what's already been tried.",
  },
  {
    title: "Scope",
    time: "Days 2–5",
    body: "A written proposal with fixed price, timeline, team and rules of engagement. No surprises on the invoice.",
  },
  {
    title: "Execute",
    time: "Weeks",
    body: "Weekly check-ins, a shared channel and critical findings escalated the same day they're found.",
  },
  {
    title: "Hand over",
    time: "Final week",
    body: "Reports, runbooks, code and a live walkthrough. Your team leaves knowing more than when we started.",
  },
  {
    title: "Stay close",
    time: "Ongoing",
    body: "Retests, retainers, managed services or just a phone number for when something breaks.",
  },
];

export function Process() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Engagement model"
          title="From first call to fixed. Here's what working with us looks like."
        />
        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-signal/60 via-line to-transparent lg:left-0 lg:right-0 lg:top-[15px] lg:bottom-auto lg:h-px lg:w-auto lg:bg-gradient-to-r"
          />
          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="relative pl-12 lg:pl-0 lg:pt-12">
                <Reveal delay={i * 0.07}>
                  <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-signal/50 bg-ink font-mono text-xs text-signal">
                    {i + 1}
                  </span>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
                    {s.time}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
