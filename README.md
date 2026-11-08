# bits-innovate.com

Corporate site for **Building Innovative Technical Solutions Limited (BITS)**.
Next.js 15 static export + Tailwind v4, hosted on Cloudflare Workers (Static Assets). The contact form is the only server-side code: a small Worker in `worker/`.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
npm run preview    # build, then run the real Worker locally with wrangler dev
npm run deploy     # build and deploy with wrangler (needs `wrangler login`)
```

## Where things live

| What | Where |
| --- | --- |
| Company details, email, standards list | `lib/site.ts` |
| All 8 practice areas (copy, offerings, FAQs) | `lib/services.ts` (each one auto-generates `/services/<slug>/`) |
| Industries | `lib/industries.ts` |
| Worker entry / contact form API | `worker/index.ts`, `worker/contact.ts` |
| Cloudflare config | `wrangler.toml` |
| Security headers / CSP | `public/_headers` |
| Vulnerability disclosure | `public/.well-known/security.txt` (renew `Expires` yearly) |

## Deploy to Cloudflare

The repo is connected through **Workers & Pages → Workers Builds**. Settings:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Environment variable: `NODE_VERSION=22`
- `name` in `wrangler.toml` must match the Worker's name in the dashboard

Then:

1. Worker → **Settings → Domains & Routes** → add custom domains `bits-innovate.com` and `www.bits-innovate.com`.
2. Worker → **Settings → Variables and Secrets** → add `RESEND_API_KEY` as a secret, from [resend.com](https://resend.com) after verifying `bits-innovate.com` there (it gives you DNS records to add in Cloudflare). `CONTACT_TO` and `CONTACT_FROM` are already set in `wrangler.toml`.
3. **Email Routing** (Cloudflare → bits-innovate.com → Email) → create `hello@` and `security@` and forward them to real inboxes.

Until the Resend key is set, the form tells visitors it isn't connected and offers a pre-filled email link instead, so nothing is lost.
