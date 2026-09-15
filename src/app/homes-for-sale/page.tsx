import type { Metadata } from "next";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import PageHero from "@components/PageHero";
import { Phone } from "lucide-react";
import { Button } from "@components/ui/button";
import Link from "next/link";
import MortgageCalculator from "@components/MortgageCalculator";
import RealScoutListings from "@components/RealScoutListings";
import { getCommunityInfo } from "@/lib/communityData";
import { pageHeroImages } from "@/lib/page-heroes";
import LocalVisitSection from "@components/LocalVisitSection";

export const metadata: Metadata = {
  title: "Sun City Summerlin Las Vegas NV 89134 Current Homes for Sale | Del Webb Summerlin",
  description:
    "Current homes for sale in Sun City Summerlin, Las Vegas, NV 89134. Del Webb Summerlin 55+ community—browse listings updated daily. 55 and over communities in Las Vegas for sale. Call (702) 718-0043",
  keywords: [
    "Sun City Summerlin Las Vegas NV 89134 current homes for sale",
    "Del Webb Summerlin homes for sale",
    "Sun City Summerlin 55+ community homes for sale",
    "55 and over communities in Las Vegas for sale",
    "Del Webb Las Vegas Summerlin",
  ],
  alternates: {
    canonical: "https://www.suncityvegas.com/homes-for-sale",
  },
  openGraph: {
    title: "Sun City Summerlin Las Vegas NV 89134 Current Homes for Sale | Del Webb Summerlin",
    description:
      "Browse current homes for sale in Sun City Summerlin, Las Vegas NV 89134. Del Webb Summerlin 55+ community. Listings updated daily.",
    url: "https://www.suncityvegas.com/homes-for-sale",
    siteName: "Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/amenities/resort-pool.jpeg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin Del Webb homes for sale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sun City Summerlin Las Vegas NV 89134 Homes for Sale | Del Webb Summerlin",
    description: "Current homes for sale in Sun City Summerlin 55+ community, Las Vegas NV 89134. Del Webb Summerlin.",
    images: ["https://www.suncityvegas.com/images/amenities/resort-pool.jpeg"],
  },
};

const homesForSaleWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.suncityvegas.com/homes-for-sale",
  name: "Sun City Summerlin Las Vegas NV 89134 Current Homes for Sale | Del Webb Summerlin",
  description:
    "Current homes for sale in Sun City Summerlin, Las Vegas, NV 89134. Del Webb Summerlin 55+ community—browse listings updated daily.",
  url: "https://www.suncityvegas.com/homes-for-sale",
};

export default async function HomesForSalePage() {
  const communityInfo = getCommunityInfo();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homesForSaleWebPageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Homes for Sale", href: "/homes-for-sale" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        <PageHero
          title="Sun City Summerlin Las Vegas NV 89134 Current Homes for Sale"
          subtitle="Browse current homes for sale in Sun City Summerlin, the Del Webb 55+ community in Las Vegas, NV 89134. Listings updated daily. Explore resort-style amenities—4 golf courses, 3 recreation centers, 80+ clubs."
          imageSrc={pageHeroImages["homes-for-sale"].src}
          imageAlt={pageHeroImages["homes-for-sale"].alt}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              variant="accent"
              size="lg"
              className="bg-[#C9A962] hover:bg-[#C9A962]/90 text-[#141210] min-h-[44px]"
            >
              <Link href="#listings">View Listings</Link>
            </Button>
            <a
              href="tel:7027180043"
              className="flex items-center gap-2 text-lg font-semibold hover:text-[#C9A962] transition-colors min-h-[44px]"
            >
              <Phone className="w-5 h-5" />
              (702) 718-0043
            </a>
          </div>
        </PageHero>

        <RealScoutListings h2Text="Homes for Sale in Sun City Summerlin | Homes For Sale" />

        {/* CTA Cards Section */}
        <section className="py-12 md:py-16 bg-[#F7F6F4]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="https://drjanduffy.realscout.com/onboarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow group"
                >
                  <h3 className="text-2xl font-bold text-[#1C1917] mb-4 font-playfair group-hover:text-[#57534E] transition-colors">
                    Search All Homes
                  </h3>
                  <p className="text-[#141210] mb-6">
                    Access the complete MLS database and search all available homes in Sun City Summerlin.
                  </p>
                  <Button variant="accent" size="lg" className="w-full bg-[#1C1917] hover:bg-[#1C1917]/90 text-white">
                    Start Your Search
                  </Button>
                </a>
                <a
                  href="https://drjanduffy.realscout.com/onboarding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow group"
                >
                  <h3 className="text-2xl font-bold text-[#1C1917] mb-4 font-playfair group-hover:text-[#57534E] transition-colors">
                    Get New Listing Alerts
                  </h3>
                  <p className="text-[#141210] mb-6">
                    Be the first to know when new homes hit the market. Set up custom alerts for your perfect home.
                  </p>
                  <Button variant="accent" size="lg" className="w-full bg-[#1C1917] hover:bg-[#1C1917]/90 text-white">
                    Set Up Alerts
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Dr. Jan Duffy Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-8 text-center font-playfair">
                Why Work With Dr. Jan Duffy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#F7F6F4] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                    Local Expertise
                  </h3>
                  <p className="text-[#141210]">
                    Deep knowledge of Sun City Summerlin and the Las Vegas real estate market.
                  </p>
                </div>
                <div className="bg-[#F7F6F4] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                    Personalized Service
                  </h3>
                  <p className="text-[#141210]">
                    Dedicated to understanding your unique needs and finding your perfect 55+ home.
                  </p>
                </div>
                <div className="bg-[#F7F6F4] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                    Proven Results
                  </h3>
                  <p className="text-[#141210]">
                    Successfully helping active adults find their dream homes in Sun City Summerlin.
                  </p>
                </div>
                <div className="bg-[#F7F6F4] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                    Full-Service Support
                  </h3>
                  <p className="text-[#141210]">
                    From initial search through closing, we guide you every step of the way.
                  </p>
                </div>
                <div className="bg-[#F7F6F4] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                    Market Insights
                  </h3>
                  <p className="text-[#141210]">
                    Access to current market trends, pricing data, and neighborhood information.
                  </p>
                </div>
                <div className="bg-[#F7F6F4] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                    Responsive Communication
                  </h3>
                  <p className="text-[#141210]">
                    Quick responses to your questions and regular updates on your home search.
                  </p>
                </div>
              </div>
              <div className="text-center bg-[#B8A078]/20 p-8 rounded-lg border-2 border-[#B8A078]">
                <p className="text-lg font-semibold text-[#1C1917] mb-4">
                  Ready to find your perfect home?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:7027180043"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-[#1C1917] text-white rounded-md font-semibold hover:bg-[#1C1917]/90 transition-colors min-h-[48px] touch-manipulation"
                  >
                    <Phone className="w-5 h-5" />
                    Call (702) 718-0043
                  </a>
                  <Button asChild variant="accent" size="lg" className="bg-[#C9A962] hover:bg-[#C9A962]/90 text-[#141210] min-h-[48px] px-6">
                    <Link href="/contact">Schedule a Tour</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mortgage Calculator Section */}
        <MortgageCalculator />

        {/* Quick Info Section */}
        <section className="py-12 md:py-16 bg-[#F7F6F4]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-6 text-center font-playfair">
                Why Choose Sun City Summerlin?
              </h2>
              <p className="text-center text-[#141210] mb-6 max-w-2xl mx-auto">
                Discover the <Link href="/amenities" className="text-[#1C1917] hover:text-[#57534E] underline">resort-style amenities</Link> and <Link href="/lifestyle" className="text-[#1C1917] hover:text-[#57534E] underline">active adult lifestyle</Link> that make this community special.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                    Price Range
                  </h3>
                  <p className="text-2xl font-semibold text-[#1C1917] mb-2">
                    {communityInfo.priceRange}
                  </p>
                  <p className="text-[#141210]">
                    Competitive pricing for luxury 55+ living
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                    Total Homes
                  </h3>
                  <p className="text-2xl font-semibold text-[#1C1917] mb-2">{communityInfo.totalHomes.toLocaleString()}</p>
                  <p className="text-[#141210]">
                    Single-family residences in a guard-gated community
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-two text-center">
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                    HOA Fee
                  </h3>
                  <p className="text-2xl font-semibold text-[#1C1917] mb-2">
                    {communityInfo.hoaFee}
                  </p>
                  <p className="text-[#141210]">{communityInfo.sidLid === 'None' ? 'No extra special-district taxes' : communityInfo.sidLid}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LocalVisitSection heading="Tour Sun City Summerlin homes from this Google Maps pin" />
      <Footer />
    </>
  );
}
