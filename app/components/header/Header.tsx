"use client";

import { NAV_LINKS } from "@/app/lib/constants/config";
import { cn } from "@/app/lib/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../common/Button";
import SwapModal from "../common/SwapModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        !isScrolled && "bg-transparent border-transparent",
        isScrolled &&
          "bg-[#1d1d1d]/80 border-white/10 backdrop-blur-xl shadow-lg shadow-black/20",
      )}
    >
      <div className="container max-w-6xl mx-auto px-3 sm:px-4 py-3 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-2 min-w-0">
          {/* Burger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 shrink-0"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "block w-5 h-0.5 bg-gray-300 transition-all duration-300",
                isMenuOpen && "rotate-45 translate-y-1.5",
              )}
            />
            <span
              className={cn(
                "block w-5 h-0.5 bg-gray-300 transition-all duration-300",
                isMenuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block w-5 h-0.5 bg-gray-300 transition-all duration-300",
                isMenuOpen && "-rotate-45 -translate-y-1.5",
              )}
            />
          </button>

          {/* Logo */}
          <div className="relative w-22.5 sm:w-27.5 md:w-30 shrink">
            <Image
              src="/logo.svg"
              alt="Eggmpire Logo"
              width={100}
              height={32}
              className="w-22.5 sm:w-27.5 md:w-30 h-auto"
              priority
            />
          </div>
        </div>

        {/* CENTER (Desktop) */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-[#E8A921] font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center shrink-0">
          <Button
            variant="primary"
            glow
            className="text-xs sm:text-sm md:text-base px-2 sm:px-4 md:px-5 py-1.5 sm:py-2 whitespace-nowrap"
            onClick={() => setIsModalOpen(true)}
          >
            Own EGGMPIRE
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-75 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="border-t border-gray-800 bg-[#1d1d1d]">
          <div className="px-4 py-6 flex flex-col items-center gap-5">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xl text-white hover:text-[#E8A921] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <SwapModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}
