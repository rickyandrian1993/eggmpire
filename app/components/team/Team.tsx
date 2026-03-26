"use client";

import { teamMembers } from "@/app/lib/constants/team";
import { motion } from "framer-motion";
import TeamCard from "../common/TeamCard";

export default function Team() {
  const doubledMembers = [...teamMembers, ...teamMembers];

  return (
    <div className="relative w-full overflow-hidden pt-8 md:pt-12 pb-4 bg-[#1d1d1d]/50 backdrop-blur-sm rounded-3xl border border-white/5 shadow-2xl">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#323232]/75 pointer-events-none z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex gap-10 md:gap-20 px-6"
        animate={{
          x: [0, -1 * (200 + 40) * teamMembers.length], // Mobile base
        }}
        transition={{
          duration: 31,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ width: "max-content" }}
      >
        {doubledMembers.map((member, index) => (
          <TeamCard
            id={member.id}
            key={`${member.id}-${index}`}
            name={member.name}
            role={member.role}
            image={member.image}
            focusY={member.focusY}
          />
        ))}
      </motion.div>
    </div>
  );
}
