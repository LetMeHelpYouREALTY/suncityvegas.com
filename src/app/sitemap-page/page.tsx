import type { Metadata } from "next";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import PageHero from "@components/PageHero";
import RealScoutListings from "@components/RealScoutListings";
import { DEFAULT_PAGE_HERO } from "@/lib/page-heroes";
import Link from "next/link";
import { FileText, Home, Phone, HelpCircle, Shield, Users } from "lucide-react";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Sitemap | Sun City Summerlin | Site Navigation | Las Vegas",
  description:
    "Complete sitemap of Sun City Summerlin website. Find all pages including homes for sale, amenities, lifestyle, and more.",
  alternates: {
    canonical: "https://www.suncityvegas.com/sitemap-page",
  },
  openGraph: {
    title: "Sitemap | Sun City Summerlin",
    description: "Complete navigation guide to all pages on Sun City Summerlin website.",
    url: "https://www.suncityvegas.com/sitemap-page",
    siteName: "Sun City Summerlin Homes for Sale | Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sitemap | Sun City Summerlin",
    description: "Complete navigation guide to our website.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sitePages = [
  {
    category: "Main Pages",
    icon: Home,
    pages: [
      { href: "/", label: "Home", description: "Discover Sun City Summerlin 55+ community" },
      { href: "/homes-for-sale", label: "Homes for Sale", description: "Browse current listings in Sun City Summerlin" },
      { href: "/services", label: "Services", description: "Buyer, seller, HOA, VA, relocation, and 55+ consulting" },
      { href: "/amenities", label: "Amenities", description: "4 golf courses, 3 rec centers, and more" },
      { href: "/lifestyle", label: "Lifestyle", description: "Active adult living with 80+ clubs" },
    ],
  },
  {
    category: "About & Information",
    icon: Users,
    pages: [
      { href: "/about", label: "About Dr. Jan Duffy", description: "Meet your REALTOR® and learn about expertise" },
      { href: "/testimonials", label: "Testimonials", description: "Client reviews and success stories" },
      { href: "/blog", label: "Blog", description: "Community news, insights, and tips" },
      { href: "/faq", label: "FAQ", description: "Frequently asked questions about Sun City Summerlin" },
    ],
  },
  {
    category: "Real Estate Services",
    icon: FileText,
    pages: [
      { href: "/services", label: "All Services", description: "Buyer, seller, HOA, VA, relocation, and 55+ consulting" },
      ...services.map((service) => ({
        href: `/services/${service.slug}`,
        label: service.name,
        description: service.answer.slice(0, 110) + (service.answer.length > 110 ? "…" : ""),
      })),
    ],
  },
  {
    category: "Contact & Tours",
    icon: Phone,
    pages: [
      { href: "/contact", label: "Contact", description: "Get in touch with Dr. Jan Duffy" },
      { href: "/schedule", label: "Schedule a Tour", description: "Book a private community tour" },
      { href: "/home-value", label: "Home Value", description: "Get a free home value estimate" },
    ],
  },
  {
    category: "Resources",
    icon: FileText,
    pages: [
      { href: "/resources", label: "Resources", description: "Guides, market insights, and tips" },
      { href: "/resources/market-insights", label: "Market Insights", description: "Latest housing trends and forecasts" },
      { href: "/resources/moving-guide", label: "Moving Guide", description: "Relocation timeline and tips" },
      { href: "/resources/first-time-buyers", label: "First-Time Buyers", description: "Homebuying guide for 55+ community" },
    ],
  },
  {
    category: "Legal & Policies",
    icon: Shield,
    pages: [
      { href: "/privacy", label: "Privacy Policy", description: "How we protect your information" },
      { href: "/terms", label: "Terms of Service", description: "Website usage terms and conditions" },
      { href: "/accessibility", label: "Accessibility Statement", description: "Our commitment to website accessibility" },
    ],
  },
];

const sitemapWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.suncityvegas.com/sitemap-page",
  name: "Sitemap | Sun City Summerlin | Site Navigation | Las Vegas",
  description:
    "Complete sitemap of Sun City Summerlin website. Find all pages including homes for sale, amenities, lifestyle, and more.",
  url: "https://www.suncityvegas.com/sitemap-page",
};

export default function SitemapPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sitemapWebPageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Sitemap", href: "/sitemap-page" },
        ]}
      />
      <main className="pt-16 md:pt-20 min-h-screen bg-white">
                <PageHero
          title="Site Map"
          subtitle="Find all pages and resources on Sun City Summerlin website"
          imageSrc={DEFAULT_PAGE_HERO}
          imageAlt="Sun City Summerlin website site map"
        />

        <RealScoutListings h2Text="Homes for Sale in Sun City Summerlin | Sitemap Page" />


        {/* Sitemap Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sitePages.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={category.category} className="bg-white rounded-lg shadow-sm border border-[#B8A078]/20 p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#1C1917]/10 rounded-lg">
                          <IconComponent className="w-5 h-5 text-[#1C1917]" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-[#1C1917] font-playfair">
                          {category.category}
                        </h2>
                      </div>
                      <ul className="space-y-4">
                        {category.pages.map((page) => (
                          <li key={page.href}>
                            <Link
                              href={page.href}
                              className="block group hover:bg-[#F7F6F4] rounded-lg p-3 transition-colors"
                            >
                              <div className="font-semibold text-[#141210] group-hover:text-[#1C1917] transition-colors mb-1">
                                {page.label}
                              </div>
                              <div className="text-sm text-gray-600">{page.description}</div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* XML Sitemap Link */}
              <div className="mt-12 bg-[#B8A078]/20 border-l-4 border-[#B8A078] p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-[#1C1917] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#1C1917] mb-2 font-playfair">
                      XML Sitemap
                    </h3>
                    <p className="text-[#141210] mb-4">
                      For search engines and developers, our XML sitemap is available at:
                    </p>
                    <a
                      href="/sitemap.xml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#1C1917] hover:text-[#57534E] transition-colors font-medium"
                    >
                      <FileText className="w-4 h-4" />
                      https://www.suncityvegas.com/sitemap.xml
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8 text-center">
                <p className="text-[#141210] mb-4">Need help finding something?</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1917] text-white rounded-lg hover:bg-[#1C1917]/90 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Contact Us
                  </Link>
                  <Link
                    href="/faq"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1C1917] text-[#1C1917] rounded-lg hover:bg-[#1C1917]/10 transition-colors"
                  >
                    <HelpCircle className="w-4 h-4" />
                    View FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
