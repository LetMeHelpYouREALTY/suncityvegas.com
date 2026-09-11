import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import PageHero from "@components/PageHero";
import MarketInsights from "@/components/MarketInsights";
import { getMarketInsightsFeed } from "@/lib/market-insights-feed";
import { TrendingUp, Truck, Home, BookOpen } from "lucide-react";
import ScrollAnimation from "@components/scroll-animation";

import RealScoutListings from "@components/RealScoutListings";
import { pageHeroImages } from "@/lib/page-heroes";
export const metadata: Metadata = {
  title: "Sun City Summerlin Market Insights | Las Vegas Housing Market Trends 2026",
  description:
    "Stay informed with the latest real estate market insights, mortgage rate updates, home price trends, and expert forecasts for Las Vegas and Sun City Summerlin.",
  alternates: {
    canonical: "https://www.suncityvegas.com/resources/market-insights",
  },
  openGraph: {
    title: "Real Estate Market Insights | Las Vegas Housing Market Trends 2026",
    description:
      "Latest real estate market insights, mortgage rates, and housing trends for Las Vegas and Sun City Summerlin.",
    url: "https://www.suncityvegas.com/resources/market-insights",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/resources/market-insights-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Real estate market insights and trends",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Market Insights | Las Vegas Housing Trends",
    description: "Stay informed with the latest real estate market insights and trends.",
    images: ["https://www.suncityvegas.com/images/resources/market-insights-hero.jpg"],
  },
};

export default async function MarketInsightsPage() {
  let itemListSchema: object | null = null;
  try {
    const items = await getMarketInsightsFeed(9);
    if (items.length > 0) {
      itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Latest Market Insights",
        description:
          "Real estate market insights from Simplifying the Market—mortgage rates, home prices, downsizing, and expert forecasts for Sun City Summerlin and Las Vegas.",
        numberOfItems: items.length,
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.title,
          url: item.link,
        })),
      };
    }
  } catch {
    // Schema optional; page still renders
  }

  return (
    <>
      {itemListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Market Insights", href: "/resources/market-insights" },
        ]}
      />
      <main className="pt-16 md:pt-20">
                <PageHero
          title="Sun City Summerlin Market Insights"
          subtitle="89134 pricing, days on market, and Las Vegas 55+ trends. Mortgage rates, home prices, and forecasts translated for Sun City Summerlin buyers and sellers."
          imageSrc={pageHeroImages["resources/market-insights"].src}
          imageAlt={pageHeroImages["resources/market-insights"].alt}
        />

        <RealScoutListings h2Text="Homes for Sale in Sun City Summerlin | Market Insights" />


        {/* Market Insights Component */}
        <MarketInsights limit={9} />

        {/* Additional Context Section */}
        <section className="py-12 md:py-16 bg-[#F7F6F4]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-6 text-center font-playfair">
                  How Market Trends Affect Sun City Summerlin
                </h2>
              </ScrollAnimation>
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-md space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                    Local Market Expertise
                  </h3>
                  <p className="text-[#141210] leading-relaxed">
                    While national trends provide valuable context, the Sun City Summerlin market has its own unique dynamics. As a 55+ active adult community, it often performs differently than the broader Las Vegas market.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                    Why This Matters for You
                  </h3>
                  <p className="text-[#141210] leading-relaxed">
                    Understanding market trends helps you make informed decisions about timing your purchase or sale. Whether you're buying your first home in Sun City Summerlin or selling to downsize, market insights can help you navigate the process with confidence.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                    Get Personalized Insights
                  </h3>
                  <p className="text-[#141210] leading-relaxed">
                    For personalized market insights specific to Sun City Summerlin, contact Dr. Jan Duffy. With over 30 years of experience in Las Vegas real estate, she can help you understand how current market conditions affect your specific situation.
                  </p>
                </div>
              </div>
              <div className="mt-8 p-6 rounded-lg border border-[#B8A078]/30 bg-[#F7F6F4]">
                <h3 className="text-lg font-bold text-[#1C1917] mb-4 font-playfair">Related Resources</h3>
                <ul className="space-y-2 text-[#141210]">
                  <li>
                    <Link href="/resources/moving-guide" className="inline-flex items-center gap-2 text-[#1C1917] hover:underline font-medium">
                      <Truck className="w-4 h-4" /> Moving to Sun City Summerlin Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/first-time-buyers" className="inline-flex items-center gap-2 text-[#1C1917] hover:underline font-medium">
                      <Home className="w-4 h-4" /> First-Time Homebuyer Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="inline-flex items-center gap-2 text-[#1C1917] hover:underline font-medium">
                      <BookOpen className="w-4 h-4" /> All Resources
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
