import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-signal",
        className,
      )}
    >
      <span className="h-px w-6 bg-signal/60" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  className,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Eyebrow className={align === "center" ? "justify-center" : undefined}>
        {eyebrow}
      </Eyebrow>
      <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.08]">
        {title}
      </h2>
      {lede && (
        <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
          {lede}
        </p>
      )}
    </div>
  );
}
