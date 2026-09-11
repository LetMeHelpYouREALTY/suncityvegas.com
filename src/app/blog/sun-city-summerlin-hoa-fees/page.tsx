import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import PageHero from "@components/PageHero";
import { Button } from "@components/ui/button";
import { Phone, Calendar, ArrowRight, Check, DollarSign } from "lucide-react";
import { getCommunityInfo } from "@/lib/communityData";
import ScrollAnimation from "@components/scroll-animation";

import RealScoutListings from "@components/RealScoutListings";
export const metadata: Metadata = {
  title: "Sun City Summerlin HOA Fees 2025: Complete Breakdown | HOA Sun City Del Webb",
  description:
    "Complete guide to Sun City Summerlin HOA fees (HOA for Sun City Del Webb). Learn what's included in the ~$165/month fee, what costs extra, and how it compares to other 55+ communities in Las Vegas.",
  keywords: [
    "HOA Sun City Del Webb",
    "HOA for Sun City Del Webb",
    "Sun City Summerlin HOA fees",
    "Del Webb HOA",
    "Sun City Summerlin HOA",
  ],
  alternates: {
    canonical: "https://www.suncityvegas.com/blog/sun-city-summerlin-hoa-fees",
  },
  openGraph: {
    title: "Sun City Summerlin HOA Fees 2025 | HOA Sun City Del Webb",
    description:
      "Complete guide to HOA fees at Sun City Summerlin (HOA for Sun City Del Webb). What's included, what costs extra.",
    url: "https://www.suncityvegas.com/blog/sun-city-summerlin-hoa-fees",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "article",
    publishedTime: "2025-01-26T00:00:00Z",
    modifiedTime: "2025-01-26T00:00:00Z",
    authors: ["Dr. Jan Duffy"],
    images: [
      {
        url: "https://www.suncityvegas.com/images/blog/hoa-fees-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin community amenities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sun City Summerlin HOA Fees 2025: Complete Breakdown",
    description: "Complete guide to HOA fees and what's included.",
    images: ["https://www.suncityvegas.com/images/blog/hoa-fees-hero.jpg"],
  },
};


// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much are HOA fees at Sun City Summerlin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HOA fees at Sun City Summerlin are approximately $165 per month (subject to change). This fee covers access to all recreation centers, pools, fitness facilities, guard-gated security, landscaping of common areas, and community events.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in the HOA fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The HOA fee includes access to all three recreation centers (125,000+ sq ft), all pools and spas, fitness centers, tennis courts, pickleball courts, bocce ball courts, guard-gated security, landscaping of common areas, and community events. Golf course access requires a separate membership.",
      },
    },
    {
      "@type": "Question",
      name: "Are there SIDs or LIDs at Sun City Summerlin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, there are no SIDs (Special Improvement Districts) or LIDs (Local Improvement Districts) at Sun City Summerlin. Your HOA fee is the only monthly community fee you'll pay.",
      },
    },
    {
      "@type": "Question",
      name: "How do HOA fees compare to other 55+ communities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sun City Summerlin's HOA fees are remarkably low compared to other 55+ communities in Las Vegas. Many similar communities charge $200-300+ per month for fewer amenities. At approximately $165/month, Sun City Summerlin offers exceptional value.",
      },
    },
  ],
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sun City Summerlin HOA Fees 2025: Complete Breakdown",
  description: "Complete guide to Sun City Summerlin HOA fees and what's included.",
  datePublished: "2025-01-26T00:00:00Z",
  dateModified: "2025-01-26T00:00:00Z",
  author: {
    "@type": "Person",
    name: "Dr. Jan Duffy",
    url: "https://www.suncityvegas.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    logo: {
      "@type": "ImageObject",
      url: "https://www.suncityvegas.com/images/logo/logo.jpg",
    },
  },
  image: "https://www.suncityvegas.com/images/blog/hoa-fees-hero.jpg",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.suncityvegas.com/blog/sun-city-summerlin-hoa-fees",
  },
};

export default function HOAFeesPage() {
  const communityInfo = getCommunityInfo();

  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "HOA Fees", href: "/blog/sun-city-summerlin-hoa-fees" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        <PageHero
          title="Sun City Summerlin HOA Fees 2025: Complete Breakdown"
          imageSrc="/images/blog/hoa-fees-hero.jpg"
          imageAlt="Sun City Summerlin community amenities included in HOA fee"
          align="left"
        >
          <div className="flex flex-wrap items-center gap-4 text-gray-100">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <time dateTime="2025-01-26">January 26, 2025</time>
            </div>
            <span>•</span>
            <span>By Dr. Jan Duffy</span>
          </div>
        </PageHero>

        <RealScoutListings h2Text="Homes for Sale in Sun City Summerlin | Sun City Summerlin Hoa Fees" />


        {/* Article Content */}
        <div className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <ScrollAnimation>
                <div className="prose prose-lg max-w-none text-[#141210] mb-12">
                  <p className="text-xl md:text-2xl font-semibold text-[#1C1917] leading-relaxed mb-6">
                    One of the most common questions I get from buyers is: "What are the HOA fees, and what do they cover?" Here's everything you need to know about HOA fees at Sun City Summerlin.
                  </p>
                  <p className="text-lg leading-relaxed">
                    At approximately $165 per month, Sun City Summerlin's HOA fees are remarkably low considering everything they include. This comprehensive guide breaks down exactly what you get for your monthly fee, what costs extra, and how it compares to other 55+ communities.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Current Fee */}
              <ScrollAnimation delay={100}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-6 font-playfair">
                    Current Monthly HOA Fee
                  </h2>
                  <div className="bg-gradient-to-r from-[#1C1917] to-[#57534E] text-white rounded-lg p-8 md:p-12 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <DollarSign className="w-12 h-12 text-[#C9A962]" />
                      <div>
                        <p className="text-4xl md:text-5xl font-bold mb-2">
                          ~$165/month
                        </p>
                        <p className="text-lg opacity-90">
                          (Subject to change - verify current rate)
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-[#141210]">
                    The HOA fee is billed monthly and is separate from your mortgage payment. It's important to note that fees can change over time, though increases are typically modest and require HOA board approval. The current rate of approximately $165 per month has remained relatively stable, reflecting the community's efficient management and established infrastructure.
                  </p>
                </section>
              </ScrollAnimation>

              {/* What's Included */}
              <ScrollAnimation delay={200}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-8 font-playfair">
                    What's Included in Your HOA Fee
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-[#F7F6F4] rounded-lg p-6 border-l-4 border-[#57534E]">
                      <h3 className="text-xl md:text-2xl font-bold text-[#1C1917] mb-4 font-playfair flex items-center gap-3">
                        <Check className="w-6 h-6 text-[#57534E]" />
                        Access to All Recreation Centers
                      </h3>
                      <p className="text-[#141210] leading-relaxed mb-4">
                        Your HOA fee includes access to all three recreation centers totaling over 125,000 square feet:
                      </p>
                      <ul className="space-y-2 text-[#141210]">
                        <li className="flex items-start gap-2">
                          <span className="text-[#57534E] font-bold">•</span>
                          <span><strong>Mountain Shadows</strong> (45,000 sq ft) - Fitness center, indoor pool, racquetball, arts & crafts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#57534E] font-bold">•</span>
                          <span><strong>Desert Vista</strong> (48,000 sq ft) - Grand ballroom, tennis, pickleball, fitness center</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#57534E] font-bold">•</span>
                          <span><strong>Pinnacle</strong> (34,000 sq ft) - Fitness center, pool, tennis, bocce ball</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-[#F7F6F4] rounded-lg p-6 border-l-4 border-[#57534E]">
                      <h3 className="text-xl md:text-2xl font-bold text-[#1C1917] mb-4 font-playfair flex items-center gap-3">
                        <Check className="w-6 h-6 text-[#57534E]" />
                        All Pools & Spas
                      </h3>
                      <p className="text-[#141210] leading-relaxed">
                        Access to all indoor and outdoor pools and spas across all recreation centers. Pools are heated year-round, and there's no additional fee for pool use.
                      </p>
                    </div>

                    <div className="bg-[#F7F6F4] rounded-lg p-6 border-l-4 border-[#57534E]">
                      <h3 className="text-xl md:text-2xl font-bold text-[#1C1917] mb-4 font-playfair flex items-center gap-3">
                        <Check className="w-6 h-6 text-[#57534E]" />
                        Fitness Centers
                      </h3>
                      <p className="text-[#141210] leading-relaxed">
                        Use of all fitness centers with state-of-the-art equipment, including cardio machines, strength training equipment, and free weights. Fitness classes are also included.
                      </p>
                    </div>

                    <div className="bg-[#F7F6F4] rounded-lg p-6 border-l-4 border-[#57534E]">
                      <h3 className="text-xl md:text-2xl font-bold text-[#1C1917] mb-4 font-playfair flex items-center gap-3">
                        <Check className="w-6 h-6 text-[#57534E]" />
                        Sports Courts
                      </h3>
                      <p className="text-[#141210] leading-relaxed mb-4">
                        Access to all tennis courts, pickleball courts, bocce ball courts, and other sports facilities. Courts can be reserved in advance at no additional cost.
                      </p>
                    </div>

                    <div className="bg-[#F7F6F4] rounded-lg p-6 border-l-4 border-[#57534E]">
                      <h3 className="text-xl md:text-2xl font-bold text-[#1C1917] mb-4 font-playfair flex items-center gap-3">
                        <Check className="w-6 h-6 text-[#57534E]" />
                        Guard-Gated Security
                      </h3>
                      <p className="text-[#141210] leading-relaxed">
                        24/7 guard-gated security at all community entrances. This provides peace of mind and helps maintain property values.
                      </p>
                    </div>

                    <div className="bg-[#F7F6F4] rounded-lg p-6 border-l-4 border-[#57534E]">
                      <h3 className="text-xl md:text-2xl font-bold text-[#1C1917] mb-4 font-playfair flex items-center gap-3">
                        <Check className="w-6 h-6 text-[#57534E]" />
                        Landscaping of Common Areas
                      </h3>
                      <p className="text-[#141210] leading-relaxed">
                        Maintenance and landscaping of all common areas, including parks, medians, and community spaces. This keeps the community looking beautiful year-round.
                      </p>
                    </div>

                    <div className="bg-[#F7F6F4] rounded-lg p-6 border-l-4 border-[#57534E]">
                      <h3 className="text-xl md:text-2xl font-bold text-[#1C1917] mb-4 font-playfair flex items-center gap-3">
                        <Check className="w-6 h-6 text-[#57534E]" />
                        Community Events
                      </h3>
                      <p className="text-[#141210] leading-relaxed">
                        Access to community events, socials, holiday celebrations, and educational seminars. Many events are free or low-cost for residents.
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* What's NOT Included */}
              <ScrollAnimation delay={300}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-8 font-playfair">
                    What's NOT Included (Additional Costs)
                  </h2>
                  <div className="bg-white border-l-4 border-[#B8A078] rounded-lg p-6 md:p-8 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">Golf Course Access</h3>
                      <p className="text-[#141210] leading-relaxed">
                        Golf course access requires a separate membership from Golf Summerlin. Green fees and membership costs are not included in your HOA fee. This is standard for most golf communities, as golf facilities require specialized maintenance and management.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">Personal Home Maintenance</h3>
                      <p className="text-[#141210] leading-relaxed">
                        Your HOA fee covers common areas only. You're responsible for maintaining your own home, including landscaping, exterior maintenance, and any repairs or updates.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">Utilities</h3>
                      <p className="text-[#141210] leading-relaxed">
                        Electricity, water, sewer, gas, internet, and cable are separate costs paid directly to utility providers. These are not included in the HOA fee.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">Property Taxes</h3>
                      <p className="text-[#141210] leading-relaxed">
                        Property taxes are separate and paid to Clark County. Nevada's property tax rate is relatively low, typically around 0.75% of assessed value.
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* No SIDs or LIDs */}
              <ScrollAnimation delay={400}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-6 font-playfair">
                    No SIDs or LIDs
                  </h2>
                  <div className="bg-[#F7F6F4] rounded-lg p-6 md:p-8">
                    <p className="text-lg leading-relaxed text-[#141210] mb-4">
                      <strong className="text-[#1C1917]">Important:</strong> Sun City Summerlin has no SIDs (Special Improvement Districts) or LIDs (Local Improvement Districts). This means your HOA fee is the only monthly community fee you'll pay.
                    </p>
                    <p className="text-lg leading-relaxed text-[#141210]">
                      Some newer communities add SIDs or LIDs to fund infrastructure improvements, which can add $50-200+ per month to your costs. At Sun City Summerlin, all infrastructure was paid for during development, so you won't face these additional fees.
                    </p>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Comparison */}
              <ScrollAnimation delay={500}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-8 font-playfair">
                    How HOA Fees Compare to Other Communities
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white rounded-lg shadow-md">
                      <thead>
                        <tr className="bg-[#1C1917] text-white">
                          <th className="border border-[#1C1917] p-4 text-left font-semibold">Community</th>
                          <th className="border border-[#1C1917] p-4 text-left font-semibold">Monthly HOA Fee</th>
                          <th className="border border-[#1C1917] p-4 text-left font-semibold">Recreation Centers</th>
                          <th className="border border-[#1C1917] p-4 text-left font-semibold">Golf Courses</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-[#F7F6F4]">
                          <td className="border border-gray-200 p-4 font-semibold text-[#1C1917]">Sun City Summerlin</td>
                          <td className="border border-gray-200 p-4">~$165</td>
                          <td className="border border-gray-200 p-4">3 (125,000+ sq ft)</td>
                          <td className="border border-gray-200 p-4">3 courses</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-4">Sun City Anthem</td>
                          <td className="border border-gray-200 p-4">~$200</td>
                          <td className="border border-gray-200 p-4">2 centers</td>
                          <td className="border border-gray-200 p-4">2 courses</td>
                        </tr>
                        <tr className="bg-[#F7F6F4]">
                          <td className="border border-gray-200 p-4">Other 55+ Communities</td>
                          <td className="border border-gray-200 p-4">$200-300+</td>
                          <td className="border border-gray-200 p-4">1-2 centers</td>
                          <td className="border border-gray-200 p-4">0-1 courses</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-lg leading-relaxed text-[#141210] mt-6">
                    As you can see, Sun City Summerlin offers exceptional value. You get more amenities for less money compared to most other 55+ communities in Las Vegas.
                  </p>
                </section>
              </ScrollAnimation>

              {/* Fee History */}
              <ScrollAnimation delay={600}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-6 font-playfair">
                    HOA Fee History & Stability
                  </h2>
                  <div className="bg-[#F7F6F4] rounded-lg p-6 md:p-8">
                    <p className="text-lg leading-relaxed text-[#141210] mb-4">
                      Sun City Summerlin's HOA fees have remained relatively stable over the years, with only modest increases to keep pace with inflation and maintenance costs. This stability reflects:
                    </p>
                    <ul className="space-y-3 text-[#141210]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#57534E] font-bold">•</span>
                        <span><strong>Established Infrastructure:</strong> All major facilities were built during development, so there are no large capital projects requiring fee increases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#57534E] font-bold">•</span>
                        <span><strong>Efficient Management:</strong> The HOA board and management company work to keep costs reasonable while maintaining high standards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#57534E] font-bold">•</span>
                        <span><strong>Large Community:</strong> With 7,781 homes, costs are spread across a large base, keeping individual fees lower</span>
                      </li>
                    </ul>
                  </div>
                </section>
              </ScrollAnimation>

              {/* How Fees Are Used */}
              <ScrollAnimation delay={700}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-6 font-playfair">
                    How Your HOA Fees Are Used
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">Facility Maintenance</h3>
                      <p className="text-[#141210]">
                        Keeping all recreation centers, pools, fitness equipment, and sports courts in excellent condition.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">Security Services</h3>
                      <p className="text-[#141210]">
                        Funding 24/7 guard-gated security at all community entrances.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">Landscaping</h3>
                      <p className="text-[#141210]">
                        Maintaining common area landscaping, parks, and community spaces.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">Administration</h3>
                      <p className="text-[#141210]">
                        HOA management, board operations, and community administration.
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* FAQ Section */}
              <ScrollAnimation delay={800}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-8 font-playfair">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#1C1917] cursor-pointer font-playfair">
                        How much are HOA fees at Sun City Summerlin?
                      </summary>
                      <p className="mt-4 text-[#141210] leading-relaxed">
                        HOA fees at Sun City Summerlin are approximately $165 per month (subject to change). This fee covers access to all recreation centers, pools, fitness facilities, guard-gated security, landscaping of common areas, and community events.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#1C1917] cursor-pointer font-playfair">
                        What's included in the HOA fee?
                      </summary>
                      <p className="mt-4 text-[#141210] leading-relaxed">
                        The HOA fee includes access to all three recreation centers (125,000+ sq ft), all pools and spas, fitness centers, tennis courts, pickleball courts, bocce ball courts, guard-gated security, landscaping of common areas, and community events. Golf course access requires a separate membership.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#1C1917] cursor-pointer font-playfair">
                        Are there SIDs or LIDs at Sun City Summerlin?
                      </summary>
                      <p className="mt-4 text-[#141210] leading-relaxed">
                        No, there are no SIDs (Special Improvement Districts) or LIDs (Local Improvement Districts) at Sun City Summerlin. Your HOA fee is the only monthly community fee you'll pay.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#1C1917] cursor-pointer font-playfair">
                        How do HOA fees compare to other 55+ communities?
                      </summary>
                      <p className="mt-4 text-[#141210] leading-relaxed">
                        Sun City Summerlin's HOA fees are remarkably low compared to other 55+ communities in Las Vegas. Many similar communities charge $200-300+ per month for fewer amenities. At approximately $165/month, Sun City Summerlin offers exceptional value.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#1C1917] cursor-pointer font-playfair">
                        Can HOA fees increase?
                      </summary>
                      <p className="mt-4 text-[#141210] leading-relaxed">
                        Yes, HOA fees can increase over time, but increases require HOA board approval and are typically modest, keeping pace with inflation and maintenance costs. Sun City Summerlin's fees have remained relatively stable due to the community's established infrastructure and efficient management.
                      </p>
                    </details>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Related Links */}
              <ScrollAnimation delay={900}>
                <section className="mb-16">
                  <h2 className="text-2xl font-bold text-[#1C1917] mb-6 font-playfair">
                    Related Articles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link
                      href="/blog/pros-and-cons-sun-city-summerlin"
                      className="bg-[#F7F6F4] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#1C1917]/20"
                    >
                      <h3 className="text-xl font-bold text-[#1C1917] mb-2 font-playfair">
                        Pros and Cons of Sun City Summerlin
                      </h3>
                      <p className="text-[#141210] mb-4">
                        An honest assessment of what makes Sun City Summerlin special—and what to consider.
                      </p>
                      <span className="text-[#1C1917] font-semibold flex items-center gap-2">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                    <Link
                      href="/blog/sun-city-summerlin-vs-sun-city-anthem"
                      className="bg-[#F7F6F4] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#1C1917]/20"
                    >
                      <h3 className="text-xl font-bold text-[#1C1917] mb-2 font-playfair">
                        Sun City Summerlin vs Sun City Anthem
                      </h3>
                      <p className="text-[#141210] mb-4">
                        Compare two of Las Vegas' premier 55+ communities, including HOA fees and amenities.
                      </p>
                      <span className="text-[#1C1917] font-semibold flex items-center gap-2">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </section>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <section className="py-12 md:py-16 bg-[#1C1917] text-white" aria-label="CTA">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <ScrollAnimation>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-playfair">
                    Have Questions About HOA Fees?
                  </h2>
                  <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                    Schedule a tour with Dr. Jan Duffy to see the amenities included in your HOA fee and explore homes in Sun City Summerlin. Get all your questions answered.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href="tel:7027180043"
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A962] text-[#141210] rounded-md font-semibold hover:bg-[#C9A962]/90 transition-colors min-h-[48px] touch-manipulation"
                    >
                      <Phone className="w-5 h-5" />
                      Call/Text: (702) 718-0043
                    </a>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white/10 min-h-[48px] px-6"
                    >
                      <Link href="/contact">Schedule Online</Link>
                    </Button>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
        </section>
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replaceAll("<", "\\u003c"),
          }}
        />
        <Script
          id="article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema).replaceAll("<", "\\u003c"),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
