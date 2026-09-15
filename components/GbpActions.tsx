import { Phone, Navigation, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type GbpActionsProps = {
  variant?: "light" | "dark";
  className?: string;
};

const linkBase =
  "inline-flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] px-4 py-2 rounded-lg font-semibold text-sm md:text-base transition-colors";

export default function GbpActions({
  variant = "light",
  className,
}: GbpActionsProps) {
  const isDark = variant === "dark";

  const callClass = isDark
    ? "bg-white text-[#1C1917] hover:bg-[#F7F6F4]"
    : "bg-[#1C1917] text-white hover:bg-[#1C1917]/90";
  const secondaryClass = isDark
    ? "border-2 border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962] hover:text-[#141210]"
    : "border-2 border-[#1C1917] text-[#1C1917] hover:bg-[#1C1917] hover:text-white";

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row flex-wrap gap-3 justify-center sm:justify-start",
        className
      )}
    >
      <a
        href={siteConfig.phoneHref}
        className={cn(linkBase, callClass)}
        aria-label={`Call ${siteConfig.phoneDisplay}`}
      >
        <Phone className="w-4 h-4" aria-hidden />
        Call {siteConfig.phoneDisplay}
      </a>
      <a
        href={siteConfig.google.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(linkBase, secondaryClass)}
        aria-label="Get directions to 9406 Del Webb Boulevard, Las Vegas, NV 89134"
      >
        <Navigation className="w-4 h-4" aria-hidden />
        Get Directions
      </a>
      <a
        href={siteConfig.google.reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(linkBase, secondaryClass)}
        aria-label="View Google reviews for Dr. Jan Duffy"
      >
        <Star className="w-4 h-4" aria-hidden />
        View Google Reviews
      </a>
    </div>
  );
}
