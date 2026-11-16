/**
 * GET /api/verify?code=BITS-VER-XXXXXXXX
 *
 * Looks up a certificate reference code in the CERTIFICATES KV namespace
 * and returns what BITS actually issued, so a code printed on a PDF can be
 * checked against our own record rather than trusted on the page's say-so.
 *
 * Codes must be random, not sequential. BITS-VER-0001/0002/... would let
 * anyone holding one real code enumerate every other client's record just
 * by incrementing it, exposing company names and engagement details they
 * have no business seeing. Generate each new code as 8 random characters
 * from an unambiguous alphabet (no 0/O/1/I/L), e.g.:
 *   python3 -c "import secrets; a='23456789ABCDEFGHJKMNPQRSTUVWXYZ'; \
 *     print('BITS-VER-' + ''.join(secrets.choice(a) for _ in range(8)))"
 *
 * Env:
 *   CERTIFICATES  KV namespace binding (Workers & Pages → bits-corporate-site
 *                 → Settings → Bindings), namespace "bits-certificates".
 */
import type { Env } from "./contact";

export type CertificateRecord = {
  issuedTo: string;
  docType: string;
  engagement: string;
  issuedDate: string;
  status: "valid" | "revoked";
};

export const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });

const normalize = (code: string) => code.trim().toUpperCase();

export async function handleVerify(
  request: Request,
  env: Env,
): Promise<Response> {
  const url = new URL(request.url);
  const code = normalize(url.searchParams.get("code") ?? "");

  if (!code) {
    return json({ ok: false, error: "Enter a certificate reference code." }, 422);
  }

  if (!env.CERTIFICATES) {
    return json({ ok: false, error: "Verification isn't connected yet." }, 503);
  }

  const raw = await env.CERTIFICATES.get(code);
  if (!raw) {
    return json(
      { ok: false, error: `No certificate found for "${code}".` },
      404,
    );
  }

  let record: CertificateRecord;
  try {
    record = JSON.parse(raw);
  } catch {
    // A malformed record is our problem, not the caller's; don't pretend it checked out.
    return json(
      { ok: false, error: "That record couldn't be read. Contact us directly." },
      500,
    );
  }

  return json({ ok: true, code, record });
}
