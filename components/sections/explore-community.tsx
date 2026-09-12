import Link from "next/link";
import Image from "next/image";
import { Home, Sparkles, Users, HelpCircle, Phone, Briefcase } from "lucide-react";
import { Button } from "../ui/button";

const exploreCards = [
  {
    title: "Homes for Sale",
    description:
      "Current Sun City Summerlin listings—single-story plans, golf-course lots, and Red Rock views in 89134.",
    href: "/homes-for-sale",
    icon: Home,
    image: "/images/explore/homes-for-sale.jpg",
    primary: true,
  },
  {
    title: "Amenities",
    description:
      "Four championship courses, three rec centers, and 80+ clubs steps from your driveway.",
    href: "/amenities",
    icon: Sparkles,
    image: "/images/explore/amenities.jpg",
  },
  {
    title: "Lifestyle",
    description:
      "Active adult living beside Red Rock Canyon—pickleball mornings, club nights, lock-and-leave travel.",
    href: "/lifestyle",
    icon: Users,
    image: "/images/explore/lifestyle.jpg",
  },
  {
    title: "Realtor Services",
    description:
      "Buyer & seller agency, HOA review, VA guidance, and 55+ relocation for Summerlin / Centennial Hills.",
    href: "/services",
    icon: Briefcase,
    image: "/images/explore/contact.jpg",
  },
  {
    title: "About Dr. Jan Duffy",
    description:
      "Your on-site Sun City Summerlin specialist—25+ years helping 55+ buyers and sellers inside the gates.",
    href: "/about",
    icon: Users,
    image: "/images/explore/about-agent.jpg",
  },
  {
    title: "FAQ",
    description:
      "Straight answers on age rules, HOA fees, golf memberships, and buying in a Del Webb 55+ community.",
    href: "/faq",
    icon: HelpCircle,
    image: "/images/explore/faq.jpg",
  },
];

export default function ExploreCommunitySection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1917] mb-4 font-playfair">
              Explore Sun City Summerlin
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Local guidance for Las Vegas&apos; flagship 55+ community—homes, amenities,
              lifestyle, and realtor services tied to ZIP 89134.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group relative block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#B8A078]/20"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={`${card.title} in Sun City Summerlin, Las Vegas`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <Icon className="w-6 h-6 text-[#1C1917]" aria-hidden />
                      </div>
                    </div>
                    {card.primary && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#C9A962] text-[#141210] px-3 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#141210] mb-2 group-hover:text-[#1C1917] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                    <span className="text-[#1C1917] font-semibold text-sm group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#1C1917] hover:bg-[#1C1917]/90 text-white min-h-[48px] px-6"
            >
              <Link href="/contact" className="inline-flex items-center gap-2 min-h-[48px]">
                <Phone className="w-5 h-5" aria-hidden />
                Schedule a Tour
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
