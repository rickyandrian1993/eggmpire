import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import {
  SEO_KEYWORDS,
  TOKEN_FEATURES,
  TOKENOMICS,
} from "@/app/lib/constants/config";
import { getBreadcrumbSchema } from "@/app/lib/utils/schema";

export const metadata = {
  title: "EggMpire Tokenomics - Token Distribution & Supply",
  description:
    "Explore EggMpire (EGGS) tokenomics including total supply, distribution breakdown, and economic model. Transparent allocation across community, team, and development.",
  keywords: SEO_KEYWORDS.tokenomics,
  alternates: {
    canonical: "/services",
  },
};

export default function TokenomicsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://eggmpire.com" },
    { name: "Tokenomics", url: "https://eggmpire.com/services" },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="grow">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-linear-to-br from-blue-50 to-teal-50 dark:from-[#1d1d1d] dark:to-[#2a2a2a]">
          <div className="container max-w-6xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Tokenomics
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Transparent token distribution and economic model for sustainable
              growth
            </p>
          </div>
        </section>

        {/* Token Overview */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#1d1d1d]">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Key Metrics */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Token Specifications
                </h2>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 dark:bg-[#2a2a2a] rounded-lg">
                    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      Token Name
                    </h3>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      EggMpire
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 dark:bg-[#2a2a2a] rounded-lg">
                    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      Token Symbol
                    </h3>
                    <p className="text-2xl font-bold text-primary dark:text-blue-400">
                      EGGS
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 dark:bg-[#2a2a2a] rounded-lg">
                    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      Total Supply
                    </h3>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {TOKENOMICS.totalSupply}
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 dark:bg-[#2a2a2a] rounded-lg">
                    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      Decimals
                    </h3>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {TOKENOMICS.decimals}
                    </p>
                  </div>
                </div>
              </div>

              {/* Distribution Chart */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Supply Distribution
                </h2>
                <div className="space-y-4">
                  {TOKENOMICS.distribution.map((item) => (
                    <div key={item.category}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {item.category}
                        </span>
                        <span className="text-primary dark:text-blue-400 font-bold">
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {item.amount} tokens
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#2a2a2a]">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Token Features
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Built-in features designed for efficiency and security
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {TOKEN_FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  className="p-8 rounded-lg bg-white dark:bg-[#1d1d1d] border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vesting Schedule */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#1d1d1d]">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Token Release Schedule
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  phase: "Phase 1",
                  description: "In circulation now",
                  percentage: "40%",
                },
                {
                  phase: "Phase 2",
                  description: "Unlocks over 12 months",
                  percentage: "35%",
                },
                {
                  phase: "Phase 3",
                  description: "Unlocks over 24 months",
                  percentage: "25%",
                },
              ].map((item) => (
                <div
                  key={item.phase}
                  className="p-8 rounded-lg border-2 border-primary dark:border-blue-400 text-center"
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.phase}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                  <p className="text-4xl font-bold text-primary dark:text-blue-400">
                    {item.percentage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

