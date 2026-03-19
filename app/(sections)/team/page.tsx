import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import { SEO_KEYWORDS } from "@/app/lib/constants/config";
import { getBreadcrumbSchema } from "@/app/lib/utils/schema";

export const metadata = {
  title: "EggMpire Team - Meet Our Blockchain Experts",
  description:
    "Meet the talented team behind EggMpire. Our diverse group of blockchain developers, strategists, and community leaders are building the future of DeFi.",
  keywords: SEO_KEYWORDS.team,
  alternates: {
    canonical: "/team",
  },
};

export default function TeamPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://eggmpire.com" },
    { name: "Team", url: "https://eggmpire.com/team" },
  ]);

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "👩‍💼",
    },
    {
      name: "Michael Johnson",
      role: "CTO",
      image: "👨‍💻",
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead",
      image: "👩‍🎨",
    },
    {
      name: "James Wilson",
      role: "Lead Developer",
      image: "👨‍💼",
    },
    {
      name: "Lisa Anderson",
      role: "Project Manager",
      image: "👩‍💼",
    },
    {
      name: "David Lee",
      role: "DevOps Engineer",
      image: "👨‍💻",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="grow">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-transparent">
          <div className="container max-w-6xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Our Team</h1>
            <p className="text-xl text-gray-300">
              Meet the blockchain experts and visionaries building EggMpire
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 md:py-24 bg-transparent">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="text-center p-6 rounded-lg bg-[#2a2a2a] hover:shadow-lg transition-shadow"
                >
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold">{member.role}</p>
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

