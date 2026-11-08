"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/cn";
import { pillars, services } from "@/lib/services";
import { nav } from "@/lib/site";

const pillarOrder = ["secure", "continue", "build"] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation.
  // biome-ignore lint/correctness/useExhaustiveDependencies: run on route change
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "border-b border-line bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="BITS home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.label === "Services" ? (
              // biome-ignore lint/a11y/noStaticElementInteractions: hover enhancement; keyboard users use the inner buttons
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={megaOpen}
                  aria-haspopup="true"
                  onClick={() => setMegaOpen((v) => !v)}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors hover:text-fg",
                    isActive(item.href) ? "text-fg" : "text-muted",
                  )}
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      megaOpen && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full w-[860px] -translate-x-1/2 pt-3"
                    >
                      <div className="grid grid-cols-3 gap-2 rounded-2xl border border-line-strong bg-ink-2/95 p-3 shadow-2xl shadow-black/60 backdrop-blur-xl">
                        {pillarOrder.map((p) => (
                          <div key={p} className="p-2">
                            <p className="px-3 pb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
                              {pillars[p].verb}
                            </p>
                            {services
                              .filter((s) => s.pillar === p)
                              .map((s) => (
                                <Link
                                  key={s.slug}
                                  href={`/services/${s.slug}/`}
                                  className="group flex gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
                                >
                                  <s.icon
                                    className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-signal"
                                    aria-hidden="true"
                                  />
                                  <span>
                                    <span className="block text-sm text-fg">
                                      {s.name}
                                    </span>
                                  </span>
                                </Link>
                              ))}
                          </div>
                        ))}
                        <Link
                          href="/services/"
                          className="col-span-3 flex items-center justify-between rounded-xl border border-line px-5 py-3 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg"
                        >
                          <span>All services and how we engage</span>
                          <span className="font-mono text-xs text-signal">
                            →
                          </span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors hover:text-fg",
                  isActive(item.href) ? "text-fg" : "text-muted",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact/"
            className="hidden rounded-full bg-signal px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-white sm:inline-flex"
          >
            Talk to us
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-y-auto border-t border-line bg-ink lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="flex flex-col gap-8 px-4 py-8 sm:px-6"
            >
              {pillarOrder.map((p) => (
                <div key={p}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
                    {pillars[p].verb}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {services
                      .filter((s) => s.pillar === p)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}/`}
                            className="flex items-center gap-3 py-2 text-fg"
                          >
                            <s.icon
                              className="h-4 w-4 text-signal"
                              aria-hidden="true"
                            />
                            {s.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
              <ul className="space-y-1 border-t border-line pt-6">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2 text-2xl font-medium"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact/"
                className="rounded-full bg-signal px-5 py-3 text-center font-medium text-ink"
              >
                Talk to us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
