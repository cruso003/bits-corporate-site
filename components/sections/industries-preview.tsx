import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { industries } from "@/lib/industries";

export function IndustriesPreview() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Who we work with"
            title="Sectors where downtime makes the news."
          />
          <Button
            href="/industries/"
            variant="ghost"
            className="shrink-0 self-start lg:self-auto"
          >
            All industries
          </Button>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 4) * 0.05} className="bg-ink">
              <div className="group h-full p-7 transition-colors hover:bg-ink-2">
                <ind.icon
                  className="h-5 w-5 text-dim transition-colors group-hover:text-signal"
                  aria-hidden="true"
                />
                <h3 className="mt-6 font-semibold tracking-tight">
                  {ind.name}
                </h3>
                <p className="mt-2 font-mono text-[11px] leading-relaxed text-dim">
                  {ind.pressure}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
