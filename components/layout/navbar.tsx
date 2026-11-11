"use client";

import { useState } from "react";
import Link from "next/link";
import {
  InstagramLogoIcon,
  PhoneIcon,
  ClockIcon,
  ListIcon,
  XIcon,
} from "@phosphor-icons/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full text-stone-800 font-sans">
      <div className="bg-stone-900 text-stone-300 text-xs py-2.5 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="hidden sm:inline text-stone-500 text-[11px] tracking-wider">
              Follows:
            </span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-amber-500 transition-colors p-1"
            >
              <InstagramLogoIcon size={16} />
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <a
              href="tel:+34928000000"
              className="flex items-center gap-1.5 hover:text-amber-500 transition-colors"
            >
              <PhoneIcon size={14} className="text-amber-500" />
              <span>+34 928 00 00 00</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5">
              <ClockIcon size={14} className="text-amber-500" />
              <span>Mar - Dom: 01:00 - 23:00 / Cerrado Lunes</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-[#FAF8F5] border-b border-stone-200/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Brand / Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-center text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              Asturias
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-amber-700 font-medium -mt-1">
              Bar & Restaurant
            </span>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-stone-700">
            <Link href="/" className="hover:text-amber-600 transition-colors">
              Inicio
            </Link>
            <Link
              href="#about"
              className="hover:text-amber-600 transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="#testimonials"
              className="hover:text-amber-600 transition-colors"
            >
              Testimonios
            </Link>
            <Link
              href="#team"
              className="hover:text-amber-600 transition-colors"
            >
              Nuestro Equipo
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-stone-800 p-2 focus:outline-none"
            aria-label="Abrir menú"
          >
            {isOpen ? <XIcon size={26} /> : <ListIcon size={26} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-[#FAF8F5] border-b border-stone-200 px-6 py-6 flex flex-col gap-4 text-center font-serif text-lg text-stone-800">
            <Link
              href="#inicio"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-600 transition-colors py-1"
            >
              Inicio
            </Link>
            <Link
              href="#nosotros"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-600 transition-colors py-1"
            >
              Nosotros
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-600 transition-colors py-1"
            >
              Testimonios
            </Link>
            <Link
              href="#team"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-600 transition-colors py-1"
            >
              Nuestro Equipo
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
