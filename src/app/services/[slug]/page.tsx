import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import PageHero from "@components/PageHero";
import RealScoutListings from "@components/RealScoutListings";
import { CheckCircle2, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import {
  getAllServiceSlugs,
  getCategoryMeta,
  getRelatedServices,
  getServiceBySlug,
} from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { pageHeroImages } from "@/lib/page-heroes";
import { ensureLocalKeywords } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Service not found" };
  }

  const url = `https://www.suncityvegas.com/services/${service.slug}`;
  const description = ensureLocalKeywords(service.metaDescription);
  return {
    title: service.metaTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description,
      url,
      siteName: siteConfig.siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `https://www.suncityvegas.com${pageHeroImages.services.src}`,
          width: 1200,
          height: 630,
          alt: pageHeroImages.services.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description,
      images: [`https://www.suncityvegas.com${pageHeroImages.services.src}`],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  const category = getCategoryMeta(service.category);
  const related = getRelatedServices(service);
  const pageUrl = `https://www.suncityvegas.com/services/${service.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.answer,
    url: pageUrl,
    areaServed: service.areas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    provider: {
      "@type": "RealEstateAgent",
      "@id": "https://www.suncityvegas.com/#agent",
      name: siteConfig.siteName,
      telephone: "+1-702-718-0043",
      address: {
        "@type": "PostalAddress",
        streetAddress: "9406 Del Webb Boulevard",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        postalCode: "89134",
        addressCountry: "US",
      },
    },
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "06:00",
      closes: "21:00",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: service.metaTitle,
    description: service.metaDescription,
    url: pageUrl,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-aeo-answer]"],
    },
  };

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
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name, href: `/services/${service.slug}` },
        ]}
      />
      <main id="main-content" className="pt-16 md:pt-20">
        <PageHero
          eyebrow={category.label}
          title={service.h1}
          imageSrc={pageHeroImages.services.src}
          imageAlt={pageHeroImages.services.alt}
          align="left"
        >
          <p
            data-aeo-answer
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
          >
            {service.answer}
          </p>
        </PageHero>

        <RealScoutListings
          h2Text={`Homes for Sale in Sun City Summerlin | ${service.name}`}
        />


        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-4 font-playfair">
                How this service works in Sun City Summerlin
              </h2>
              <p className="text-[#141210] leading-relaxed mb-8">{service.description}</p>
              <ul className="space-y-3">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#57534E] mt-0.5 flex-shrink-0" />
                    <span className="text-[#141210]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[#F7F6F4]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-4 font-playfair">
                Areas served
              </h2>
              <p className="text-[#141210] mb-6">
                {service.name} coverage includes these Las Vegas-area communities:
              </p>
              <ul className="flex flex-wrap gap-3">
                {service.areas.map((area) => (
                  <li
                    key={area}
                    className="px-4 py-2 bg-white border border-[#B8A078]/30 rounded-full text-[#141210]"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-8 font-playfair">
                {service.name} FAQs
              </h2>
              <div className="space-y-6">
                {service.faqs.map((faq) => (
                  <article key={faq.question} className="border-b border-[#B8A078]/30 pb-6">
                    <h3 className="text-xl font-bold text-[#1C1917] mb-2 font-playfair">
                      {faq.question}
                    </h3>
                    <p className="text-[#141210] leading-relaxed">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="py-12 md:py-16 bg-[#F7F6F4]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C1917] mb-6 font-playfair">
                  Related Sun City Summerlin services
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${item.slug}`}
                        className="flex items-center justify-between min-h-[44px] gap-3 bg-white rounded-lg border border-[#B8A078]/30 px-4 py-3 text-[#1C1917] font-semibold hover:border-[#1C1917]"
                      >
                        {item.name}
                        <ArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ) : null}

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#F7F6F4] rounded-lg p-6">
                <Phone className="w-6 h-6 text-[#1C1917] mb-3" aria-hidden />
                <h3 className="font-semibold text-[#1C1917] mb-2">Call or text</h3>
                <a
                  href="tel:+17027180043"
                  className="text-[#141210] hover:text-[#1C1917] min-h-[44px] inline-flex items-center"
                >
                  (702) 718-0043
                </a>
                <p className="text-sm text-[#141210] mt-1">
                  <a href="sms:+17027180043" className="hover:underline">
                    SMS +1 702-718-0043
                  </a>
                </p>
              </div>
              <div className="bg-[#F7F6F4] rounded-lg p-6">
                <MapPin className="w-6 h-6 text-[#1C1917] mb-3" aria-hidden />
                <h3 className="font-semibold text-[#1C1917] mb-2">Office</h3>
                <p className="text-[#141210]">
                  9406 Del Webb Boulevard
                  <br />
                  Las Vegas, NV 89134
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=9406+Del+Webb+Boulevard,+Las+Vegas,+NV+89134"
                  className="inline-flex items-center min-h-[44px] text-[#1C1917] font-semibold hover:underline mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Directions
                </a>
              </div>
              <div className="bg-[#F7F6F4] rounded-lg p-6">
                <Clock className="w-6 h-6 text-[#1C1917] mb-3" aria-hidden />
                <h3 className="font-semibold text-[#1C1917] mb-2">Hours</h3>
                <p className="text-[#141210]">Daily 6:00 AM–9:00 PM</p>
                <p className="text-sm text-[#141210] mt-2">
                  Closed July 3–4, 2026. Appointment not required.
                </p>
              </div>
            </div>
            <div className="max-w-4xl mx-auto text-center mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 bg-[#1C1917] text-white font-semibold rounded-lg hover:bg-[#1C1917]/90"
              >
                Schedule a consult
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
