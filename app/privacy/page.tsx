import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "How BITS collects and uses personal data, in line with the Nigeria Data Protection Act 2023.",
  alternates: { canonical: "/privacy/" },
};

const sections: { h: string; p: React.ReactNode }[] = [
  {
    h: "Who we are",
    p: `${site.legalName} ("BITS", "we") is the data controller for personal data collected through this website. You can reach us at ${site.email}.`,
  },
  {
    h: "What we collect",
    p: "Only what you send through the contact form or by email: your name, work email, organisation, phone number if given, and the content of your message. This site doesn't use advertising cookies or third-party trackers.",
  },
  {
    h: "Why we use it",
    p: "To reply to your enquiry and, if you become a client, to deliver our services. Our lawful basis is your consent and our legitimate interest in responding to business enquiries, under sections 25 and 26 of the Nigeria Data Protection Act 2023.",
  },
  {
    h: "Who we share it with",
    p: "Nobody, other than the service providers that host this website and deliver our email, who process data on our instructions under contract. We never sell personal data.",
  },
  {
    h: "How long we keep it",
    p: "Enquiries that don't become engagements are deleted within 12 months. Client records are kept for as long as the law and our contracts require.",
  },
  {
    h: "Your rights",
    p: "You can ask to access, correct, delete or port your data, object to processing or withdraw consent at any time by emailing us. If you're unhappy with our response you can complain to the Nigeria Data Protection Commission.",
  },
  {
    h: "Client engagement data",
    p: "Data we handle during security testing or incident response is governed by the contract and data processing agreement with that client, not this notice. It's encrypted, access-controlled and securely destroyed when the engagement ends.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy notice"
        lede="Short and readable, because a security firm with a 40-page privacy policy is hiding something."
      />
      <Container className="pb-28">
        <div className="max-w-3xl divide-y divide-line border-y border-line">
          {sections.map((s) => (
            <section
              key={s.h}
              className="grid gap-3 py-8 sm:grid-cols-3 sm:gap-8"
            >
              <h2 className="font-semibold">{s.h}</h2>
              <p className="leading-relaxed text-muted sm:col-span-2">{s.p}</p>
            </section>
          ))}
        </div>
        <p className="mt-8 font-mono text-xs text-dim">
          Last updated November 2026
        </p>
      </Container>
    </>
  );
}
