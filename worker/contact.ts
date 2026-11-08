/**
 * POST /api/contact handler.
 *
 * Env (Cloudflare → Workers & Pages → this Worker → Settings → Variables and Secrets):
 *   RESEND_API_KEY  secret, from resend.com (domain bits-innovate.com verified there)
 *   CONTACT_TO      where enquiries land, e.g. hello@bits-innovate.com
 *   CONTACT_FROM    verified sender, e.g. "BITS Website <website@bits-innovate.com>"
 */

export interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

type Payload = Partial<
  Record<
    | "name"
    | "email"
    | "company"
    | "phone"
    | "service"
    | "timeline"
    | "message"
    | "website",
    string
  >
>;

export const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ] ?? c,
  );

export async function handleContact(
  request: Request,
  env: Env,
): Promise<Response> {
  const origin = request.headers.get("Origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return json(
      { ok: false, error: "Cross-origin requests are not allowed." },
      403,
    );
  }

  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  // Honeypot filled → pretend success so bots learn nothing.
  if (clean(data.website, 200)) return json({ ok: true });

  const name = clean(data.name, 120);
  const email = clean(data.email, 200);
  const company = clean(data.company, 160);
  const phone = clean(data.phone, 40);
  const service = clean(data.service, 80) || "Not sure yet";
  const timeline = clean(data.timeline, 60);
  const message = clean(data.message, 5000);

  if (!name || !message || message.length < 10) {
    return json(
      { ok: false, error: "Please add your name and a short message." },
      422,
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return json(
      { ok: false, error: "That email address doesn't look right." },
      422,
    );
  }

  if (!env.RESEND_API_KEY) {
    return json({ ok: false, error: "Our form isn't connected yet." }, 503);
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Organisation", company || "—"],
    ["Phone", phone || "—"],
    ["Service", service],
    ["Timeline", timeline || "—"],
  ];
  const urgent = timeline.toLowerCase().includes("incident");

  const html = `
    <h2 style="font-family:sans-serif">New enquiry from bits-innovate.com</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`).join("")}
    </table>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap;border-top:1px solid #ddd;padding-top:12px">${escapeHtml(message)}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM || "BITS Website <website@bits-innovate.com>",
      to: [env.CONTACT_TO || "hello@bits-innovate.com"],
      reply_to: email,
      subject: `${urgent ? "[URGENT] " : ""}Enquiry: ${service} · ${name}${company ? ` (${company})` : ""}`,
      html,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return json({ ok: false, error: "We couldn't send that right now." }, 502);
  }
  return json({ ok: true });
}
