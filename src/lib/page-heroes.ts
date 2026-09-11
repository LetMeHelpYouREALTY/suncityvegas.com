/**
 * Hero image paths for interior pages.
 * Fallback: /images/hero/hero-bg.jpg
 */

export const DEFAULT_PAGE_HERO = "/images/hero/hero-bg.jpg";

export const pageHeroImages = {
  about: {
    src: "/images/explore/about-agent.jpg",
    alt: "Dr. Jan Duffy, Sun City Summerlin REALTOR® in Las Vegas",
  },
  services: {
    src: "/images/explore/contact.jpg",
    alt: "Sun City Summerlin real estate services consultation in Las Vegas 89134",
  },
  contact: {
    src: "/images/explore/contact.jpg",
    alt: "Sun City Summerlin clubhouse contact and tour meeting location",
  },
  schedule: {
    src: "/images/explore/contact.jpg",
    alt: "Schedule a Sun City Summerlin home tour with Dr. Jan Duffy",
  },
  "homes-for-sale": {
    src: "/images/explore/homes-for-sale.jpg",
    alt: "Homes for sale in Sun City Summerlin Las Vegas 55+ community",
  },
  "home-value": {
    src: "/images/homes/mid-size.jpg",
    alt: "Sun City Summerlin home exterior for free home value estimate",
  },
  selling: {
    src: "/images/homes/spacious.jpg",
    alt: "Luxury Sun City Summerlin home ready for sale in Las Vegas",
  },
  community: {
    src: "/images/hero/community-entrance.jpg",
    alt: "Sun City Summerlin community entrance with mountain views",
  },
  "community/neighborhood": {
    src: "/images/blog/neighborhoods-hero.jpg",
    alt: "Sun City Summerlin neighborhood streets and residences",
  },
  "community/history": {
    src: "/images/community/history-hero.jpg",
    alt: "Historic Sun City Summerlin Del Webb community in Las Vegas",
  },
  amenities: {
    src: "/images/amenities/golf-hero.jpg",
    alt: "Sun City Summerlin golf and amenity lifestyle in Las Vegas",
  },
  "amenities/golf": {
    src: "/images/amenities/golf-hero.jpg",
    alt: "Golf courses at Sun City Summerlin Las Vegas",
  },
  "amenities/desert-vista": {
    src: "/images/amenities/desert-vista-hero.jpg",
    alt: "Desert Vista recreation center in Sun City Summerlin",
  },
  "amenities/mountain-shadows": {
    src: "/images/amenities/mountain-shadows-hero.jpg",
    alt: "Mountain Shadows recreation center in Sun City Summerlin",
  },
  "amenities/pinnacle": {
    src: "/images/amenities/pinnacle-hero.jpg",
    alt: "Pinnacle recreation center in Sun City Summerlin",
  },
  "amenities/sun-shadows": {
    src: "/images/amenities/sun-shadows-hero.jpg",
    alt: "Sun Shadows recreation center in Sun City Summerlin",
  },
  lifestyle: {
    src: "/images/explore/lifestyle.jpg",
    alt: "Active adult lifestyle in Sun City Summerlin Las Vegas",
  },
  "lifestyle/clubs": {
    src: "/images/lifestyle/clubs-hero.jpg",
    alt: "Clubs and social groups in Sun City Summerlin",
  },
  "lifestyle/events": {
    src: "/images/lifestyle/events-hero.jpg",
    alt: "Community events in Sun City Summerlin",
  },
  "lifestyle/restaurants": {
    src: "/images/lifestyle/restaurants-hero.jpg",
    alt: "Dining near Sun City Summerlin in Summerlin Las Vegas",
  },
  blog: {
    src: "/images/hero/hero-bg.jpg",
    alt: "Sun City Summerlin real estate insights and market blog",
  },
  resources: {
    src: "/images/resources/moving-guide-hero.jpg",
    alt: "Sun City Summerlin buyer and seller resources",
  },
  "resources/market-insights": {
    src: "/images/resources/market-insights-hero.jpg",
    alt: "Sun City Summerlin market insights and pricing trends",
  },
  "resources/moving-guide": {
    src: "/images/resources/moving-guide-hero.jpg",
    alt: "Moving to Sun City Summerlin relocation guide",
  },
  "resources/first-time-buyers": {
    src: "/images/resources/first-time-buyers-hero.jpg",
    alt: "First-time buyers guide for Sun City Summerlin",
  },
  "floor-plans": {
    src: "/images/blog/floor-plans-hero.jpg",
    alt: "Sun City Summerlin home styles and floor plans",
  },
  flyers: {
    src: "/images/hero/community-sign.jpg",
    alt: "Sun City Summerlin free guides and flyers",
  },
  faq: {
    src: "/images/explore/faq.jpg",
    alt: "Frequently asked questions about Sun City Summerlin",
  },
  testimonials: {
    src: "/images/explore/about-agent.jpg",
    alt: "Client testimonials for Dr. Jan Duffy Sun City Summerlin",
  },
  review: {
    src: "/images/explore/about-agent.jpg",
    alt: "Leave a Google review for Dr. Jan Duffy",
  },
  about_fallback: {
    src: "/images/hero/hero-bg.jpg",
    alt: "Sun City Summerlin Las Vegas 55+ community",
  },
} as const;

export type PageHeroKey = keyof typeof pageHeroImages;
