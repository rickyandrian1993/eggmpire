"use client";

import { TeamMember } from "@/app/lib/constants/team";
import Image from "next/image";

export default function TeamCard({ name, role, image, focusY }: TeamMember) {
  console.log("name", name);
  return (
    <div className="shrink-0 w-40 sm:w-48 md:w-60 flex flex-col items-center">
      {/* Image */}
      <div className="w-full aspect-4/5 bg-white rounded-2xl overflow-hidden relative shadow-inner">
        <Image
          fill
          src={`/images/${image}`}
          alt={name}
          sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 240px"
          className="object-cover transition-all duration-500"
          style={{ objectPosition: `center ${focusY}%` }}
        />
      </div>

      {/* Text */}
      <div className="text-center mt-3 md:mt-4 px-2">
        <h3 className="text-white font-bold text-sm md:text-lg leading-tight">
          {name}
        </h3>
        <p className="text-xs md:text-sm">{role}</p>
      </div>
    </div>
  );
}
