import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Sun City Summerlin | Dr. Jan Duffy",
  description:
    "The page you requested was not found. Browse Sun City Summerlin homes, amenities, and realtor services with Dr. Jan Duffy.",
};

export default function ErrorPage() {
  return (
    <section className="relative z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-[530px] text-center">
          <h1 className="mb-4 text-3xl font-bold text-[#8B5E3C] font-playfair sm:text-4xl">
            Page Not Found
          </h1>
          <p className="mb-8 text-base text-[#2D2A26] leading-relaxed">
            That link is missing or outdated. Continue with Sun City Summerlin homes,
            amenities, or a direct call to Dr. Jan Duffy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#8B5E3C] px-6 py-3 text-white hover:bg-[#6F4A2F]"
            >
              Back to Home
            </Link>
            <Link
              href="/homes-for-sale"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-[#8B5E3C] px-6 py-3 text-[#8B5E3C] hover:bg-[#FDF8F3]"
            >
              Browse Homes
            </Link>
            <a
              href="tel:+17027180043"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-[#8B5E3C] px-6 py-3 text-[#8B5E3C] hover:bg-[#FDF8F3]"
            >
              Call (702) 718-0043
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
