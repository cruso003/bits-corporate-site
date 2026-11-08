"use client";

import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const timelines = [
  "ASAP / active incident",
  "Within a month",
  "This quarter",
  "Just exploring",
];

const field =
  "w-full rounded-xl border border-line bg-ink/70 px-4 py-3 text-sm text-fg placeholder:text-dim transition-colors focus:border-signal/60 focus:outline-none focus:ring-2 focus:ring-signal/20";

export function ContactForm() {
  const params = useSearchParams();
  const preset = params.get("service") ?? "";
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [mailto, setMailto] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<
      string,
      string
    >;

    const body = `Name: ${data.name}\nCompany: ${data.company}\nService: ${data.service}\nTimeline: ${data.timeline}\n\n${data.message}`;
    setMailto(
      `mailto:${site.email}?subject=${encodeURIComponent(`Enquiry from ${data.name}`)}&body=${encodeURIComponent(body)}`,
    );

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !json.ok)
        throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex min-h-[420px] flex-col items-start justify-center rounded-2xl border border-signal/30 bg-signal/[0.04] p-10">
        <CheckCircle2 className="h-10 w-10 text-signal" aria-hidden="true" />
        <h2 className="mt-6 text-2xl font-semibold">Message received.</h2>
        <p className="mt-3 max-w-md leading-relaxed text-muted">
          A practitioner will reply within one working day. If this is an active
          incident, say so in a follow-up email with &ldquo;URGENT&rdquo; in the
          subject.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 font-mono text-sm text-signal hover:text-fg"
        >
          ← Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-line bg-ink-2/70 p-6 sm:p-8"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-muted">Name *</span>
          <input
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            className={field}
            placeholder="Ada Obi"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-muted">Work email *</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className={field}
            placeholder="ada@company.ng"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-muted">Organisation</span>
          <input
            name="company"
            maxLength={160}
            autoComplete="organization"
            className={field}
            placeholder="Company or agency"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-muted">Phone</span>
          <input
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            className={field}
            placeholder="+234"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-muted">
            What do you need?
          </span>
          <select
            name="service"
            defaultValue={preset}
            className={cn(field, "appearance-none")}
          >
            <option value="">Not sure yet</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <fieldset>
          <legend className="mb-2 block text-sm text-muted">Timeline</legend>
          <div className="flex flex-wrap gap-2">
            {timelines.map((t, i) => (
              <label key={t} className="cursor-pointer">
                <input
                  type="radio"
                  name="timeline"
                  value={t}
                  defaultChecked={i === 2}
                  className="peer sr-only"
                />
                <span className="inline-block rounded-full border border-line px-3 py-1.5 text-xs text-muted transition-colors peer-checked:border-signal/60 peer-checked:bg-signal/10 peer-checked:text-signal peer-focus-visible:ring-2 peer-focus-visible:ring-signal/40">
                  {t}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm text-muted">
            Tell us about it *
          </span>
          <textarea
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={6}
            className={cn(field, "resize-y")}
            placeholder="What are you trying to protect, recover or build? Any deadlines, audits or regulators involved?"
          />
        </label>
        {/* Honeypot: hidden from people, irresistible to bots */}
        <label className="absolute -left-[9999px]" aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-alert/40 bg-alert/10 p-4 text-sm text-fg"
        >
          {error}{" "}
          {mailto && (
            <a
              href={mailto}
              className="font-medium text-signal underline underline-offset-4"
            >
              Send it by email instead.
            </a>
          )}
        </div>
      )}

      <div className="mt-7 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-dim">
          We use this only to reply to you. See our{" "}
          <a
            href="/privacy/"
            className="underline underline-offset-4 hover:text-fg"
          >
            privacy notice
          </a>
          .
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-white disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />{" "}
              Sending
            </>
          ) : (
            <>
              Send message
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
