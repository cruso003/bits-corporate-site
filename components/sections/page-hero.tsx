import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid mask-radial"
      />
      <div
        aria-hidden="true"
        className="absolute -top-48 left-1/3 h-[500px] w-[800px] rounded-full bg-signal/[0.06] blur-[120px]"
      />
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.03em] sm:text-6xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            {lede}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
