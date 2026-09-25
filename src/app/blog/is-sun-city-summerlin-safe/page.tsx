import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import LocalVisitSection from "@components/LocalVisitSection";
import Breadcrumbs from "@components/Breadcrumbs";
import PageHero from "@components/PageHero";
import { Button } from "@components/ui/button";
import { Phone, Calendar, ArrowRight, Shield, Lock, Users } from "lucide-react";
import ScrollAnimation from "@components/scroll-animation";

import RealScoutListings from "@components/RealScoutListings";
export const metadata: Metadata = {
  title: "Is Sun City Summerlin Safe? Complete Safety Guide (2025)",
  description:
    "Guard-gated 55+ living in Sun City Summerlin: 24/7 staffed entries and rec-path lighting in Las Vegas ZIP 89134. Dr. Jan Duffy.",
  alternates: {
    canonical: "https://www.suncityvegas.com/blog/is-sun-city-summerlin-safe",
  },
  openGraph: {
    title: "Is Sun City Summerlin Safe? Complete Safety Guide (2025)",
    description:
      "Guard-gated entries, lighting, and 55+ access rules at Sun City Summerlin in Las Vegas.",
    url: "https://www.suncityvegas.com/blog/is-sun-city-summerlin-safe",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "article",
    publishedTime: "2025-01-26T00:00:00Z",
    modifiedTime: "2025-01-26T00:00:00Z",
    authors: ["Dr. Jan Duffy"],
    images: [
      {
        url: "https://www.suncityvegas.com/images/blog/safety-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin security and safety",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Sun City Summerlin Safe? Complete Safety Guide",
    description: "Learn about safety and security at Sun City Summerlin.",
    images: ["https://www.suncityvegas.com/images/blog/safety-hero.jpg"],
  },
};


// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Sun City Summerlin safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sun City Summerlin has 24/7 staffed gates at every entrance, visitor check-in, neighborhood watch, and 55+ occupancy rules. Walk rec paths and golf carts after dark on lit streets.",
      },
    },
    {
      "@type": "Question",
      name: "What security measures does Sun City Summerlin have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sun City Summerlin has 24/7 guard-gated security at all community entrances, requiring visitor check-in. The community also has active neighborhood watch programs, well-lit streets, and security patrols. All homes are within a gated community with controlled access.",
      },
    },
    {
      "@type": "Question",
      name: "Does Sun City Summerlin publish crime rates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This site does not publish crime statistics. We describe the housing features buyers can verify: 24/7 staffed gates, visitor check-in, lit streets and rec-campus walks, and 55+ occupancy rules. Ask Dr. Jan Duffy for current HOA security details before you buy.",
      },
    },
  ],
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is Sun City Summerlin Safe? Complete Safety Guide (2025)",
  description: "Complete guide to safety and security at Sun City Summerlin.",
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
  image: "https://www.suncityvegas.com/images/blog/safety-hero.jpg",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.suncityvegas.com/blog/is-sun-city-summerlin-safe",
  },
};

export default function SafetyPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Is Sun City Summerlin Safe?", href: "/blog/is-sun-city-summerlin-safe" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        <PageHero
          title="Is Sun City Summerlin Safe? Complete Safety Guide"
          imageSrc="/images/blog/safety-hero.jpg"
          imageAlt="Sun City Summerlin guard-gated security entrance"
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

        <RealScoutListings h2Text="Homes for Sale in Sun City Summerlin | Is Sun City Summerlin Safe" />


        {/* Article Content */}
        <div className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <ScrollAnimation>
                <div className="prose prose-lg max-w-none text-[#141210] mb-12">
                  <p className="text-xl md:text-2xl font-semibold text-[#1C1917] leading-relaxed mb-6">
                    Buyers often ask about gates, lighting, and after-dark walking. Sun City Summerlin uses 24/7 staffed entries and lit rec paths inside ZIP 89134.
                  </p>
                  <p className="text-lg leading-relaxed">
                    This guide covers staffed gates, visitor check-in, lighting, and 55+ occupancy rules—not crime-rate rankings.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Quick Answer */}
              <ScrollAnimation delay={100}>
                <section className="mb-16">
                  <div className="bg-gradient-to-r from-[#57534E] to-[#1C1917] text-white rounded-lg p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <Shield className="w-12 h-12 text-[#C9A962]" />
                      <h2 className="text-3xl md:text-4xl font-bold font-playfair">
                        Yes, Sun City Summerlin is Safe
                      </h2>
                    </div>
                    <p className="text-xl md:text-2xl leading-relaxed">
                      Sun City Summerlin uses 24/7 staffed gates, visitor check-in, and lit streets. Neighbors and HOA patrols cover the rec campuses.
                    </p>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Security Measures */}
              <ScrollAnimation delay={200}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-6 font-playfair">
                    Security Measures
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-[#F7F6F4] rounded-lg p-6 border-l-4 border-[#57534E]">
                      <h3 className="text-xl font-bold text-[#1C1917] mb-4 font-playfair flex items-center gap-3">
                        <Lock className="w-6 h-6" />
                        24/7 Guard-Gated Security
                      </h3>
                      <p className="text-[#141210] leading-relaxed">
                        All community entrances are staffed 24 hours a day, 7 days a week by security guards. Visitors must check in and be approved before entering. This controlled access significantly reduces unauthorized entry.
                      </p>
                    </div>
                    <div className="bg-[#F7F6F4] rounded-lg p-6 border-l-4 border-[#1C1917]">
                      <h3 className="text-xl font-bold text-[#1C1917] mb-4 font-playfair flex items-center gap-3">
                        <Users className="w-6 h-6" />
                        Neighborhood Watch
                      </h3>
                      <p className="text-[#141210] leading-relaxed">
                        Neighborhood watch programs encourage residents to report unusual activity to security or the HOA. Clubs and rec centers give neighbors regular ways to meet.
                      </p>
                    </div>
                    <div className="bg-[#F7F6F4] rounded-lg p-6 border-l-4 border-[#B8A078]">
                      <h3 className="text-xl font-bold text-[#1C1917] mb-4 font-playfair">
                        Well-Lit Streets
                      </h3>
                      <p className="text-[#141210] leading-relaxed">
                        Streets and rec-campus walks are lit for evening walking and golf-cart use. The HOA maintains lighting throughout common areas.
                      </p>
                    </div>
                    <div className="bg-[#F7F6F4] rounded-lg p-6 border-l-4 border-[#57534E]">
                      <h3 className="text-xl font-bold text-[#1C1917] mb-4 font-playfair">
                        Security Patrols
                      </h3>
                      <p className="text-[#141210] leading-relaxed">
                        Regular security patrols monitor the community, providing an additional layer of protection. Security personnel are trained to respond to any concerns or incidents.
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Gates, lighting, occupancy */}
              <ScrollAnimation delay={300}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-6 font-playfair">
                    Gates, Lighting, and Occupancy Rules
                  </h2>
                  <div className="bg-[#F7F6F4] rounded-lg p-6 md:p-8 mb-6">
                    <p className="text-lg font-semibold text-[#1C1917] mb-4">
                      This guide describes housing features you can verify on a tour. We do not publish crime statistics.
                    </p>
                    <div className="space-y-4 text-[#141210]">
                      <div>
                        <h3 className="font-bold text-lg mb-2">Staffed Gates</h3>
                        <p className="leading-relaxed">
                          All community entrances are staffed 24/7. Visitors check in before entering. Ask the HOA how guest passes work before you buy.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Lighting and Patrols</h3>
                        <p className="leading-relaxed">
                          Streets and rec-campus walks are lit. Security patrols and neighborhood watch programs operate inside the gates.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Evening Use</h3>
                        <p className="leading-relaxed">
                          Residents walk rec paths, use golf carts, and visit fitness rooms after dark on lit streets inside the gates.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Why It's Safe */}
              <ScrollAnimation delay={400}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-6 font-playfair">
                    Why Sun City Summerlin is Safe
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-white border-l-4 border-[#57534E] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                        1. Guard-Gated Security
                      </h3>
                      <p className="text-[#141210] leading-relaxed">
                        The 24/7 guard-gated entries are the most visible security feature. All visitors must check in, and security personnel monitor all entrances.
                      </p>
                    </div>
                    <div className="bg-white border-l-4 border-[#1C1917] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                        2. 55+ Age Restriction
                      </h3>
                      <p className="text-[#141210] leading-relaxed">
                        Occupancy rules require at least one resident age 55 or older. That is a housing rule, not a crime statistic.
                      </p>
                    </div>
                    <div className="bg-white border-l-4 border-[#B8A078] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                        3. Active Community
                      </h3>
                      <p className="text-[#141210] leading-relaxed">
                        With 80+ clubs and year-round activities, rec campuses stay in use throughout the day. Neighbors meet through clubs, golf, and fitness rooms.
                      </p>
                    </div>
                    <div className="bg-white border-l-4 border-[#57534E] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                        4. Well-Maintained Infrastructure
                      </h3>
                      <p className="text-[#141210] leading-relaxed">
                        Well-lit streets, maintained landscaping, and HOA-managed common areas are part of the monthly assessment. Tour at dusk to see lighting on the streets you would use.
                      </p>
                    </div>
                    <div className="bg-white border-l-4 border-[#1C1917] rounded-lg p-6">
                      <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                        5. Location in Summerlin
                      </h3>
                      <p className="text-[#141210] leading-relaxed">
                        Sun City Summerlin sits in Summerlin, a master-planned area of Las Vegas. The Del Webb gates are staffed around the clock.
                      </p>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Personal Safety Tips */}
              <ScrollAnimation delay={500}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-6 font-playfair">
                    Personal Safety Tips
                  </h2>
                  <div className="bg-[#F7F6F4] rounded-lg p-6 md:p-8">
                    <p className="text-lg text-[#141210] leading-relaxed mb-6">
                      Guard-gated living still benefits from ordinary household habits:
                    </p>
                    <ul className="space-y-3 text-[#141210]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#57534E] font-bold">•</span>
                        <span>Lock your doors and windows when away from home</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#57534E] font-bold">•</span>
                        <span>Don't leave valuables visible in your car</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#57534E] font-bold">•</span>
                        <span>Get to know your neighbors and participate in neighborhood watch</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#57534E] font-bold">•</span>
                        <span>Report any suspicious activity to security or the HOA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#57534E] font-bold">•</span>
                        <span>Use the community's well-lit paths for evening walks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#57534E] font-bold">•</span>
                        <span>Keep emergency contact information readily available</span>
                      </li>
                    </ul>
                  </div>
                </section>
              </ScrollAnimation>

              {/* FAQ Section */}
              <ScrollAnimation delay={600}>
                <section className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-8 font-playfair">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#1C1917] cursor-pointer font-playfair">
                        Is Sun City Summerlin safe?
                      </summary>
                      <p className="mt-4 text-[#141210] leading-relaxed">
                        Sun City Summerlin has 24/7 staffed gates at every entrance, visitor check-in, neighborhood watch, and 55+ occupancy rules. Walk rec paths and golf carts after dark on lit streets.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#1C1917] cursor-pointer font-playfair">
                        What security measures does Sun City Summerlin have?
                      </summary>
                      <p className="mt-4 text-[#141210] leading-relaxed">
                        Sun City Summerlin has 24/7 guard-gated security at all community entrances, requiring visitor check-in. The community also has active neighborhood watch programs, well-lit streets, and security patrols. All homes are within a gated community with controlled access.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#1C1917] cursor-pointer font-playfair">
                        Does Sun City Summerlin publish crime rates?
                      </summary>
                      <p className="mt-4 text-[#141210] leading-relaxed">
                        This site does not publish crime statistics. We describe the housing features buyers can verify: 24/7 staffed gates, visitor check-in, lit streets and rec-campus walks, and 55+ occupancy rules. Ask Dr. Jan Duffy for current HOA security details before you buy.
                      </p>
                    </details>

                    <details className="bg-white border border-gray-200 rounded-lg p-6">
                      <summary className="font-bold text-lg text-[#1C1917] cursor-pointer font-playfair">
                        Can visitors enter Sun City Summerlin?
                      </summary>
                      <p className="mt-4 text-[#141210] leading-relaxed">
                        Yes, visitors can enter Sun City Summerlin, but they must check in at the guard gate. Security will verify the visitor's destination and may contact the resident to confirm. This controlled access helps maintain security while allowing legitimate visitors.
                      </p>
                    </details>
                  </div>
                </section>
              </ScrollAnimation>

              {/* Related Links */}
              <ScrollAnimation delay={700}>
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
                        Learn more about what makes Sun City Summerlin special, including safety and security.
                      </p>
                      <span className="text-[#1C1917] font-semibold flex items-center gap-2">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                    <Link
                      href="/community"
                      className="bg-[#F7F6F4] rounded-lg p-6 hover:shadow-lg transition-shadow border border-[#1C1917]/20"
                    >
                      <h3 className="text-xl font-bold text-[#1C1917] mb-2 font-playfair">
                        Learn About the Community
                      </h3>
                      <p className="text-[#141210] mb-4">
                        Discover more about Sun City Summerlin's amenities, location, and lifestyle.
                      </p>
                      <span className="text-[#1C1917] font-semibold flex items-center gap-2">
                        View Community <ArrowRight className="w-4 h-4" />
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
                    See the Gates and Rec Campuses in Person
                  </h2>
                  <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                    Schedule a tour with Dr. Jan Duffy to walk the staffed entries, rec paths, and lighting at Sun City Summerlin in Las Vegas.
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
      <LocalVisitSection heading="See the staffed gates at Sun City Summerlin" />
      <Footer />
    </>
  );
}
