import { Navigation } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import type { AmenityCategoryId } from "@/lib/amenity-map-config";
import {
  formatPlaceAddress,
  getCuratedPlacesByCategory,
  googleMapsDirectionsUrl,
} from "@/lib/nearby-places-data";

type CuratedPlaceListProps = {
  categoryId: AmenityCategoryId;
};

/** Verified nearby places. Rendered without a Places API call. */
export default function CuratedPlaceList({ categoryId }: CuratedPlaceListProps) {
  const places = getCuratedPlacesByCategory(categoryId);

  return (
    <ul className="mt-4 space-y-3" aria-label="Nearby places list">
      <li className="rounded-lg border border-[#E8E4E0] bg-white p-4">
        <p className="font-semibold text-[#1C1917]">{siteConfig.community}</p>
        <p className="text-sm text-[#141210] mt-1">{siteConfig.address}</p>
        <a
          href={siteConfig.google.directionsUrl}
          className="inline-flex items-center gap-1 text-sm font-medium text-[#1C1917] mt-2 min-h-[44px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Navigation className="w-4 h-4" aria-hidden />
          Directions
        </a>
      </li>
      {places.map((place) => (
        <li
          key={place.id}
          className="rounded-lg border border-[#E8E4E0] bg-white p-4"
        >
          <p className="font-semibold text-[#1C1917]">{place.name}</p>
          <p className="text-sm text-[#141210] mt-1">{formatPlaceAddress(place)}</p>
          {place.note ? (
            <p className="text-sm text-[#57534E] mt-1">{place.note}</p>
          ) : null}
          <a
            href={googleMapsDirectionsUrl(place)}
            className="inline-flex items-center gap-1 text-sm font-medium text-[#1C1917] mt-2 min-h-[44px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Navigation className="w-4 h-4" aria-hidden />
            Directions
          </a>
        </li>
      ))}
    </ul>
  );
}
