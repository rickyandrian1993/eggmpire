"use client";

import { motion } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Retno Dewi Hendrastuti",
    role: "Director of PT Eggmpire Bumi Lestari",
    image: "/teams/Retno.svg",
  },
  {
    id: 2,
    name: "Meutia Amanda",
    role: "Supervisor of Equator Bumi Lestari Foundation",
    image: "/teams/Meutia.svg",
  },
  {
    id: 3,
    name: "Julius Robinson",
    role: "Chairman of Equator Bumi Lestari Foundation",
    image: "/teams/Julius.svg",
  },
  {
    id: 4,
    name: "Randy Rinaldy Setyawan",
    role: "Chief Supervisor of Equator Bumi Lestari Foundation",
    image: "/teams/Randy.svg",
  },
  {
    id: 5,
    name: "Mayor Jendral Purnawirawan A. Ary Karyono S.H, M.Si.",
    role: "Supervisor of Equator Bumi Lestari Foundation",
    image: "/teams/Mayor.svg",
  },
  {
    id: 6,
    name: "Riko Kurniawan",
    role: "Supervisor of Equator Bumi Lestari Foundation",
    image: "/teams/Riko.svg",
  },
  {
    id: 7,
    name: "Dr. Prayoto",
    role: "Supervisor of Equator Bumi Lestari Foundation",
    image: "/teams/Prayoto.svg",
  },
  {
    id: 8,
    name: "Ir. Aris Kabul Pranoto, M.Si",
    role: "Supervisor of Equator Bumi Lestari Foundation",
    image: "/teams/Aris.svg",
  },
  {
    id: 9,
    name: "Raymond Mickey Hernawan",
    role: "Finance of Equator Bumi Lestari Foundation",
    image: "/teams/Raymond.svg",
  },
  {
    id: 10,
    name: "Maxi Franky",
    role: "Secretary of Equator Bumi Lestari Foundation",
    image: "/teams/Maxi.svg",
  },
  {
    id: 11,
    name: "Joko Soemitro",
    role: "CEO PT Solusi Semesta Berjaya",
    image: "/teams/Joko.svg",
  },
];

export default function TeamCarousel() {
  const doubledMembers = [...teamMembers, ...teamMembers];

  return (
    <div className="w-full overflow-hidden py-12 bg-[#1d1d1d]/50 backdrop-blur-sm rounded-3xl border border-white/5 shadow-2xl">
      <div className="relative">
        <motion.div
          className="flex gap-6 px-6"
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
              className="flex-shrink-0 w-[240px] flex flex-col items-center"
            >
              <div className="w-[240px] h-[300px] bg-white rounded-2xl overflow-hidden mb-6 flex items-center justify-center relative shadow-inner">
                <img
                  src={`../images/${member.image}`}
                  alt="Research Image"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-center px-2">
                <h3 className="text-white font-bold text-lg mb-1 leading-tight">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
