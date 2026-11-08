import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Terminal } from "./terminal";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid mask-radial"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-signal/[0.07] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute top-60 -right-40 h-[400px] w-[500px] rounded-full bg-cyan/[0.06] blur-[120px]"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-signal" />
                Security · Resilience · Engineering
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-7 text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.4rem]">
                Secure it.
                <br />
                Keep it running.
                <br />
                <span className="text-gradient">Build what&apos;s next.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted">
                BITS breaks into systems for a living, then helps you fix them,
                keep them up when things go wrong, and build new ones properly.
                Penetration testing, managed security, BCM&nbsp;and&nbsp;DR,
                cloud and software for Nigerian businesses and government.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact/">Scope an engagement</Button>
                <Button href="/services/" variant="ghost">
                  See what we do
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-6" y={30}>
            <Terminal />
            <p className="mt-3 text-right font-mono text-[10px] text-dim">
              Illustrative sessions. Client names are never disclosed.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
