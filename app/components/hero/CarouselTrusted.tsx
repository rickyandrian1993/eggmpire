import { motion } from "framer-motion";

export default function CarouselTrusted() {
  return (
    <div className="w-full px-12 md:px-24 ">
      <p className="text-sm">Trusted By</p>
      <div className="w-full overflow-hidden rounded-3xl">
        <div className="relative w-full">
          <motion.div
            className="flex gap-6 px-6"
            animate={{
              x: [0, -1 * (96 + 24) * 10],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {Array(20)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="shrink-0 w-24 flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-white rounded-xl overflow-hidden mb-4 flex items-center justify-center relative shadow-md border border-white/10">
                    <div className="w-full h-full bg-linear-to-br from-gray-100 to-gray-300 flex items-center justify-center text-xs font-semibold text-gray-600">
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
