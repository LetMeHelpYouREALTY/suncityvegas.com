import CdnImage from "@components/CdnImage";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const SIZE_CLASS = {
  nav: "h-11 w-11",
  footer: "h-16 w-16",
  hero: "h-16 w-16 md:h-20 md:w-20",
} as const;

const SIZE_PX = {
  nav: 44,
  footer: 64,
  hero: 80,
} as const;

type AgentMarkProps = {
  size?: keyof typeof SIZE_CLASS;
  className?: string;
};

/** Circular portrait used in the header, footer, heroes, and agent sections. */
export default function AgentMark({ size = "nav", className }: AgentMarkProps) {
  const px = SIZE_PX[size];

  return (
    <CdnImage
      src={siteConfig.agent.photo}
      alt="Dr. Jan Duffy, Sun City Summerlin REALTOR in Las Vegas"
      width={px}
      height={px}
      loading={size === "footer" ? "lazy" : "eager"}
      className={cn(SIZE_CLASS[size], "shrink-0 object-contain", className)}
    />
  );
}
