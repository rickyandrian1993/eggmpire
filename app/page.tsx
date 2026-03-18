import {
  AnimatedCard,
  FadeIn,
} from "@/app/components/common/AnimatedComponents";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import HeroSection from "@/app/components/hero/HeroSection";
import { TOKEN_FEATURES, TOKENOMICS } from "@/app/lib/constants/config";
import { getBreadcrumbSchema } from "@/app/lib/utils/schema";
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

      <Divider>WHAT Is EggMpire Token (EGGM)</Divider>

      {/* Token Features Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose EggMpire?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover the key features that make EggMpire the future of
              decentralized finance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TOKEN_FEATURES.map((feature, index) => (
              <AnimatedCard key={feature.id} index={index} delay={0.1}>
                <div className="p-6 rounded-lg bg-gray-50 dark:bg-[#2a2a2a] hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Tokenomics
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Transparent token distribution designed for long-term
              sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Stats */}
            <div className="space-y-6">
              <FadeIn direction="left" delay={0.1}>
                <div className="p-6 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    Total Supply
                  </h3>
                  <p className="text-3xl font-bold text-primary dark:text-blue-400">
                    {TOKENOMICS.totalSupply} EGGS
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <div className="p-6 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    Circulating Supply
                  </h3>
                  <p className="text-3xl font-bold text-primary dark:text-blue-400">
                    {TOKENOMICS.circulatingSupply} EGGS
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.3}>
                <div className="p-6 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    Token Decimals
                  </h3>
                  <p className="text-3xl font-bold text-primary dark:text-blue-400">
                    {TOKENOMICS.decimals}
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Distribution */}
            <FadeIn direction="right" delay={0.2}>
              <div className="rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Supply Distribution
                </h3>
                <div className="space-y-4">
                  {TOKENOMICS.distribution.map((item, index) => (
                    <AnimatedCard key={item.category} index={index} delay={0.1}>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {item.category}
                          </span>
                          <span className="text-primary dark:text-blue-400 font-bold">
                            {item.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {item.amount} tokens
                        </p>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
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
      </section>

      <Footer />
    </div>
  );
}

