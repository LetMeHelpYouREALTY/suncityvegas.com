import Image from "next/image";
import type { ReactNode } from "react";

const DEFAULT_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
  align?: "center" | "left";
  priority?: boolean;
  className?: string;
};

/**
 * Full-bleed luxury page hero — matches homepage visual treatment.
 * Contrast (WCAG AA): darken photo + soft text scrim + explicit white type.
 * No gold/card box on the image — champagne is eyebrow accent only.
 */
export default function PageHero({
  title,
  subtitle,
  eyebrow,
  imageSrc,
  imageAlt,
  children,
  align = "center",
  priority = true,
  className = "",
}: PageHeroProps) {
  const alignClass = align === "left" ? "text-left mx-0" : "text-center mx-auto";

  return (
    <section
      className={`relative min-h-[420px] md:min-h-[520px] lg:min-h-[600px] flex items-center justify-center bg-[#141210] text-white overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          className="object-cover object-center"
          style={{ objectFit: "cover", objectPosition: "center" }}
          placeholder="blur"
          blurDataURL={DEFAULT_BLUR}
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/75"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 relative z-10">
        <div
          className={`max-w-4xl text-white ${alignClass} px-4 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 bg-black/45 [box-shadow:0_0_80px_48px_rgba(0,0,0,0.45)]`}
        >
          {eyebrow ? (
            <p className="text-sm md:text-base uppercase tracking-[0.2em] text-[#C9A962] mb-4 font-semibold">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-playfair leading-tight text-white">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed">
              {subtitle}
            </p>
          ) : null}
          {children ? (
            <div className="mt-6 md:mt-8 text-white [&_a]:text-[#C9A962] [&_a:hover]:text-white">
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
