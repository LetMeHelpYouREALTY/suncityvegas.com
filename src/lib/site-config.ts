export const siteConfig = {
  // Domain & SEO (GBP-aligned business name)
  domain: "suncityvegas.com",
  siteName: "Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy",
  siteTitle: "Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy",
  siteDescription: "Find your dream 55+ retirement home in Sun City Summerlin, Las Vegas, with over 25 years of experience in active adult communities. Dr. Duffy has helped countless retirees discover the perfect home to suit their lifestyle and needs. Sun City Summerlin offers a variety of beautiful options. This vibrant community is designed specifically for active adults, featuring world-class amenities such as golf courses, fitness centers, pools, walking trails, and social clubs. Dr. Duffy provides expert guidance and personalized service every step of the way, ensuring your transition into this exciting new chapter is seamless and stress-free. Start your journey toward a fulfilling and active retirement today!",
  
  // Location
  community: "Sun City Summerlin",
  city: "Las Vegas",
  state: "NV",
  zip: "89134",
  address: "9406 Del Webb Boulevard, Las Vegas, NV 89134",
  streetAddress: "9406 Del Webb Boulevard",

  // Canonical NAP (use for display and tel: links) – matches GBP
  phoneDisplay: "(702) 718-0043",
  phoneHref: "tel:+17027180043",
  phoneSmsHref: "sms:+17027180043",
  phoneE164: "+1-702-718-0043",

  // Agent Info
  agent: {
    name: "Dr. Jan Duffy",
    title: "Sun City Summerlin Specialist",
    license: "S.0197614.LLC",
    phone: {
      marketing: "(702) 718-0043",
      professional: "(702) 718-0043"
    },
    email: "DrDuffySells@SunCityVegas.com",
    photo: "/images/agent/dr-jan-duffy.jpg",
    openingDate: "2013-09-20"
  },
  
  // Brokerage
  brokerage: {
    name: "Berkshire Hathaway HomeServices Nevada Properties",
    shortName: "BHHS Nevada Properties",
    logo: "/images/logo/logo.jpg"
  },
  
  // Business Hours (matching GBP)
  hoursDisplay: "Daily 8:00 AM–8:00 PM",
  businessHours: {
    sunday: { open: "08:00", close: "20:00" },
    monday: { open: "08:00", close: "20:00" },
    tuesday: { open: "08:00", close: "20:00" },
    wednesday: { open: "08:00", close: "20:00" },
    thursday: { open: "08:00", close: "20:00" },
    friday: { open: "08:00", close: "20:00" },
    saturday: { open: "08:00", close: "20:00" }
  },
  geo: {
    latitude: "36.2108",
    longitude: "-115.2950",
  },
  
  // Theme Colors (Luxury ink + champagne)
  colors: {
    primary: "#1C1917",      // Ink charcoal
    secondary: "#B8A078",    // Soft bronze
    accent: "#57534E",       // Stone
    background: "#F7F6F4",   // Cool ivory
    text: "#141210",         // Near black
    highlight: "#C9A962"     // Champagne gold
  },
  
  // RealScout Configuration
  realscout: {
    agentEncodedId: "QWdlbnQtMjI1MDUw",
    communityId: "sun-city-summerlin"
  },
  
  // Google Business Profile
  google: {
    reviewUrl: "https://g.page/r/CVIgC-30nTd3EAI/review",
    placeId: "ChIJg9rkzmSVyIARUiAL7fSdN3c",
    mapsUrl: "https://maps.google.com/?cid=8597648921043141138",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=9406+Del+Webb+Boulevard%2C+Las+Vegas%2C+NV+89134",
  },

  // Social Links (matching GBP)
  social: {
    facebook: "https://www.facebook.com/DrJanDuffyRealtorCentennialHills/",
    instagram: "https://www.instagram.com/drjanduffy/",
    youtube: "https://www.youtube.com/@DrDuffy",
    linkedin: "https://www.linkedin.com/company/lvrmembers/",
    pinterest: "https://www.pinterest.com/bhhsluxury/",
    tiktok: "https://www.tiktok.com/@dr.janduffy",
    twitter: "https://x.com/drjanduffy"
  },

  // Community Stats
  communityStats: {
    golfCourses: 4,
    recCenters: 3,
    clubs: "80+",
    pools: "Multiple",
    homes: "7,781",
    ageRestriction: "55+"
  },

  // Price Range
  priceRange: {
    min: "$300K",
    max: "$800K+",
    average: "$450K"
  }
}

export type SiteConfig = typeof siteConfig;
