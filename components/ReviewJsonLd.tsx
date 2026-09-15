import { oldSiteData } from "@/lib/old-site-data";
import { siteConfig } from "@/lib/site-config";

export default function ReviewJsonLd() {
  const baseUrl = `https://www.${siteConfig.domain}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${baseUrl}/#agent`,
    name: siteConfig.siteName,
    review: oldSiteData.testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewBody: t.text,
      itemReviewed: { "@id": `${baseUrl}/#agent` },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
