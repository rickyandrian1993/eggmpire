import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import { SEO_KEYWORDS } from "@/app/lib/constants/config";
import { getBreadcrumbSchema } from "@/app/lib/utils/schema";
import { Metadata } from "next";
import TermsContent from "./Content";

export const metadata: Metadata = {
  title: "Privacy Policy | PT Eggmpire Bumi Lestari",
  description:
    "Learn how PT Eggmpire Bumi Lestari collects, uses, and protects your personal data. Read our privacy policy regarding EGGM Token ecosystem and user data security.",

  keywords: SEO_KEYWORDS.terms,

  openGraph: {
    title: "Terms & Conditions | Eggmpire",
    description:
      "Understand your rights, obligations, and risks when using the Eggmpire platform.",
    url: "https://www.eggmpire.com/terms",
    siteName: "Eggmpire",
    type: "website",
  },
};

export default function Terms() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.eggmpire.com" },
    { name: "Terms & Conditions", url: "https://www.eggmpire.com/terms" },
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
          <TermsContent />
        </section>
      </main>

      <Footer />
    </div>
  );
}

