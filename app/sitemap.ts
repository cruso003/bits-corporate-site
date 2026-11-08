import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "services/",
    "industries/",
    "about/",
    "contact/",
    "security/",
    "privacy/",
  ];
  return [
    ...pages.map((p) => ({
      url: `${site.url}/${p}`,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.7,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
