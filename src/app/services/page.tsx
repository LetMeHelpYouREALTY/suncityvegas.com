import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import { ArrowRight, Phone } from "lucide-react";
import {
  SERVICE_CATEGORIES,
  SERVICE_CATEGORY_ORDER,
  getServicesByCategory,
} from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

const PAGE_URL = "https://www.suncityvegas.com/services";

export const metadata: Metadata = {
  title: "Real Estate Services | Sun City Summerlin 55+ | Las Vegas",
  description:
    "Sun City Summerlin 55+ real estate services in Las Vegas: buyer and seller representation, HOA navigation, VA benefits, relocation, staging, and CMAs. Dr. Jan Duffy. Call (702) 718-0043.",
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
        <section className="bg-[#8B5E3C] text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm uppercase tracking-wide text-[#D4AF37] mb-3">
                Hyper-Local 55+ Realtor
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-playfair">
                Real Estate Services | Sun City Summerlin 55+ | Las Vegas
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                Dr. Jan Duffy provides licensed real estate agent, agency, retirement-community,
                and consulting services for 55+ buyers and sellers in Sun City Summerlin and
                northwest Las Vegas.
              </p>
              <p className="text-base text-gray-100">
                {siteConfig.address} · Daily 6:00 AM–9:00 PM ·{" "}
                <a href="tel:+17027180043" className="underline hover:text-[#D4AF37]">
                  (702) 718-0043
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#FDF8F3] py-8 md:py-10">
          <div className="container mx-auto px-4">
            <div className="relative mx-auto max-w-5xl aspect-[21/9] overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/explore/contact.jpg"
                alt="Dr. Jan Duffy Sun City Summerlin realtor services office consultation in Las Vegas 89134"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
            <p className="mt-4 text-center text-[#2D2A26] max-w-3xl mx-auto text-base md:text-lg">
              Buyer agency, seller representation, HOA review, VA guidance, and 55+ relocation—hyper-local help inside Sun City Summerlin gates.
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
              className="py-12 md:py-16 even:bg-[#FDF8F3] bg-white"
            >
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <p className="text-sm font-semibold text-[#8B5E3C] mb-2">
                    {category.gbpRole} Google Business category
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                    {category.label}
                  </h2>
                  <p className="text-[#2D2A26] mb-8 max-w-3xl">{category.summary}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categoryServices.map((service) => (
                      <article
                        key={service.slug}
                        className="bg-white border border-[#C4A574]/30 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <h3 className="text-xl font-bold text-[#8B5E3C] mb-3 font-playfair">
                          {service.name}
                        </h3>
                        <p className="text-[#2D2A26] leading-relaxed mb-4">{service.answer}</p>
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 min-h-[44px] text-[#8B5E3C] font-semibold hover:text-[#5D7A5D]"
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

        <section className="py-12 md:py-16 bg-[#8B5E3C] text-white">
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
              className="inline-flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] px-6 py-3 bg-white text-[#8B5E3C] font-semibold rounded-lg hover:bg-[#FDF8F3]"
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
