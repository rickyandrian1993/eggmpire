"use client";

import { useState } from "react";
import { getServerNow, targetTime } from "@/app/lib/time";
import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "../common/AnimatedComponents";
import Button from "../common/Button";
import Countdown from "../countdown/Countdown";
import RotatingText from "../RotatingText";
import CarouselTrusted from "./CarouselTrusted";
import SwapModal from "../common/SwapModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative w-full rounded-[28px] overflow-hidden min-h-[500px] md:min-h-160 lg:min-h-170 flex items-center">
        {/* Background Image */}
        <Image
          src="/images/hero.svg"
          alt="Egg background"
          fill
          priority
          className="object-cover object-top md:object-[center_top] scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#323232]/75 md:bg-[#323232]/75" />

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col h-full py-12 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 p-6 md:p-12 lg:p-24 text-white flex-1">
            {/* LEFT - 50% */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center w-full text-center md:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E8A921] mb-4 md:mb-6">
                <RotatingText />
              </h1>

              <p className="text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0 mb-4 md:mb-6">
                EggMpire Token (EGGM) is a 3P Token: <br />
                Planet = Sustainability of Environment <br />
                People = Social Economy <br />
                Profit = Prosperity is key to Sustainability
              </p>

              <p className="text-xs md:text-sm mb-6 md:mb-10 opacity-80">
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
              <div className="flex flex-col items-center md:items-start w-full max-w-sm">
                {/* CTA */}
                <Button 
                  size="lg" 
                  className="mb-8 md:mb-6 w-full md:w-auto" 
                  glow
                  onClick={() => setIsModalOpen(true)}
                >
                  Own EGGMPire
                </Button>

                {/* CARD */}
                <div className="w-full rounded-2xl p-6 md:p-0">
                  <h3 className="text-base md:text-lg font-semibold mb-4 text-center md:text-left">
                    Token Information:
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base leading-relaxed max-w-md text-center md:text-left opacity-90">
                    Name: Eggmpire Token <br />
                    Symbol: EGGM <br />
                    Network: Ethereum <br />
                    Standard: ERC-20 <br />
                    <span className="break-all">
                      Contract: 0xfFBd1ac225268e94D352Ecb65Db881fd17B99EB4
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* TRUSTED BY - SEPARATE SECTION */}
          <CarouselTrusted />
        </div>
      </div>

      <FadeIn
        direction="up"
        delay={0.5}
        className="w-full text-center py-12 px-4"
      >
        <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto leading-tight">
          ICO / ITO EggMpire Token (EGGM) until 8 August 2026
        </p>
        <div className="mb-4 md:mb-2">
          <Countdown targetTime={targetTime} serverNow={getServerNow()} />
        </div>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-tight">
          Initial DEX Offering (IDO) will be started on 9 August 2026
        </p>
      </FadeIn>

      <SwapModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
