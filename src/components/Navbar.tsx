"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-white/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-white font-bold text-lg">MR</span>
          </div>
          <span className="font-bold text-xl text-primary-900 group-hover:text-primary-600 transition">
            Dr. Maya Reynolds
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="#about" className="hover:text-primary-600 transition">
            About
          </Link>
          <Link href="#services" className="hover:text-primary-600 transition">
            Services
          </Link>
          <Link href="#office" className="hover:text-primary-600 transition">
            Office
          </Link>
          <Link href="#contact" className="hover:text-primary-600 transition">
            Contact
          </Link>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="bg-primary-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-primary-700 transition"
          >
            Book Session
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-primary-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-6 space-y-4 text-gray-700 font-medium">
          <Link href="#about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="#office" onClick={() => setIsOpen(false)}>
            Office
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block bg-primary-600 text-white px-5 py-2 rounded-full text-center"
          >
            Book Session
          </Link>
        </div>
      )}
    </header>
  );
}
