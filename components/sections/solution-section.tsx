import ScrollAnimation from "../scroll-animation";
import CdnImage from "@components/CdnImage";
import Link from "next/link";

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function SolutionSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollAnimation>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-three bg-[#F7F6F4]">
                <CdnImage
                  src="/images/hero/community-entrance.jpg"
                  alt="Sun City Summerlin community entrance landscaping near Red Rock Canyon, Las Vegas"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1917] mb-4 md:mb-6 font-playfair px-2">
                  A Community Built for Living
                </h2>
                <div className="prose prose-lg max-w-none space-y-4 md:space-y-6">
                  <p className="text-base sm:text-lg md:text-xl text-[#141210] leading-relaxed px-2">
                    Sun City Summerlin is Las Vegas&apos; premier 55+ community: 7,779 homes, four
                    championship golf courses, and three recreation centers—built for people who
                    want to live, not just exist.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-[#141210] leading-relaxed px-2">
                    Dr. Jan Duffy maps villages, lot premiums, and{" "}
                    <Link href="/amenities" className="text-[#1C1917] hover:text-[#57534E] underline">
                      amenity access
                    </Link>{" "}
                    before you write an offer. Guard-gated security, Red Rock views, and 80+ clubs
                    define daily life. Explore the{" "}
                    <Link href="/lifestyle" className="text-[#1C1917] hover:text-[#57534E] underline">
                      active adult lifestyle
                    </Link>
                    —and keep more of your retirement income in Nevada with no state income tax.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-[#141210] leading-relaxed font-semibold px-2">
                    This isn&apos;t a place to slow down. It&apos;s a place to finally do everything
                    you&apos;ve been putting off—with a realtor who works this community every week.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
