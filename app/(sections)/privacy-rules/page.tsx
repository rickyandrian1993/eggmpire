import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import { SEO_KEYWORDS } from "@/app/lib/constants/config";
import { getBreadcrumbSchema } from "@/app/lib/utils/schema";
import { Metadata } from "next";
import RulesBlock from "./RulesBlock";
import RulesItem from "./RulesItem";

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
          <div className="bg-[#2a2a2a]/60 backdrop-blur-xl rounded-[28px] p-6 md:p-12 shadow-2xl">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center leading-snug">
              Privacy Policy of PT Eggmpire Bumi Lestari
            </h2>

            <div className="mt-6 space-y-6 md:space-y-8">
              <RulesBlock title="1. INTRODUCTION">
                <p>
                  This Privacy Policy explains how PT Eggmpire Bumi Lestari
                  (“We,” “Us,” or “Our”) collects, uses, shares, and protects
                  your personal information obtained through our website and
                  interest registration forms (“Initial Services”). We are
                  committed to protecting your privacy.
                </p>
              </RulesBlock>

              <RulesBlock title="2. INFORMATION WE COLLECT">
                <RulesItem label="2.1.">
                  Information You Provide Directly: The personal information we
                  request and collect includes your Name, Email address, and
                  WhatsApp number. Additionally, in the event of a token swap,
                  your wallet address will be automatically known to us.
                </RulesItem>
                <RulesItem label="2.2.">
                  Limited Data Scope: This data is limited and may include
                  information related to ownership and transactions of EGGM
                  Tokens by users on the EGGMPIRE platform, as detailed in our
                  Terms & Conditions of Service.
                </RulesItem>
                <RulesItem label="2.3.">
                  Information Collected Automatically: We may collect
                  non-personal information such as IP addresses, browser types,
                  and interaction history with our website for analytics and
                  security purposes.
                </RulesItem>
              </RulesBlock>

              <RulesBlock title="3. PURPOSE OF INFORMATION USE">
                <RulesItem label="3.1.">
                  To use your email address to send confirmations and guidance
                  for continuing the process with our partners.
                </RulesItem>
                <RulesItem label="3.2.">
                  To use data received from partners for ecosystem monitoring,
                  security, and user support as described in the Terms &
                  Conditions.
                </RulesItem>
                <RulesItem label="3.3.">
                  For Ecosystem Security and Support: To use data received from
                  partners to monitor the health of the EGGM Token ecosystem,
                  prevent misuse, and facilitate resolution of issues that token
                  holders may encounter.
                </RulesItem>
              </RulesBlock>

              <RulesBlock title="4. SHARING INFORMATION WITH THIRD PARTIES">
                <RulesItem label="4.1">
                  We do not sell, trade, or transfer your data to any other
                  third parties for any purpose.
                </RulesItem>
              </RulesBlock>

              <RulesBlock title="5. DATA RETENTION">
                <RulesItem>
                  We will retain your email address for as long as necessary to
                  fulfill the purposes outlined in this policy, or as required
                  by applicable legal provisions.
                </RulesItem>
              </RulesBlock>

              <RulesBlock title="6. YOUR RIGHTS">
                <RulesItem>You have the right to:</RulesItem>
                <RulesItem label="6.1.">
                  Access and Correction: Request access to view and correct your
                  email data.
                </RulesItem>
                <RulesItem label="6.2.">
                  Deletion: Request the deletion of your email data from our
                  systems.
                </RulesItem>
                <RulesItem label="6.3.">
                  Opt-Out: Decline to receive further communications from us. To
                  exercise these rights, you may contact us at: [Privacy Officer
                  Contact Email or Form].
                </RulesItem>
              </RulesBlock>

              <RulesBlock title="7. DATA SECURITY">
                <RulesItem>
                  We implement reasonable technical and organizational measures
                  to protect your personal information from unauthorized access,
                  disclosure, or use.
                </RulesItem>
              </RulesBlock>

              <RulesBlock title="8. CHANGES TO THIS PRIVACY POLICY">
                <RulesItem>
                  We may update this Privacy Policy from time to time. The
                  latest version will always be available on this page,
                  indicating the “Last Updated” date.
                </RulesItem>
              </RulesBlock>

              <RulesBlock title="9. CONTACT US">
                <RulesItem>
                  If you have any questions about this Privacy Policy, please
                  contact:
                </RulesItem>
                <p>Data Privacy Officer</p>
                <p>PT Eggmpire Bumi Lestari</p>
                <p>Email: admin@eggmpire.com</p>
              </RulesBlock>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

