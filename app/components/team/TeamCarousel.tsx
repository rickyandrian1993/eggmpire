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
    image: "/team/member1.jpg",
  },
  {
    id: 2,
    name: "Meutia Amanda",
    role: "Supervisor of Equator Bumi Lestari Foundation",
    image: "/team/member2.jpg",
  },
  {
    id: 3,
    name: "Julius Robinson",
    role: "Chairman of Equator Bumi Lestari Foundation",
    image: "/team/member3.jpg",
  },
  {
    id: 4,
    name: "Randy Rinaldy Setyawan",
    role: "Chief Supervisor of Equator Bumi Lestari Foundation",
    image: "/team/member4.jpg",
  },
  {
    id: 5,
    name: "Mayor Jendral Purnawirawan A. Ary Karyono S.H, M.Si.",
    role: "Supervisor of Equator Bumi Lestari Foundation",
    image: "/team/member5.jpg",
  },
  {
    id: 6,
    name: "Riko Kurniawan",
    role: "Supervisor of Equator Bumi Lestari Foundation",
    image: "/team/member6.jpg",
  },
  {
    id: 7,
    name: "Dr. Prayoto",
    role: "Supervisor of Equator Bumi Lestari Foundation",
    image: "/team/member7.jpg",
  },
  {
    id: 8,
    name: "Ir. Aris Kabul Pranoto, M.Si",
    role: "Supervisor of Equator Bumi Lestari Foundation",
    image: "/team/member8.jpg",
  },
  {
    id: 9,
    name: "Raymond Mickey Hernawan",
    role: "Finance of Equator Bumi Lestari Foundation",
    image: "/team/member9.jpg",
  },
  {
    id: 10,
    name: "Maxi Franky",
    role: "Secretary of Equator Bumi Lestari Foundation",
    image: "/team/member10.jpg",
  },
  {
    id: 11,
    name: "Joko Soemitro",
    role: "CEO PT Solusi Semesta Berjaya",
    image: "/team/member11.jpg",
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
            x: [0, -1 * (280 + 24) * teamMembers.length],
          }}
          transition={{
            duration: 11,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {doubledMembers.map((member, index) => (
            <div
              key={`${member.id}-${index}`}
              className="flex-shrink-0 w-[280px] flex flex-col items-center"
            >
              <div className="w-[240px] h-[240px] bg-white rounded-2xl overflow-hidden mb-6 flex items-center justify-center relative shadow-inner">
                {/* Sementara belum ada asset */}
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-400">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                {/* Kalau udah ada pakai yang ini
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                */}
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
