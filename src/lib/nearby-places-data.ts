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
  /** Official page used to verify name and street address */
  sourceUrl: string;
  note?: string;
};

/**
 * Hyperlocal destinations verified against primary business / facility sources.
 * No invented ratings or drive times.
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
    sourceUrl:
      "https://www.dignityhealth.org/las-vegas/locations/summerlin-hospital-medical-center",
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
    sourceUrl:
      "https://www.dignityhealth.org/las-vegas/locations/centennial-hills-hospital-medical-center",
  },
  {
    id: "whole-foods-summerlin",
    name: "Whole Foods Market",
    streetAddress: "2475 S Town Center Drive",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89135",
    categories: ["grocery"],
    schemaType: "GroceryStore",
    sourceUrl: "https://www.wholefoodsmarket.com/stores/summerlin",
  },
  {
    id: "albertsons-buffalo",
    name: "Albertsons",
    streetAddress: "1650 N Buffalo Drive",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89128",
    categories: ["grocery"],
    schemaType: "Supermarket",
    sourceUrl:
      "https://local.albertsons.com/nv/las-vegas/1650-n-buffalo-dr.html",
  },
  {
    id: "smiths-charleston",
    name: "Smith's Food and Drug",
    streetAddress: "9851 W Charleston Boulevard",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89117",
    categories: ["grocery"],
    schemaType: "Supermarket",
    sourceUrl: "https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas/charleston/68751",
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
    sourceUrl: "https://www.downtownsummerlin.com/",
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
    sourceUrl: "https://tivolivillage.com/",
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
    sourceUrl: "https://www.nps.gov/redr/planyourvisit/basicinfo.htm",
  },
  {
    id: "highland-falls",
    name: "Highland Falls Golf Club",
    streetAddress: "10201 Sun City Boulevard",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
    categories: ["golf"],
    schemaType: "GolfCourse",
    note: "18-hole course at Golf Summerlin inside Sun City Summerlin.",
    sourceUrl: "https://www.golfsummerlin.com/highland_falls/",
  },
  {
    id: "mountain-shadows-cc",
    name: "Mountain Shadows Community Center",
    streetAddress: "9107 Del Webb Boulevard",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
    categories: ["recreation", "fitness"],
    schemaType: "SportsActivityLocation",
    note: "One of four Sun City Summerlin community centers.",
    sourceUrl:
      "https://suncitysummerlin.com/Explore/Amenities/Mountain_Shadows",
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
