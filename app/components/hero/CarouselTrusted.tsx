import { motion } from "framer-motion";

export default function CarouselTrusted() {
  return (
    <div className="w-full px-6 md:px-12 lg:px-24 mb-6 md:mb-12">
      <p className="text-xs md:text-sm font-medium mb-4 text-white/60 text-center md:text-left">Trusted By</p>
      <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 py-4 md:py-6">
        <div className="relative w-full">
          <motion.div
            className="flex gap-4 md:gap-8 px-4 md:px-6"
            animate={{
              x: [0, -1 * (80 + 16) * 10], // Adjusted for mobile width (80) + gap (16)
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {Array(20)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="shrink-0 w-20 md:w-24 flex flex-col items-center"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-lg md:rounded-xl overflow-hidden flex items-center justify-center relative shadow-sm border border-white/5">
                    <div className="w-full h-full bg-linear-to-br from-white/5 to-white/10 flex items-center justify-center text-[10px] md:text-xs font-semibold text-white/40">
                      Logo
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
