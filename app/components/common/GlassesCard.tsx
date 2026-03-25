"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function GlassesCard({ children }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        w-full 
        bg-white/5 
        backdrop-blur-xl 
        border border-white/10 
        rounded-2xl md:rounded-3xl 
        p-5 sm:p-6 md:p-10 
        shadow-xl
      "
    >
      {children}
    </motion.div>
  );
}
