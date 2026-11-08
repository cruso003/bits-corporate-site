"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Tone = "cmd" | "info" | "ok" | "warn" | "crit" | "dim";
type Line = { t: Tone; s: string };
type Session = { tab: string; lines: Line[] };

// Illustrative sessions only. Hosts use the reserved .example TLD.
const sessions: Session[] = [
  {
    tab: "pentest",
    lines: [
      { t: "cmd", s: "bits engage --scope app.target.example --mode external" },
      { t: "dim", s: "rules of engagement signed · window 22:00–05:00 WAT" },
      {
        t: "info",
        s: "recon      214 hosts · 37 exposed services · 3 forgotten subdomains",
      },
      {
        t: "warn",
        s: "[HIGH]     IDOR on /api/v2/accounts/{id} → other customers' statements",
      },
      {
        t: "crit",
        s: "[CRIT]     staging.target.example: default admin creds → RCE",
      },
      { t: "dim", s: "critical escalated to client CISO at 23:41" },
      { t: "ok", s: "✓ report drafted · 11 findings · retest booked" },
    ],
  },
  {
    tab: "dr-drill",
    lines: [
      {
        t: "cmd",
        s: "bits drill --plan core-banking --scenario primary-dc-loss",
      },
      { t: "dim", s: "tabletop complete · live failover approved by COO" },
      { t: "info", s: "failover   started 02:14:07 → secondary site" },
      { t: "ok", s: "RTO        target 4h00m · achieved 1h52m" },
      { t: "ok", s: "RPO        target 15m · achieved 6m" },
      { t: "warn", s: "[GAP]      SMS gateway hard-coded to primary IP" },
      { t: "ok", s: "✓ BIA updated · 3 gaps logged · plan v2.3 issued" },
    ],
  },
  {
    tab: "deploy",
    lines: [
      { t: "cmd", s: "bits ship --app payments-api --env production" },
      { t: "info", s: "sast       0 critical · 0 high · 2 low (accepted)" },
      { t: "info", s: "secrets    0 leaked credentials in 1,284 commits" },
      { t: "info", s: "deps       47 packages audited · 1 patched" },
      { t: "info", s: "tests      412 passed · coverage 87%" },
      { t: "dim", s: "blue/green cutover · health checks green" },
      { t: "ok", s: "✓ deployed · zero downtime · monitoring on" },
    ],
  },
];

const toneClass: Record<Tone, string> = {
  cmd: "text-fg",
  info: "text-cyan/90",
  ok: "text-signal",
  warn: "text-amber",
  crit: "text-alert",
  dim: "text-dim",
};

export function Terminal() {
  const [active, setActive] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce.current) {
      setLineIdx(sessions[0].lines.length);
    }
  }, []);

  const session = sessions[active];

  useEffect(() => {
    if (reduce.current || paused) return;
    const lines = session.lines;
    let timer: ReturnType<typeof setTimeout>;

    if (lineIdx >= lines.length) {
      timer = setTimeout(() => {
        setActive((a) => (a + 1) % sessions.length);
        setLineIdx(0);
        setChars(0);
      }, 3200);
    } else if (lines[lineIdx].t === "cmd" && chars < lines[lineIdx].s.length) {
      timer = setTimeout(() => setChars((c) => c + 1), 28 + Math.random() * 40);
    } else {
      timer = setTimeout(
        () => {
          setLineIdx((i) => i + 1);
          setChars(0);
        },
        lineIdx === 0 ? 420 : 520,
      );
    }
    return () => clearTimeout(timer);
  }, [lineIdx, chars, session, paused]);

  const select = (i: number) => {
    setActive(i);
    setLineIdx(reduce.current ? sessions[i].lines.length : 0);
    setChars(0);
  };

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: hover enhancement; keyboard users use the inner buttons
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-hidden="true"
        className="absolute -inset-px rounded-2xl bg-gradient-to-b from-signal/40 via-white/10 to-transparent opacity-60"
      />
      <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-2/95 shadow-[0_30px_120px_-30px_rgb(198_244_50/0.25)] backdrop-blur">
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div
            role="tablist"
            aria-label="Example engagements"
            className="flex gap-1 overflow-x-auto"
          >
            {sessions.map((s, i) => (
              <button
                key={s.tab}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => select(i)}
                className={cn(
                  "rounded-md px-2.5 py-1 font-mono text-[11px] transition-colors",
                  i === active
                    ? "bg-white/10 text-fg"
                    : "text-dim hover:text-muted",
                )}
              >
                {s.tab}
              </button>
            ))}
          </div>
          <span className="ml-auto hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-dim sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-signal" />
            live
          </span>
        </div>

        <div
          role="tabpanel"
          aria-live="off"
          className="relative h-[300px] overflow-hidden p-5 font-mono text-[12px] leading-relaxed sm:h-[290px] sm:text-[12.5px]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="h-24 w-full animate-scan bg-gradient-to-b from-transparent via-signal/[0.05] to-transparent" />
          </div>
          {session.lines.slice(0, lineIdx + 1).map((line, i) => {
            if (i > lineIdx) return null;
            const isCurrent = i === lineIdx;
            if (isCurrent && line.t !== "cmd") return null;
            const text = isCurrent ? line.s.slice(0, chars) : line.s;
            return (
              <div
                key={`${session.tab}-${i}`}
                className={cn(
                  "whitespace-pre-wrap break-words",
                  toneClass[line.t],
                )}
              >
                {line.t === "cmd" && <span className="text-signal">❯ </span>}
                {text}
                {isCurrent && (
                  <span className="ml-0.5 inline-block h-3.5 w-2 translate-y-0.5 animate-blink bg-signal" />
                )}
              </div>
            );
          })}
          {lineIdx >= session.lines.length && (
            <div className="mt-1 text-signal">
              ❯{" "}
              <span className="inline-block h-3.5 w-2 translate-y-0.5 animate-blink bg-signal" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
