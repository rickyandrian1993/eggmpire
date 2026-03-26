"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Planet", "People", "Profit"];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1500); // 👈 pause duration (adjust here)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[1.2em] justify-items-center md:justify-items-normal overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{
            duration: 0.4, // 👈 scroll speed
            ease: "easeOut",
          }}
          className="h-[1.2em] flex items-center"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
