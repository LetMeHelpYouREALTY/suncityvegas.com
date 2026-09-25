import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import LocalVisitSection from "@components/LocalVisitSection";
import Breadcrumbs from "@components/Breadcrumbs";
import PageHero from "@components/PageHero";
import YouTubeEmbed from "@components/YouTubeEmbed";
import { Button } from "@components/ui/button";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import ScrollAnimation from "@components/scroll-animation";
import RealScoutListings from "@components/RealScoutListings";
import Script from "next/script";

/** Replace with your YouTube video ID (from youtube.com/watch?v=VIDEO_ID) */
const YOUTUBE_VIDEO_ID = "";

export const metadata: Metadata = {
  title: "What 55+ Buyers Actually Spend Each Month in Sun City Summerlin (2026)",
  description:
    "Real monthly costs for 55+ buyers in Sun City Summerlin: HOA fees, utilities, property taxes, and more. Budget accurately with Dr. Jan Duffy.",
  alternates: {
    canonical: "https://www.suncityvegas.com/blog/what-55-buyers-spend-sun-city-summerlin",
  },
  openGraph: {
    title: "What 55+ Buyers Actually Spend Each Month in Sun City Summerlin (2026)",
    description:
      "HOA, utilities, taxes, and total monthly costs for Sun City Summerlin 55+ buyers. No surprises—plan your budget with real numbers.",
    url: "https://www.suncityvegas.com/blog/what-55-buyers-spend-sun-city-summerlin",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-01-27T00:00:00Z",
    modifiedTime: "2026-01-27T00:00:00Z",
    authors: ["Dr. Jan Duffy"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What 55+ Buyers Actually Spend Each Month in Sun City Summerlin (2026)",
    description: "HOA, utilities, taxes—real monthly costs for 55+ buyers in Sun City Summerlin.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What 55+ Buyers Actually Spend Each Month in Sun City Summerlin (HOA, utilities, taxes)",
  description:
    "Real monthly costs for 55+ buyers in Sun City Summerlin: HOA fees, utilities, property taxes, and more.",
  datePublished: "2026-01-27T00:00:00Z",
  dateModified: "2026-01-27T00:00:00Z",
  author: {
    "@type": "Person",
    name: "Dr. Jan Duffy",
    url: "https://www.suncityvegas.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    logo: { "@type": "ImageObject", url: "https://www.suncityvegas.com/images/logo/logo.jpg" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.suncityvegas.com/blog/what-55-buyers-spend-sun-city-summerlin",
  },
};

export default function What55BuyersSpendPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "What 55+ Buyers Spend Each Month", href: "/blog/what-55-buyers-spend-sun-city-summerlin" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        <PageHero
          title="What 55+ Buyers Actually Spend Each Month in Sun City Summerlin (2026)"
          imageSrc="/images/blog/monthly-budget-hero.jpg"
          imageAlt="Monthly housing costs for 55+ buyers in Sun City Summerlin, Las Vegas"
          align="left"
        >
          <div className="flex flex-wrap items-center gap-4 text-gray-100">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <time dateTime="2026-01-27">January 27, 2026</time>
            </div>
            <span>•</span>
            <span>By Dr. Jan Duffy</span>
          </div>
        </PageHero>

        <RealScoutListings h2Text="Homes for Sale in Sun City Summerlin | What 55 Buyers Spend Sun City Summerlin" />


        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {YOUTUBE_VIDEO_ID && (
                <div className="mb-8">
                  <YouTubeEmbed
                    videoId={YOUTUBE_VIDEO_ID}
                    title="What 55+ Buyers Actually Spend Each Month in Sun City Summerlin (HOA, utilities, taxes)"
                  />
                </div>
              )}
              <ScrollAnimation>
                <div className="prose prose-lg max-w-none text-[#141210]">
                  <p className="text-lg leading-relaxed mb-4">
                    Planning your budget? Here&apos;s what 55+ buyers actually spend each month in Sun City Summerlin: HOA fees (~$165/month), utilities (electric, gas, water, trash), property taxes, and optional costs like golf membership. We break it down so you can budget with real numbers—no surprises.
                  </p>
                  <p className="mb-6">
                    For the full picture, see the{" "}
                    <Link href="/flyers/sun-city-summerlin-guide" className="text-[#1C1917] font-semibold hover:text-[#57534E] underline">
                      Sun City Summerlin Complete Community Guide
                    </Link>
                    , or{" "}
                    <Link href="/schedule" className="text-[#1C1917] font-semibold hover:text-[#57534E] underline">
                      book a 55+ strategy call
                    </Link>
                    {" "}with Dr. Jan Duffy to discuss your budget and tour homes that fit your monthly target.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <Link
                    href="/flyers/sun-city-summerlin-guide"
                    className="bg-[#F7F6F4] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#1C1917]/20 flex items-center gap-4"
                  >
                    <span className="text-[#1C1917] font-semibold flex items-center gap-2">
                      Read the full guide <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                  <Link
                    href="/schedule"
                    className="bg-[#1C1917] text-white rounded-lg p-6 hover:bg-[#7a5335] transition-colors flex items-center gap-4"
                  >
                    <span className="font-semibold flex items-center gap-2">
                      Book a 55+ Strategy Call <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[#1C1917] text-white" aria-label="CTA">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-playfair">
                  Plan Your Budget with Confidence
                </h2>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Schedule a 55+ strategy call with Dr. Jan Duffy to go over monthly costs, see homes in your range, and get a clear picture of what you&apos;ll spend in Sun City Summerlin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:7027180043"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A962] text-[#141210] rounded-md font-semibold hover:bg-[#C9A962]/90 transition-colors min-h-[48px] touch-manipulation"
                  >
                    <Phone className="w-5 h-5" />
                    Call/Text: (702) 718-0043
                  </a>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 min-h-[48px] px-6">
                    <Link href="/schedule">Book a 55+ Strategy Call</Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>
      <LocalVisitSection heading="Review 89134 costs with Dr. Jan Duffy in person" />
      <Footer />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replaceAll("<", "\\u003c"),
        }}
      />
    </>
  );
}
