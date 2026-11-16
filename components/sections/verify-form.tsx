"use client";

import {
  AlertTriangle,
  BadgeCheck,
  Loader2,
  Search,
  ShieldX,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

type Status = "idle" | "checking" | "found" | "notFound" | "error";

type CertificateRecord = {
  issuedTo: string;
  docType: string;
  engagement: string;
  issuedDate: string;
  status: "valid" | "revoked";
};

const field =
  "w-full rounded-xl border border-line bg-ink/70 px-4 py-3 font-mono text-sm uppercase tracking-wide text-fg placeholder:text-dim placeholder:normal-case placeholder:tracking-normal transition-colors focus:border-signal/60 focus:outline-none focus:ring-2 focus:ring-signal/20";

export function VerifyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [record, setRecord] = useState<CertificateRecord | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = code.trim();
    if (!value) return;

    setStatus("checking");
    setError("");
    setRecord(null);
    try {
      const res = await fetch(
        `/api/verify?code=${encodeURIComponent(value)}`,
      );
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        record?: CertificateRecord;
      };
      if (!res.ok || !data.ok) {
        setStatus(res.status === 404 ? "notFound" : "error");
        setError(data.error || "Something went wrong.");
        return;
      }
      setRecord(data.record ?? null);
      setStatus("found");
    } catch {
      setStatus("error");
      setError("Couldn't reach the verification service. Try again.");
    }
  }

  return (
    <div className="rounded-2xl border border-line bg-ink-2/70 p-6 sm:p-8">
      <form onSubmit={onSubmit} className="flex flex-col gap-4 sm:flex-row">
        <label className="block flex-1">
          <span className="mb-2 block text-sm text-muted">
            Certificate reference code
          </span>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
            maxLength={40}
            autoComplete="off"
            autoCapitalize="characters"
            spellCheck={false}
            className={field}
            placeholder="BITS-VER-0001"
          />
        </label>
        <button
          type="submit"
          disabled={status === "checking"}
          className="group inline-flex shrink-0 items-center justify-center gap-2 self-end rounded-full bg-signal px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-white disabled:opacity-60 sm:mb-0.5"
        >
          {status === "checking" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />{" "}
              Checking
            </>
          ) : (
            <>
              Verify
              <Search className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      </form>

      {status === "found" && record && (
        <div
          className={cn(
            "mt-6 rounded-xl border p-5",
            record.status === "valid"
              ? "border-signal/30 bg-signal/[0.04]"
              : "border-alert/30 bg-alert/[0.06]",
          )}
        >
          <div className="flex items-center gap-2">
            {record.status === "valid" ? (
              <BadgeCheck className="h-5 w-5 text-signal" aria-hidden="true" />
            ) : (
              <ShieldX className="h-5 w-5 text-alert" aria-hidden="true" />
            )}
            <p className="font-semibold">
              {record.status === "valid"
                ? "Genuine, issued by BITS"
                : "This certificate has been revoked"}
            </p>
          </div>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-dim">Issued to</dt>
              <dd className="text-fg">{record.issuedTo}</dd>
            </div>
            <div>
              <dt className="text-dim">Document</dt>
              <dd className="text-fg">{record.docType}</dd>
            </div>
            <div>
              <dt className="text-dim">Engagement</dt>
              <dd className="text-fg">{record.engagement}</dd>
            </div>
            <div>
              <dt className="text-dim">Issued</dt>
              <dd className="text-fg">{record.issuedDate}</dd>
            </div>
          </dl>
        </div>
      )}

      {(status === "notFound" || status === "error") && (
        <div
          role="alert"
          className="mt-6 flex items-start gap-3 rounded-xl border border-alert/40 bg-alert/10 p-4 text-sm"
        >
          <AlertTriangle
            className="mt-0.5 h-4 w-4 shrink-0 text-alert"
            aria-hidden="true"
          />
          <p>
            {error}{" "}
            {status === "notFound" && (
              <>
                If you believe this code should be valid, contact us at{" "}
                <a
                  href={`mailto:${site.securityEmail}`}
                  className="font-medium text-signal underline underline-offset-4"
                >
                  {site.securityEmail}
                </a>
                .
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
