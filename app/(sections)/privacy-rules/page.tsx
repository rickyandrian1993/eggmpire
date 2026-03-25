import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import { SEO_KEYWORDS } from "@/app/lib/constants/config";
import { getBreadcrumbSchema } from "@/app/lib/utils/schema";
import { Metadata } from "next";
import RulesContent from "./Content";

export const metadata: Metadata = {
  title: "Privacy Policy | PT Eggmpire Bumi Lestari",
  description:
    "Learn how PT Eggmpire Bumi Lestari collects, uses, and protects your personal data. Read our privacy policy regarding EGGM Token ecosystem and user data security.",

  keywords: SEO_KEYWORDS.privacyRules,

  openGraph: {
    title: "Privacy Policy | PT Eggmpire Bumi Lestari",
    description:
      "Understand how your data is handled, stored, and protected within the Eggmpire ecosystem.",
    url: "https://www.eggmpire.com/privacy-policy",
    siteName: "Eggmpire",
    type: "website",
  },
};

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.eggmpire.com" },
    { name: "Privacy Rules", url: "https://www.eggmpire.com/privacy-rules" },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="grow">
        {/* Content */}
        <section
          id="contact-us"
          className="w-full max-w-400 mx-auto px-4 sm:px-8 md:px-28 pb-12"
        >
          <RulesContent />
        </section>
      </main>

      <Footer />
    </div>
  );
}

