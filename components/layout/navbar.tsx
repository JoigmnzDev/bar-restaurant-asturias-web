"use client";

import { useState } from "react";
import Link from "next/link";
import {
  InstagramLogoIcon,
  PhoneIcon,
  ClockIcon,
  ListIcon,
  XIcon,
  ArrowUpRightIcon,
  FacebookLogoIcon,
} from "@phosphor-icons/react";
import { siteConfig } from "@/config/site";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "#about", label: "Nosotros" },
  { href: "#testimonials", label: "Testimonios" },
  { href: "#team", label: "Equipo" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full font-sans text-stone-900">
      {/* Topbar informativa oscura */}
      <div className="border-b border-stone-800 bg-stone-950 px-4 py-2 text-xs text-stone-300 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="hidden text-[11px] uppercase tracking-[0.2em] text-stone-500 sm:inline">
              Síguenos
            </span>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-1 text-stone-400 transition-colors hover:text-amber-400"
            >
              <InstagramLogoIcon size={16} weight="bold" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="p-1 text-stone-400 transition-colors hover:text-amber-400"
            >
              <FacebookLogoIcon size={16} weight="bold" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-6">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-1.5 font-medium tracking-wide transition-colors hover:text-amber-400"
            >
              <PhoneIcon size={14} weight="bold" className="text-amber-400" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <div className="hidden items-center gap-1.5 text-stone-400 md:flex">
              <ClockIcon size={14} weight="bold" className="text-amber-400" />
              <span>
                Lunes – Sábado: {siteConfig.openingHours.weekdays} · Martes:{" "}
                {siteConfig.openingHours.tuesday}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <nav className="border-b border-stone-200/80 bg-[#FAF8F5]/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
          {/* Marca / Logotipo editorial */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-stone-950 transition-colors group-hover:text-amber-700 sm:text-3xl">
              Asturias
            </span>
            <span className="-mt-1 text-[9px] font-bold uppercase tracking-[0.32em] text-amber-700">
              Bar &amp; Restaurant
            </span>
          </Link>

          {/* Enlaces Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-[0.18em] text-stone-700 transition-colors hover:text-amber-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 bg-stone-950 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FAF8F5] transition-all hover:bg-amber-500 hover:text-stone-950"
            >
              Reservar
              <ArrowUpRightIcon
                size={15}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-stone-950 transition-colors hover:text-amber-600 md:hidden"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <XIcon size={26} weight="bold" />
            ) : (
              <ListIcon size={26} weight="bold" />
            )}
          </button>
        </div>

        {/* Desplegable móvil */}
        {isOpen && (
          <div className="flex flex-col border-b border-stone-200 bg-[#FAF8F5] px-6 py-8 md:hidden">
            <div className="flex flex-col divide-y divide-stone-200/70">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3.5 text-center text-xs font-bold uppercase tracking-[0.22em] text-stone-800 transition-colors hover:text-amber-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-stone-950 px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#FAF8F5] transition-colors hover:bg-amber-500 hover:text-stone-950"
            >
              Reservar Mesa
              <ArrowUpRightIcon size={16} weight="bold" />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
