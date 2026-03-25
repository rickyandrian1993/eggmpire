"use client";

import { fadeInUp } from "@/app/lib/animation";
import { motion } from "framer-motion";

export default function TermsBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="space-y-3 md:space-y-4"
      whileHover={{ scale: 1.01 }}
    >
      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white/90">
        {title}
      </h3>
      <div className="space-y-2 text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
