import {
  COMMUNITY_MAP_CENTER,
  NEARBY_SEARCH_RADIUS_METERS,
  type AmenityCategoryId,
  getCategoryById,
} from "@/lib/amenity-map-config";

// module scope: one request per category per page session
const cache = new Map<string, Promise<google.maps.places.Place[]>>();

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId
): Promise<google.maps.places.Place[]> {
  const category = getCategoryById(categoryId);
  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary(
        "places"
      )) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: [
          "displayName",
          "location",
          "formattedAddress",
          "googleMapsURI",
        ],
        locationRestriction: {
          center,
          radius: NEARBY_SEARCH_RADIUS_METERS,
        },
        includedPrimaryTypes: category.primaryTypes,
        maxResultCount: 10,
        rankPreference: "POPULARITY" as google.maps.places.SearchNearbyRankPreference,
      });
      return places ?? [];
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}

export function searchCategoryAtCommunity(
  categoryId: AmenityCategoryId
): Promise<google.maps.places.Place[]> {
  return searchCategory(COMMUNITY_MAP_CENTER, categoryId);
}
