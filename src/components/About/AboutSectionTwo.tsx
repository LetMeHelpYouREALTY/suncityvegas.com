import CdnImage from "@components/CdnImage";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <CdnImage
                src="/images/about/about-image-2.jpg"
                alt="Spacious golf-course home exterior in Sun City Summerlin, Las Vegas"
                fill
                className="rounded-lg object-cover drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <CdnImage
                src="/images/about/about-image-2.jpg"
                alt="Spacious golf-course home exterior in Sun City Summerlin, Las Vegas"
                fill
                className="hidden rounded-lg object-cover drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Village-level market knowledge
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  From Highland Falls fairways to Palm Valley palms, Dr. Duffy
                  maps lot premiums, view corridors, and resale patterns before
                  you write an offer.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Concierge buyer & seller support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Pricing reports, staging guidance, HOA document review, and closing
                  coordination tailored to 55+ moves inside the gates.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Lifestyle-first home matching
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Golf, pickleball, clubs, and lock-and-leave travel shape the
                  shortlist—so the floor plan fits the life you want next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
