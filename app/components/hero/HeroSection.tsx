import {
  AnimatedCard,
  AnimatedHeading,
  FadeIn,
} from "@/app/components/common/AnimatedComponents";
import Link from "next/link";
import Countdown from "./Countdown";

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-transparent">
      <div className="container max-w-6xl mx-auto px-4 py-20 text-center">
        <FadeIn direction="down" delay={0.1}>
          <div className="mb-6 inline-block px-4 py-2 bg-blue-900/30 rounded-full">
            <span className="text-blue-400 font-semibold text-sm">
              🚀 Next Generation DeFi Token
            </span>
          </div>
        </FadeIn>

        <AnimatedHeading delay={0.2}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to <span className="text-blue-400">EggMpire</span>
          </h1>
        </AnimatedHeading>

        <FadeIn direction="up" delay={0.3}>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A decentralized token ecosystem combining security, speed, and
            community governance. Join thousands building the future of digital
            finance.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <Link
              href="/about"
              className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Learn More About EGGS
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </FadeIn>

        {/* Quick Stats */}
        {/* <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-700">
          <AnimatedCard index={0} delay={0.5}>
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">1B</p>
              <p className="text-gray-400">Total Supply</p>
            </div>
          </AnimatedCard>

          <AnimatedCard index={1} delay={0.5}>
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">400M</p>
              <p className="text-gray-400">Circulating</p>
            </div>
          </AnimatedCard>

          <AnimatedCard index={2} delay={0.5}>
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">18</p>
              <p className="text-gray-400">Token Decimals</p>
            </div>
          </AnimatedCard>
        </div> */}
        <FadeIn direction="up" delay={0.5}>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ICO / ITO EggMpire Token (EGGM) until 8 August 2026
          </p>
          <div className="mb-12">
            <Countdown />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Initial DEX Offering (IDO) will be started on 9 August 2026
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

