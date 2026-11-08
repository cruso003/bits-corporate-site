/**
 * Worker entry. Static files in ./out are served by Workers Static Assets
 * before this code runs; only requests that match no file reach fetch().
 */
import { type Env, handleContact, json } from "./contact";

export default {
  async fetch(request, env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/contact" || pathname === "/api/contact/") {
      if (request.method !== "POST") {
        return json({ ok: false, error: "Method not allowed." }, 405);
      }
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
