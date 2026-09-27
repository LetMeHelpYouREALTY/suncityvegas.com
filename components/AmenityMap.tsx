"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import {
  COMMUNITY_MAP_CENTER,
  COMMUNITY_MAP_ZOOM,
  VISIBLE_AMENITY_CATEGORIES,
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
  type AmenityCategoryId,
} from "@/lib/amenity-map-config";
import { searchCategoryAtCommunity } from "@/lib/amenity-places-search";
import {
  formatPlaceAddress,
  getCuratedPlacesByCategory,
  googleMapsDirectionsUrl,
} from "@/lib/nearby-places-data";
import {
  loadGoogleMaps,
  mapsAuthFailed,
} from "@/lib/google-maps-loader";
import { MapPin, Navigation } from "lucide-react";

type AmenityMapProps = {
  className?: string;
  /** Reserve map height to prevent CLS */
  heightClassName?: string;
  /** Initial category when map loads */
  defaultCategory?: AmenityCategoryId;
  /** Show static curated list under fallback embed */
  showStaticList?: boolean;
};

type MapMarker = {
  id: string;
  title: string;
  address: string;
  lat: number;
  lng: number;
  directionsUrl: string;
  isCommunity?: boolean;
};

const MAP_HEIGHT = "h-[400px] md:h-[480px]";

function buildCommunityMarker(): MapMarker {
  return {
    id: "community-center",
    title: siteConfig.community,
    address: siteConfig.address,
    lat: COMMUNITY_MAP_CENTER.lat,
    lng: COMMUNITY_MAP_CENTER.lng,
    directionsUrl: siteConfig.google.directionsUrl,
    isCommunity: true,
  };
}

function placeDisplayName(displayName: unknown): string {
  if (!displayName) return "Place";
  if (typeof displayName === "string") return displayName;
  if (
    typeof displayName === "object" &&
    displayName !== null &&
    "text" in displayName &&
    typeof (displayName as { text?: string }).text === "string"
  ) {
    return (displayName as { text: string }).text;
  }
  return "Place";
}

function createInfoWindowElement(data: MapMarker): HTMLElement {
  const wrap = document.createElement("div");
  wrap.style.fontFamily = "system-ui, sans-serif";
  wrap.style.maxWidth = "240px";

  const strong = document.createElement("strong");
  strong.textContent = data.title;
  wrap.appendChild(strong);

  const addr = document.createElement("p");
  addr.style.margin = "4px 0 0";
  addr.style.fontSize = "13px";
  addr.textContent = data.address;
  wrap.appendChild(addr);

  const link = document.createElement("a");
  link.href = data.directionsUrl;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "Directions";
  link.style.display = "inline-block";
  link.style.marginTop = "8px";
  link.style.color = "#1C1917";
  link.style.fontWeight = "600";
  wrap.appendChild(link);

  return wrap;
}

function StaticPlaceList({ categoryId }: { categoryId: AmenityCategoryId }) {
  const places = getCuratedPlacesByCategory(categoryId);
  const community = buildCommunityMarker();

  return (
    <ul className="mt-4 space-y-3" aria-label="Nearby places list">
      <li className="rounded-lg border border-[#E8E4E0] bg-white p-4">
        <p className="font-semibold text-[#1C1917]">{community.title}</p>
        <p className="text-sm text-[#141210] mt-1">{community.address}</p>
        <a
          href={community.directionsUrl}
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

function placesToMarkers(places: google.maps.places.Place[]): MapMarker[] {
  const communityMarker = buildCommunityMarker();
  const results: MapMarker[] = [communityMarker];

  places.forEach((place, index) => {
    const loc = place.location;
    if (!loc) return;
    const title = placeDisplayName(place.displayName);
    const address = place.formattedAddress ?? "";
    const json = loc.toJSON();
    results.push({
      id: `place-${index}-${title}`,
      title,
      address,
      lat: json.lat,
      lng: json.lng,
      directionsUrl:
        place.googleMapsURI ??
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${title} ${address}`)}`,
    });
  });

  return results;
}

export default function AmenityMap({
  className,
  heightClassName = MAP_HEIGHT,
  defaultCategory = "healthcare",
  showStaticList = true,
}: AmenityMapProps) {
  const apiKey = getGoogleMapsApiKey();
  const mapId = getGoogleMapsMapId();
  const filterGroupId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<AmenityCategoryId>(defaultCategory);
  const [mode, setMode] = useState<"idle" | "interactive" | "fallback">(
    apiKey ? "idle" : "fallback"
  );
  const [placesFetchFailed, setPlacesFetchFailed] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const enterFallback = useCallback(
    (message?: string) => {
      clearMarkers();
      mapInstanceRef.current = null;
      setMode("fallback");
      if (message) {
        setStatusMessage(message);
      }
    },
    [clearMarkers]
  );

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onAuthFailure = () => {
      enterFallback(
        "Interactive map unavailable. Showing embedded map and curated list."
      );
    };
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, [enterFallback]);

  const renderMarkers = useCallback(
    (map: google.maps.Map, markerData: MapMarker[]) => {
      clearMarkers();
      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow();
      }
      const infoWindow = infoWindowRef.current;

      markerData.forEach((data) => {
        const marker = new google.maps.Marker({
          map,
          position: { lat: data.lat, lng: data.lng },
          title: data.title,
          label: data.isCommunity
            ? { text: "★", color: "#1C1917", fontWeight: "700" }
            : undefined,
        });

        marker.addListener("click", () => {
          infoWindow.setContent(createInfoWindowElement(data));
          infoWindow.open({ map, anchor: marker });
        });

        markersRef.current.push(marker);
      });
    },
    [clearMarkers]
  );

  const initMap = useCallback(async () => {
    if (!apiKey || !mapRef.current || mapInstanceRef.current) {
      if (!apiKey) setMode("fallback");
      return;
    }
    if (mapsAuthFailed) {
      enterFallback();
      return;
    }

    try {
      await loadGoogleMaps(apiKey);
      if (mapsAuthFailed) {
        enterFallback();
        return;
      }

      const mapOptions: google.maps.MapOptions = {
        center: COMMUNITY_MAP_CENTER,
        zoom: COMMUNITY_MAP_ZOOM,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      };
      if (mapId) {
        mapOptions.mapId = mapId;
      }

      const map = new google.maps.Map(mapRef.current, mapOptions);
      mapInstanceRef.current = map;
      setMode("interactive");
    } catch {
      enterFallback(
        "Interactive map unavailable. Showing embedded map and curated list."
      );
    }
  }, [apiKey, enterFallback, mapId]);

  useEffect(() => {
    if (!isVisible) return;
    if (!apiKey || mapsAuthFailed) {
      setMode("fallback");
      return;
    }
    if (mapInstanceRef.current) return;
    void initMap();
  }, [apiKey, initMap, isVisible]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || mode !== "interactive") return;

    let cancelled = false;
    setPlacesFetchFailed(false);

    searchCategoryAtCommunity(activeCategory)
      .then((places) => {
        if (cancelled) return;
        const markers = placesToMarkers(places);
        renderMarkers(map, markers);
      })
      .catch(() => {
        if (cancelled) return;
        setPlacesFetchFailed(true);
        renderMarkers(map, [buildCommunityMarker()]);
      });

    return () => {
      cancelled = true;
    };
  }, [activeCategory, mode, renderMarkers]);

  const embedSrc = `https://www.google.com/maps?q=${COMMUNITY_MAP_CENTER.lat},${COMMUNITY_MAP_CENTER.lng}&z=${COMMUNITY_MAP_ZOOM}&output=embed`;

  const showList =
    showStaticList &&
    (mode === "fallback" || !apiKey || mapsAuthFailed || placesFetchFailed);

  return (
    <div ref={containerRef} className={cn("w-full", className)}>
      <div
        role="group"
        aria-labelledby={`${filterGroupId}-label`}
        className="flex flex-wrap gap-2 mb-4"
      >
        <span id={`${filterGroupId}-label`} className="sr-only">
          Filter nearby amenities by category
        </span>
        {VISIBLE_AMENITY_CATEGORIES.map((cat) => {
          const selected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              aria-pressed={selected ? "true" : "false"}
              aria-label={`Show ${cat.label} near ${siteConfig.community}`}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "min-h-[44px] px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                selected
                  ? "bg-[#1C1917] text-white border-[#1C1917]"
                  : "bg-white text-[#1C1917] border-[#E8E4E0] hover:border-[#1C1917]"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {statusMessage ? (
        <p className="text-sm text-[#57534E] mb-3" role="status">
          {statusMessage}
        </p>
      ) : null}

      <div
        className={cn(
          "rounded-lg overflow-hidden shadow-lg border border-[#E8E4E0] relative bg-[#E8E4E0]",
          heightClassName
        )}
      >
        {mode === "fallback" || !apiKey || mapsAuthFailed ? (
          <iframe
            src={embedSrc}
            title={`Map centered on ${siteConfig.community}, ${siteConfig.city}`}
            className="w-full h-full border-0 block"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div
            ref={mapRef}
            className="w-full h-full"
            aria-label={`Interactive map of ${activeCategory} near ${siteConfig.community}`}
          />
        )}

        {!isVisible && mode !== "fallback" && apiKey && !mapsAuthFailed ? (
          <div className="absolute inset-0 flex items-center justify-center bg-[#F7F6F4] text-[#57534E] text-sm">
            <MapPin className="w-5 h-5 mr-2" aria-hidden />
            Map loads when scrolled into view
          </div>
        ) : null}
      </div>

      {showList ? <StaticPlaceList categoryId={activeCategory} /> : null}
    </div>
  );
}
