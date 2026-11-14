import Link from "next/link";
import {
  InstagramLogoIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ForkKnifeIcon,
  ArrowUpRightIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/config/site";
import { FacebookLogoIcon } from "@phosphor-icons/react";

const FOOTER_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "#about", label: "Nosotros" },
  { href: "#features", label: "Servicios" },
  { href: "#testimonials", label: "Testimonios" },
  { href: "#team", label: "Nuestro Equipo" },
];

export const Footer = () => {
  return (
    <footer
      id="contacto"
      className="border-t-4 border-amber-500 bg-stone-950 font-sans text-stone-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Bloque superior CTA de reserva */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-stone-800/90 py-14 lg:flex-row lg:items-center">
          <div>
            <span className="mb-2 inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400">
              Reserva Tu Mesa · Arrecife
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Te esperamos frente al mar
            </h2>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="group inline-flex items-center justify-center gap-2.5 bg-amber-500 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-stone-950 transition-all hover:bg-amber-400"
            >
              <PhoneIcon size={16} weight="bold" />
              <span>Llamar: {siteConfig.contact.phone}</span>
            </a>

            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 border border-stone-700 bg-stone-900/60 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:border-white hover:bg-white hover:text-stone-950"
            >
              <span>Instagram</span>
              <ArrowUpRightIcon
                size={15}
                weight="bold"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* Grid principal de 4 columnas */}
        <div className="grid grid-cols-1 gap-12 border-b border-stone-800/90 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Columna 1: Identidad de marca */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="group inline-flex w-fit flex-col items-center self-start text-center"
            >
              <span className="font-serif text-3xl font-bold tracking-tight text-white transition-colors group-hover:text-amber-400">
                Asturias
              </span>
              <span className="-mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400">
                Bar &amp; Restaurant
              </span>
            </Link>

            <p className="mt-2 text-xs font-light leading-relaxed text-stone-400">
              Cocina tradicional asturiana y de mercado en el corazón de
              Arrecife. Productos frescos, raciones generosas y un ambiente
              cercano.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center border border-stone-800 bg-stone-900 text-stone-300 transition-colors hover:border-amber-400 hover:bg-amber-400 hover:text-stone-950"
              >
                <InstagramLogoIcon size={18} weight="bold" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center border border-stone-800 bg-stone-900 text-stone-300 transition-colors hover:border-amber-400 hover:bg-amber-400 hover:text-stone-950"
              >
                <FacebookLogoIcon size={18} weight="bold" />
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <ForkKnifeIcon
                size={15}
                weight="bold"
                className="text-amber-400"
              />
              <span>Navegación</span>
            </h3>
            <ul className="flex flex-col gap-3 text-xs text-stone-400">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="uppercase tracking-[0.15em] transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Horarios */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <ClockIcon size={15} weight="bold" className="text-amber-400" />
              <span>Horarios</span>
            </h3>
            <div className="flex flex-col gap-2.5 text-xs text-stone-400">
              <div className="flex justify-between border-b border-stone-800/80 pb-2">
                <span>Mar – Sáb</span>
                <span className="font-semibold text-stone-200">
                  {siteConfig.openingHours.weekdays}
                </span>
              </div>
              <div className="flex justify-between border-b border-stone-800/80 pb-2">
                <span>Domingos</span>
                <span className="font-semibold text-stone-200">
                  {siteConfig.openingHours.sunday}
                </span>
              </div>
              <div className="flex justify-between pt-0.5">
                <span>Lunes / Martes</span>
                <span className="font-semibold text-amber-400">
                  {siteConfig.openingHours.tuesday}
                </span>
              </div>
            </div>
          </div>

          {/* Columna 4: Ubicación y contacto */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <MapPinIcon size={15} weight="bold" className="text-amber-400" />
              <span>Ubicación</span>
            </h3>
            <div className="flex flex-col gap-4 text-xs text-stone-400">
              <p className="flex items-start gap-2.5 leading-relaxed">
                <MapPinIcon
                  size={16}
                  weight="bold"
                  className="mt-0.5 shrink-0 text-amber-400"
                />
                <span>
                  {siteConfig.location.address}
                  <br />
                  {siteConfig.location.city}, {siteConfig.location.postalCode}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <PhoneIcon
                  size={16}
                  weight="bold"
                  className="shrink-0 text-amber-400"
                />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="font-medium text-stone-200 transition-colors hover:text-amber-400"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <WhatsappLogoIcon
                  size={16}
                  weight="bold"
                  className="shrink-0 text-amber-400"
                />
                <a
                  href={`tel:${siteConfig.contact.whatsapp}`}
                  className="font-medium text-stone-200 transition-colors hover:text-amber-400"
                >
                  {siteConfig.contact.whatsapp}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Barra inferior de copyright y legales */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-[11px] text-stone-500 sm:flex-row">
          <p>© 2026 Bar Restaurante Asturias. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="#"
              className="uppercase tracking-wider transition-colors hover:text-stone-300"
            >
              Aviso Legal
            </Link>
            <Link
              href="#"
              className="uppercase tracking-wider transition-colors hover:text-stone-300"
            >
              Privacidad
            </Link>
            <Link
              href="#"
              className="uppercase tracking-wider transition-colors hover:text-stone-300"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
