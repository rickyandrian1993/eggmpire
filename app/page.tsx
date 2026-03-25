import { FadeIn } from "@/app/components/common/AnimatedComponents";
import Button from "@/app/components/common/Button";
import ContactUs from "@/app/components/common/ContactUs";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import HeroSection from "@/app/components/hero/HeroSection";
import TeamCarousel from "@/app/components/team/TeamCarousel";
import { getBreadcrumbSchema } from "@/app/lib/utils/schema";
import Image from "next/image";
import Divider from "./components/common/Divider";

export const metadata = {
  title: "EggMpire - Decentralized Token & DeFi Ecosystem | Home",
  description:
    "EggMpire (EGGS) is a decentralized blockchain token offering secure, fast, and community-driven DeFi solutions. Join our ecosystem today.",
  keywords: [
    "EggMpire token",
    "EGGS crypto",
    "DeFi token",
    "blockchain",
    "decentralized finance",
    "cryptocurrency",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://eggmpire.com" },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      {/* Hero Section */}
      <HeroSection />

      <div className="space-y-4">
        <Divider spacing="lg" size="4xl" mobileSize="lg">
          WHAT Is EggMpire Token (EGGM)
        </Divider>
        <div>
          <p className="text-lg text-white mx-auto text-center">
            The EggMpire Token (EGGM) is a blockchain-based project transforming
            the egg <br />
            production industry by integrating sustainable bio conversion,
            eco-friendly <br />
            farming practices with a decentralized digital economy. <br />
            With EGGM ESG Impact Certificate Issued in seconds, Climate & Social
            Action <br />
            Executed in just days, For Natural World Rehabilitation, Restoration
            & <br />
            Conservation Speed is everything.
          </p>
        </div>

        {/* Problem and Innovation Sections */}
        <div className="container max-w-6xl mx-auto px-4 py-12 relative">
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
                      chicken’s diet internally. This reduces costs and our
                      carbon footprint. The $EGGM token provides a transparent,
                      decentralized way to fund and scale our operations.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <Button size="lg" className="w-[18rem]" glow>
            Download
            <br />
            EGGMPIRE Whitepaper
          </Button>
          <Button size="lg" className="w-[18rem]" glow>
            The Etherium
            <br />
            Smart Contracts
          </Button>
        </div>
      </div>
      <section className="space-y-4">
        <Divider spacing="lg" size="4xl" mobileSize="lg">
          EGGM TEAM
        </Divider>
        <div className="container w-full max-w-400 mx-auto px-4 sm:px-8 md:px-28 flex gap-10 items-center">
          <TeamCarousel />
        </div>
      </section>
      <section id="contact-us" className="py-16 md:py-24 text-white">
        <div className="space-y-4">
          <Divider spacing="lg" size="4xl" mobileSize="lg">
            Contact Us
          </Divider>
          <ContactUs />
        </div>
      </section>
      <Footer />
    </div>
  );
}
