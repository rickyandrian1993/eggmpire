"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "../common/AnimatedComponents";
import Button from "../common/Button";
import RotatingText from "../RotatingText";
import CarouselTrusted from "./CarouselTrusted";
import Countdown from "./Countdown";

export default function HeroSection() {
  return (
    <section className="w-full max-w-400 mx-auto px-4 sm:px-8 md:px-28 pt-16 md:pt-20 flex flex-col gap-10 items-center min-h-screen">
      <div className="relative w-full rounded-[28px] overflow-hidden min-h-160 md:min-h-170 flex items-center">
        {/* Background Image */}
        <Image
          src="/images/hero.svg"
          alt="Egg background"
          fill
          priority
          className="object-cover object-[center_top] scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#323232]/75" />

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 p-8 pb-4 md:p-24 md:pb-4 text-white flex-1">
            {/* LEFT - 50% */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center w-full"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-[#E8A921] mb-6">
                <RotatingText />
              </h1>

              <p className="text-sm md:text-base leading-relaxed max-w-md mb-6">
                EggMpire Token (EGGM) is a 3P Token: <br />
                Planet = Sustainability of Environment <br />
                People = Social Economy <br />
                Profit = Prosperity is key to Sustainability
              </p>

              <p className="text-sm mb-10">
                Tokenizing Sustainable Eggs Production Through Blockchain.
              </p>
            </motion.div>

            {/* RIGHT - 50% */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center md:justify-end w-full"
            >
              {/* INNER COLUMN */}
              <div className="flex flex-col items-start w-full max-w-sm">
                {/* CTA */}
                <Button size="lg" className="mb-6" glow>
                  Own EGGMPire
                </Button>

                {/* CARD */}
                <div className="w-full rounded-2xl">
                  <h3 className="text-lg font-semibold mb-4">
                    Token Information:
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed max-w-md mb-6">
                    Name: Eggmpire Token <br />
                    Symbol: EGGM <br />
                    Network: Ethereum <br />
                    Standard: ERC-20 <br />
                    Contract: 0xfFBd1ac225268e94D352Ecb65Db881fd17B99EB4
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* TRUSTED BY - SEPARATE SECTION */}
          <CarouselTrusted />
        </div>
      </div>

      {/* ✅ KEEP THIS INSIDE SECTION */}
      <FadeIn direction="up" delay={0.5}>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          ICO / ITO EggMpire Token (EGGM) until 8 August 2026
        </p>
        <div className="mb-12">
          <Countdown />
        </div>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Initial DEX Offering (IDO) will be started on 9 August 2026
        </p>
      </FadeIn>
    </section>
  );
}
