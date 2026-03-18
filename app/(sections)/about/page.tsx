import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import { SEO_KEYWORDS } from "@/app/lib/constants/config";
import { getBreadcrumbSchema } from "@/app/lib/utils/schema";

export const metadata = {
  title: "About EggMpire - DeFi Token Project & Mission",
  description:
    "Discover EggMpire's mission, vision, and commitment to building a transparent, community-driven DeFi ecosystem. Learn about our values and what drives our innovation.",
  keywords: SEO_KEYWORDS.about,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://eggmpire.com" },
    { name: "About", url: "https://eggmpire.com/about" },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-linear-to-br from-blue-50 to-teal-50 dark:from-[#1d1d1d] dark:to-[#2a2a2a]">
          <div className="container max-w-6xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About EggMpire
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Building the future of decentralized finance through transparency
              and community governance
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#1d1d1d]">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  EggMpire is committed to democratizing access to decentralized
                  finance through a secure, efficient, and community-governed
                  token ecosystem. We believe in the power of blockchain
                  technology to create transparent, trustless financial systems.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Our mission is to provide fast, affordable, and accessible
                  financial solutions while maintaining the highest standards of
                  security and transparency. Every member of the EggMpire
                  community has a voice in our governance decisions.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Core Values
                </h2>
                <ul className="space-y-3">
                  {[
                    "Decentralization and transparency",
                    "Community governance and participation",
                    "Security through audited smart contracts",
                    "Innovation in blockchain technology",
                    "Accessibility for all users",
                    "Long-term sustainability",
                  ].map((value) => (
                    <li key={value} className="flex items-start gap-3">
                      <span className="text-primary dark:text-blue-400 font-bold">
                        ✓
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 pt-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Why Trust EggMpire?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Audited Contracts",
                    description:
                      "All smart contracts undergo rigorous security audits by independent firms",
                  },
                  {
                    title: "Community Driven",
                    description:
                      "Token holders vote on major protocol decisions and treasury allocation",
                  },
                  {
                    title: "Transparent",
                    description:
                      "Full access to our blockchain transactions and governance proposals",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="text-center p-6 bg-gray-50 dark:bg-[#2a2a2a] rounded-lg"
                  >
                    <h3 className="text-2xl font-bold text-primary dark:text-blue-400 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

