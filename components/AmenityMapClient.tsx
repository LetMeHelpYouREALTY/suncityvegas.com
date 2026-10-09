"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import type { AmenityMapProps } from "@components/AmenityMap";
import {
  VISIBLE_AMENITY_CATEGORIES,
  type AmenityCategoryId,
} from "@/lib/amenity-map-config";
import CuratedPlaceList from "@components/CuratedPlaceList";

const DEFAULT_MAP_HEIGHT = "h-[400px] md:h-[480px]";

function AmenityMapSkeleton({
  heightClassName = DEFAULT_MAP_HEIGHT,
  categoryId = "healthcare",
  showList = true,
}: {
  heightClassName?: string;
  categoryId?: AmenityCategoryId;
  showList?: boolean;
}) {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-4" aria-hidden>
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
        aria-hidden
      />
      {showList ? <CuratedPlaceList categoryId={categoryId} /> : null}
    </div>
  );
}

type AmenityMapClientProps = AmenityMapProps;

export default function AmenityMapClient({
  heightClassName,
  defaultCategory = "healthcare",
  showStaticList = true,
  ...props
}: AmenityMapClientProps) {
  const [mounted, setMounted] = useState(false);

  const AmenityMap = useMemo(
    () =>
      dynamic(() => import("@components/AmenityMap"), {
        ssr: false,
        loading: () => (
          <AmenityMapSkeleton
            heightClassName={heightClassName}
            categoryId={defaultCategory}
            showList={showStaticList}
          />
        ),
      }),
    [defaultCategory, heightClassName, showStaticList]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <AmenityMapSkeleton
        heightClassName={heightClassName}
        categoryId={defaultCategory}
        showList={showStaticList}
      />
    );
  }

  return (
    <AmenityMap
      heightClassName={heightClassName}
      defaultCategory={defaultCategory}
      showStaticList={showStaticList}
      {...props}
    />
  );
}
