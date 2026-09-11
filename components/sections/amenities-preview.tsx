import { Activity, Users, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ScrollAnimation from "../scroll-animation";

interface AmenityColumnProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  delay?: number;
}

function AmenityColumn({ icon, title, items, delay = 0 }: AmenityColumnProps) {
  return (
    <ScrollAnimation delay={delay}>
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-two hover:shadow-three transition-shadow h-full flex flex-col">
        <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-success/10 rounded-full mb-4 md:mb-6">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6 font-playfair">
          {title}
        </h3>
        <ul className="space-y-3 md:space-y-4 flex-grow">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-success mt-1 flex-shrink-0">✓</span>
              <span className="text-sm md:text-base lg:text-lg text-text-dark">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollAnimation>
  );
}

export default function AmenitiesPreviewSection() {
  const amenities = [
    {
      icon: <Activity className="w-8 h-8 text-success" />,
      title: "Stay Active",
      items: [
        "Four championship golf courses with Red Rock views",
        "Fitness centers and heated pools at three rec hubs",
        "Pickleball, tennis, and bocce under desert skies",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-success" />,
      title: "Stay Connected",
      items: [
        "80+ clubs for hobbies, travel, and volunteering",
        "Clubhouse events and community calendars year-round",
        "Neighbors who chose 55+ living on purpose",
      ],
    },
    {
      icon: <Sparkles className="w-8 h-8 text-success" />,
      title: "Stay Relaxed",
      items: [
        "Resort-style pools and spas minutes from home",
        "Walking trails with mountain backdrops",
        "Lock-and-leave living with guard-gated security",
      ],
    },
  ];

  return (
    <section id="amenities" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4 text-center font-playfair px-4">
          Your Private Resort, Minutes From Home
        </h2>
        <p className="text-center text-base md:text-lg text-text-dark mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          Sun City Summerlin amenities are the lifestyle product. Dr. Duffy helps you buy the home
          that puts the courses, clubs, and rec centers you will actually use within a short drive.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 md:mb-12">
          {amenities.map((amenity, index) => (
            <AmenityColumn
              key={amenity.title}
              icon={amenity.icon}
              title={amenity.title}
              items={amenity.items}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto min-h-[48px] min-w-[48px] px-6"
          >
            <Link href="/amenities">Explore All Amenities</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
