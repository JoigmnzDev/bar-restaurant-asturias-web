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
    src: "/images/customers/celebrity-tiktok.jpg",
    caption: "Visitas que nos alegran el salón en Arrecife",
    tag: "Celebridad",
  },
  {
    src: "/images/customers/birthday-family.jpg",
    caption: "Celebrando cumpleaños especiales en familia",
    tag: "Cumpleaños",
  },
  {
    src: "/images/customers/company-dinner.jpg",
    caption: "Noches de grupo y reuniones en terraza",
    tag: "Cena de Empresa",
  },
  {
    src: "/images/customers/special-events.jpg",
    caption: "Formando parte de los eventos de Arrecife",
    tag: "Eventos",
  },
  {
    src: "/images/customers/family-lunch.jpg",
    caption: "Sabor tradicional y risas alrededor de la mesa",
    tag: "Familia",
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
      className="border-b border-stone-200/80 bg-[#F4F0E8] px-4 py-16 sm:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Cabecera editorial más compacta */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 border border-amber-700/25 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-amber-800">
            <CameraIcon size={14} weight="bold" className="text-amber-600" />
            <span>Nuestros Clientes</span>
          </div>

          <h2 className="mb-3 font-serif text-3xl font-bold leading-[1.08] tracking-tight text-stone-950 sm:text-4xl">
            Momentos <span className="italic text-amber-700">Compartidos</span>
          </h2>

          <p className="text-sm font-light leading-relaxed text-stone-600 sm:text-base">
            Cada visita se convierte en un recuerdo. Gracias a quienes nos
            eligen cada día para celebrar y disfrutar alrededor de la mesa.
          </p>
        </div>

        {/* Carrusel Swiper o grid estático SSR */}
        {!mounted ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {CUSTOMER_MOMENTS.slice(0, 4).map((item) => (
              <div
                key={item.src}
                className="aspect-[4/5] w-full border border-stone-200 bg-stone-200/50"
              />
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            grabCursor={true}
            spaceBetween={16}
            slidesPerView={1.2}
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
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            style={
              {
                "--swiper-pagination-color": "#d97706",
                "--swiper-pagination-bullet-inactive-color": "#78716c",
                "--swiper-pagination-bullet-inactive-opacity": "0.35",
              } as React.CSSProperties
            }
            className="!pb-10"
          >
            {CUSTOMER_MOMENTS.map((item) => (
              <SwiperSlide key={item.src}>
                <figure className="group relative aspect-[4/5] w-full overflow-hidden border border-stone-200/90 border-b-4 border-b-stone-950 bg-stone-950 transition-colors duration-300 hover:border-b-amber-500">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 480px) 85vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="pointer-events-none object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Etiqueta discreta arriba a la izquierda */}
                  <span className="absolute left-3 top-3 z-10 bg-stone-950/85 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-amber-400 backdrop-blur-sm">
                    {item.tag}
                  </span>

                  {/* Pie de foto sutil */}
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent p-4 pt-12 text-left">
                    <p className="font-serif text-sm italic leading-snug text-white">
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
