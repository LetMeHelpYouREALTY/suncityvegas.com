export type ServiceCategoryId =
  | "real-estate-agent"
  | "real-estate-agency"
  | "retirement-community"
  | "real-estate-consultant";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategoryId;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Direct answer for GEO/AEO (first ~40–60 words). */
  answer: string;
  description: string;
  highlights: string[];
  areas: string[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
};

export const SERVICE_CATEGORIES: {
  id: ServiceCategoryId;
  label: string;
  gbpRole: "Primary" | "Additional";
  summary: string;
}[] = [
  {
    id: "real-estate-agent",
    label: "Real estate agent",
    gbpRole: "Primary",
    summary:
      "Licensed buyer and seller representation for Sun City Summerlin and greater Las Vegas 55+ communities.",
  },
  {
    id: "real-estate-agency",
    label: "Real estate agency",
    gbpRole: "Additional",
    summary:
      "Full-service listing, marketing, and transaction support through Berkshire Hathaway HomeServices Nevada Properties.",
  },
  {
    id: "retirement-community",
    label: "Retirement community",
    gbpRole: "Additional",
    summary:
      "55+ move guidance: downsizing, lifestyle fit, and Sun City Summerlin community orientation.",
  },
  {
    id: "real-estate-consultant",
    label: "Real estate consultant",
    gbpRole: "Additional",
    summary:
      "Market analysis, staging, photography, and mortgage introductions for Las Vegas 55+ buyers and sellers.",
  },
];

const AREAS_CORE = [
  "Sun City Summerlin",
  "Summerlin",
  "Centennial Hills",
  "Providence",
  "Skye Canyon",
  "Kyle Canyon",
  "Las Vegas",
  "Henderson",
];

export const services: Service[] = [
  {
    slug: "appraisals",
    name: "Appraisals",
    category: "real-estate-agent",
    metaTitle: "Sun City Summerlin Home Appraisals & Valuations | Las Vegas 55+",
    metaDescription:
      "Market-driven Sun City Summerlin appraisals and CMAs for refinance, sale, or tax appeal. Recent nearby sales analyzed by Dr. Jan Duffy. Las Vegas 55+ valuations. Call (702) 718-0043.",
    h1: "Sun City Summerlin Appraisals & Property Valuations",
    answer:
      "Dr. Jan Duffy prepares market-driven Sun City Summerlin property valuations using recent nearby sales in Las Vegas 89134. Use the report for listing, refinance conversations, or tax-appeal support. Typical turnaround is 48 hours for a written pricing report.",
    description:
      "Centennial Hills and Summerlin property value experts. Get accurate, market-driven valuations for refinancing, selling, or tax appeals. Reports focus on recent nearby sales in Sun City Summerlin and nearby 55+ inventory. This is a licensed REALTOR® comparative market analysis, not a state-certified appraisal. Need a licensed appraisal for a lender? We coordinate that next step.",
    highlights: [
      "Recent nearby sales in Sun City Summerlin and Summerlin",
      "Written pricing report typically within 48 hours",
      "Pricing support for listing, refinance talks, or tax appeal",
      "Serving Las Vegas 55+ inventory since 2013",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Do you provide a certified appraisal in Sun City Summerlin?",
        answer:
          "Dr. Jan Duffy provides a REALTOR® comparative market analysis using recent Sun City Summerlin and Las Vegas recent sales. Lenders that require a state-certified appraisal are referred to a licensed appraiser.",
      },
      {
        question: "How fast can I get a Sun City Summerlin home valuation?",
        answer:
          "Most written pricing reports are delivered within 48 hours after we confirm the address and access to listing history.",
      },
    ],
    relatedSlugs: ["comparative-market-analysis", "sellers-agent-services", "property-buying-sales"],
  },
  {
    slug: "buying-agent-services",
    name: "Buying agent services",
    category: "real-estate-agent",
    metaTitle: "Sun City Summerlin Buyer Agent | 55+ Representation | Las Vegas",
    metaDescription:
      "Sun City Summerlin buyer representation for 55+ homebuyers. Golf-community guidance, HOA review, and neighborhood tours with Dr. Jan Duffy. Call (702) 718-0043.",
    h1: "Sun City Summerlin Buying Agent Services",
    answer:
      "Dr. Jan Duffy represents 55+ buyers in Sun City Summerlin, Las Vegas. Representation includes golf-community guidance, HOA evaluation, single-level home search, and Sun City-specific neighborhood tours.",
    description:
      "Sun City Summerlin buyer representation for 55+ homebuyers. Search focuses on accessible, low-maintenance properties. Includes golf-community expert guidance, HOA evaluation, and Sun City-specific neighborhood tours. Offer strategy is built from current nearby sales, not guesswork.",
    highlights: [
      "Dedicated buyer representation in Sun City Summerlin",
      "HOA documents and fee review before you write",
      "Golf-course, rec-center, and village orientation tours",
      "Single-level and lock-and-leave inventory search",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Do I need a buyer agent in a 55+ community?",
        answer:
          "Yes. Age verification, HOA rules, and golf-course vs. interior lots all change value. A Sun City Summerlin buyer agent reads those details before you offer.",
      },
      {
        question: "Will you tour homes with me in Las Vegas?",
        answer:
          "Yes. Schedule a private tour at 9406 Del Webb Boulevard or call (702) 718-0043. Online appointments are available; walk-ins are welcome during business hours.",
      },
    ],
    relatedSlugs: ["home-buying-sales", "hoa-navigation", "new-construction-sales-leasing"],
  },
  {
    slug: "furnished-property-rentals-sales",
    name: "Furnished property rentals & sales",
    category: "real-estate-agent",
    metaTitle: "Furnished Homes for Rent or Sale | Sun City Summerlin | Las Vegas",
    metaDescription:
      "Furnished properties for rent or sale in Sun City Summerlin, Centennial Hills, Providence, Skye Canyon, and Kyle Canyon. Dr. Jan Duffy. Call (702) 718-0043.",
    h1: "Furnished Property Rentals & Sales in Sun City Summerlin",
    answer:
      "Dr. Jan Duffy helps buyers and sellers locate furnished homes for rent or sale in Sun City Summerlin, Centennial Hills, Providence, Skye Canyon, and Kyle Canyon. Inventory ranges from lock-and-leave 55+ cottages to longer-term furnished listings.",
    description:
      "Explore furnished properties available for rent or sale in Centennial Hills, Sun City Summerlin, Providence, Skye Canyon, and Kyle Canyon. Options include 55+ homes in Sun City Summerlin, single-story residences in Providence, and view lots in Centennial Hills. HOA rental caps and lease rules are reviewed before you commit.",
    highlights: [
      "Furnished sale and lease search across northwest Las Vegas",
      "HOA rental-cap and lease-term review",
      "Short-term vs. long-term furnished options explained",
      "Turnkey 55+ cottages and lock-and-leave listings",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Does Sun City Summerlin allow furnished rentals?",
        answer:
          "Some villages allow leases; others limit them. Dr. Duffy reviews the HOA rental cap, minimum lease term, and age-verification rules before you list or lease.",
      },
      {
        question: "Can I buy a furnished home in Sun City Summerlin?",
        answer:
          "Yes. Some sellers include furnishings. We write personal-property addenda so what stays is in writing.",
      },
    ],
    relatedSlugs: ["property-buying-sales", "relocation-assistance", "hoa-navigation"],
  },
  {
    slug: "luxury-property-buying-sales",
    name: "Luxury property buying & sales",
    category: "real-estate-agent",
    metaTitle: "Sun City Summerlin Luxury Homes | Golf & Mountain View | Las Vegas",
    metaDescription:
      "Sun City Summerlin luxury specialists for 55+ buyers. Golf-course lots, mountain-view homes, and premium Del Webb designs. Call Dr. Jan Duffy at (702) 718-0043.",
    h1: "Luxury Property Buying & Sales in Sun City Summerlin",
    answer:
      "Dr. Jan Duffy represents luxury 55+ buyers and sellers in Sun City Summerlin. Focus areas are golf-course lots, Red Rock views, and premium Del Webb floor plans. Marketing includes photography, virtual tours, and outreach to qualified active-adult buyers.",
    description:
      "Sun City Summerlin luxury specialists for discerning 55+ buyers. Expert in golf-course properties, mountain-view homes, and premium Del Webb designs. Luxury marketing includes professional photography, virtual tours, and targeted campaigns. Free consultation on pricing and positioning.",
    highlights: [
      "Golf-course and view-lot positioning",
      "Professional photography and virtual tours",
      "Pricing strategy for $525K–$1.2M+ inventory",
      "Buyer outreach inside 55+ and Summerlin networks",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "What counts as luxury in Sun City Summerlin?",
        answer:
          "Typically larger Retreat-series plans, golf-course or Red Rock view lots, and fully updated interiors. Price bands move—ask for a current pricing report.",
      },
      {
        question: "Do you market luxury listings beyond the main listing websites?",
        answer:
          "Yes. Photography, 3D tours, and targeted campaigns reach qualified 55+ buyers in Las Vegas and out of state.",
      },
    ],
    relatedSlugs: ["luxury-home-marketing", "real-estate-photography", "sellers-agent-services"],
  },
  {
    slug: "new-construction-sales-leasing",
    name: "New construction sales & leasing",
    category: "real-estate-agent",
    metaTitle: "Sun City Summerlin New Construction Sales | 55+ Las Vegas Homes",
    metaDescription:
      "Sun City Summerlin new construction specialists for active adults. ADA-conscious plans and single-level designs. Free consultation. Call (702) 718-0043.",
    h1: "New Construction Sales & Leasing | Sun City Summerlin",
    answer:
      "Dr. Jan Duffy represents 55+ buyers on new and recently built homes near Sun City Summerlin. Guidance covers age-restricted specs, single-level plans, and accessibility features. Free new-construction consultation for Las Vegas 55+ buyers.",
    description:
      "Sun City Summerlin new construction specialists for active adults seeking newly built homes. Expert in age-restricted community specifications, ADA-conscious designs, and single-level floor plans. Free new construction consultation for 55+ buyers. Nearby new-build villages are compared on HOA, lot premium, and commute to rec centers.",
    highlights: [
      "Builder contract and lot-premium review",
      "Single-level and accessibility feature checklist",
      "Age-restricted community requirement walkthrough",
      "Lease-vs-buy analysis on new inventory when available",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Is Sun City Summerlin still building new homes?",
        answer:
          "The original Del Webb build-out finished in 2002. We still represent buyers on remaining new construction in nearby 55+ and Summerlin villages, plus extensively renovated resales.",
      },
      {
        question: "Can you represent me with a builder?",
        answer:
          "Yes. Buyer representation on builder contracts is available where the builder permits it. Call (702) 718-0043 before you tour a model.",
      },
    ],
    relatedSlugs: ["new-construction-services", "senior-home-modifications", "buying-agent-services"],
  },
  {
    slug: "new-construction-services",
    name: "New construction services",
    category: "real-estate-agent",
    metaTitle: "New Construction Services | Sun City Summerlin | Del Webb Las Vegas",
    metaDescription:
      "Navigate age-restricted new construction near Sun City Summerlin. Accessibility features, single-level design, Del Webb warranty, and HOA modifications. Call (702) 718-0043.",
    h1: "New Construction Services for Sun City Summerlin Buyers",
    answer:
      "Dr. Jan Duffy helps 55+ buyers navigate new-construction requirements near Sun City Summerlin. We prioritize accessibility features, single-level design, and HOA-compliant modifications. Del Webb warranty questions on existing homes are walked through in plain language.",
    description:
      "Sun City Summerlin new construction specialists for active adults. We navigate age-restricted community requirements, prioritize accessibility features, and confirm single-level designs meet daily-living needs. Expert in Del Webb warranty process and HOA-compliant modifications.",
    highlights: [
      "Age-restricted spec and occupancy review",
      "Accessibility and single-level design checklist",
      "HOA architectural guidelines before you remodel",
      "Del Webb warranty process explained on resales",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "What HOA rules apply to new construction changes?",
        answer:
          "Exterior paint, patio covers, and hardscape usually need architectural review. We flag that before you sign a builder or remodel contract.",
      },
      {
        question: "Do original Del Webb homes still have warranties?",
        answer:
          "Most original builder warranties have expired. Remaining coverage, if any, is property-specific. We help you request documentation from the seller.",
      },
    ],
    relatedSlugs: ["new-construction-sales-leasing", "hoa-navigation", "senior-home-modifications"],
  },
  {
    slug: "relocation-assistance",
    name: "Relocation assistance",
    category: "real-estate-agent",
    metaTitle: "Sun City Summerlin Relocation Assistance | 55+ Move to Las Vegas",
    metaDescription:
      "Sun City Summerlin relocation specialists for 55+ moves. Downsizing, change-of-address, and trusted movers. Cross-country or local. Call Dr. Jan Duffy at (702) 718-0043.",
    h1: "Relocation Assistance to Sun City Summerlin, Las Vegas",
    answer:
      "Dr. Jan Duffy coordinates 55+ relocation to Sun City Summerlin. Services include downsizing timing, change-of-address checklists, and introductions to movers who work 55+ households. Cross-country and local moves are both supported.",
    description:
      "Sun City Summerlin relocation specialists making your retirement move clearer. 55+ moving support includes downsizing coordination, change-of-address management, and connections to trusted movers. From out-of-state transitions to local moves, each step is sequenced with your closing date.",
    highlights: [
      "Closing-date aligned move timeline",
      "Downsizing and packing introductions",
      "Utilities and change-of-address checklist",
      "California-to-Nevada tax and timing notes (not tax advice)",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Do you help California sellers move to Sun City Summerlin?",
        answer:
          "Yes. Many clients sell in California and buy in Las Vegas 89134. We sequence listing, closing, and the move so you are not carrying two homes longer than needed.",
      },
      {
        question: "Can you recommend movers for a 55+ household?",
        answer:
          "Yes. We introduce licensed movers and senior move managers. You choose the vendor; we keep the real estate timeline aligned.",
      },
    ],
    relatedSlugs: ["retirement-relocation-concierge", "senior-downsizing", "military-relocation"],
  },
  {
    slug: "sellers-agent-services",
    name: "Seller's agent services",
    category: "real-estate-agent",
    metaTitle: "Sell Your Sun City Summerlin Home | Listing Agent | Las Vegas",
    metaDescription:
      "Sun City Summerlin listing specialists. Photography, pricing, staging consult, 3D tours, and a closing coordinator. Free market analysis. Call (702) 718-0043.",
    h1: "Seller's Agent Services in Sun City Summerlin & Kyle Canyon",
    answer:
      "Dr. Jan Duffy lists homes in Sun City Summerlin and Kyle Canyon with professional photography, strategic pricing, and targeted 55+ marketing. Package includes a staging consultation, 3D virtual tours when the property warrants it, and a dedicated closing coordinator. Free market analysis included.",
    description:
      "Sun City Summerlin and Kyle Canyon listing specialists. Marketing includes professional photography, strategic pricing, and outreach to qualified buyers. Staging consultation, 3D virtual tours, and closing coordination are part of the listing plan. Free market analysis included.",
    highlights: [
      "Strategic pricing from current 55+ home sales",
      "Photography, staging consult, and tour package",
      "Listing websites plus outreach to 55+ buyers",
      "Dedicated closing coordination",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "How do you price a Sun City Summerlin listing?",
        answer:
          "We pull recent solds by village, golf vs. interior lot, and update level. You get a written pricing report before we discuss list price.",
      },
      {
        question: "Is a market analysis really free?",
        answer:
          "Yes. Call (702) 718-0043 or use the home-value page. No listing agreement is required to receive the pricing report.",
      },
    ],
    relatedSlugs: ["home-staging", "real-estate-marketing", "appraisals"],
  },
  {
    slug: "veterans-housing-benefits",
    name: "Veterans Housing Benefits Expert",
    category: "real-estate-agent",
    metaTitle: "VA Loan Homes in Sun City Summerlin | Veteran Buyer Agent Las Vegas",
    metaDescription:
      "Sun City Summerlin REALTOR® for VA loan buyers. COE, 55+ occupancy rules, eligible property types, and funding-fee questions. Call Dr. Jan Duffy at (702) 718-0043.",
    h1: "Veterans Housing Benefits | Sun City Summerlin VA Buyers",
    answer:
      "Dr. Jan Duffy works with veteran buyers using VA financing in Sun City Summerlin. Support includes Certificate of Eligibility timing, 55+ occupancy rules, and property-type checks. Lending is handled by a VA-approved lender; we coordinate the real estate side.",
    description:
      "Sun City Summerlin REALTOR® specializing in VA loan transactions for veteran buyers in 55+ communities. Guidance on COE timing, occupancy, and eligible property types. Funding-fee questions are referred to your lender. We do not originate loans.",
    highlights: [
      "VA-eligible property and occupancy review",
      "COE timing coordinated with your lender",
      "55+ age-verification explained in writing",
      "Introductions to VA-experienced lenders",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Can I use a VA loan in a 55+ community?",
        answer:
          "Often yes, if the property and occupancy meet VA and HOA rules. We confirm both before you write an offer.",
      },
      {
        question: "Do you process VA loans?",
        answer:
          "No. Dr. Duffy is a licensed REALTOR®, not a lender. We introduce VA-experienced lenders and keep the purchase file moving.",
      },
    ],
    relatedSlugs: ["military-relocation", "buying-agent-services", "mortgage-lending"],
  },
  {
    slug: "hoa-navigation",
    name: "HOA Navigation Specialist",
    category: "real-estate-agent",
    metaTitle: "Sun City Summerlin HOA Fees, Rules & Reserves | Las Vegas 55+",
    metaDescription:
      "Sun City Summerlin HOA specialist. Fees, age verification, architectural rules, reserves, and special assessments explained. Call Dr. Jan Duffy at (702) 718-0043.",
    h1: "Sun City Summerlin HOA Navigation Specialist",
    answer:
      "Dr. Jan Duffy reviews Sun City Summerlin HOA rules, fees, and restrictions with 55+ buyers. That includes age-verification, architectural guidelines, reserve-fund health, and pending special assessments before you close.",
    description:
      "Sun City Summerlin HOA specialist helping 55+ buyers understand community rules, fees, and restrictions. We evaluate HOA financials at a practical level, explain age-verification requirements, and review architectural guidelines. Includes a look at reserve funds and pending special assessments when documents are available.",
    highlights: [
      "Fee, reserve, and assessment document review",
      "Age-verification and occupancy rules",
      "Architectural guidelines before remodeling",
      "Village-to-village difference notes",
    ],
    areas: ["Sun City Summerlin", "Summerlin", "Las Vegas"],
    faqs: [
      {
        question: "What are Sun City Summerlin HOA fees?",
        answer:
          "Fees vary by village and amenities. Ask for the current budget and reserve study on any address you are considering. We walk those documents with you.",
      },
      {
        question: "Who has to be 55 in the household?",
        answer:
          "At least one occupant typically must meet the 55+ rule. Additional occupant rules are in the CC&Rs. We review the exact language for the property.",
      },
    ],
    relatedSlugs: ["buying-agent-services", "new-construction-services", "home-buying-sales"],
  },
  {
    slug: "property-buying-sales",
    name: "Property buying & sales",
    category: "real-estate-agency",
    metaTitle: "Buy or Sell Sun City Summerlin Property | 55+ Las Vegas REALTOR®",
    metaDescription:
      "Sun City Summerlin property specialists for 55+ buyers and sellers. Single-story homes, golf-course lots, HOA review. Dr. Jan Duffy. Call (702) 718-0043.",
    h1: "Property Buying & Sales in Sun City Summerlin",
    answer:
      "Dr. Jan Duffy handles both sides of Sun City Summerlin property transactions for 55+ clients. Work includes single-story searches, golf-course lots, accessibility notes, HOA review, and side-by-side community comparisons.",
    description:
      "Sun City Summerlin property specialists for 55+ buyers and sellers. Expertise in single-story homes, golf-course properties, and lower-maintenance living. The process includes accessibility assessments, HOA compliance review, and retirement-community comparisons across Las Vegas.",
    highlights: [
      "Buyer and seller representation",
      "Single-story and golf-course inventory",
      "HOA and accessibility review",
      "Comparisons with nearby 55+ communities",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Can one agent help me sell and buy in Sun City Summerlin?",
        answer:
          "Yes. Dual-move timelines are common. We sequence the listing and the purchase so closings line up.",
      },
      {
        question: "Do you work outside Sun City Summerlin?",
        answer:
          "Yes. Centennial Hills, Providence, Skye Canyon, Kyle Canyon, Henderson, and greater Las Vegas are in the service area.",
      },
    ],
    relatedSlugs: ["buying-agent-services", "sellers-agent-services", "home-buying-sales"],
  },
  {
    slug: "luxury-home-marketing",
    name: "Luxury home marketing",
    category: "real-estate-agency",
    metaTitle: "Luxury Home Marketing | Sun City Summerlin | Las Vegas 55+",
    metaDescription:
      "Luxury home marketing for Sun City Summerlin listings. Photography, virtual tours, and 55+ buyer campaigns by Dr. Jan Duffy. Call (702) 718-0043.",
    h1: "Luxury Home Marketing in Sun City Summerlin",
    answer:
      "Dr. Jan Duffy markets luxury Sun City Summerlin listings with professional photography, virtual tours, and campaigns aimed at qualified 55+ buyers. Pricing and positioning are set from current golf-course and view-lot recent sales.",
    description:
      "Luxury home marketing for Sun City Summerlin and Summerlin listings. The plan includes photography, 3D or video tours, copy that names lot, view, and square footage, and distribution to qualified active-adult buyers. Free consultation on pricing and positioning.",
    highlights: [
      "Listing photography and tour package",
      "Copy focused on lot, view, and plan",
      "Targeted 55+ buyer campaigns",
      "Weekly showing and feedback reports",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "What is included in luxury marketing?",
        answer:
          "Professional photos, a tour when the property warrants it, listing-website exposure, and targeted outreach. Staging consult is included on request.",
      },
      {
        question: "How is this different from a standard listing?",
        answer:
          "More media, tighter price positioning, and outreach beyond listing websites to 55+ and out-of-state buyers.",
      },
    ],
    relatedSlugs: ["luxury-property-buying-sales", "real-estate-photography", "real-estate-marketing"],
  },
  {
    slug: "military-relocation",
    name: "Military relocation services",
    category: "real-estate-agency",
    metaTitle: "Military Relocation to Las Vegas | Sun City Summerlin REALTOR®",
    metaDescription:
      "Military and veteran relocation to Sun City Summerlin and Las Vegas. VA loan coordination, remote tours, and 55+ community orientation. Call (702) 718-0043.",
    h1: "Military Relocation Services | Sun City Summerlin & Las Vegas",
    answer:
      "Dr. Jan Duffy assists military and veteran households relocating to Sun City Summerlin and northwest Las Vegas. Support includes remote video tours, VA-loan coordination with your lender, and a 55+ community orientation once you arrive.",
    description:
      "Military relocation services for households moving to Las Vegas and Sun City Summerlin. We coordinate video tours, occupancy timing, and VA financing introductions. PCS and retirement moves are scheduled around your report date or closing date.",
    highlights: [
      "Remote video tours before you travel",
      "VA lender introductions",
      "PCS and retirement timeline planning",
      "55+ occupancy and HOA briefing",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Can you show homes while I am still stationed elsewhere?",
        answer:
          "Yes. Video walk-throughs and recorded tours are standard for out-of-state military buyers.",
      },
      {
        question: "Do you work with VA loans on military moves?",
        answer:
          "Yes, as the REALTOR®. A VA-approved lender handles underwriting. We keep the purchase aligned with your report date.",
      },
    ],
    relatedSlugs: ["veterans-housing-benefits", "relocation-assistance", "retirement-relocation-concierge"],
  },
  {
    slug: "senior-downsizing",
    name: "Senior Downsizing Specialist",
    category: "retirement-community",
    metaTitle: "Downsizing to Sun City Summerlin | 55+ Right-Size Homes Las Vegas",
    metaDescription:
      "Sun City Summerlin downsizing help for 55+ homeowners. Right-sized homes, estate-sale intros, and packing coordination. Free consultation. Call (702) 718-0043.",
    h1: "Senior Downsizing Specialist | Sun City Summerlin",
    answer:
      "Dr. Jan Duffy helps 55+ homeowners downsize into right-sized Sun City Summerlin homes. The process covers what to sell vs. keep, estate-sale introductions, packing help, and a low-maintenance property search. Free consultation.",
    description:
      "Sun City Summerlin downsizing specialists helping 55+ homeowners transition to right-sized living. We coordinate sorting, estate-sale introductions, packing assistance, and the purchase of a lower-maintenance property.",
    highlights: [
      "Right-size floor-plan search",
      "Estate-sale and organizer introductions",
      "Sale and purchase sequenced together",
      "Free downsizing consultation",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Should I sell first or buy first when downsizing?",
        answer:
          "It depends on equity, carrying costs, and inventory. We run both timelines with numbers before you choose.",
      },
      {
        question: "Do you run the estate sale?",
        answer:
          "No. We introduce estate-sale professionals. You hire them directly. We keep the listing calendar aligned.",
      },
    ],
    relatedSlugs: ["estate-sale-moving-coordination", "senior-home-transition", "sellers-agent-services"],
  },
  {
    slug: "retirement-relocation-concierge",
    name: "Retirement Relocation Concierge",
    category: "retirement-community",
    metaTitle: "Retirement Relocation Concierge | Move to Sun City Summerlin",
    metaDescription:
      "Out-of-state retiree relocation to Sun City Summerlin. Video tours, neighborhood orientation, utilities setup intros. Dr. Jan Duffy. Call (702) 718-0043.",
    h1: "Retirement Relocation Concierge | Sun City Summerlin",
    answer:
      "Dr. Jan Duffy offers concierge-style relocation for out-of-state 55+ buyers moving to Sun City Summerlin. Services include video home tours, neighborhood orientation, utilities setup introductions, and local resource connections.",
    description:
      "Sun City Summerlin relocation specialists for out-of-state retirees moving to Las Vegas. Comprehensive services include video home tours, neighborhood orientation, utilities setup, and connections to 55+ resources. The goal is a sequenced move, not a stack of vendors you have to manage alone.",
    highlights: [
      "Video tours before you fly in",
      "Neighborhood and rec-center orientation",
      "Utilities and vendor introductions",
      "Closing-week concierge checklist",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "I live out of state. Can I buy without multiple trips?",
        answer:
          "Many clients do one trip for a focused tour, then close remotely. Video tours fill the gaps.",
      },
      {
        question: "Do you set up my utilities?",
        answer:
          "We provide the checklist and introductions. You remain the account holder.",
      },
    ],
    relatedSlugs: ["relocation-assistance", "active-adult-lifestyle-consultant", "buying-agent-services"],
  },
  {
    slug: "active-adult-lifestyle-consultant",
    name: "Active Adult Lifestyle Consultant",
    category: "retirement-community",
    metaTitle: "Sun City Summerlin Lifestyle Consultant | 55+ Clubs & Amenities",
    metaDescription:
      "Match your 55+ retirement vision to Sun City Summerlin clubs, golf, and rec centers. Lifestyle consult with Dr. Jan Duffy. Call (702) 718-0043.",
    h1: "Active Adult Lifestyle Consultant | Sun City Summerlin",
    answer:
      "Dr. Jan Duffy matches 55+ buyers to Sun City Summerlin villages based on golf, clubs, and rec-center use—not just list price. A lifestyle consult covers club access, activity calendars, and how daily life works after closing.",
    description:
      "Sun City Summerlin lifestyle consultants connecting 55+ buyers with communities that match how they want to spend the week. Beyond the transaction, we provide club-access guidance, activity recommendations, and a practical orientation to Del Webb amenities. Schedule a lifestyle consultation.",
    highlights: [
      "Village match by golf, clubs, and commute inside the gates",
      "Rec-center and club orientation",
      "Amenity-use briefing before you buy",
      "Tour that includes lifestyle, not just interiors",
    ],
    areas: ["Sun City Summerlin", "Summerlin", "Las Vegas"],
    faqs: [
      {
        question: "Is a lifestyle consult different from a home tour?",
        answer:
          "Yes. We walk rec centers, talk clubs, and map which villages fit your week. Homes come after that filter.",
      },
      {
        question: "Do I have to play golf to live in Sun City Summerlin?",
        answer:
          "No. Golf is one amenity. Fitness, pickleball, clubs, and pools are equally used. We match the village to your routine.",
      },
    ],
    relatedSlugs: ["retirement-relocation-concierge", "hoa-navigation", "buying-agent-services"],
  },
  {
    slug: "senior-home-transition",
    name: "Senior Home Transition Services",
    category: "retirement-community",
    metaTitle: "Senior Home Transition | Sell & Move in Sun City Summerlin",
    metaDescription:
      "55+ home transition in Sun City Summerlin. Coordinate the sale with movers, organizers, and aging-in-place resources. Dr. Jan Duffy. Call (702) 718-0043.",
    h1: "Senior Home Transition Services | Sun City Summerlin",
    answer:
      "Dr. Jan Duffy coordinates 55+ home transitions in Sun City Summerlin. That means listing your current home while introducing vetted movers, organizers, and aging-in-place resources so downsizing or rightsizing stays on one timeline.",
    description:
      "Sun City Summerlin REALTOR® guiding 55+ homeowners through complete transition processes. I coordinate your home sale while connecting you with moving specialists, organizers, and aging-in-place experts. The real estate file and the move calendar stay on one plan.",
    highlights: [
      "One timeline for sale, purchase, and move",
      "Organizer and mover introductions",
      "Rightsizing vs. downsizing plan",
      "Aging-in-place feature notes on the next home",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "What is a home transition vs. a regular sale?",
        answer:
          "A transition sale includes the move: what leaves, what sells, and when the keys exchange. A regular listing is only the real estate file.",
      },
      {
        question: "Can you help if I am moving to assisted living instead?",
        answer:
          "Yes. We list the Sun City home and work with the family or advisor you designate. Occupancy and POA documents must be in order.",
      },
    ],
    relatedSlugs: ["senior-downsizing", "estate-sale-moving-coordination", "sellers-agent-services"],
  },
  {
    slug: "estate-sale-moving-coordination",
    name: "Estate Sale & Moving Coordination",
    category: "retirement-community",
    metaTitle: "Estate Sale & Moving Coordination | Sun City Summerlin 55+",
    metaDescription:
      "Downsizing coordination for 55+ Sun City Summerlin sellers. Estate-sale and senior-move introductions plus listing management. Call (702) 718-0043.",
    h1: "Estate Sale & Moving Coordination | Sun City Summerlin",
    answer:
      "Dr. Jan Duffy coordinates estate sales and moves for 55+ Sun City Summerlin sellers. You are introduced to estate-sale professionals and senior move managers while the listing, showings, and closing stay on one calendar.",
    description:
      "Sun City Summerlin REALTOR® providing downsizing coordination for 55+ sellers. I connect clients with estate-sale professionals, senior move managers, and relocation specialists while managing the real estate transaction.",
    highlights: [
      "Estate-sale professional introductions",
      "Senior move manager referrals",
      "Showing calendar that respects sale dates",
      "Closing coordination after the home is empty",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Should the estate sale happen before listing photos?",
        answer:
          "Usually yes. Photos should show a cleared, staged home. We schedule the sale, then photography.",
      },
      {
        question: "Do you take a fee from movers or estate companies?",
        answer:
          "Referral relationships are disclosed. You hire vendors directly.",
      },
    ],
    relatedSlugs: ["senior-downsizing", "senior-home-transition", "relocation-assistance"],
  },
  {
    slug: "senior-home-modifications",
    name: "Senior-Friendly Home Modifications Expert",
    category: "retirement-community",
    metaTitle: "Age-Friendly Homes in Sun City Summerlin | Accessibility Features",
    metaDescription:
      "Find Sun City Summerlin homes with aging-in-place features. Floor-plan review and contractor intros. Dr. Jan Duffy, Las Vegas 55+. Call (702) 718-0043.",
    h1: "Senior-Friendly Home Modifications | Sun City Summerlin",
    answer:
      "Dr. Jan Duffy evaluates Sun City Summerlin homes for aging-in-place features: single-level plans, step-free entries, and bath layout. Suitable floor plans are flagged; qualified contractors are introduced for modifications that meet HOA rules.",
    description:
      "Sun City Summerlin REALTOR® specializing in homes with accessibility features. I evaluate properties for aging-in-place potential, recommend suitable floor plans, and connect clients with qualified contractors for modifications. Architectural review is checked before work starts.",
    highlights: [
      "Single-level and step-free screening",
      "Bath and hallway layout notes",
      "HOA-compliant modification path",
      "Contractor introductions",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Are Sun City Summerlin homes already single-level?",
        answer:
          "Most are. We still check step-down living rooms, tub vs. walk-in showers, and garage slopes.",
      },
      {
        question: "Can I add grab bars or a ramp?",
        answer:
          "Interior safety items are usually fine. Exterior ramps and hardscape often need HOA approval. We confirm before you buy or remodel.",
      },
    ],
    relatedSlugs: ["new-construction-services", "buying-agent-services", "hoa-navigation"],
  },
  {
    slug: "comparative-market-analysis",
    name: "Comparative real estate market analysis",
    category: "real-estate-consultant",
    metaTitle: "Home Value Comparison | Sun City Summerlin | Las Vegas Pricing Report",
    metaDescription:
      "Home value comparison for Sun City Summerlin, Centennial Hills, Providence, Skye Canyon, and Kyle Canyon. recent 55+ home sales from Dr. Jan Duffy. Call (702) 718-0043.",
    h1: "Comparative Market Analysis | Sun City Summerlin & Northwest Las Vegas",
    answer:
      "Dr. Jan Duffy prepares comparative market analyses for Sun City Summerlin, Centennial Hills, Providence, Skye Canyon, and Kyle Canyon. Reports use solds, actives, and days-on-market—not a national average.",
    description:
      "Comparative real estate market analysis in Centennial Hills, Sun City Summerlin, Providence, Skye Canyon, and Kyle Canyon. We pull 55+ and nearby recent sales, then explain list-vs-sold gaps. Use the report to price a listing or to write an offer.",
    highlights: [
      "Sold, pending, and currently listed homes",
      "Village and lot-type adjustments",
      "Offer or list-price recommendation",
      "Written report you can keep",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Is a pricing report the same as an appraisal?",
        answer:
          "No. A pricing report (sometimes called a CMA) is a REALTOR® tool based on recent sales. An appraisal is a licensed valuation, usually required by a lender.",
      },
      {
        question: "Which areas does your pricing report cover?",
        answer:
          "Sun City Summerlin, Centennial Hills, Providence, Skye Canyon, Kyle Canyon, and nearby Las Vegas 55+ inventory.",
      },
    ],
    relatedSlugs: ["appraisals", "sellers-agent-services", "buying-agent-services"],
  },
  {
    slug: "condo-buying-sales",
    name: "Condo buying & sales assistance",
    category: "real-estate-consultant",
    metaTitle: "Condo Buying & Selling | Sun City Summerlin & Las Vegas",
    metaDescription:
      "Condo purchase and sale help in Sun City Summerlin, Centennial Hills, Providence, Skye Canyon, and Kyle Canyon. HOA review included. Call (702) 718-0043.",
    h1: "Condo Buying & Sales Assistance in Las Vegas 55+ Areas",
    answer:
      "Dr. Jan Duffy assists with condo purchases and sales in Sun City Summerlin, Centennial Hills, Providence, Skye Canyon, and Kyle Canyon. HOA budgets, rental rules, and occupancy requirements are reviewed before you offer or list.",
    description:
      "Assisting with condo purchases and sales in Centennial Hills, Sun City Summerlin, Providence, Skye Canyon, and Kyle Canyon. Search includes lock-and-leave 55+ condos and attached homes. Documents cover reserves, fees, and lease rules.",
    highlights: [
      "Condo HOA document review",
      "Fee, reserve, and rental-rule check",
      "Attached-home vs. single-family comparison",
      "Listing and buyer representation",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Are there condos inside Sun City Summerlin?",
        answer:
          "Inventory is mostly single-family, with some attached products. We also search nearby Summerlin and northwest Las Vegas condos when that fits.",
      },
      {
        question: "What should I read in a condo HOA packet?",
        answer:
          "Budget, reserve study, rental cap, insurance, and meeting minutes. We walk those with you.",
      },
    ],
    relatedSlugs: ["property-buying-sales", "hoa-navigation", "home-buying-sales"],
  },
  {
    slug: "home-buying-sales",
    name: "Home buying & sales",
    category: "real-estate-consultant",
    metaTitle: "Home Buying & Sales | Sun City Summerlin 55+ | Las Vegas",
    metaDescription:
      "Buy or sell in Sun City Summerlin, Centennial Hills, Providence, Skye Canyon, and Kyle Canyon. 55+ specialist Dr. Jan Duffy. Call (702) 718-0043.",
    h1: "Home Buying & Sales | Sun City Summerlin and Northwest Las Vegas",
    answer:
      "Dr. Jan Duffy represents buyers and sellers in Sun City Summerlin, Centennial Hills, Providence, Skye Canyon, and Kyle Canyon. The work is full-cycle: search or list, negotiate, and close.",
    description:
      "Home buying and sales across Centennial Hills, Sun City Summerlin, Providence, Skye Canyon, and Kyle Canyon. 55+ Sun City inventory, single-story homes in Providence, and view lots in Centennial Hills are all in the search set.",
    highlights: [
      "Buyer and seller representation",
      "Northwest Las Vegas coverage",
      "55+ and conventional inventory",
      "Negotiation through closing",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Do you only work in Sun City Summerlin?",
        answer:
          "Sun City Summerlin is the focus. Centennial Hills, Providence, Skye Canyon, Kyle Canyon, and Henderson are also served.",
      },
      {
        question: "How do I start a purchase or listing?",
        answer:
          "Call (702) 718-0043, text the same number, or book online. Appointment is not required during posted hours.",
      },
    ],
    relatedSlugs: ["property-buying-sales", "buying-agent-services", "sellers-agent-services"],
  },
  {
    slug: "home-staging",
    name: "Home staging",
    category: "real-estate-consultant",
    metaTitle: "Home Staging | Sun City Summerlin Listings | Las Vegas 55+",
    metaDescription:
      "Home staging for Sun City Summerlin, Centennial Hills, Providence, Skye Canyon, and Kyle Canyon listings. Dr. Jan Duffy. Call (702) 718-0043.",
    h1: "Home Staging in Sun City Summerlin & Northwest Las Vegas",
    answer:
      "Dr. Jan Duffy provides staging guidance for Sun City Summerlin and northwest Las Vegas listings. The plan is property-specific: what to keep, what to store, and when to bring in a stager before photography.",
    description:
      "Home staging services for listings in Centennial Hills, Sun City Summerlin, Providence, Skye Canyon, and Kyle Canyon. 55+ buyers read floor plan and light first. We stage for that, then shoot.",
    highlights: [
      "Pre-list walk-through",
      "Keep / store / donate plan",
      "Stager introductions when needed",
      "Photography scheduled after staging",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Do I have to fully furnish a vacant Sun City home?",
        answer:
          "Not always. Some listings need only paint, edit, and lighting. Vacant luxury or odd layouts may need furniture. We decide on the walk-through.",
      },
      {
        question: "Is staging included with your listing?",
        answer:
          "A staging consultation is included. Full furniture inventory, if used, is a separate vendor you hire.",
      },
    ],
    relatedSlugs: ["real-estate-photography", "sellers-agent-services", "luxury-home-marketing"],
  },
  {
    slug: "mortgage-lending",
    name: "Mortgage & lending services",
    category: "real-estate-consultant",
    metaTitle: "Mortgage Introductions | Sun City Summerlin Buyers | Las Vegas",
    metaDescription:
      "Mortgage and lending introductions for Sun City Summerlin and Las Vegas 55+ buyers. VA, conventional, and cash paths. Dr. Jan Duffy. Call (702) 718-0043.",
    h1: "Mortgage & Lending Introductions | Sun City Summerlin",
    answer:
      "Dr. Jan Duffy introduces Sun City Summerlin buyers to local lenders. Conventional, VA, and cash paths are mapped to the property type. We do not originate loans or quote rates. Your lender provides those numbers.",
    description:
      "Mortgage and lending introductions for buyers in Centennial Hills, Sun City Summerlin, Providence, Skye Canyon, and Kyle Canyon. We coordinate pre-approval timing with showings. Rate, fee, and qualification decisions belong to the lender you choose.",
    highlights: [
      "Lender introductions, not loan origination",
      "VA and conventional path briefing",
      "Pre-approval timed to your tour",
      "Cash vs. finance offer strategy",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Are you a mortgage broker?",
        answer:
          "No. Dr. Duffy is a licensed REALTOR® (S.0197614.LLC). Lenders you are introduced to are separate licensed companies.",
      },
      {
        question: "Can I pay cash in Sun City Summerlin?",
        answer:
          "Yes. Many 55+ purchases are cash. We still recommend a home inspection and HOA document review.",
      },
    ],
    relatedSlugs: ["veterans-housing-benefits", "buying-agent-services", "appraisals"],
  },
  {
    slug: "real-estate-marketing",
    name: "Real estate marketing",
    category: "real-estate-consultant",
    metaTitle: "Real Estate Marketing | Sun City Summerlin Listings | Las Vegas",
    metaDescription:
      "Listing marketing for Sun City Summerlin, Centennial Hills, Providence, Skye Canyon, and Kyle Canyon. Photos, copy, and 55+ distribution. Call (702) 718-0043.",
    h1: "Real Estate Marketing for Sun City Summerlin Listings",
    answer:
      "Dr. Jan Duffy markets listings across Sun City Summerlin, Centennial Hills, Providence, Skye Canyon, and Kyle Canyon. The plan covers photography, property-specific copy, listing websites, and outreach to 55+ and out-of-state buyers.",
    description:
      "Real estate marketing in Centennial Hills, Sun City Summerlin, Providence, Skye Canyon, and Kyle Canyon. 55+ Sun City listings get golf, rec-center, and lot-type detail in the copy. Nearby listings get view, square footage, and commute facts—not generic adjectives.",
    highlights: [
      "Listing websites plus targeted 55+ distribution",
      "Property-specific listing copy",
      "Photo and tour coordination",
      "Weekly seller reporting",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Where do you advertise Sun City listings?",
        answer:
          "Major home-search websites, this site, and targeted campaigns. Private (off-market) marketing is only used if you ask for it in writing.",
      },
      {
        question: "Do you use paid ads?",
        answer:
          "When the listing warrants it. Budget and creative are disclosed before spend.",
      },
    ],
    relatedSlugs: ["luxury-home-marketing", "real-estate-photography", "sellers-agent-services"],
  },
  {
    slug: "real-estate-photography",
    name: "Real estate photography",
    category: "real-estate-consultant",
    metaTitle: "Real Estate Photography | Sun City Summerlin | Las Vegas Listings",
    metaDescription:
      "Listing photography for Sun City Summerlin, Centennial Hills, Providence, Skye Canyon, and Kyle Canyon. Dr. Jan Duffy. Call (702) 718-0043.",
    h1: "Real Estate Photography in Sun City Summerlin & Northwest Las Vegas",
    answer:
      "Dr. Jan Duffy schedules professional listing photography for Sun City Summerlin and nearby northwest Las Vegas homes. Interiors, exteriors, and amenity context shots are captured after staging.",
    description:
      "Real estate photography in Centennial Hills, Sun City Summerlin, Providence, Skye Canyon, and Kyle Canyon. 55+ listings get interior, patio, and community-context images. Twilight or drone is used when the lot and rules allow.",
    highlights: [
      "Interior and exterior stills",
      "Patio, golf, and view context when present",
      "Scheduled after staging",
      "Listing-ready updates",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "When should photos be shot?",
        answer:
          "After decluttering and staging, with lights on and blinds set. Morning light is typical in Sun City Summerlin.",
      },
      {
        question: "Do you include drone photos?",
        answer:
          "When the lot, airspace, and HOA rules allow. Not every village permits it.",
      },
    ],
    relatedSlugs: ["home-staging", "real-estate-marketing", "luxury-home-marketing"],
  },
  {
    slug: "real-estate-sales",
    name: "Real estate sales",
    category: "real-estate-consultant",
    metaTitle: "Real Estate Sales | Sun City Summerlin 55+ | Las Vegas REALTOR®",
    metaDescription:
      "Real estate sales in Sun City Summerlin, Centennial Hills, Providence, Skye Canyon, and Kyle Canyon. Dr. Jan Duffy, BHHS Nevada. Call (702) 718-0043.",
    h1: "Real Estate Sales | Sun City Summerlin and Las Vegas 55+",
    answer:
      "Dr. Jan Duffy handles real estate sales in Sun City Summerlin, Centennial Hills, Providence, Skye Canyon, and Kyle Canyon. Representation covers listing, buyer representation, negotiation, and closing with Berkshire Hathaway HomeServices Nevada Properties.",
    description:
      "Real estate sales across northwest Las Vegas with a 55+ focus in Sun City Summerlin. Transactions include resales, luxury listings, and relocating buyers. License S.0197614.LLC.",
    highlights: [
      "Full-cycle sales representation",
      "55+ Sun City Summerlin focus",
      "Northwest Las Vegas coverage",
      "BHHS Nevada Properties brokerage",
    ],
    areas: AREAS_CORE,
    faqs: [
      {
        question: "Who is the listing brokerage?",
        answer:
          "Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy, license S.0197614.LLC.",
      },
      {
        question: "How do I start a sale?",
        answer:
          "Call or text (702) 718-0043, or book at suncityvegas.com/contact. Hours are 6:00 AM–9:00 PM daily.",
      },
    ],
    relatedSlugs: ["sellers-agent-services", "home-buying-sales", "property-buying-sales"],
  },
];

export const SERVICE_CATEGORY_ORDER: ServiceCategoryId[] = [
  "real-estate-agent",
  "real-estate-agency",
  "retirement-community",
  "real-estate-consultant",
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}

export function getServicesByCategory(category: ServiceCategoryId): Service[] {
  return services.filter((service) => service.category === category);
}

export function getRelatedServices(service: Service): Service[] {
  return service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((related): related is Service => Boolean(related));
}

export function getCategoryMeta(id: ServiceCategoryId) {
  switch (id) {
    case "real-estate-agent":
      return SERVICE_CATEGORIES[0];
    case "real-estate-agency":
      return SERVICE_CATEGORIES[1];
    case "retirement-community":
      return SERVICE_CATEGORIES[2];
    case "real-estate-consultant":
      return SERVICE_CATEGORIES[3];
    default: {
      const _exhaustive: never = id;
      throw new Error(`Unknown service category: ${_exhaustive}`);
    }
  }
}
