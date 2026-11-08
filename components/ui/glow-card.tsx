"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";

/** Surface whose border-glow follows the pointer. */
export function GlowCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - r.left}px`);
        el.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}
      className={cn(
        "glow-card rounded-2xl border border-line bg-ink-2/80 transition-colors duration-300 hover:border-line-strong",
        className,
      )}
    >
      {children}
    </div>
  );
}
