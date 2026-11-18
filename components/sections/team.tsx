"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { ForkKnifeIcon } from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const emptySubscribe = () => () => {};

const TEAM_MEMBERS = [
  {
    number: "01",
    name: "Yariel Interian",
    role: "Jefe de Sala",
    image: "/images/team/yariel-interian.jpg",
  },
  {
    number: "02",
    name: "Alfredo",
    role: "Segundo Cocinero",
    image: "/images/team/alfredo.jpg",
  },
  {
    number: "03",
    name: "Alfred Nabutil",
    role: "Chef",
    image: "/images/team/alfred-nabutil.jpg",
  },
  {
    number: "04",
    name: "Reina Nabutil",
    role: "Camarera",
    image: "/images/team/jen-jen-abaag-nabutil.jpg",
  },
  {
    number: "05",
    name: "Antonio",
    role: "Ayudante de Cocina",
    image: "/images/team/antonio.jpg",
  },
];

export const Team = () => {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  return (
    <section
      id="team"
      className="border-b border-stone-200/80 bg-[#FAF8F5] px-4 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Cabecera editorial */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 border border-amber-700/25 bg-amber-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-800">
            <ForkKnifeIcon size={15} weight="bold" className="text-amber-600" />
            <span>Nuestro Equipo</span>
          </div>

          <h2 className="mb-4 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-stone-950 sm:text-5xl">
            Pasión por la{" "}
            <span className="italic text-amber-700">Gastronomía</span>
          </h2>

          <p className="text-base font-light leading-relaxed text-stone-600">
            Un equipo de profesionales en cocina y sala dedicados a ofrecerte
            una experiencia cercana e inolvidable.
          </p>
        </div>

        {/* Carrusel Swiper o grid estático SSR */}
        {!mounted ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.slice(0, 3).map((member) => (
              <div
                key={member.name}
                className="aspect-[4/5] w-full border border-stone-200 bg-stone-200/50"
              />
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={24}
            slidesPerView={1}
            grabCursor={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-4"
          >
            {TEAM_MEMBERS.map((member) => (
              <SwiperSlide key={member.name}>
                <article className="group relative aspect-[4/5] w-full overflow-hidden border border-stone-200/90 border-b-4 border-b-stone-950 bg-stone-950 transition-colors duration-300 hover:border-b-amber-500">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="pointer-events-none object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Etiqueta numérica superior */}
                  <div className="absolute right-4 top-4 z-10 bg-stone-950/80 px-2.5 py-1 font-serif text-xs font-bold tracking-widest text-amber-400 backdrop-blur-sm">
                    {member.number}
                  </div>

                  {/* Viñeta inferior con datos del profesional */}
                  <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent p-6 pt-20 text-left">
                    <span className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400">
                      {member.role}
                    </span>
                    <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                      {member.name}
                    </h3>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

