import Image from "next/image";
import { ArrowUpRight, ForkKnife } from "@phosphor-icons/react/dist/ssr";

export const Hero = () => {
  return (
    <section className="relative flex min-h-[88vh] w-full items-center justify-center overflow-hidden bg-stone-950 text-[#FAF8F5]">
      {/* Imagen de fondo optimizada */}
      <Image
        src="/images/hero/restaurant-bg.jpg"
        alt="Interior y platos tradicionales de Bar & Restaurant Asturias"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-105 opacity-45"
      />

      {/* Viñeta cinematográfica para contraste máximo */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/55 to-stone-950/95" />

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Etiqueta superior estilo editorial */}
        <span className="mb-6 inline-flex items-center gap-2 border border-amber-500/30 bg-stone-950/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          Arrecife · Tradición Asturiana
        </span>

        {/* Titular de alto contraste */}
        <h1 className="mb-6 font-serif text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Sabor Tradicional
          <span className="block text-amber-400">&amp; Calidad</span>
        </h1>

        {/* Subtítulo */}
        <p className="mb-10 max-w-2xl text-base font-light leading-relaxed text-stone-300 sm:text-lg md:text-xl">
          Cocina asturiana auténtica elaborada a fuego lento, producto fresco de
          primera y un ambiente cercano donde sentirse como en casa.
        </p>

        {/* Botones de acción con presencia */}
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="#menu"
            className="group inline-flex w-full items-center justify-center gap-2.5 bg-amber-500 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-stone-950 transition-all hover:bg-amber-400 sm:w-auto"
          >
            <ForkKnife weight="bold" className="h-4 w-4" />
            Explorar Carta
          </a>

          <a
            href="#contacto"
            className="group inline-flex w-full items-center justify-center gap-2 border border-white/40 bg-stone-950/40 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-stone-950 sm:w-auto"
          >
            Reservar Mesa
            <ArrowUpRight
              weight="bold"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      {/* Indicador inferior sutil */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-stone-400 sm:flex">
        <span>Descubre</span>
        <div className="h-8 w-px bg-gradient-to-b from-amber-400/80 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
