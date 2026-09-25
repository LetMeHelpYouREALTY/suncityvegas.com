import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import LocalVisitSection from "@components/LocalVisitSection";
import Breadcrumbs from "@components/Breadcrumbs";
import PageHero from "@components/PageHero";
import { Button } from "@components/ui/button";
import { Phone, Calendar, Building, Users, MapPin } from "lucide-react";
import ScrollAnimation from "@components/scroll-animation";

import RealScoutListings from "@components/RealScoutListings";
import { pageHeroImages } from "@/lib/page-heroes";
export const metadata: Metadata = {
  title: "Sun City Summerlin History | Del Webb in Summerlin 1989-2002",
  description:
    "Learn about Sun City Summerlin's history—built by Del Webb Corporation in Summerlin, Las Vegas, 1989-2002. Del Webb Las Vegas Summerlin is one of Las Vegas' premier 55+ active adult communities with 7,781 homes.",
  keywords: [
    "Del Webb in Summerlin",
    "Del Webb Las Vegas Summerlin",
    "Sun City Del Webb Las Vegas",
    "Del Webb senior living communities",
    "Sun City Summerlin history",
  ],
  alternates: {
    canonical: "https://www.suncityvegas.com/community/history",
  },
  openGraph: {
    title: "Sun City Summerlin History | Del Webb in Summerlin 1989-2002",
    description:
      "The history of Sun City Summerlin—Del Webb Las Vegas Summerlin from 1989 to today's thriving 55+ community.",
    url: "https://www.suncityvegas.com/community/history",
    siteName: "Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/community/history-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin history and development",
      },
    ],
  },
};


export default function HistoryPage() {
  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Community", href: "/community" },
          { label: "History", href: "/community/history" },
        ]}
      />
      <main className="pt-16 md:pt-20">
                <PageHero
          title="Sun City Summerlin History"
          subtitle="Built by Del Webb Corporation (1989-2002). From vision to reality: The story of how Sun City Summerlin became one of Las Vegas' premier 55+ active adult communities."
          imageSrc={pageHeroImages["community/history"].src}
          imageAlt={pageHeroImages["community/history"].alt}
        />

        <RealScoutListings h2Text="Homes for Sale in Sun City Summerlin | History" />


        {/* Introduction */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <div className="prose prose-lg max-w-none text-[#141210] space-y-4">
                  <p className="text-xl font-semibold text-[#1C1917]">
                    Sun City Summerlin represents a significant chapter in the history of active adult communities in Las Vegas. Built by Del Webb Corporation from 1989 to 2002, it was one of the first major 55+ communities in the Las Vegas area.
                  </p>
                  <p>
                    Del Webb, the company that pioneered the active adult community concept with the original Sun City in Arizona, brought their expertise and vision to Las Vegas with Sun City Summerlin. The result is a thriving community that has stood the test of time and continues to be one of the most desirable 55+ communities in the region.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Del Webb Legacy */}
        <section className="py-12 md:py-16 bg-[#F7F6F4]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-6 text-center font-playfair">
                  The Del Webb Legacy
                </h2>
              </ScrollAnimation>
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-md space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                    Pioneering Active Adult Living
                  </h3>
                  <p className="text-[#141210] leading-relaxed">
                    Del Webb Corporation revolutionized retirement living when they opened the first Sun City in Arizona in 1960. The concept of an age-restricted community designed specifically for active adults was groundbreaking, and it changed how Americans thought about retirement.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                    Bringing the Vision to Las Vegas
                  </h3>
                  <p className="text-[#141210] leading-relaxed">
                    By the late 1980s, Del Webb had perfected the Sun City model. When they chose Summerlin, Las Vegas, as the location for a new Sun City community, they brought decades of experience in creating active adult communities. Sun City Summerlin was designed to be a flagship community, showcasing the best of what Del Webb had learned.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                    Quality and Vision
                  </h3>
                  <p className="text-[#141210] leading-relaxed">
                    Del Webb's commitment to quality construction, thoughtful planning, and comprehensive amenities is evident throughout Sun City Summerlin. The community was built to last, with attention to detail that has helped it maintain its value and desirability over the decades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Timeline */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-8 text-center font-playfair">
                  Development Timeline
                </h2>
              </ScrollAnimation>
              <div className="space-y-6">
                {[
                  {
                    year: "1989",
                    title: "Groundbreaking",
                    description:
                      "Del Webb Corporation begins development of Sun City Summerlin, one of the first major 55+ communities in Las Vegas. The location in Summerlin was chosen for its proximity to Red Rock Canyon, higher elevation, and master-planned community setting.",
                  },
                  {
                    year: "1989-1995",
                    title: "Early Phases",
                    description:
                      "The first homes are built and the community begins to take shape. Early residents move in and the first recreation centers open. The community establishes its character and culture.",
                  },
                  {
                    year: "1995-1999",
                    title: "Expansion",
                    description:
                      "The community continues to grow with additional phases. More recreation centers are completed, golf courses open, and home styles stay single-story ranch. Home styles evolve with the times while maintaining the single-story ranch design.",
                  },
                  {
                    year: "1999-2002",
                    title: "Final Phases",
                    description:
                      "The final phases of development are completed. The community reaches its full size of 7,781 homes. All amenities are operational, and Sun City Summerlin is fully built-out.",
                  },
                  {
                    year: "2002-Present",
                    title: "Mature Community",
                    description:
                      "Sun City Summerlin continues as a completed 7,781-home Del Webb community. Homes are well-maintained, amenities are updated, and the HOA and residents work together to keep the 1989–2002 build-out in good repair.",
                  },
                ].map((milestone, index) => (
                  <ScrollAnimation key={milestone.year} delay={index * 100}>
                    <div className="bg-[#F7F6F4] rounded-lg p-6 border-l-4 border-[#1C1917]">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="bg-[#1C1917] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg flex-shrink-0">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-[#1C1917] font-playfair">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-[#141210] leading-relaxed ml-20">
                        {milestone.description}
                      </p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Growth */}
        <section className="py-12 md:py-16 bg-[#F7F6F4]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-6 text-center font-playfair">
                  Community Growth & Evolution
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair flex items-center gap-3">
                    <Users className="w-6 h-6" />
                    Population Growth
                  </h3>
                  <p className="text-[#141210] leading-relaxed">
                    From the first residents in 1989 to today's 7,781 homes, Sun City Summerlin is one of the largest 55+ Del Webb communities in Las Vegas.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair flex items-center gap-3">
                    <Building className="w-6 h-6" />
                    Amenity Development
                  </h3>
                  <p className="text-[#141210] leading-relaxed">
                    Over the years, all three recreation centers, three golf courses, and extensive amenities were completed. The community now offers over 125,000 square feet of recreation facilities.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair flex items-center gap-3">
                    <Calendar className="w-6 h-6" />
                    Community Culture
                  </h3>
                  <p className="text-[#141210] leading-relaxed">
                    A vibrant community culture has developed with 80+ clubs, year-round events, and active social life. Residents have created a welcoming, engaged community.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair flex items-center gap-3">
                    <MapPin className="w-6 h-6" />
                    Established Reputation
                  </h3>
                  <p className="text-[#141210] leading-relaxed">
                    Sun City Summerlin has become one of Las Vegas' premier 55+ communities, known for golf, rec centers, Red Rock views, and an active-adult calendar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Today's Community */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-6 text-center font-playfair">
                  Today's Sun City Summerlin
                </h2>
              </ScrollAnimation>
              <div className="bg-gradient-to-r from-[#1C1917] to-[#57534E] text-white rounded-lg p-8 md:p-12">
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  Today, Sun City Summerlin stands as a testament to Del Webb's vision. The community has matured beautifully, with established landscaping, proven amenities, and a vibrant resident community.
                </p>
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  What makes Sun City Summerlin special isn't just its history—it's how that history has created a community that continues to thrive. The quality construction, thoughtful planning, and comprehensive amenities that Del Webb built have stood the test of time.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  Residents today use four golf courses, three recreation centers, and 80+ clubs in a 1989–2002 Del Webb build-out of 7,781 homes. Amenities, streets, and HOA services have operated for more than three decades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#1C1917] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollAnimation>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-playfair">
                  Be Part of the Legacy
                </h2>
                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                  Schedule a tour with Dr. Jan Duffy to see Sun City Summerlin and learn more about this historic community built by Del Webb.
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
      </main>
      <LocalVisitSection heading="Walk the 1989–2002 Del Webb build-out at this pin" />
      <Footer />
    </>
  );
}
