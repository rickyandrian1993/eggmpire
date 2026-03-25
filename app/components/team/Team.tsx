"use client";

import { teamMembers } from "@/app/lib/constants/team";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Team() {
  const doubledMembers = [...teamMembers, ...teamMembers];

  return (
    <div className="w-full overflow-hidden pt-8 md:pt-12 pb-4 bg-[#1d1d1d]/50 backdrop-blur-sm rounded-3xl border border-white/5 shadow-2xl relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#323232]/75 pointer-events-none" />
      <motion.div
        className="flex gap-10 md:gap-20 px-6"
        animate={{
          x: [0, -1 * (200 + 40) * teamMembers.length], // Mobile base
        }}
        transition={{
          duration: 31,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          width: "max-content"
        }}
      >
        {doubledMembers.map((member, index) => (
          <div
            key={`${member.id}-${index}`}
            className="shrink-0 w-[200px] md:w-60 flex flex-col items-center"
          >
            <div className="w-full aspect-[4/5] bg-white rounded-2xl overflow-hidden mb-4 md:mb-6 flex items-center justify-center relative shadow-inner">
              <Image
                fill
                src={`/images/${member.image}`}
                alt={member.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-center px-2">
              <h3 className="text-white font-bold text-base md:text-lg mb-1 leading-tight">
                {member.name}
              </h3>
              <p className="text-gray-300 text-xs md:text-sm font-medium">{member.role}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
