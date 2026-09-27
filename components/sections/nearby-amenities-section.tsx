import Link from "next/link";
import AmenityMapClient from "@components/AmenityMapClient";
import { Button } from "@components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { MapPin } from "lucide-react";

type NearbyAmenitiesSectionProps = {
  id?: string;
  heading?: string;
  subheading?: string;
  showViewAllLink?: boolean;
};

export default function NearbyAmenitiesSection({
  id = "whats-nearby",
  heading = `Life Near ${siteConfig.community}`,
  subheading = `Explore healthcare, golf, grocery, parks, and shopping around ${siteConfig.city} ZIP ${siteConfig.zip}. Filter the map, then dive into the full nearby amenities guide.`,
  showViewAllLink = true,
}: NearbyAmenitiesSectionProps) {
  return (
    <section
      id={id}
      className="py-12 md:py-16 lg:py-20 bg-[#F7F6F4]"
      aria-labelledby={`${id}-heading`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8 md:mb-10">
            <div className="flex items-center justify-center w-14 h-14 bg-[#1C1917]/10 rounded-full mb-4">
              <MapPin className="w-7 h-7 text-[#1C1917]" aria-hidden />
            </div>
            <h2
              id={`${id}-heading`}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1C1917] font-playfair"
            >
              {heading}
            </h2>
            <p className="text-[#141210] mt-3 max-w-2xl text-base md:text-lg">
              {subheading}
            </p>
          </div>

          <AmenityMapClient showStaticList />

          {showViewAllLink ? (
            <div className="text-center mt-8">
              <Button
                asChild
                variant="default"
                size="lg"
                className="bg-[#1C1917] hover:bg-[#1C1917]/90 text-white min-h-[48px]"
              >
                <Link href="/nearby-amenities">View full nearby amenities guide</Link>
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
