"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../common/Button";

export default function Footer() {
  return (
    <footer className="relative w-full px-6 md:px-20 py-8 text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[#323232]/75 backdrop-blur-xl rounded-t-4xl" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14"
      >
        {/* LEFT - BRAND */}
        <div className="flex flex-col gap-2">
          <div className="relative w-42 h-42">
            <Image
              src="/images/verticalLogo.svg"
              alt="Eggmpire Logo"
              fill
              className="object-contain"
            />
          </div>

          <h3 className="text-3xl font-semibold text-white">
            Planet • People • Profit
          </h3>

          <p className="text-sm text-white leading-relaxed max-w-sm m-0">
            Planet = Sustainability of Environment <br />
            People = Social Economy <br />
            Profit = Prosperity is key to Sustainability
          </p>
        </div>

        {/* MIDDLE - LINKS */}
        <div className="justify-self-end">
          <p className="text-sm text-gray-500 mb-4">• Home</p>

          <ul className="space-y-3 text-sm">
            {[
              "Home",
              "Privacy Rule",
              "Terms & Conditions",
              "Blog",
              "Contact Us",
            ].map((item, i) => (
              <li key={i} className="group w-fit cursor-pointer">
                <span className="relative text-gray-300 group-hover:text-white transition">
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT - SOCIAL */}
        <div className="justify-self-end">
          <p className="text-sm text-gray-500 mb-4">• Socials</p>

          <div className="flex gap-4">
            {[
              { src: "/icons/x.svg", alt: "X" },
              { src: "/icons/ig.svg", alt: "Instagram" },
              { src: "/icons/tt.svg", alt: "TikTok" },
            ].map((item, i) => (
              <Button key={i} variant="icon" size="icon" glow>
                <Image src={item.src} alt={item.alt} width={20} height={20} />
              </Button>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
