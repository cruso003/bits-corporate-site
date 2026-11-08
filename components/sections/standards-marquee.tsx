import { standards } from "@/lib/site";

export function StandardsMarquee() {
  const row = [...standards, ...standards];
  return (
    <section
      aria-label="Standards and frameworks we work to"
      className="border-y border-line bg-ink-2/50 py-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-8">
        <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
          We test, build and certify against
        </p>
        <div className="mask-fade-x relative overflow-hidden">
          <ul className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
            {row.map((s, i) => (
              <li
                // biome-ignore lint/suspicious/noArrayIndexKey: duplicated list for loop
                key={`${s}-${i}`}
                aria-hidden={i >= standards.length}
                className="whitespace-nowrap font-mono text-sm text-muted"
              >
                <span className="mr-10 text-signal/50">/</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
