import type { AmenityCategoryId } from "@/lib/amenity-map-config";

export type NearbyPlaceSchemaType =
  | "Place"
  | "Restaurant"
  | "GroceryStore"
  | "Supermarket"
  | "Hospital"
  | "Pharmacy"
  | "Park"
  | "GolfCourse"
  | "ShoppingCenter"
  | "SportsActivityLocation";

export type CuratedNearbyPlace = {
  id: string;
  name: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  categories: AmenityCategoryId[];
  schemaType: NearbyPlaceSchemaType;
  note?: string;
};

/**
 * Verified off-community destinations commonly used by Sun City Summerlin residents.
 * Addresses from published business / facility listings (no invented ratings or drive times).
 */
export const CURATED_NEARBY_PLACES: CuratedNearbyPlace[] = [
  {
    id: "summerlin-hospital",
    name: "Summerlin Hospital Medical Center",
    streetAddress: "657 Town Center Drive",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89144",
    categories: ["healthcare"],
    schemaType: "Hospital",
  },
  {
    id: "centennial-hills-hospital",
    name: "Centennial Hills Hospital Medical Center",
    streetAddress: "6900 North Durango Drive",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89149",
    categories: ["healthcare"],
    schemaType: "Hospital",
  },
  {
    id: "whole-foods-downtown-summerlin",
    name: "Whole Foods Market",
    streetAddress: "1775 Village Center Circle",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
    categories: ["grocery"],
    schemaType: "GroceryStore",
  },
  {
    id: "albertsons-buffalo",
    name: "Albertsons",
    streetAddress: "1907 North Buffalo Drive",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89128",
    categories: ["grocery"],
    schemaType: "Supermarket",
  },
  {
    id: "smiths-charleston",
    name: "Smith's Food and Drug",
    streetAddress: "9739 West Charleston Boulevard",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89117",
    categories: ["grocery"],
    schemaType: "Supermarket",
  },
  {
    id: "downtown-summerlin",
    name: "Downtown Summerlin",
    streetAddress: "1980 Festival Plaza Drive",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89135",
    categories: ["shopping", "restaurants"],
    schemaType: "ShoppingCenter",
    note: "Open-air shopping, dining, and services in Summerlin West.",
  },
  {
    id: "tivoli-village",
    name: "Tivoli Village",
    streetAddress: "400 South Rampart Boulevard",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89145",
    categories: ["shopping", "restaurants"],
    schemaType: "ShoppingCenter",
  },
  {
    id: "red-rock-canyon",
    name: "Red Rock Canyon National Conservation Area",
    streetAddress: "1000 Scenic Loop Drive",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89161",
    categories: ["parks", "recreation"],
    schemaType: "Park",
  },
  {
    id: "highland-falls",
    name: "Highland Falls Golf Course",
    streetAddress: "9406 Del Webb Boulevard",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
    categories: ["golf"],
    schemaType: "GolfCourse",
    note: "Championship course inside Sun City Summerlin.",
  },
  {
    id: "mountain-shadows-rec",
    name: "Mountain Shadows Recreation Center",
    streetAddress: "9600 Del Webb Boulevard",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
    categories: ["recreation", "fitness"],
    schemaType: "SportsActivityLocation",
    note: "One of three Sun City Summerlin recreation centers.",
  },
];

export function getCuratedPlacesByCategory(
  categoryId: AmenityCategoryId
): CuratedNearbyPlace[] {
  return CURATED_NEARBY_PLACES.filter((p) => p.categories.includes(categoryId));
}

export function formatPlaceAddress(place: CuratedNearbyPlace): string {
  return `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`;
}

export function googleMapsDirectionsUrl(place: CuratedNearbyPlace): string {
  const destination = encodeURIComponent(formatPlaceAddress(place));
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}

export function googleMapsSearchUrl(place: CuratedNearbyPlace): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formatPlaceAddress(place))}`;
}
