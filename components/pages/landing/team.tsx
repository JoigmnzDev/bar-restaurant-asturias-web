"use client";

import Image from "next/image";

import { ForkKnifeIcon } from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export const Team = () => {
  const teamMembers = [
    {
      name: "Yariel Interian",
      role: "Jefe de Sala",
      image: "/images/team/yariel-interian.jpg",
    },
    {
      name: "Alfredo",
      role: "Segundo Cocinero",
      image: "/images/team/alfredo.jpg",
    },
    {
      name: "Alfred Nabutil",
      role: "Chef",
      image: "/images/team/alfred-nabutil.jpg",
    },
    {
      name: "Reina Nabutil",
      role: "Camarera",
      image: "/images/team/jen-jen-abaag-nabutil.jpg",
    },
  ];

  return (
    <section id="team" className="bg-white py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-amber-700 font-medium text-xs tracking-[0.2em] uppercase mb-2">
            <ForkKnifeIcon size={16} className="text-amber-600" />
            <span>Nuestro Equipo</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-4">
            Pasión por la Gastronomía & Servicio
          </h2>
          <p className="text-stone-600 text-sm font-light leading-relaxed">
            Un equipo de profesionales en cocina y sala dedicados a ofrecerte
            una experiencia inolvidable.
          </p>
        </div>

        {/* Carrusel Swiper */}
        <div className="relative">
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
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center group">
                  <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-sm border border-stone-200/80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent p-5 text-left flex flex-col justify-end">
                      <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                        {member.name}
                      </h3>
                      <span className="text-amber-300 text-xs uppercase tracking-wider font-medium mt-0.5">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
