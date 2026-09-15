import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { cfImage } from "@/lib/cf-image";

const BASE = `https://www.${siteConfig.domain}`;

function ensureLocalKeywords(text: string): string {
  let next = text.trim();
  if (!/Sun City Summerlin/i.test(next)) {
    next = `Sun City Summerlin — ${next}`;
  }
  if (!/55\+|active adult/i.test(next)) {
    next = `${next} 55+ active adult community.`;
  }
  if (!/Las Vegas/i.test(next)) {
    next = `${next} Las Vegas.`;
  }
  if (!/Dr\.?\s*(Jan\s*)?Duffy/i.test(next)) {
    next = `${next} Dr. Jan Duffy.`;
  }
  return next.replace(/\s+/g, " ").trim();
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  image = "/images/hero/hero-bg.jpg",
  imageAlt = "Sun City Summerlin 55+ community in Las Vegas",
}: PageMetaInput): Metadata {
  const desc = ensureLocalKeywords(description);
  const canonical = path === "/" ? `${BASE}/` : `${BASE}${path}`;
  const ogImage = image.startsWith("http") ? image : `${BASE}${image}`;

  return {
    title,
    description: desc,
    alternates: { canonical },
    openGraph: {
      title,
      description: desc,
      url: canonical,
      siteName: siteConfig.siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [ogImage],
    },
  };
}

export { ensureLocalKeywords, cfImage, BASE as SITE_ORIGIN };
