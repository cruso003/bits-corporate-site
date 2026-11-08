import { cn } from "@/lib/cn";

/** Four bits, one set. The mark doubles as the favicon. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("h-7 w-7", className)}
      fill="none"
    >
      <rect
        x="2"
        y="2"
        width="12.5"
        height="12.5"
        rx="2.5"
        className="fill-white/90"
      />
      <rect
        x="17.5"
        y="2"
        width="12.5"
        height="12.5"
        rx="2.5"
        className="fill-signal"
      />
      <rect
        x="2"
        y="17.5"
        width="12.5"
        height="12.5"
        rx="2.5"
        className="fill-white/90"
      />
      <rect
        x="17.5"
        y="17.5"
        width="12.5"
        height="12.5"
        rx="2.5"
        className="stroke-white/50"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-semibold tracking-[0.18em] text-[15px]">
          BITS
        </span>
        <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
          Innovative Technical Solutions
        </span>
      </span>
    </span>
  );
}
