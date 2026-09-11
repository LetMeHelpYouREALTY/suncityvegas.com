import ScrollAnimation from "../scroll-animation";

export default function ProblemSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="prose prose-lg max-w-none text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1917] mb-4 md:mb-6 font-playfair">
                Ready for a Smarter Next Chapter in Las Vegas?
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-dark leading-relaxed px-2">
                You&apos;ve worked hard to get here. Maybe you&apos;re done with
                California traffic and taxes. Maybe the house feels too big
                now. Maybe weekends disappear into yard work instead of the
                life you planned.
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-dark leading-relaxed mt-4 md:mt-6 font-semibold px-2">
                You want retirement in Sun City Summerlin to feel like a reward—with a
                hyper-local realtor who already knows the villages, HOAs, and comps.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
