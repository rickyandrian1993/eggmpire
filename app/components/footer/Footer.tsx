"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../common/Button";

export default function Footer() {
  return (
    <footer className="relative w-full px-6 md:px-12 lg:px-20 py-8 text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[#323232]/75 backdrop-blur-xl rounded-t-[2.5rem] md:rounded-t-[4rem]" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16"
      >
        {/* LEFT - BRAND */}
        <div className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
          <div className="relative w-32 h-32 md:w-42 md:h-42">
            <Image
              src="/images/verticalLogo.svg"
              alt="Eggmpire Logo"
              fill
              className="object-contain"
            />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-[#E8A921]">
            Planet • People • Profit
          </h3>

          <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-sm m-0">
            Planet = Sustainability of Environment <br />
            People = Social Economy <br />
            Profit = Prosperity is key to Sustainability
          </p>
        </div>

        {/* MIDDLE - LINKS */}
        <div className="sm:justify-self-center lg:justify-self-end text-center sm:text-left">
          <p className="text-xs md:text-sm text-gray-500 mb-6 uppercase tracking-widest font-bold">
            • Quick Link
          </p>

          <ul className="space-y-4 text-sm md:text-base">
            {[
              "Home",
              "Privacy Rule",
              "Terms & Conditions",
              "Blog",
              "Contact Us",
            ].map((item, i) => (
              <li
                key={i}
                className="group w-fit mx-auto sm:mx-0 cursor-pointer"
              >
                <span className="relative text-gray-400 group-hover:text-white transition-colors duration-300">
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#E8A921] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT - SOCIAL */}
        <div className="sm:col-span-2 lg:col-span-1 sm:justify-self-center lg:justify-self-end text-center lg:text-left mt-8 lg:mt-0">
          <p className="text-xs md:text-sm text-gray-500 mb-6 uppercase tracking-widest font-bold">
            • socials
          </p>

          <div className="flex gap-4 justify-center lg:justify-start">
            {[
              { src: "/icons/x.svg", alt: "X" },
              { src: "/icons/ig.svg", alt: "Instagram" },
              { src: "/icons/tt.svg", alt: "TikTok" },
            ].map((item, i) => (
              <Button
                key={i}
                variant="icon"
                size="icon"
                glow
                className="transition-all"
              >
                <Image src={item.src} alt={item.alt} width={20} height={20} />
              </Button>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
