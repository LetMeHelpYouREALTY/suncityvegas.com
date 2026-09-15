import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type GoogleMapEmbedProps = {
  title?: string;
  query?: string;
  className?: string;
  heightClassName?: string;
};

/**
 * GBP pin embed that does not require a Maps Embed API key.
 * Uses the public maps output=embed URL pointed at the canonical NAP.
 */
export default function GoogleMapEmbed({
  title = "Google Map of Dr. Jan Duffy at Sun City Summerlin, 9406 Del Webb Boulevard, Las Vegas, NV 89134",
  query,
  className,
  heightClassName = "h-[360px] md:h-[420px]",
}: GoogleMapEmbedProps) {
  const q =
    query ||
    `${siteConfig.agent.name} ${siteConfig.community} ${siteConfig.address}`;
  const src = `https://www.google.com/maps?q=${encodeURIComponent(q)}&z=15&output=embed`;

  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden shadow-lg border border-[#E8E4E0]",
        heightClassName,
        className
      )}
    >
      <iframe
        src={src}
        width="100%"
        height="100%"
        className="border-0 w-full h-full block"
        loading="lazy"
        title={title}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
