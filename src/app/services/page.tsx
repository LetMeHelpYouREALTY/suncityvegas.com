import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import PageHero from "@components/PageHero";
import RealScoutListings from "@components/RealScoutListings";
import { ArrowRight, Phone } from "lucide-react";
import {
  SERVICE_CATEGORIES,
  SERVICE_CATEGORY_ORDER,
  getServicesByCategory,
} from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { pageHeroImages } from "@/lib/page-heroes";

const PAGE_URL = "https://www.suncityvegas.com/services";

export const metadata: Metadata = {
  title: "Real Estate Services | Sun City Summerlin 55+ | Las Vegas",
  description:
    "Sun City Summerlin 55+ real estate services in Las Vegas: help buying and selling, HOA guidance, VA benefits, relocation, staging, and home-value comparisons. Dr. Jan Duffy. Call (702) 718-0043.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Real Estate Services | Sun City Summerlin 55+ | Las Vegas",
    description:
      "Buyer, seller, relocation, and 55+ community services from Dr. Jan Duffy in Sun City Summerlin, Las Vegas.",
    url: PAGE_URL,
    siteName: siteConfig.siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Services | Sun City Summerlin | Dr. Jan Duffy",
    description:
      "55+ buyer, seller, and relocation services in Sun City Summerlin, Las Vegas. Call (702) 718-0043.",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Sun City Summerlin real estate services",
  itemListElement: SERVICE_CATEGORY_ORDER.flatMap((categoryId) =>
    getServicesByCategory(categoryId)
  ).map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.name,
    url: `https://www.suncityvegas.com/services/${service.slug}`,
  })),
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${PAGE_URL}#webpage`,
  name: "Real Estate Services | Sun City Summerlin 55+ | Las Vegas",
  description:
    "Sun City Summerlin 55+ real estate services in Las Vegas from Dr. Jan Duffy.",
  url: PAGE_URL,
  isPartOf: { "@id": "https://www.suncityvegas.com/#website" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />
      <main id="main-content" className="pt-16 md:pt-20">
        <PageHero
          eyebrow="Your Sun City Summerlin 55+ Realtor"
          title="Real Estate Services | Sun City Summerlin 55+ | Las Vegas"
          subtitle="Dr. Jan Duffy provides licensed real estate agent, agency, retirement-community, and consulting services for 55+ buyers and sellers in Sun City Summerlin and northwest Las Vegas."
          imageSrc={pageHeroImages.services.src}
          imageAlt={pageHeroImages.services.alt}
        >
          <p className="text-base text-gray-100">
            {siteConfig.address} · Daily 6:00 AM–9:00 PM ·{" "}
            <a href="tel:+17027180043" className="underline hover:text-[#C9A962]">
              (702) 718-0043
            </a>
          </p>
        </PageHero>

        <RealScoutListings h2Text="Homes for Sale in Sun City Summerlin | Services" />

        <section className="bg-[#F7F6F4] py-8 md:py-10">
          <div className="container mx-auto px-4">
            <p className="text-center text-[#141210] max-w-3xl mx-auto text-base md:text-lg">
              Help for buyers and sellers, HOA review, VA guidance, and 55+ relocation—local support inside Sun City Summerlin gates.
            </p>
          </div>
        </section>

        {SERVICE_CATEGORY_ORDER.map((categoryId) => {
          const category = SERVICE_CATEGORIES.find((item) => item.id === categoryId);
          const categoryServices = getServicesByCategory(categoryId);
          if (!category) {
            return null;
          }

          return (
            <section
              key={category.id}
              id={category.id}
              className="py-12 md:py-16 even:bg-[#F7F6F4] bg-white"
            >
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <p className="text-sm font-semibold text-[#1C1917] mb-2">
                    {category.label} services
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-3 font-playfair">
                    {category.label}
                  </h2>
                  <p className="text-[#141210] mb-8 max-w-3xl">{category.summary}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categoryServices.map((service) => (
                      <article
                        key={service.slug}
                        className="bg-white border border-[#B8A078]/30 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <h3 className="text-xl font-bold text-[#1C1917] mb-3 font-playfair">
                          {service.name}
                        </h3>
                        <p className="text-[#141210] leading-relaxed mb-4">{service.answer}</p>
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 min-h-[44px] text-[#1C1917] font-semibold hover:text-[#57534E]"
                        >
                          Open {service.name} page
                          <ArrowRight className="w-4 h-4" aria-hidden />
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <section className="py-12 md:py-16 bg-[#1C1917] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
              Talk through the right service
            </h2>
            <p className="text-lg text-gray-100 mb-6 max-w-2xl mx-auto">
              Call or text Dr. Jan Duffy. Online appointments are available. Walk-ins are welcome
              during posted hours.
            </p>
            <a
              href="tel:+17027180043"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] px-6 py-3 bg-white text-[#1C1917] font-semibold rounded-lg hover:bg-[#F7F6F4]"
            >
              <Phone className="w-5 h-5" aria-hidden />
              (702) 718-0043
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
