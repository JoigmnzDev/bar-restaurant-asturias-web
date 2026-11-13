import Image from "next/image";
import { ForkKnifeIcon } from "@phosphor-icons/react/dist/ssr";

const HIGHLIGHTS = [
  { label: "Cocina", value: "100% Casera" },
  { label: "Producto", value: "Fresco del Día" },
  { label: "Ubicación", value: "Arrecife" },
];

export const About = () => {
  return (
    <section
      id="about"
      className="overflow-hidden border-b border-stone-200/80 bg-[#FAF8F5] px-4 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Columna de texto editorial */}
        <div className="flex flex-col gap-6 lg:col-span-6">
          <div className="inline-flex w-fit items-center gap-2 border border-amber-700/25 bg-amber-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-800">
            <ForkKnifeIcon size={15} weight="bold" className="text-amber-600" />
            <span>Sobre Nosotros</span>
          </div>

          <h2 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight text-stone-950 sm:text-5xl lg:text-[3.25rem]">
            Tradición y sabor{" "}
            <span className="italic text-amber-700">en cada plato</span>
          </h2>

          <div className="space-y-4 text-base font-light leading-relaxed text-stone-600">
            <p>
              Ofrecemos lo mejor de la cocina tradicional asturiana, cuidando
              cada ingrediente y respetando los tiempos de cocción para brindar
              una experiencia gastronómica auténtica.
            </p>
            <p>
              Nuestro compromiso es hacerte sentir como en casa: raciones
              generosas, recetas de siempre y un ambiente cercano pensado para
              compartir momentos especiales en Arrecife.
            </p>
          </div>

          {/* Barra de pilares clave */}
          <div className="mt-4 grid grid-cols-3 gap-4 border-t border-stone-300/80 pt-6">
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                  {item.label}
                </span>
                <span className="mt-1 font-serif text-base font-bold text-stone-900 sm:text-lg">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Columna visual con marco arquitectónico */}
        <div className="relative flex justify-center lg:col-span-6 lg:justify-end">
          <div className="relative w-full max-w-xl">
            {/* Marco desplazado de fondo */}
            <div className="absolute -bottom-4 -right-4 hidden h-full w-full border border-stone-300 bg-stone-200/40 sm:block" />

            {/* Fotografía principal */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900 shadow-xl">
              <Image
                src="/images/about/restaurant-interior.jpg"
                alt="Interior del restaurante Asturias"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/30 via-transparent to-transparent" />
            </div>

            {/* Sello de trayectoria */}
            <div className="relative -mt-10 ml-4 inline-flex flex-col items-start border-l-4 border-amber-500 bg-stone-950 px-6 py-5 text-white shadow-2xl sm:absolute sm:-bottom-6 sm:-left-6 sm:mt-0 sm:ml-0">
              <span className="font-serif text-4xl font-bold leading-none text-amber-400">
                15+
              </span>
              <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-300">
                Años de Experiencia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
