import type { MetadataRoute } from "next";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = "https://www.suncityvegas.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/signin",
          "/signup",
          "/blog-details",
          "/blog-sidebar",
          "/floor-plans-simple",
        ],
      },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "Meta-ExternalAgent", allow: "/" },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
