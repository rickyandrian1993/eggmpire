import ContactUs from "@/app/components/contactus/ContactUs";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import HeroSection from "@/app/components/hero/HeroSection";
import { getBreadcrumbSchema } from "@/app/lib/utils/schema";
import Divider from "./components/common/Divider";
import Description from "./components/description/Description";
import Team from "./components/team/Team";

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
      <section
        id="hero"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 items-center min-h-screen"
      >
        <HeroSection />
      </section>

      {/* Description */}
      <Divider spacing="lg" size="4xl" mobileSize="2xl">
        WHAT Is EggMpire Token (EGGM)
      </Divider>
      <section
        id="description"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <Description />
      </section>

      {/* Team Section */}
      <Divider spacing="lg" size="4xl" mobileSize="2xl">
        EGGM TEAM
      </Divider>
      <section
        id="team"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <Team />
      </section>

      {/* Contact Us */}
      <Divider spacing="lg" size="4xl" mobileSize="2xl">
        Contact Us
      </Divider>
      <section
        id="contact-us"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
      >
        <ContactUs />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
