import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "../scroll-animation";

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

interface CollectionCardProps {
  title: string;
  specs: string;
  description: string;
  imagePath: string;
  delay?: number;
}

function CollectionCard({
  title,
  specs,
  description,
  imagePath,
  delay = 0,
}: CollectionCardProps) {
  return (
    <ScrollAnimation delay={delay}>
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-two hover:shadow-three transition-shadow h-full flex flex-col">
        <div className="relative h-48 md:h-56 rounded-lg mb-4 md:mb-6 overflow-hidden bg-[#FDF8F3]">
          <Image
            src={imagePath}
            alt={`${title} exterior in Sun City Summerlin, Las Vegas`}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={blurDataURL}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-2 md:mb-3 font-playfair">
          {title}
        </h3>
        <p className="text-base md:text-lg font-semibold text-[#8B5E3C] mb-3 md:mb-4">
          {specs}
        </p>
        <p className="text-sm md:text-base text-[#2D2A26] leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </ScrollAnimation>
  );
}

export default function HomeCollectionsSection() {
  const collections = [
    {
      title: "Cozy Homes",
      specs: "1,000–1,400 sq ft | $275K–$375K",
      description:
        "Low-maintenance Del Webb plans for lock-and-leave living—ideal when you want Sun City Summerlin amenities without unused rooms.",
      imagePath: "/images/homes/cozy.jpg",
    },
    {
      title: "Mid-Size Homes",
      specs: "1,400–2,000 sq ft | $375K–$525K",
      description:
        "The most requested size inside Sun City Summerlin: guest space, a den, and a single-story layout near golf and rec centers.",
      imagePath: "/images/homes/mid-size.jpg",
    },
    {
      title: "Spacious Homes",
      specs: "2,000–3,500+ sq ft | $525K–$1.2M+",
      description:
        "Premium lots with golf-course or Red Rock views—positioned for entertaining with targeted 55+ luxury marketing.",
      imagePath: "/images/homes/spacious.jpg",
    },
  ];

  return (
    <section id="home-styles" className="py-16 md:py-20 lg:py-24 bg-[#FDF8F3]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B5E3C] mb-3 md:mb-4 text-center font-playfair px-4">
          Find Your Perfect Home Size
        </h2>
        <p className="text-center text-base md:text-lg text-[#2D2A26] mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          With 7,779 homes built 1989–2002, Sun City Summerlin offers rare variety. Nearly all
          are single-story with attached garages—Dr. Duffy matches plan, village, and lot to your
          next chapter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 md:mb-12">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.title}
              title={collection.title}
              specs={collection.specs}
              description={collection.description}
              imagePath={collection.imagePath}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="default"
            size="lg"
            className="w-full sm:w-auto min-h-[48px] min-w-[48px] px-6 bg-[#8B5E3C] hover:bg-[#8B5E3C]/90"
          >
            <Link href="/homes-for-sale">View Available Homes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
