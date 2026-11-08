import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const company = [
  { label: "About", href: "/about/" },
  { label: "Industries", href: "/industries/" },
  { label: "Contact", href: "/contact/" },
  { label: "Responsible disclosure", href: "/security/" },
  { label: "Privacy", href: "/privacy/" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-line bg-ink">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Security, resilience and engineering for organisations that can't
              afford to guess.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-muted">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-signal" />
              Under attack right now?{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-fg hover:text-signal"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <div className="sm:col-span-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
                Services
              </p>
              <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}/`}
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
                Company
              </p>
              <ul className="mt-4 space-y-2.5">
                {company.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-xs text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Incorporated in
            Nigeria under CAMA 2020.
          </p>
          <p className="font-mono">{site.location}</p>
        </div>
      </Container>

      <p
        aria-hidden="true"
        className="pointer-events-none select-none text-center font-semibold leading-[0.8] tracking-tighter text-white/[0.03] text-[28vw]"
      >
        BITS
      </p>
    </footer>
  );
}
