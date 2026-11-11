import Link from "next/link";
import {
  InstagramLogoIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ForkKnifeIcon,
} from "@phosphor-icons/react/dist/ssr";

export const Footer = () => {
  return (
    <footer className="bg-[#F7F4EF] text-stone-800 pt-16 pb-8 border-t border-stone-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-300/60">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex flex-col">
              <span className="font-serif text-3xl font-bold tracking-tight text-stone-900">
                Asturias
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-amber-700 font-medium -mt-1">
                Bar & Restaurant
              </span>
            </Link>
            <p className="text-stone-600 text-xs leading-relaxed font-light mt-2">
              Cocina tradicional asturiana y de mercado en el corazón de
              Arrecife. Productos frescos, tradición y un ambiente acogedor.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/bar_restaurante_asturias"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:text-amber-600 hover:border-amber-600 transition-colors"
              >
                <InstagramLogoIcon size={16} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-4 flex items-center gap-2">
              <ForkKnifeIcon size={16} />
              <span>Navegación</span>
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-stone-600">
              <li>
                <Link
                  href="#inicio"
                  className="hover:text-amber-600 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-amber-600 transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="hover:text-amber-600 transition-colors"
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="hover:text-amber-600 transition-colors"
                >
                  Nuestro Equipo
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Horario Resumido */}
          <div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-4 flex items-center gap-2">
              <ClockIcon size={16} className="text-amber-600" />
              <span>Horarios</span>
            </h3>
            <div className="flex flex-col gap-2 text-xs text-stone-600">
              <div className="flex justify-between border-b border-stone-200/60 pb-1.5">
                <span>Mar - Sáb:</span>
                <span className="font-medium text-stone-800">
                  01:00 - 23:00
                </span>
              </div>
              <div className="flex justify-between border-b border-stone-200/60 pb-1.5">
                <span>Domingos:</span>
                <span className="font-medium text-stone-800">
                  01:00 - 04:00 | 19:00 - 23:00
                </span>
              </div>
              <div className="flex justify-between pt-0.5">
                <span>Lunes:</span>
                <span className="text-amber-700 font-medium">Cerrado</span>
              </div>
            </div>
          </div>

          {/* Columna 4: Ubicación y Contacto Directo */}
          <div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-4 flex items-center gap-2">
              <MapPinIcon size={16} className="text-amber-600" />
              <span>Contacto</span>
            </h3>
            <div className="flex flex-col gap-3 text-xs text-stone-600">
              <p className="flex items-start gap-2">
                <MapPinIcon
                  size={16}
                  className="text-amber-600 shrink-0 mt-0.5"
                />
                <span>
                  Calle León y Castillo, 12
                  <br />
                  35500 Arrecife, Lanzarote
                </span>
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon size={16} className="text-amber-600 shrink-0" />
                <a
                  href="tel:+34928000000"
                  className="hover:text-amber-600 transition-colors"
                >
                  +34 928 00 00 00
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* BARRITA INFERIOR: COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>©2026 Bar Restaurante Asturias. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-stone-800 transition-colors">
              Aviso Legal
            </Link>
            <Link href="#" className="hover:text-stone-800 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-stone-800 transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
