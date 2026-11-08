import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export function CTA({
  title = "Find out what an attacker would find. Before they do.",
  body = "Tell us what keeps you up at night. We'll come back within one working day with a straight answer on whether we can help, and what it would take.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-line-strong bg-ink-2 px-6 py-16 sm:px-14 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-grid opacity-60 mask-radial"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-40 -right-20 h-[420px] w-[620px] rounded-full bg-signal/15 blur-[110px]"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl sm:leading-[1.05]">
              {title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{body}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact/">Start a conversation</Button>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center rounded-full px-5 py-3 font-mono text-sm text-muted transition-colors hover:text-fg"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
