'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

interface SwapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SwapModal({ isOpen, onClose }: SwapModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="relative bg-[#212121] rounded-3xl shadow-2xl w-full max-w-xl mx-4 p-8 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-2xl">&times;</span>
            </button>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-yellow-400">EGGM Sustainable Swap</h2>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full">
                  <Image src="/icons/usdc.svg" alt="USDC" width={20} height={20} />
                  <span className="text-white font-medium">USDC</span>
                </div>
                <Image src="/icons/cycle.svg" alt="Cycle" width={20} height={20} />
                <div className="flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full">
                  <Image src="/icons/eggmpirelogo.svg" alt="EGGM" width={20} height={20} />
                  <span className="text-white font-medium">EGGM</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-2xl mb-6">
              <p className="text-sm text-gray-400 mb-4">STEP 1: Register Your Account</p>
              <div className="space-y-4">
                <div className="relative">
                  <div className="relative flex items-center">
                    <Image src="/icons/user.svg" alt="User" width={20} height={20} className="absolute left-3 pointer-events-none" />
                    <input type="text" placeholder="Full Name" className="w-full bg-gray-900/70 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                  </div>
                </div>
                <div className="relative">
                  <div className="relative flex items-center">
                    <Image src="/icons/mail.svg" alt="User" width={20} height={20} className="absolute left-3 pointer-events-none" />
                    <input type="email" placeholder="Email" className="w-full bg-gray-900/70 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                  </div>
                </div>
                <div className="relative">
                  <div className="relative flex items-center">
                    <Image src="/icons/phone.svg" alt="Phone" width={20} height={20} className="absolute left-3 pointer-events-none" />
                    <input type="tel" placeholder="WhatsApp Number" className="w-full bg-gray-900/70 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                  </div>
                </div>
              </div>
              <button className="w-full bg-yellow-400 text-white font-normal py-3 rounded-lg mt-6 hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                Connect Wallet
                <Image src="/icons/wallet.svg" alt="Arrow Right" width={20} height={20} className="ml-2" />
              </button>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-2xl">
              <p className="text-sm text-gray-400 mb-4">STEP 2: Configure Swap Amount</p>
              <div className="relative">
                <div className="relative flex items-center">
                  <div className="absolute left-3 flex items-center pointer-events-none">
                    <Image src="/icons/eggmpirelogo.svg" alt="EGGM" width={20} height={20} />
                    <span className="text-white font-medium ml-2">EGGM</span>
                    <span className="text-gray-500">|</span>
                  </div>
                  <input type="number" placeholder="EGGMPIRE Amount (min 100, multiple of 100)" className="w-full bg-gray-900/70 border border-gray-700 rounded-lg pl-24 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>
              </div>
              <button className="w-full bg-yellow-400 text-white font-bold py-3 rounded-lg mt-6 hover:bg-yellow-500 transition-colors flex items-center justify-center gap-1">
                <span>Swap (</span>
                <Image src="/icons/usdc.svg" alt="USDC" width={20} height={20} />
                <span>USDC → </span>
                <Image src="/icons/eggmpirelogo.svg" alt="EGGM" width={20} height={20} />
                <span>EGGM)</span>
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">By Swapping, you agree to our terms of service</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (isMounted) {
    return createPortal(modalContent, document.body);
  }

  return null;
}
