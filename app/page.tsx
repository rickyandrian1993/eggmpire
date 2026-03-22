import { FadeIn } from "@/app/components/common/AnimatedComponents";
import ContactUs from "@/app/components/common/ContactUs";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import HeroSection from "@/app/components/hero/HeroSection";
import TeamCarousel from "@/app/components/team/TeamCarousel";
import { getBreadcrumbSchema } from "@/app/lib/utils/schema";
import Divider from "./components/common/Divider";
import Button from "@/app/components/common/Button";

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
              <div className="bg-[#2a2a2a]/90 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-2xl border border-white/5">
                <div className="w-full md:w-1/2 aspect-square relative rounded-3xl overflow-hidden shadow-xl">
                  <div className="w-full h-full bg-linear-to-br from-yellow-500/20 to-orange-900/40 flex items-center justify-center border border-white/10">
                    {/* Placeholder for Problem Image */}
                    <span className="text-white/20 text-lg font-bold">
                      <img
                        src="/images/theproblem.svg"
                        alt="Research Image"
                        className="w-full h-full object-cover"
                      />
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    The Problem
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
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
              <div className="bg-[#2a2a2a]/90 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-2xl border border-white/5">
                <div className="w-full md:w-1/2 aspect-square relative rounded-3xl overflow-hidden shadow-xl">
                  <div className="w-full h-full bg-linear-to-br from-blue-500/20 to-indigo-900/40 flex items-center justify-center border border-white/10">
                    {/* Placeholder for Research Image */}
                    <span className="text-white/20 text-lg font-bold">
                      <img
                        src="/images/researchandinnovation.svg"
                        alt="Research Image"
                        className="w-full h-full object-cover"
                      />
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Research and Innovation
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg font-bold text-white uppercase tracking-wider">
                      OUR EGGCOLOGIC Bio Conversion Eggs Farm is THE SOLUTION:
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
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

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <Button size="lg" glow>
            Download<br/>EGGMPIRE Whitepaper
          </Button>
          <Button size="lg" glow>
            The Etherium<br/>Smart Contracts
          </Button>
        </div>
      </div>
      <div className="space-y-4 container max-w-6xl mx-auto px-4">
        <Divider spacing="lg" size="4xl" mobileSize="lg">
          EGGM TEAM
        </Divider>
        <TeamCarousel />
      </div>
      <section id="contact-us" className="py-16 md:py-24 text-white">
        <div className="space-y-4">
          <Divider spacing="lg" size="4xl" mobileSize="lg">
            Contact Us
          </Divider>
          <ContactUs />
        </div>
      </section>

      {/* <section className="py-16 md:py-24 text-white">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Join the EggMpire?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of the next generation of decentralized finance. Get your
            EGGS tokens today.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
            <a
              href="#"
              className="inline-block px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Read Whitepaper
            </a>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
