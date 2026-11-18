"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { CameraIcon } from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const emptySubscribe = () => () => {};

const CUSTOMER_MOMENTS = [
  {
    src: "/images/customers/moment-1.jpg",
    caption: "Compartiendo mesa en Arrecife",
    tag: "Comunidad",
  },
  {
    src: "/images/customers/moment-2.jpg",
    caption: "Noches especiales con amigos",
    tag: "Celebraciones",
  },
  {
    src: "/images/customers/moment-3.jpg",
    caption: "Sabor asturiano en buena compañía",
    tag: "Clientes",
  },
  {
    src: "/images/customers/moment-4.jpg",
    caption: "Momentos inolvidables frente al mar",
    tag: "Experiencia",
  },
];

export const CustomerMoments = () => {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  return (
    <section
      id="moments"
      className="border-b border-stone-200/80 bg-[#F4F0E8] px-4 py-24 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Cabecera editorial */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 border border-amber-700/25 bg-amber-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-800">
            <CameraIcon size={15} weight="bold" className="text-amber-600" />
            <span>Nuestros Clientes</span>
          </div>

          <h2 className="mb-4 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-stone-950 sm:text-5xl">
            Momentos <span className="italic text-amber-700">Compartidos</span>
          </h2>

          <p className="text-base font-light leading-relaxed text-stone-600">
            Cada visita se convierte en un recuerdo. Gracias a quienes nos
            eligen cada día para celebrar y disfrutar alrededor de la mesa.
          </p>
        </div>

        {/* Carrusel Swiper o grid estático SSR */}
        {!mounted ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CUSTOMER_MOMENTS.slice(0, 3).map((item) => (
              <div
                key={item.src}
                className="aspect-[4/3] w-full border border-stone-200 bg-stone-200/50"
              />
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={
              {
                "--swiper-pagination-color": "#d97706",
                "--swiper-pagination-bullet-inactive-color": "#78716c",
                "--swiper-pagination-bullet-inactive-opacity": "0.35",
              } as React.CSSProperties
            }
            className="!pb-12"
          >
            {CUSTOMER_MOMENTS.map((item) => (
              <SwiperSlide key={item.src}>
                <figure className="group relative aspect-[4/3] w-full overflow-hidden border border-stone-200/90 border-b-4 border-b-stone-950 bg-stone-950 transition-colors duration-300 hover:border-b-amber-500">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Etiqueta discreta arriba a la izquierda */}
                  <span className="absolute left-4 top-4 z-10 bg-stone-950/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 backdrop-blur-sm">
                    {item.tag}
                  </span>

                  {/* Pie de foto sutil */}
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent p-5 pt-14 text-left">
                    <p className="font-serif text-base italic text-white">
                      {item.caption}
                    </p>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

