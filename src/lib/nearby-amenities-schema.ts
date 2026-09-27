import { siteConfig } from "@/lib/site-config";
import {
  CURATED_NEARBY_PLACES,
  formatPlaceAddress,
  type CuratedNearbyPlace,
} from "@/lib/nearby-places-data";
import { COMMUNITY_MAP_CENTER } from "@/lib/amenity-map-config";

const baseUrl = `https://www.${siteConfig.domain}`;

function placeSchemaItem(place: CuratedNearbyPlace) {
  return {
    "@type": place.schemaType,
    name: place.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: place.streetAddress,
      addressLocality: place.addressLocality,
      addressRegion: place.addressRegion,
      postalCode: place.postalCode,
      addressCountry: "US",
    },
  };
}

export function buildNearbyAmenitiesItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Nearby amenities around ${siteConfig.community}`,
    itemListElement: CURATED_NEARBY_PLACES.map((place, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: placeSchemaItem(place),
    })),
  };
}

export function buildCommunityPlaceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${baseUrl}/nearby-amenities#community`,
    name: siteConfig.community,
    description: `${siteConfig.community} is a guard-gated Del Webb 55+ active adult community in ${siteConfig.city}, Nevada.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMMUNITY_MAP_CENTER.lat,
      longitude: COMMUNITY_MAP_CENTER.lng,
    },
  };
}

export function buildNearbyAgentSchemaSnippet() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${baseUrl}/#agent`,
    name: siteConfig.agent.name,
    telephone: siteConfig.phoneE164,
    areaServed: {
      "@type": "Place",
      name: siteConfig.community,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.state,
        postalCode: siteConfig.zip,
      },
    },
  };
}

export function buildNearbyAmenitiesWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/nearby-amenities`,
    name: `Nearby Amenities in ${siteConfig.community}, ${siteConfig.city}`,
    description: `Interactive map and guide to healthcare, golf, grocery, parks, and shopping near ${siteConfig.community} in ${siteConfig.city}, Nevada.`,
    url: `${baseUrl}/nearby-amenities`,
    about: {
      "@id": `${baseUrl}/nearby-amenities#community`,
    },
  };
}
