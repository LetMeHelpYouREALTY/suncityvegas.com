import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Star, MessageSquareHeart, Smartphone } from "lucide-react";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Breadcrumbs from "@components/Breadcrumbs";
import CopyReviewLink from "@/components/CopyReviewLink";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Leave a Google Review | Dr. Jan Duffy | Sun City Summerlin",
  description:
    "Leave a Google review for Dr. Jan Duffy, Sun City Summerlin 55+ real estate specialist in Las Vegas. One tap opens Google Reviews.",
  alternates: {
    canonical: "https://www.suncityvegas.com/review",
  },
  openGraph: {
    title: "Leave a Google Review | Dr. Jan Duffy | Sun City Summerlin",
    description:
      "Share your Sun City Summerlin experience. One tap opens Google Reviews for Dr. Jan Duffy.",
    url: "https://www.suncityvegas.com/review",
    siteName: "Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const SHARE_PAGE_URL = "https://www.suncityvegas.com/review";
const TEXT_TEMPLATE = `Hi! If our work together was helpful, would you leave a quick Google review for Dr. Jan Duffy? It only takes a minute: ${SHARE_PAGE_URL}`;

export default function ReviewPage() {
  const reviewUrl = siteConfig.google.reviewUrl;

  return (
    <>
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Sun City Summerlin", href: "/" },
          { label: "Leave a Review", href: "/review" },
        ]}
      />
      <main className="pt-16 md:pt-20">
        <section className="bg-[#1C1917] py-12 text-white md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 flex justify-center gap-1" aria-hidden>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-7 w-7 fill-[#C9A962] text-[#C9A962]" />
                ))}
              </div>
              <h1 className="mb-4 font-playfair text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
                Leave a Google Review
              </h1>
              <p className="text-lg leading-relaxed text-gray-100 md:text-xl">
                Thank you for working with Dr. Jan Duffy in Sun City Summerlin.
                Your review helps other 55+ buyers and sellers find trusted local
                guidance in Las Vegas.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F6F4] py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-two md:p-10">
              <h2 className="mb-3 text-center font-playfair text-2xl font-bold text-[#1C1917] md:text-3xl">
                One tap. About one minute.
              </h2>
              <p className="mb-8 text-center text-[#141210]">
                Opens Google Reviews for Dr. Jan Duffy. Sign in with Google if
                prompted, tap the stars, write a sentence or two, and submit.
              </p>

              <div className="mb-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <a
                  href={reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-[#1C1917] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#1C1917]/90"
                >
                  Leave a Google Review
                  <ExternalLink className="h-5 w-5" aria-hidden />
                </a>
                <CopyReviewLink value={SHARE_PAGE_URL} label="Copy this page link" />
              </div>

              <ol className="mb-8 space-y-4 text-[#141210]">
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1C1917] font-semibold text-white">
                    1
                  </span>
                  <span>
                    <strong className="text-[#1C1917]">Tap the gold button</strong>{" "}
                    above to open Google Reviews.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1C1917] font-semibold text-white">
                    2
                  </span>
                  <span>
                    <strong className="text-[#1C1917]">Choose 1–5 stars</strong> and
                    add a short note about your home search, sale, or tour.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1C1917] font-semibold text-white">
                    3
                  </span>
                  <span>
                    <strong className="text-[#1C1917]">Post</strong>—you&apos;re done.
                    Thank you!
                  </span>
                </li>
              </ol>

              <div className="rounded-md border border-[#B8A078]/40 bg-[#F7F6F4] p-4 md:p-5">
                <p className="mb-2 flex items-center gap-2 font-semibold text-[#1C1917]">
                  <MessageSquareHeart className="h-5 w-5" aria-hidden />
                  What helps most
                </p>
                <p className="text-sm leading-relaxed text-[#141210] md:text-base">
                  Mention Sun City Summerlin, whether you bought or sold, and one
                  specific way Dr. Duffy helped—HOA questions, village fit, pricing,
                  or a smooth closing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-3 font-playfair text-2xl font-bold text-[#1C1917] md:text-3xl">
                For Dr. Jan — easy share tools
              </h2>
              <p className="mb-6 text-[#141210]">
                Send clients this short link:{" "}
                <a
                  href={SHARE_PAGE_URL}
                  className="font-semibold text-[#1C1917] underline"
                >
                  suncityvegas.com/review
                </a>
              </p>

              <div className="mb-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
                <CopyReviewLink value={SHARE_PAGE_URL} label="Copy short link" />
                <CopyReviewLink value={TEXT_TEMPLATE} label="Copy text message" />
                <a
                  href={`sms:?&body=${encodeURIComponent(TEXT_TEMPLATE)}`}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-[#57534E] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#57534E]/90"
                >
                  <Smartphone className="h-5 w-5" aria-hidden />
                  Open Texts
                </a>
              </div>

              <p className="text-sm text-gray-600">
                Direct Google link (if you need it):{" "}
                <a
                  href={reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-[#1C1917] underline"
                >
                  {reviewUrl}
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#1C1917] py-12 text-white md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 font-playfair text-2xl font-bold md:text-3xl">
              Prefer to talk first?
            </h2>
            <p className="mb-6 text-lg text-gray-100">
              Call or text Dr. Jan Duffy at {siteConfig.phoneDisplay}.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-[#C9A962] px-8 py-3 font-semibold text-[#141210] transition-colors hover:bg-[#C9A962]/90"
              >
                Call {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/testimonials"
                className="inline-flex min-h-[48px] items-center justify-center rounded-md border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#1C1917]"
              >
                Read client stories
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
