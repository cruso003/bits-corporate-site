import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { type Pillar, pillars, servicesByPillar } from "@/lib/services";

const order: Pillar[] = ["secure", "continue", "build"];

export function Pillars() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Three jobs. One team that{" "}
              <span className="text-muted">understands how they connect.</span>
            </>
          }
          lede="Most firms do one of these and outsource the rest. That's how you end up with a DR plan nobody pentested and an app nobody planned to recover. We do all three, so the gaps between them get covered."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-3">
          {order.map((p, i) => (
            <Reveal key={p} delay={i * 0.08} className="bg-ink">
              <div className="flex h-full flex-col p-8 sm:p-10">
                <span className="font-mono text-xs text-dim">0{i + 1}</span>
                <h3 className="mt-6 text-3xl font-semibold tracking-tight">
                  {pillars[p].verb}.
                </h3>
                <p className="mt-4 leading-relaxed text-muted">
                  {pillars[p].line}
                </p>
                <ul className="mt-8 space-y-1 border-t border-line pt-6">
                  {servicesByPillar(p).map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}/`}
                        className="group flex items-center justify-between gap-4 py-2 text-sm text-fg/90 hover:text-signal"
                      >
                        <span className="flex items-center gap-3">
                          <s.icon
                            className="h-4 w-4 text-dim group-hover:text-signal"
                            aria-hidden="true"
                          />
                          {s.name}
                        </span>
                        <span className="font-mono text-xs text-dim transition-transform group-hover:translate-x-1 group-hover:text-signal">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
