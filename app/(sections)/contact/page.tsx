import ContactForm from "@/app/components/common/ContactForm";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import { getBreadcrumbSchema } from "@/app/lib/utils/schema";

export const metadata = {
  title: "Contact EggMpire - Get in Touch with Our Team",
  description:
    "Have questions about EggMpire (EGGS) token? Contact our team directly or join our Discord and Telegram communities for support.",
  keywords: [
    "contact EggMpire",
    "EGGS token support",
    "DeFi support",
    "customer service",
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://eggmpire.com" },
    { name: "Contact", url: "https://eggmpire.com/contact" },
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
        <section className="py-16 md:py-24 bg-linear-to-br from-[#1d1d1d] to-[#2a2a2a]">
          <div className="container max-w-6xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">
              Contact EggMpire
            </h1>
            <p className="text-xl text-gray-300">
              Questions about EGGS? Get in touch with our team or join our
              community channels.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24 bg-[#1d1d1d]">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {[
                {
                  icon: "📧",
                  title: "Email",
                  content: "hello@eggmpire.com",
                },
                { icon: "💬", title: "Discord", content: "Join our community" },
                { icon: "🐦", title: "Twitter", content: "@eggmpire" },
              ].map((contact) => (
                <div key={contact.title} className="text-center">
                  <div className="text-5xl mb-4">{contact.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-gray-400">{contact.content}</p>
                </div>
              ))}
            </div>

            {/* Contact Form Component */}
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

