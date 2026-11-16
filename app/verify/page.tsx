import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { VerifyForm } from "@/components/sections/verify-form";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Verify a certificate",
  description:
    "Check whether a report, attestation or certificate was genuinely issued by BITS.",
  alternates: { canonical: "/verify/" },
};

export default function VerifyPage() {
  return (
    <>
      <PageHero
        eyebrow="Verify"
        title="Verify a certificate"
        lede="Every attestation and certificate we issue carries a reference code. Enter it below to confirm it's genuinely from us, not to re-check the engagement itself."
      />
      <Container className="pb-28">
        <div className="max-w-2xl">
          <VerifyForm />
          <p className="mt-6 text-sm leading-relaxed text-muted">
            This only confirms the document exists in our records and hasn't
            been revoked. For questions about what a certificate actually
            covers, read the accompanying report, or contact us at{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-signal underline underline-offset-4 hover:text-fg"
            >
              {site.email}
            </a>
            .
          </p>
        </div>
      </Container>
    </>
  );
}
