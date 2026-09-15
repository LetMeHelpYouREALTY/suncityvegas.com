import Link from "next/link";
import { Phone, Mail, MapPin, Youtube, Calendar, Instagram, Linkedin, Facebook, ExternalLink, Navigation, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-[#141210] text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Site Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-playfair text-[#C9A962]">
              {siteConfig.community} 55+ Real Estate
            </h3>
            <p className="text-gray-300 mb-4">
              Homes by {siteConfig.agent.name}. Las Vegas&apos; premier 55+ active adult community—4 golf courses, 3 recreation centers, 80+ clubs. Over 25 years helping retirees find the perfect home.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              Equal Housing Opportunity
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#B8A078]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/homes-for-sale"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  Homes for Sale
                </Link>
              </li>
              <li>
                <Link
                  href="/amenities"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  href="/lifestyle"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/community/neighborhood"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  Explore Neighborhood
                </Link>
              </li>
              <li>
                <Link
                  href="/selling"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  Selling
                </Link>
              </li>
              <li>
                <Link
                  href="/home-value"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  Home Value
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  About Dr. Jan
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  Schedule a Tour
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/review"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  Leave a Google Review
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info (GBP-aligned: phone, SMS, email, address) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#B8A078]">Contact {siteConfig.agent.name}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#C9A962] transition-colors min-h-[44px]"
                  aria-label={`Call ${siteConfig.phoneDisplay}`}
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phoneSmsHref}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#C9A962] transition-colors min-h-[44px]"
                  aria-label={`Text ${siteConfig.phoneDisplay}`}
                >
                  <Phone className="w-4 h-4" />
                  Text / Chat
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.agent.email}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#C9A962] transition-colors min-h-[44px]"
                >
                  <Mail className="w-4 h-4" />
                  {siteConfig.agent.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>
                    {siteConfig.streetAddress}
                    <br />
                    {siteConfig.city}, {siteConfig.state} {siteConfig.zip}
                    <br />
                    {siteConfig.hoursDisplay}
                  </span>
                </div>
              </li>
              <li>
                <a
                  href={siteConfig.google.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#C9A962] transition-colors min-h-[44px]"
                  aria-label={`Get directions to ${siteConfig.address}`}
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.google.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#C9A962] transition-colors min-h-[44px]"
                  aria-label="View Google reviews for Dr. Jan Duffy"
                >
                  <Star className="w-4 h-4" />
                  View Google Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#B8A078]">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  All Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/market-insights"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  Market Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/moving-guide"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  Moving Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/first-time-buyers"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  First-Time Buyers
                </Link>
              </li>
              <li>
                <a
                  href="https://calendly.com/drjanduffy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule a Tour
                </a>
              </li>
              <li>
                <Link
                  href="/homes-for-sale"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  <span className="w-4 h-4">🏠</span>
                  Browse Homes
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#C9A962] transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media (GBP-aligned) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#B8A078]">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#C9A962] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#C9A962] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#C9A962] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#C9A962] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#C9A962] transition-colors"
                  aria-label="Pinterest"
                >
                  <ExternalLink className="w-4 h-4" />
                  Pinterest
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#C9A962] transition-colors"
                  aria-label="TikTok"
                >
                  <ExternalLink className="w-4 h-4" />
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#C9A962] transition-colors"
                  aria-label="X (Twitter)"
                >
                  <ExternalLink className="w-4 h-4" />
                  X
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#B8A078]">Information</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <strong>License:</strong> S.0197614.LLC
              </li>
              <li>
                <strong>Brokerage:</strong> Berkshire Hathaway HomeServices
                Nevada Properties
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#C9A962] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#C9A962] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="hover:text-[#C9A962] transition-colors"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap-page"
                  className="hover:text-[#C9A962] transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>
            © 2026 Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy. All rights reserved.
          </p>
          <p className="mt-2">
            Berkshire Hathaway HomeServices Nevada Properties | License S.0197614.LLC
          </p>
          <p className="mt-2">
            <a href={siteConfig.phoneHref} className="text-[#C9A962] hover:underline" aria-label={`Call ${siteConfig.phoneDisplay}`}>{siteConfig.phoneDisplay}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
