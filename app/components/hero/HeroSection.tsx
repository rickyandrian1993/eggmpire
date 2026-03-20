"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "../common/AnimatedComponents";
import Button from "../common/Button";
import Countdown from "./Countdown";

export default function HeroSection() {
  return (
    <section className="w-full px-12 md:px-30 flex flex-col gap-10 justify-center items-center min-h-[90vh] md:min-h-screen">
      <div className="relative w-full rounded-[28px] overflow-hidden min-h-162.5 md:min-h-200 flex items-center">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 p-8 md:p-24 text-white flex-1">
            {/* LEFT - 50% */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center w-full"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6">
                Planet
              </h1>

              <p className="text-sm md:text-base leading-relaxed max-w-md mb-6">
                EggMpire Token (EGGM) is a 3P Token: <br />
                Planet = Sustainability of Environment <br />
                People = Social Economy <br />
                Profit = Prosperity is key to Sustainability
              </p>

              <p className="text-sm text-gray-400 mb-10">
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
                <Button size="lg" className="mb-6">
                  Own EGGMPire
                </Button>

                {/* CARD */}
                <div className="w-full rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Token Information:
                  </h3>

                  <ul className="text-sm space-y-3">
                    <li>
                      <span className="text-gray-400">Name:</span> Eggmpire
                      Token
                    </li>
                    <li>
                      <span className="text-gray-400">Symbol:</span> EGGM
                    </li>
                    <li>
                      <span className="text-gray-400">Network:</span> Ethereum
                    </li>
                    <li>
                      <span className="text-gray-400">Standard:</span> ERC-20
                    </li>
                    <li className="break-all">
                      <span className="text-gray-400">Contract:</span>{" "}
                      0xffBd1ac...
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          {/* TRUSTED BY - SEPARATE SECTION */}
          <div className="w-full px-12 md:px-24 ">
            <p className="text-gray-500 text-sm">Trusted By</p>
            <div className="w-full overflow-hidden rounded-3xl">
              <div className="relative w-full">
                <motion.div
                  className="flex gap-6 px-6"
                  animate={{
                    x: [0, -1 * (96 + 24) * 10],
                  }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {Array(20)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        key={index}
                        className="shrink-0 w-24 flex flex-col items-center"
                      >
                        <div className="w-20 h-20 bg-white rounded-xl overflow-hidden mb-4 flex items-center justify-center relative shadow-md border border-white/10">
                          <div className="w-full h-full bg-linear-to-br from-gray-100 to-gray-300 flex items-center justify-center text-xs font-semibold text-gray-600">
                            Logo
                          </div>
                        </div>
                      </div>
                    ))}
                </motion.div>
              </div>
            </div>
          </div>
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
