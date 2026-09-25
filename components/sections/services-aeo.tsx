import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  SERVICE_CATEGORIES,
  SERVICE_CATEGORY_ORDER,
  getServicesByCategory,
  services,
} from "@/lib/services";

const homepageFaqs = [
  {
    question: "What real estate services does Dr. Jan Duffy offer in Sun City Summerlin?",
    answer:
      "Help buying or selling a home, reviewing HOA rules, coordinating VA loans, relocating at 55+, marketing your listing, comparing recent sales for pricing, staging, and photography—focused on Sun City Summerlin and northwest Las Vegas.",
  },
  {
    question: "Who is the real estate agent for Sun City Summerlin 55+ homes?",
    answer:
      "Dr. Jan Duffy, REALTOR®, license S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties. Office: 9406 Del Webb Boulevard, Las Vegas, NV 89134. Call (702) 718-0043.",
  },
  {
    question: "Do you help 55+ buyers with HOA rules and VA loans?",
    answer:
      "Yes. We explain HOA fees, the 55+ age rules, and any assessments. For veterans, we help with VA loan timing and Certificate of Eligibility paperwork with your lender.",
  },
  {
    question: "Can out-of-state retirees buy in Sun City Summerlin remotely?",
    answer:
      "Yes. Relocation assistance and the retirement relocation concierge include video tours, neighborhood orientation, and a sequenced closing calendar.",
  },
];

export default function ServicesAeoSection() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sun City Summerlin 55+ real estate services",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      description: service.answer,
      url: `https://www.suncityvegas.com/services/${service.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section id="real-estate-services" className="py-16 md:py-20 bg-[#F7F6F4]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold tracking-wide text-[#1C1917] uppercase mb-3 text-center">
            Buying, Selling & Relocation
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1917] mb-4 text-center font-playfair">
            Sun City Summerlin Real Estate Services | Las Vegas 55+
          </h2>
          <p
            data-aeo-answer
            className="text-base md:text-lg text-[#141210] text-center max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Dr. Jan Duffy is the licensed real estate agent for Sun City Summerlin 55+ homes in
            Las Vegas, NV 89134. Services cover buying, selling, HOA review, VA benefits,
            relocation, luxury marketing, and market analysis. Office hours are 8:00 AM–8:00 PM
            daily at 9406 Del Webb Boulevard. Call{" "}
            <a href="tel:+17027180043" className="text-[#1C1917] font-semibold hover:underline">
              (702) 718-0043
            </a>
            .
          </p>

          <div className="space-y-12">
            {SERVICE_CATEGORY_ORDER.map((categoryId) => {
              const category = SERVICE_CATEGORIES.find((item) => item.id === categoryId);
              const categoryServices = getServicesByCategory(categoryId);
              if (!category) {
                return null;
              }

              return (
                <div key={category.id}>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1C1917] mb-2 font-playfair">
                    {category.label}
                  </h3>
                  <p className="text-[#141210] mb-6">{category.summary}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryServices.map((service) => (
                      <article
                        key={service.slug}
                        className="bg-white rounded-lg border border-[#B8A078]/25 p-5 flex flex-col"
                      >
                        <h4 className="text-lg font-bold text-[#1C1917] mb-2 font-playfair">
                          What is {service.name.toLowerCase()} in Sun City Summerlin?
                        </h4>
                        <p className="text-sm md:text-base text-[#141210] leading-relaxed flex-grow">
                          {service.answer}
                        </p>
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 min-h-[44px] mt-3 text-[#1C1917] font-semibold hover:text-[#57534E]"
                        >
                          {service.name}
                          <ArrowRight className="w-4 h-4" aria-hidden />
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-white rounded-lg border border-[#B8A078]/25 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#1C1917] mb-6 font-playfair">
              Quick answers for search and assistants
            </h3>
            <dl className="space-y-5">
              {homepageFaqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-[#1C1917] mb-1">{faq.question}</dt>
                  <dd className="text-[#141210] leading-relaxed">{faq.answer}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 min-h-[44px] text-[#1C1917] font-semibold hover:text-[#57534E]"
              >
                View all services
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
