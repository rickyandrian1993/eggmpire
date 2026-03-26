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
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10); // Trigger at 10px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        !isScrolled && "bg-transparent border-transparent backdrop-blur-0",
        isScrolled &&
        "bg-linear-to-r from-[#1d1d1d]/80 to-[#1d1d1d]/70 border-white/10 backdrop-blur-xl shadow-lg shadow-black/20",
      )}
    >
      <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LEFT (Mobile: Burger | Desktop: Logo) */}
        <div className="flex items-center gap-3">
          {/* Burger (Mobile only) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "block w-6 h-0.5 bg-gray-300 transition-all duration-300",
                isMenuOpen && "rotate-45 translate-y-2",
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-gray-300 transition-all duration-300",
                isMenuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-gray-300 transition-all duration-300",
                isMenuOpen && "-rotate-45 -translate-y-2",
              )}
            />
          </button>

          {/* Logo */}
          <Image
            src="/logo.svg"
            alt="Eggmpire Logo"
            width={120}
            height={38}
            priority
          />
        </div>

        {/* CENTER (Desktop Nav only) */}
        <nav className="hidden md:flex gap-8">
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

        {/* RIGHT (Button always right) */}
        <div className="flex items-center">
          <Link href={"/"}>
            <Button
              variant="primary"
              glow
              className="text-sm md:text-base px-3 md:px-5 py-2"
              onClick={() => setIsModalOpen(true)}
            >
              Own EGGMPIRE
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-gray-800 bg-[#1d1d1d]">
          <div className="container max-w-6xl mx-auto px-4 py-4 flex flex-col items-center gap-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-2xl text-white hover:text-[#E8A921] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
      <SwapModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}
