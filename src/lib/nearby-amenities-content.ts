import { siteConfig } from "@/lib/site-config";
import { distances } from "@/lib/communityData";

export type NearbyAmenitiesFaq = {
  question: string;
  answer: string;
};

export const nearbyAmenitiesFaqs: NearbyAmenitiesFaq[] = [
  {
    question: `What grocery stores are near ${siteConfig.community}?`,
    answer: `Whole Foods Market at 2475 S Town Center Drive (Downtown Summerlin), Albertsons at 1650 N Buffalo Drive, and Smith's Food and Drug at 9851 W Charleston Boulevard are common grocery runs from ${siteConfig.community} in ZIP ${siteConfig.zip}.`,
  },
  {
    question: `How far is ${siteConfig.community} from the Las Vegas Strip?`,
    answer: `${siteConfig.community} is roughly ${distances.lasVegasStrip.miles} miles from the Las Vegas Strip—about a 20–30 minute drive depending on traffic (approximate).`,
  },
  {
    question: `Are there hospitals near ${siteConfig.community}?`,
    answer: `Yes. Summerlin Hospital Medical Center on Town Center Drive and Centennial Hills Hospital on North Durango Drive serve northwest Las Vegas, including ${siteConfig.community} residents.`,
  },
  {
    question: `Where do residents shop and dine outside the community?`,
    answer: `Downtown Summerlin and Tivoli Village are the primary open-air shopping and dining hubs within a short drive of ${siteConfig.community}.`,
  },
  {
    question: `How far is Harry Reid International Airport from ${siteConfig.community}?`,
    answer: `Harry Reid International Airport is roughly ${distances.harryReidAirport.miles} miles from ${siteConfig.community}—typically 25–35 minutes by car (approximate).`,
  },
  {
    question: `Is Red Rock Canyon close to ${siteConfig.community}?`,
    answer: `Red Rock Canyon National Conservation Area is about ${distances.redRockCanyon.miles} miles west—popular for hiking, scenic drives, and visitor-center programs (approximate).`,
  },
  {
    question: `Do I need to leave ${siteConfig.community} for golf and fitness?`,
    answer: `No. Sun City Summerlin includes three 18-hole courses (Highland Falls, Palm Valley, Eagle Crest) and four community centers (Mountain Shadows, Desert Vista, Pinnacle, Sun Shadows) with pools, fitness, and courts; the map also shows additional golf, parks, and gyms nearby.`,
  },
];

export const nearbyAmenitiesWrittenSections = [
  {
    id: "healthcare",
    title: "Healthcare near Sun City Summerlin",
    body: `Northwest Las Vegas hospitals anchor medical care for ${siteConfig.community}. Summerlin Hospital Medical Center (657 Town Center Drive) and Centennial Hills Hospital Medical Center (6900 North Durango Drive) are the major acute-care facilities residents reference for specialists and emergency services. Pharmacies and clinics cluster along Charleston Boulevard, Rampart Boulevard, and the Downtown Summerlin area.`,
  },
  {
    id: "golf-parks",
    title: "Golf, parks & recreation",
    body: `Inside the community, three 18-hole courses—Highland Falls, Palm Valley, and Eagle Crest—and four community centers (Mountain Shadows, Desert Vista, Pinnacle, and Sun Shadows) define daily life. Outside the community, Red Rock Canyon National Conservation Area offers trail access and a visitor center at 1000 Scenic Loop Drive. Neighborhood parks throughout Summerlin supplement the on-site amenity package.`,
  },
  {
    id: "dining-shopping",
    title: "Dining & shopping",
    body: `Downtown Summerlin (1980 Festival Plaza Drive) and Tivoli Village (400 South Rampart Boulevard) combine national retailers, local boutiques, and restaurant rows a short drive from ${siteConfig.address}. Whole Foods Market at 2475 S Town Center Drive sits in the same Summerlin West corridor.`,
  },
  {
    id: "commute",
    title: "Commute & key destinations",
    body: `From ${siteConfig.community}, Downtown Summerlin is roughly ${distances.downtownSummerlin.miles} miles away, the Las Vegas Strip about ${distances.lasVegasStrip.miles} miles, and Harry Reid International Airport about ${distances.harryReidAirport.miles} miles—all approximate straight-line references; actual drive times vary with traffic and your village location within Sun City Summerlin.`,
  },
];
