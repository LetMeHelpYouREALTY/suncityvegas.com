"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { VISIBLE_AMENITY_CATEGORIES } from "@/lib/amenity-map-config";

const DEFAULT_MAP_HEIGHT = "h-[400px] md:h-[480px]";

const AmenityMap = dynamic(() => import("@components/AmenityMap"), {
  ssr: false,
  loading: () => null,
});

function AmenityMapSkeleton({
  heightClassName = DEFAULT_MAP_HEIGHT,
}: {
  heightClassName?: string;
}) {
  return (
    <div className="w-full" aria-hidden>
      <div className="flex flex-wrap gap-2 mb-4">
        {VISIBLE_AMENITY_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="min-h-[44px] px-4 py-2 rounded-full border border-[#E8E4E0] bg-white/80 animate-pulse text-sm text-transparent"
          >
            {cat.label}
          </div>
        ))}
      </div>
      <div
        className={cn(
          "rounded-lg bg-[#E8E4E0] animate-pulse border border-[#E8E4E0]",
          heightClassName
        )}
      />
      <div className="mt-4 space-y-3">
        <div className="h-24 rounded-lg bg-[#E8E4E0] animate-pulse" />
        <div className="h-24 rounded-lg bg-[#E8E4E0] animate-pulse" />
      </div>
    </div>
  );
}

type AmenityMapClientProps = ComponentProps<typeof AmenityMap>;

export default function AmenityMapClient({
  heightClassName,
  ...props
}: AmenityMapClientProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <AmenityMapSkeleton heightClassName={heightClassName} />;
  }

  return <AmenityMap heightClassName={heightClassName} {...props} />;
}
