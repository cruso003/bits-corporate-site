import { Lock, Mail, MapPin, ShieldAlert } from "lucide-react";
import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to BITS about penetration testing, managed security, BCM/DR, cloud or software projects.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us what&apos;s worrying you.{" "}
            <span className="text-muted">
              We&apos;ll be straight about whether we can help.
            </span>
          </>
        }
      />
      <Container className="pb-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Suspense
              fallback={
                <div className="h-[560px] rounded-2xl border border-line bg-ink-2/70" />
              }
            >
              <ContactForm />
            </Suspense>
          </div>
          <aside className="space-y-4 lg:col-span-4">
            <div className="rounded-2xl border border-alert/30 bg-alert/[0.06] p-6">
              <ShieldAlert className="h-5 w-5 text-alert" aria-hidden="true" />
              <h2 className="mt-4 font-semibold">Active incident?</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Don&apos;t wait on a form. Email us with{" "}
                <span className="font-mono text-fg">URGENT</span> in the
                subject. Disconnect affected machines from the network, but
                don&apos;t power them off: memory holds evidence.
              </p>
              <a
                href={`mailto:${site.email}?subject=URGENT%20-%20Incident`}
                className="mt-4 inline-block font-mono text-sm text-alert hover:text-fg"
              >
                {site.email} →
              </a>
            </div>
            <div className="rounded-2xl border border-line bg-ink-2/60 p-6">
              <ul className="space-y-5 text-sm">
                <li className="flex gap-3">
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-signal"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-dim">General enquiries</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-fg hover:text-signal"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Lock
                    className="mt-0.5 h-4 w-4 shrink-0 text-signal"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-dim">Vulnerability reports</p>
                    <a
                      href={`mailto:${site.securityEmail}`}
                      className="text-fg hover:text-signal"
                    >
                      {site.securityEmail}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-signal"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-dim">Based in</p>
                    <p className="text-fg">{site.location}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-line p-6 text-sm leading-relaxed text-muted">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
                What happens next
              </p>
              <ol className="mt-4 list-inside list-decimal space-y-2 marker:font-mono marker:text-signal">
                <li>Reply within one working day</li>
                <li>NDA signed if you need one</li>
                <li>30-minute scoping call</li>
                <li>Written proposal with fixed price</li>
              </ol>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
