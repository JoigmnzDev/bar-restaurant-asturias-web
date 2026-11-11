"use client";

import Image from "next/image";
import { ForkKnifeIcon } from "@phosphor-icons/react/dist/ssr";

export const About = () => {
  return (
    <section
      id="about"
      className="bg-[#FAF8F5] py-20 px-4 sm:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-amber-700 font-medium text-xs tracking-[0.2em] uppercase">
            <ForkKnifeIcon size={16} className="text-amber-600" />
            <span>Sobre Nosotros</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-tight">
            Tradición y sabor en cada plato
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Ofrecemos lo mejor de la cocina tradicional, cuidando cada
            ingrediente para brindar una experiencia gastronómica auténtica.
            Nuestro compromiso es hacerte sentir como en casa con platos
            elaborados con pasión y recetas de siempre.
          </p>
          <p className="text-stone-600 text-sm leading-relaxed">
            Un espacio donde la buena comida y el ambiente acogedor se unen para
            crear momentos especiales en Arrecife.
          </p>
          <div className="felx- hidden items-center justify-between pt-4 border-t border-stone-200/80 mt-2">
            <div>
              <span className="font-serif italic text-xl text-stone-800 block">
                Chef Alfred Nabutil
              </span>
              <span className="text-xs text-stone-500 uppercase tracking-wider font-sans">
                Jefe de Cocina
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-square">
            <div className="absolute top-0 right-0 w-[80%] h-[75%] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/about/restaurant-interior.jpg"
                alt="Interior del restaurante"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute- hidden bottom-0 left-0 w-[55%] h-[60%] rounded-lg overflow-hidden shadow-xl border-4 border-[#FAF8F5]">
              <Image
                src="/images/about/chef-preparing-dish.jpg"
                alt="Cocinero preparando plato"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="absolute top-[10%] left-[5%] bg-stone-900 text-white p-5 rounded-sm shadow-xl flex flex-col items-center justify-center text-center border-l-2 border-amber-600 z-10">
              <span className="font-serif text-3xl font-bold text-amber-500 leading-none mb-1">
                15+
              </span>
              <span className="text-[10px] uppercase tracking-wider text-stone-300 font-light">
                Años de
                <br />
                Experiencia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
