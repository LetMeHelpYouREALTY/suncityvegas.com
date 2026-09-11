import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "../scroll-animation";

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function AboutAgentSection() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollAnimation>
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
                <Image
                  src="/images/about/dr-jan-duffy.jpg"
                  alt="Dr. Jan Duffy, REALTOR® specializing in Sun City Summerlin, Las Vegas"
                  fill
                  className="object-cover rounded-lg shadow-three"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B5E3C] mb-4 md:mb-6 font-playfair">
                  Your Sun City Summerlin Expert
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p className="text-base md:text-lg text-[#2D2A26] leading-relaxed">
                    Dr. Jan Duffy is an independent REALTOR® with Berkshire Hathaway HomeServices
                    Nevada Properties who specializes in Sun City Summerlin and nearby 55+
                    inventory across Summerlin and Centennial Hills.
                  </p>
                  <p className="text-base md:text-lg text-[#2D2A26] leading-relaxed">
                    She knows which villages deliver Red Rock views, which lots carry golf
                    premiums, and how HOA age verification and reserves affect your offer. From
                    CMAs to closing coordination, the work stays hyper-local.
                  </p>
                  <p className="text-base md:text-lg text-[#2D2A26] leading-relaxed font-semibold">
                    When you work with her, you get honest guidance—not a generic Las Vegas sales
                    pitch.
                  </p>
                </div>
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    variant="default"
                    size="lg"
                    className="w-full sm:w-auto bg-[#8B5E3C] hover:bg-[#8B5E3C]/90 text-white min-h-[48px]"
                  >
                    <Link href="/about">Meet Dr. Jan Duffy</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-[#8B5E3C] text-[#8B5E3C] min-h-[48px]"
                  >
                    <Link href="/services">View Realtor Services</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
