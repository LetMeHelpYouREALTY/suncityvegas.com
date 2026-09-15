import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import PageHero from "@components/PageHero";
import { Button } from "@components/ui/button";
import Link from "next/link";
import ScrollAnimation from "@components/scroll-animation";
import { getAmenities, getRecreationCenters, getGolfCourses } from "@/lib/communityData";
import RealScoutListings from "@components/RealScoutListings";
import { pageHeroImages } from "@/lib/page-heroes";
import GoogleMapEmbed from "@components/GoogleMapEmbed";
import LocalVisitSection from "@components/LocalVisitSection";
import {
  Activity,
  Users,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Amenities | Sun City Summerlin | 4 Golf Courses & 3 Rec Centers",
  description:
    "Discover world-class amenities at Sun City Summerlin: 4 championship golf courses, 3 recreation centers, 80+ clubs, pools, tennis, pickleball. Las Vegas' premier 55+ community.",
  alternates: {
    canonical: "https://www.suncityvegas.com/amenities",
  },
  openGraph: {
    title: "Amenities | Sun City Summerlin | 4 Golf Courses & 3 Rec Centers",
    description:
      "World-class amenities: 4 golf courses, 3 rec centers, 80+ clubs, pools, tennis, pickleball at Sun City Summerlin.",
    url: "https://www.suncityvegas.com/amenities",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.suncityvegas.com/images/amenities/resort-pool.jpeg",
        width: 1200,
        height: 630,
        alt: "Sun City Summerlin resort-style amenities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amenities | Sun City Summerlin | 4 Golf Courses & 3 Rec Centers",
    description: "World-class amenities at Las Vegas' premier 55+ community.",
    images: ["https://www.suncityvegas.com/images/amenities/resort-pool.jpeg"],
  },
};

const amenities = [
  {
    category: "Golf Courses",
    icon: <Activity className="w-8 h-8 text-[#57534E]" />,
    items: [
      {
        name: "Highland Falls Golf Course",
        description: "18-hole championship course designed by Billy Casper & Greg Nash",
        image: "/images/amenities/highland-falls-mountain-view.jpg",
      },
      {
        name: "Palm Valley Golf Course",
        description: "18-hole championship course with stunning mountain views",
        image: "/images/amenities/palm-valley-fairway.jpg",
      },
      {
        name: "Eagle Crest Golf Course",
        description: "18-hole executive course perfect for a quick round",
        image: "/images/amenities/eagle-crest-executive.jpg",
      },
      {
        name: "Stonebridge Golf Course",
        description: "27-hole championship course at Sun City",
        image: "/images/amenities/golf-hero.jpg",
      },
    ],
  },
  {
    category: "Recreation Centers",
    icon: <Users className="w-8 h-8 text-[#1C1917]" />,
    items: [
      {
        name: "Mountain Shadows",
        description: "45,000 sq ft with fitness center, indoor pool, racquetball, arts & crafts",
        image: "/images/amenities/mountain-shadows-hero.jpg",
        link: "/amenities/mountain-shadows",
      },
      {
        name: "Desert Vista",
        description: "48,000 sq ft with fitness center, pool & spa, tennis, pickleball, ballroom",
        image: "/images/amenities/desert-vista-hero.jpg",
        link: "/amenities/desert-vista",
      },
      {
        name: "Pinnacle",
        description: "34,000 sq ft with fitness center, pool, tennis, bocce ball, card rooms",
        image: "/images/amenities/pinnacle-hero.jpg",
        link: "/amenities/pinnacle",
      },
    ],
  },
  {
    category: "Activities & Sports",
    icon: <Sparkles className="w-8 h-8 text-[#C9A962]" />,
    items: [
      {
        name: "Swimming Pools",
        description: "Multiple indoor and outdoor pools and spas across rec centers",
        image: "/images/amenities/sun-shadows-olympic-pool.jpg",
      },
      {
        name: "Tennis & Pickleball",
        description: "Courts available at multiple rec centers for year-round play",
        image: "/images/amenities/pickleball-courts.jpeg",
      },
      {
        name: "Fitness Centers",
        description: "State-of-the-art equipment at all three recreation centers",
        image: "/images/amenities/pinnacle-fitness.jpg",
      },
      {
        name: "Walking Trails",
        description: "Miles of scenic trails with Red Rock Canyon views",
        image: "/images/amenities/event-lawn.jpeg",
      },
    ],
  },
];

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

const AMENITY_MAP_SEARCH =
  "golf courses recreation centers parks shopping dining near 9406 Del Webb Boulevard Las Vegas NV 89134";

function AmenityMapEmbed() {
  return (
    <GoogleMapEmbed
      query={AMENITY_MAP_SEARCH}
      title="Golf, recreation centers, parks, shopping, and dining near Sun City Summerlin in Las Vegas"
      heightClassName="h-[400px] md:h-[500px]"
    />
  );
}

function AmenityCard({
  amenity,
  index,
}: {
  amenity: (typeof amenities)[0]["items"][0] & { link?: string };
  index: number;
}) {
  const CardContent = (
    <div className="bg-white rounded-lg shadow-two hover:shadow-three transition-shadow overflow-hidden">
      <div className="relative h-48 bg-[#F7F6F4]">
        <Image
          src={amenity.image}
          alt={amenity.name}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={blurDataURL}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1C1917] mb-2 font-playfair">
          {amenity.name}
        </h3>
        <p className="text-[#141210] leading-relaxed">
          {amenity.description}
        </p>
        {amenity.link && (
          <Link
            href={amenity.link}
            className="inline-flex items-center gap-2 text-[#1C1917] font-semibold hover:text-[#57534E] transition-colors mt-4"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <ScrollAnimation delay={index * 50}>
      {amenity.link ? (
        <Link href={amenity.link} className="block h-full">
          {CardContent}
        </Link>
      ) : (
        CardContent
      )}
    </ScrollAnimation>
  );
}

const amenitiesWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.suncityvegas.com/amenities",
  name: "Amenities | Sun City Summerlin | 4 Golf Courses & 3 Rec Centers",
  description:
    "Discover world-class amenities at Sun City Summerlin: 4 championship golf courses, 3 recreation centers, 80+ clubs, pools, tennis, pickleball. Las Vegas' premier 55+ community.",
  url: "https://www.suncityvegas.com/amenities",
};

export default function AmenitiesPage() {
  const communityAmenities = getAmenities();
  const recCenters = getRecreationCenters();
  const golfCourses = getGolfCourses();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(amenitiesWebPageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Amenities", href: "/amenities" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        <PageHero
          title="Sun City Summerlin Amenities | Golf, Rec Centers & Clubs"
          subtitle="Sun City Summerlin offers unmatched amenities: 4 championship golf courses, 3 recreation centers totaling over 125,000 sq ft, and 80+ clubs. View homes with access to these amenities."
          imageSrc={pageHeroImages.amenities.src}
          imageAlt={pageHeroImages.amenities.alt}
        />

        <RealScoutListings h2Text="Homes for Sale in Sun City Summerlin | Amenities" />

        <section className="bg-[#F7F6F4] py-8 md:py-10">
          <div className="container mx-auto px-4">
            <p className="text-center text-[#141210] max-w-3xl mx-auto text-base md:text-lg">
              Four courses, three rec centers, and 80+ clubs—Dr. Jan Duffy helps you buy the home that puts the amenities you will use within a short drive.
            </p>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-8 bg-[#F7F6F4]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-[#1C1917]">4</p>
                <p className="text-[#141210]">Golf Courses</p>
              </div>
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-[#1C1917]">3</p>
                <p className="text-[#141210]">Rec Centers</p>
              </div>
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-[#1C1917]">80+</p>
                <p className="text-[#141210]">Clubs</p>
              </div>
              <div className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-[#1C1917]">125K+</p>
                <p className="text-[#141210]">Sq Ft Rec Space</p>
              </div>
            </div>
          </div>
        </section>

        {/* Amenity Map — Google Maps Platform: nearby restaurants, parks, golf, etc. */}
        <section className="py-12 md:py-16 bg-white" id="amenity-map">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex items-center justify-center w-14 h-14 bg-[#1C1917]/10 rounded-full">
                  <MapPin className="w-7 h-7 text-[#1C1917]" aria-hidden />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1C1917] font-playfair">
                  Nearby Amenities Map
                </h2>
              </div>
              <p className="text-[#141210] text-center mb-8 max-w-2xl mx-auto">
                Explore restaurants, parks, golf, schools, and more near Sun City Summerlin. Use the map to see what&apos;s around the community.
              </p>
              <AmenityMapEmbed />
            </div>
          </div>
        </section>

        {/* Amenities by Category */}
        {amenities.map((category, categoryIndex) => (
          <section
            key={category.category}
            className={`py-12 md:py-16 lg:py-20 ${
              categoryIndex % 2 === 0 ? "bg-white" : "bg-[#F7F6F4]"
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="mb-8 md:mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#1C1917]/10 rounded-full">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1C1917] font-playfair">
                    {category.category}
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {category.items.map((amenity, index) => (
                  <AmenityCard
                    key={amenity.name}
                    amenity={amenity}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Complete Community Features List */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-6 text-center font-playfair">
                Complete Amenities List
              </h2>
              <div className="bg-[#F7F6F4] rounded-lg shadow-two p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {communityAmenities.map((amenity) => (
                    <div key={amenity} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#57534E] flex-shrink-0 mt-0.5" />
                      <span className="text-[#141210]">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#1C1917] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Experience These Amenities for Yourself
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Schedule a tour with <Link href="/about" className="text-[#C9A962] hover:text-white underline">Dr. Jan Duffy</Link> to see the amenities and
                community in person. Learn more about the <Link href="/lifestyle" className="text-[#C9A962] hover:text-white underline">active adult lifestyle</Link> at Sun City Summerlin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="bg-[#C9A962] hover:bg-[#C9A962]/90 text-[#141210]"
                >
                  <Link href="/contact">Schedule Your Tour</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/homes-for-sale">View Homes for Sale</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <LocalVisitSection heading="Map and hours for Sun City Summerlin amenities" />
      </main>
      <Footer />
    </>
  );
}
