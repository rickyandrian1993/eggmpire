import Image from "next/image";
import { FadeIn } from "../common/AnimatedComponents";
import DonwloadButton from "../DonwloadButton";

export default function Description() {
  return (
    <>
      {/* Problem and Innovation Sections */}
      <div className="container max-w-250 mx-auto relative flex flex-col gap-10 pb-12 items-center">
        <p className="text-lg text-white mx-auto text-center">
          The EggMpire Token (EGGM) is a blockchain-based project transforming
          the egg <br />
          production industry by integrating sustainable bio conversion,
          eco-friendly <br />
          farming practices with a decentralized digital economy. <br />
          With EGGM ESG Impact Certificate Issued in seconds, Climate & Social
          Action <br />
          Executed in just days, For Natural World Rehabilitation, Restoration &{" "}
          <br />
          Conservation Speed is everything.
        </p>
        {/* The Problem */}
        <div className="sticky top-28 md:top-32 z-10 mb-12">
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-[#3C3C3C] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-stretch gap-10">
              <div className="w-full md:w-1/2 aspect-4/3 relative rounded-3xl overflow-hidden shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  {/* Placeholder for Problem Image */}
                  <div className="relative w-full h-full">
                    <Image
                      fill
                      src="/images/theproblem.svg"
                      alt="Research Image"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="font-bold text-white">The Problem</h2>
                <p className="text-gray-300 leading-relaxed">
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
        <div className="relative z-20">
          <FadeIn direction="up" delay={0.3}>
            <div className="bg-[#585858] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-stretch gap-10">
              <div className="w-full md:w-1/2 aspect-4/3 relative rounded-3xl overflow-hidden shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      fill
                      src="/images/researchandinnovation.svg"
                      alt="Research Image"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="font-bold text-white">
                  Research and Innovation
                </h2>
                <div className="space-y-4">
                  <p className="text-lg font-bold text-white uppercase tracking-wider">
                    OUR EGGCOLOGIC Bio Conversion Eggs Farm is THE SOLUTION:
                  </p>
                  <p className="text-gray-300 leading-relaxed">
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
