# bits-innovate.com

Corporate site for **Building Innovative Technical Solutions Limited (BITS)**.
Next.js 15 static export + Tailwind v4, hosted on Cloudflare Pages. The contact form is the only server-side code, and it runs as a Pages Function.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
npm run preview    # serve ./out + /functions with wrangler (tests the contact form locally)
```

## Where things live

| What | Where |
| --- | --- |
| Company details, email, standards list | `lib/site.ts` |
| All 8 practice areas (copy, offerings, FAQs) | `lib/services.ts` (each one auto-generates `/services/<slug>/`) |
| Industries | `lib/industries.ts` |
| Contact form API | `functions/api/contact.ts` |
| Security headers / CSP | `public/_headers` |
| Vulnerability disclosure | `public/.well-known/security.txt` (renew `Expires` yearly) |

## Deploy to Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick this repo.
2. Build settings: framework **None**, build command `npm run build`, output directory `out`, env var `NODE_VERSION=22`.
3. **Custom domains** → add `bits-innovate.com` and `www.bits-innovate.com` (DNS is already on Cloudflare, so records are created for you). Add a redirect rule www → apex.
4. **Settings → Variables and Secrets**:
   - `RESEND_API_KEY` (secret), from [resend.com](https://resend.com) after verifying `bits-innovate.com` there (it gives you DNS records to add in Cloudflare)
   - `CONTACT_TO` = `hello@bits-innovate.com`
   - `CONTACT_FROM` = `BITS Website <website@bits-innovate.com>`
5. **Email Routing** (Cloudflare → bits-innovate.com → Email) → create `hello@` and `security@` and forward them to real inboxes.

Until the Resend key is set, the form tells visitors it isn't connected and offers a pre-filled email link instead, so nothing is lost.
