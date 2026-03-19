"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../common/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Privacy Rule", href: "/about" },
    { label: "Term & Conditions of Service", href: "/services" },
    { label: "Blog", href: "/team" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1d1d1d]/80 backdrop-blur-md border-b border-gray-800">
      <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Eggmpire Logo"
            width={120}
            height={38}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-[#E8A921] font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Button */}
        <Button variant="primary">Own EGGMPIRE</Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gray-300 transition-all" />
          <span className="block w-6 h-0.5 bg-gray-300 transition-all" />
          <span className="block w-6 h-0.5 bg-gray-300 transition-all" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-gray-800 bg-[#1d1d1d]">
          <div className="container max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

