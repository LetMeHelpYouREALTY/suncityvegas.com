import type { Metadata } from "next";
import AmenityMapClient from "@components/AmenityMapClient";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import PageHero from "@components/PageHero";
import FaqJsonLd from "@components/FaqJsonLd";
import { Button } from "@components/ui/button";
import Link from "next/link";
import LocalVisitSection from "@components/LocalVisitSection";
import { siteConfig } from "@/lib/site-config";
import {
  nearbyAmenitiesFaqs,
  nearbyAmenitiesWrittenSections,
} from "@/lib/nearby-amenities-content";
import {
  buildCommunityPlaceSchema,
  buildNearbyAgentSchemaSnippet,
  buildNearbyAmenitiesItemListSchema,
  buildNearbyAmenitiesWebPageSchema,
} from "@/lib/nearby-amenities-schema";
import { pageHeroImages } from "@/lib/page-heroes";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: `Nearby Amenities in ${siteConfig.community}, Las Vegas | Map & Local Guide`,
  description: `Interactive map of healthcare, golf, grocery, parks, and shopping near ${siteConfig.community}, Las Vegas 55+ community in ZIP ${siteConfig.zip}. Hyperlocal guide from Dr. Jan Duffy. Call ${siteConfig.phoneDisplay}.`,
  alternates: {
    canonical: "https://www.suncityvegas.com/nearby-amenities",
  },
  openGraph: {
    title: `Nearby Amenities in ${siteConfig.community}, Las Vegas`,
    description: `Explore restaurants, healthcare, golf, grocery, and parks near ${siteConfig.community} with an interactive map and local FAQs.`,
    url: "https://www.suncityvegas.com/nearby-amenities",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/amenities/amenities-overview-hero.jpg",
        width: 1200,
        height: 630,
        alt: `Map of amenities near ${siteConfig.community} in Las Vegas`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Nearby Amenities in ${siteConfig.community}, Las Vegas`,
    description: `Healthcare, golf, grocery, and shopping near ${siteConfig.community} 55+ community.`,
    images: ["https://www.suncityvegas.com/images/amenities/amenities-overview-hero.jpg"],
  },
};

const jsonLdBlocks = [
  buildNearbyAmenitiesWebPageSchema(),
  buildCommunityPlaceSchema(),
  buildNearbyAmenitiesItemListSchema(),
  buildNearbyAgentSchemaSnippet(),
];

export default function NearbyAmenitiesPage() {
  return (
    <>
      {jsonLdBlocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(block).replace(/</g, "\\u003c"),
          }}
        />
      ))}
      <FaqJsonLd faqs={nearbyAmenitiesFaqs} />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Nearby Amenities", href: "/nearby-amenities" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        <PageHero
          title={`Nearby Amenities in ${siteConfig.community}, Las Vegas`}
          subtitle={`Hyperlocal map and guide to daily errands, medical care, golf, and Summerlin shopping within a short drive of ${siteConfig.address}.`}
          imageSrc={pageHeroImages.amenities.src}
          imageAlt={`Nearby amenities map for ${siteConfig.community} in Las Vegas`}
        />

        <section className="py-10 md:py-14 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] font-playfair mb-4">
              Interactive amenity map
            </h2>
            <p className="text-[#141210] mb-6 max-w-3xl">
              Centered on {siteConfig.community} at {siteConfig.address}. Use the
              filters to explore healthcare, golf, parks, grocery, dining, and
              more. On-site recreation centers and courses are included in your
              Sun City Summerlin HOA; this map highlights both on-community and
              off-community destinations.
            </p>
            <AmenityMapClient heightClassName="h-[420px] md:h-[520px]" showStaticList />
          </div>
        </section>

        {nearbyAmenitiesWrittenSections.map((section) => (
          <section
            key={section.id}
            className="py-10 md:py-12 border-t border-[#E8E4E0] bg-[#F7F6F4]"
          >
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-xl md:text-2xl font-bold text-[#1C1917] font-playfair mb-4">
                {section.title}
              </h2>
              <p className="text-[#141210] leading-relaxed">{section.body}</p>
            </div>
          </section>
        ))}

        <section className="py-12 md:py-16 bg-white" id="nearby-faq">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] font-playfair mb-6 text-center">
              Nearby amenities FAQ
            </h2>
            <div className="space-y-4">
              {nearbyAmenitiesFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-lg border border-[#E8E4E0] bg-[#F7F6F4] p-4 md:p-5"
                >
                  <summary className="cursor-pointer font-semibold text-[#1C1917] list-none min-h-[44px] flex items-center">
                    {faq.question}
                  </summary>
                  <p className="text-[#141210] mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[#1C1917] text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-4">
              Your hyperlocal {siteConfig.community} REALTOR®
            </h2>
            <p className="text-gray-100 mb-4">
              {siteConfig.agent.name}, {siteConfig.agent.title} —{" "}
              {siteConfig.brokerage.name}. Nevada license{" "}
              {siteConfig.agent.license}. Same phone and address as our Google
              Business Profile: {siteConfig.phoneDisplay}, {siteConfig.address}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#C9A962] hover:bg-[#C9A962]/90 text-[#141210] min-h-[48px]"
              >
                <Link href="/contact">Schedule a consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 min-h-[48px]"
              >
                <a href={siteConfig.phoneHref}>
                  <Phone className="w-4 h-4 mr-2 inline" aria-hidden />
                  Call {siteConfig.phoneDisplay}
                </a>
              </Button>
            </div>
            <p className="text-sm text-gray-300 mt-6">
              Looking for on-community golf and rec centers? See{" "}
              <Link href="/amenities" className="text-[#C9A962] underline">
                Sun City Summerlin amenities
              </Link>
              .
            </p>
          </div>
        </section>

        <LocalVisitSection heading="Visit Dr. Jan Duffy near Sun City Summerlin" />
      </main>
      <Footer />
    </>
  );
}
