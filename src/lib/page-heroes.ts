/**
 * Hero image paths for interior pages — unique photo per H1.
 * Fallback: /images/hero/hero-bg.jpg
 */

export const DEFAULT_PAGE_HERO = "/images/hero/hero-bg.jpg";

export const pageHeroImages = {
  about: {
    // Landscape only — never use the 180×180 headshot here (it stretches in wide heroes)
    src: "/images/about/about-image.jpg",
    alt: "Dr. Jan Duffy advising clients on Sun City Summerlin homes in Las Vegas",
  },
  services: {
    src: "/images/heroes/services-hero.jpg",
    alt: "Real estate services consultation for Sun City Summerlin 55+ homes in Las Vegas",
  },
  contact: {
    src: "/images/explore/contact.jpg",
    alt: "Sun City Summerlin clubhouse contact and tour meeting location in Las Vegas",
  },
  schedule: {
    src: "/images/heroes/schedule-hero.jpg",
    alt: "Schedule a private home tour in Sun City Summerlin, Las Vegas 55+ community",
  },
  "homes-for-sale": {
    src: "/images/explore/homes-for-sale.jpg",
    alt: "Homes for sale in Sun City Summerlin Las Vegas 55+ community",
  },
  "home-value": {
    src: "/images/homes/mid-size.jpg",
    alt: "Sun City Summerlin home exterior for a free home value estimate in Las Vegas",
  },
  selling: {
    src: "/images/heroes/selling-hero.jpg",
    alt: "Staged single-story Sun City Summerlin home ready for sale in Las Vegas",
  },
  community: {
    src: "/images/hero/community-entrance.jpg",
    alt: "Sun City Summerlin community entrance with Red Rock mountain views",
  },
  "community/neighborhood": {
    src: "/images/blog/neighborhoods-hero.jpg",
    alt: "Sun City Summerlin neighborhood streets and residences in Las Vegas 89134",
  },
  "community/history": {
    src: "/images/community/history-hero.jpg",
    alt: "Historic Sun City Summerlin Del Webb community in Las Vegas",
  },
  amenities: {
    src: "/images/amenities/amenities-overview-hero.jpg",
    alt: "Golf, recreation centers, and clubs at Sun City Summerlin in Las Vegas",
  },
  "amenities/golf": {
    src: "/images/amenities/golf-hero.jpg",
    alt: "Golf courses at Sun City Summerlin Las Vegas 55+ community",
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
    src: "/images/heroes/blog-hero.jpg",
    alt: "Sun City Summerlin real estate insights and 55+ living blog in Las Vegas",
  },
  resources: {
    src: "/images/resources/resources-hero.jpg",
    alt: "Buyer and seller resources for Sun City Summerlin in Las Vegas",
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
    src: "/images/heroes/flyers-hero.jpg",
    alt: "Sun City Summerlin community flyers and brochures for Las Vegas 55+ buyers",
  },
  faq: {
    src: "/images/explore/faq.jpg",
    alt: "Frequently asked questions about Sun City Summerlin",
  },
  testimonials: {
    src: "/images/heroes/testimonials-hero.jpg",
    alt: "Happy Sun City Summerlin homeowners in Las Vegas 55+ community",
  },
  review: {
    src: "/images/heroes/review-hero.jpg",
    alt: "Leave a Google review for Dr. Jan Duffy, Sun City Summerlin REALTOR®",
  },
  about_fallback: {
    src: "/images/hero/hero-bg.jpg",
    alt: "Sun City Summerlin Las Vegas 55+ community",
  },
} as const;

export type PageHeroKey = keyof typeof pageHeroImages;
