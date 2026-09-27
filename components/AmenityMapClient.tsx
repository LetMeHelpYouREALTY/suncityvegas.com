"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

const AmenityMap = dynamic(() => import("@components/AmenityMap"), {
  ssr: false,
  loading: () => (
    <div
      className="h-[400px] md:h-[480px] rounded-lg bg-[#E8E4E0] animate-pulse"
      aria-hidden
    />
  ),
});

export default function AmenityMapClient(props: ComponentProps<typeof AmenityMap>) {
  return <AmenityMap {...props} />;
}
