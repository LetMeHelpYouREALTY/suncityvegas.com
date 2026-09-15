import type { Metadata } from 'next';
import Navbar from '@components/navbar';
import Footer from '@components/footer';
import Breadcrumbs from '@components/Breadcrumbs';
import PageHero from "@components/PageHero";
import ScheduleTour from '@components/ScheduleTour';
import RealScoutListings from "@components/RealScoutListings";
import { pageHeroImages } from "@/lib/page-heroes";
import LocalVisitSection from "@components/LocalVisitSection";
import { Phone, Calendar, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Schedule a Tour | Sun City Summerlin | Dr. Jan Duffy',
  description:
    'Schedule a private tour of Sun City Summerlin with Dr. Jan Duffy. Walk the community, explore the 4 golf courses and 3 rec centers, and see available homes.',
  alternates: {
    canonical: 'https://www.suncityvegas.com/schedule',
  },
  openGraph: {
    title: 'Schedule a Tour | Sun City Summerlin',
    description:
      'Book a private tour of Sun City Summerlin 55+ community in Las Vegas. Schedule online with Dr. Jan Duffy.',
    url: 'https://www.suncityvegas.com/schedule',
    siteName: 'Sun City Summerlin Homes for Sale | Dr. Jan Duffy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule a Tour | Sun City Summerlin',
    description: 'Book your private tour of Sun City Summerlin community.',
  },
};

const scheduleWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.suncityvegas.com/schedule',
  name: 'Schedule a Tour | Sun City Summerlin | Dr. Jan Duffy',
  description:
    'Schedule a private tour of Sun City Summerlin with Dr. Jan Duffy. Walk the community, explore the 4 golf courses and 3 rec centers, and see available homes.',
  url: 'https://www.suncityvegas.com/schedule',
};

export default function SchedulePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(scheduleWebPageSchema).replace(/</g, '\\u003c'),
        }}
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: 'Sun City Summerlin', href: '/' },
          { label: 'Schedule a Tour', href: '/schedule' },
        ]}
      />
      <main className="pt-16 md:pt-20">
                <PageHero
          title="Schedule Your Private Tour | Sun City Summerlin"
          subtitle="Experience Sun City Summerlin in person. Walk the community, explore the 4 golf courses and 3 recreation centers, and step inside the homes. No pressure, no obligation—just the information you need."
          imageSrc={pageHeroImages["schedule"].src}
          imageAlt={pageHeroImages["schedule"].alt}
        />

        <RealScoutListings h2Text="Homes for Sale in Sun City Summerlin | Schedule" />


        {/* Quick Info Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-[#F7F6F4] rounded-lg">
                  <Clock className="w-10 h-10 text-[#1C1917] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#1C1917] mb-2">Tour Duration</h3>
                  <p className="text-[#141210]">60-90 minutes</p>
                </div>
                <div className="text-center p-6 bg-[#F7F6F4] rounded-lg">
                  <MapPin className="w-10 h-10 text-[#1C1917] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#1C1917] mb-2">Location</h3>
                  <p className="text-[#141210]">Sun City Summerlin</p>
                  <p className="text-sm text-gray-600 mt-1">
                    9406 Del Webb Boulevard, Las Vegas, NV 89134
                  </p>
                </div>
                <div className="text-center p-6 bg-[#F7F6F4] rounded-lg">
                  <Phone className="w-10 h-10 text-[#1C1917] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#1C1917] mb-2">Questions?</h3>
                  <a
                    href="tel:7027180043"
                    className="text-[#C9A962] hover:text-[#1C1917] transition-colors"
                  >
                    (702) 718-0043
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendly Inline Widget */}
        <section className="py-12 md:py-16 lg:py-20 bg-[#F7F6F4]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-three p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-4 text-center font-playfair">
                  Select Your Preferred Date & Time
                </h2>
                <p className="text-[#141210] text-center mb-8">
                  Choose a time that works for you. Dr. Jan Duffy will confirm
                  your appointment and provide all the details you need.
                </p>
                <ScheduleTour inline={true} />
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Contact Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-4 font-playfair">
                Prefer to Call or Email?
              </h2>
              <p className="text-[#141210] mb-6">
                You can also reach out directly to schedule your tour or ask any
                questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7027180043"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1C1917] text-white rounded-md font-semibold hover:bg-[#1C1917]/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call (702) 718-0043
                </a>
                <a
                  href="mailto:DrDuffySells@SunCityVegas.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#1C1917] text-[#1C1917] rounded-md font-semibold hover:bg-[#1C1917] hover:text-white transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LocalVisitSection heading="Start your tour at 9406 Del Webb Boulevard" />
      <Footer />
    </>
  );
}
