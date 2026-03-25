"use client";

import { teamMembers } from "@/app/lib/constants/team";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Team() {
  const doubledMembers = [...teamMembers, ...teamMembers];

  return (
    <div className="w-full overflow-hidden pt-12 pb-4 bg-[#1d1d1d]/50 backdrop-blur-sm rounded-3xl border border-white/5 shadow-2xl">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#323232]/75" />
      <motion.div
        className="flex gap-20 px-6"
        animate={{
          x: [0, -1 * (240 + 24) * teamMembers.length],
        }}
        transition={{
          duration: 31,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubledMembers.map((member, index) => (
          <div
            key={`${member.id}-${index}`}
            className="shrink-0 w-60 flex flex-col items-center"
          >
            <div className="w-60 h-75 bg-white rounded-2xl overflow-hidden mb-6 flex items-center justify-center relative shadow-inner">
              <Image
                fill
                src={`../images/${member.image}`}
                alt="Research Image"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-center px-2">
              <h3 className="text-white font-bold text-lg mb-1 leading-tight">
                {member.name}
              </h3>
              <p className="text-gray-300 text-sm font-medium">{member.role}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
