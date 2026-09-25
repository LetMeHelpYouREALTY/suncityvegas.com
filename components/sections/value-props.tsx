import { Home, CheckCircle, DollarSign, Users } from "lucide-react";
import ScrollAnimation from "../scroll-animation";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  delay?: number;
}

function ValueCard({ icon, title, text, delay = 0 }: ValueCardProps) {
  return (
    <ScrollAnimation delay={delay}>
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-two hover:shadow-three transition-shadow h-full flex flex-col">
        <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#1C1917]/10 rounded-full mb-4 md:mb-6">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-[#1C1917] mb-3 md:mb-4 font-playfair">
          {title}
        </h3>
        <p className="text-base md:text-lg text-[#141210] leading-relaxed flex-grow">{text}</p>
      </div>
    </ScrollAnimation>
  );
}

export default function ValuePropsSection() {
  const values = [
    {
      icon: <Home className="w-8 h-8 text-[#1C1917]" />,
      title: "7,781 Homes to Choose From",
      description:
        "Las Vegas' largest 55+ community offers village-level variety. Dr. Duffy matches plan, lot, and golf proximity—not just list price.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#1C1917]" />,
      title: "World-Class Amenities",
      description:
        "Four championship courses, three rec centers (125,000+ sq ft), pools, tennis, pickleball, and 80+ clubs—reflected in every home-value comparison.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#1C1917]" />,
      title: "Keep More of Your Money",
      description:
        "Nevada has no state income tax. HOA dues (~$165/mo) cover amenity access. Your retirement dollars stretch further in 89134.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#1C1917]" />,
      title: "Active, Social Lifestyle",
      description:
        "Everyone here chose this life on purpose. Year-round golf, clubs, and neighbors who show up—supported by a local realtor who knows this community.",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917] mb-3 font-playfair">
            Why Buyers Choose Sun City Summerlin
          </h2>
          <p className="text-base md:text-lg text-[#141210]">
            Neighborhood advantages inside Las Vegas&apos; premier Del Webb 55+ community—explained
            into pricing, village selection, and offer strategy.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              text={value.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
