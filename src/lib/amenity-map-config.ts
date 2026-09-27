import { siteConfig } from "@/lib/site-config";

/**
 * Map center for Sun City Summerlin — aligned with GBP NAP at
 * 9406 Del Webb Boulevard, Las Vegas, NV 89134 (siteConfig.geo).
 */
export const COMMUNITY_MAP_CENTER = {
  lat: Number.parseFloat(siteConfig.geo.latitude),
  lng: Number.parseFloat(siteConfig.geo.longitude),
} as const;

export const COMMUNITY_MAP_ZOOM = 13;

export const NEARBY_SEARCH_RADIUS_METERS = 8000;

export type AmenityCategoryId =
  | "healthcare"
  | "golf"
  | "parks"
  | "recreation"
  | "grocery"
  | "restaurants"
  | "cafes"
  | "pharmacies"
  | "shopping"
  | "fitness"
  | "parking"
  | "schools";

export type AmenityCategoryConfig = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) primary types for searchNearby */
  primaryTypes: string[];
  /** Hide from filter chips on 55+ sites */
  hidden?: boolean;
};

/** Category order tuned for Sun City Summerlin (55+ active adult). */
export const AMENITY_CATEGORIES: AmenityCategoryConfig[] = [
  {
    id: "healthcare",
    label: "Healthcare",
    primaryTypes: ["hospital", "doctor"],
  },
  {
    id: "golf",
    label: "Golf",
    primaryTypes: ["golf_course"],
  },
  {
    id: "parks",
    label: "Parks",
    primaryTypes: ["park"],
  },
  {
    id: "recreation",
    label: "Recreation",
    primaryTypes: ["community_center", "sports_complex"],
  },
  {
    id: "grocery",
    label: "Grocery",
    primaryTypes: ["grocery_store", "supermarket"],
  },
  {
    id: "restaurants",
    label: "Restaurants",
    primaryTypes: ["restaurant"],
  },
  {
    id: "cafes",
    label: "Cafes",
    primaryTypes: ["cafe", "coffee_shop"],
  },
  {
    id: "pharmacies",
    label: "Pharmacies",
    primaryTypes: ["pharmacy", "drugstore"],
  },
  {
    id: "shopping",
    label: "Shopping",
    primaryTypes: ["shopping_mall", "department_store"],
  },
  {
    id: "fitness",
    label: "Fitness",
    primaryTypes: ["gym", "fitness_center"],
  },
  {
    id: "parking",
    label: "Parking",
    primaryTypes: ["parking"],
  },
  {
    id: "schools",
    label: "Schools",
    primaryTypes: ["school", "primary_school", "secondary_school"],
    hidden: true,
  },
];

export const VISIBLE_AMENITY_CATEGORIES = AMENITY_CATEGORIES.filter(
  (c) => !c.hidden
);

export function getCategoryById(id: AmenityCategoryId): AmenityCategoryConfig {
  const found = AMENITY_CATEGORIES.find((c) => c.id === id);
  if (!found) {
    return AMENITY_CATEGORIES[0];
  }
  return found;
}

export function getGoogleMapsApiKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim();
  return key || undefined;
}

export function getGoogleMapsMapId(): string | undefined {
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim();
  return mapId || undefined;
}
