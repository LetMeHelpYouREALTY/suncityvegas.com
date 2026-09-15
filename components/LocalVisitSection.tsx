import { Clock, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import GoogleMapEmbed from "@components/GoogleMapEmbed";
import GbpActions from "@components/GbpActions";

type LocalVisitSectionProps = {
  heading?: string;
  id?: string;
};

export default function LocalVisitSection({
  heading = "Visit Dr. Jan Duffy at Sun City Summerlin",
  id = "visit",
}: LocalVisitSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-[#F7F6F4]" id={id}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3 font-playfair text-center">
            {heading}
          </h2>
          <p className="text-[#141210] text-center mb-8 max-w-2xl mx-auto">
            Same name, address, and phone as our Google Business Profile. Hours
            daily {siteConfig.hoursDisplay}.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-[#E8E4E0]">
              <p className="text-lg font-semibold text-[#1C1917] mb-4 font-playfair">
                {siteConfig.siteName}
              </p>
              <ul className="space-y-4 text-[#141210]">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-[#1C1917] flex-shrink-0" aria-hidden />
                  <span>
                    {siteConfig.streetAddress}
                    <br />
                    {siteConfig.city}, {siteConfig.state} {siteConfig.zip}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 text-[#1C1917] flex-shrink-0" aria-hidden />
                  <a
                    href={siteConfig.phoneHref}
                    className="hover:underline min-h-[44px] inline-flex items-center"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 text-[#1C1917] flex-shrink-0" aria-hidden />
                  <span>Open {siteConfig.hoursDisplay}</span>
                </li>
              </ul>
              <GbpActions className="mt-8" />
            </div>
            <GoogleMapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
