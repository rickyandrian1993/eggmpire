import Image from "next/image";
import { FadeIn } from "../common/AnimatedComponents";
import DonwloadButton from "../DonwloadButton";

export default function Description() {
  return (
    <>
      {/* Problem and Innovation Sections */}
      <div className="container max-w-6xl mx-auto relative flex flex-col gap-8 md:gap-10 pb-12 items-center px-4">
        <p className="text-base md:text-lg text-white mx-auto text-center max-w-3xl leading-relaxed">
          The EggMpire Token (EGGM) is a blockchain-based project transforming
          the egg production industry by integrating sustainable bio conversion,
          eco-friendly farming practices with a decentralized digital economy.
          <br className="hidden md:block" />
          With EGGM ESG Impact Certificate Issued in seconds, Climate & Social
          Action Executed in just days, For Natural World Rehabilitation,
          Restoration & Conservation Speed is everything.
        </p>
        {/* The Problem */}
        <div className="sticky top-24 md:top-32 z-10 mb-8 md:mb-12 w-full">
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-[#3C3C3C] rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 flex flex-col md:flex-row items-stretch gap-6 md:gap-10 shadow-2xl">
              <div className="w-full md:w-1/2 aspect-video md:aspect-4/3 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl shrink-0">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      fill
                      src="/images/theproblem.svg"
                      alt="The Problem"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6 flex flex-col justify-center">
                <h2 className="text-2xl md:text-4xl font-bold text-white">The Problem</h2>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Traditional egg farming faces high costs and environmental
                  impact from resource-intensive feed, making sustainable eggs
                  expensive and inaccessible. The supply chain often lacks
                  transparency.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Research and Innovation */}
        <div className="relative z-20 w-full">
          <FadeIn direction="up" delay={0.3}>
            <div className="bg-[#585858] rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 flex flex-col md:flex-row items-stretch gap-6 md:gap-10 shadow-2xl">
              <div className="w-full md:w-1/2 aspect-video md:aspect-4/3 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl shrink-0">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      fill
                      src="/images/researchandinnovation.svg"
                      alt="Research and Innovation"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6 flex flex-col justify-center">
                <h2 className="text-2xl md:text-4xl font-bold text-white">
                  Research and Innovation
                </h2>
                <div className="space-y-3 md:space-y-4">
                  <p className="text-sm md:text-base font-bold text-white uppercase tracking-wider">
                    OUR EGGCOLOGIC Bio Conversion Eggs Farm is THE SOLUTION:
                  </p>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    A scalable and sustainable eggs production model with a
                    self-sufficient ecosystem that provides over 70% of the
                    chicken’s diet internally. This reduces costs and our carbon
                    footprint. The $EGGM token provides a transparent,
                    decentralized way to fund and scale our operations.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <DonwloadButton />
    </>
  );
}
