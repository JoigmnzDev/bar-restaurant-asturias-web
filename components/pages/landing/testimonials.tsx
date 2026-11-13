"use client";

import { useSyncExternalStore, type CSSProperties } from "react";
import { Star, Quotes, ForkKnife } from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const emptySubscribe = () => () => {};

const REVIEWS = [
  {
    initials: "JC",
    name: "Javier Camín Merin",
    role: "Reseña Verificada · Google",
    comment:
      "Platos de Asturias y autóctonos en primera línea de playa. Servicio excelente, comida buenísima y precio muy correcto. Recomendable 100%.",
    stars: 5,
  },
  {
    initials: "CF",
    name: "Cristina Fernández",
    role: "Reseña Verificada · Google",
    comment:
      "Uno de los mejores sitios, sin duda. Trato muy amable y todos los platos que pedimos estaban buenísimos. Si volvemos a Lanzarote, repetiremos seguro.",
    stars: 5,
  },
  {
    initials: "KW",
    name: "Keith Wills",
    role: "Reseña Verificada · Google",
    comment:
      "Fabulous food, really well cooked and beautifully presented. Restaurant staff really friendly. Excellent.",
    stars: 5,
  },
  {
    initials: "HA",
    name: "Heitam Aagdadi Talavera",
    role: "Reseña Verificada · Google",
    comment:
      "Comida increíble, trato excelente y unos camareros súper majos. ¡Nos encantó!",
    stars: 5,
  },
];

export const Testimonials = () => {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  return (
    <section
      id="testimonials"
      className="border-b border-stone-200/80 bg-[#F4F0E8] px-4 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Cabecera editorial */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 border border-amber-700/25 bg-amber-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-800">
            <ForkKnife size={15} weight="bold" className="text-amber-600" />
            <span>Testimonios</span>
          </div>

          <h2 className="mb-4 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-stone-950 sm:text-5xl">
            Lo Que Dicen{" "}
            <span className="italic text-amber-700">Nuestros Clientes</span>
          </h2>

          <p className="text-base font-light leading-relaxed text-stone-600">
            La satisfacción de quienes nos visitan frente al mar en Arrecife es
            nuestra mejor carta de presentación.
          </p>
        </div>

        {/* Carrusel Swiper o placeholder estático SSR */}
        {!mounted ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {REVIEWS.slice(0, 3).map((rev) => (
              <div
                key={rev.name}
                className="h-72 border border-stone-200/90 border-t-2 border-t-stone-950 bg-[#FAF8F5] p-8"
              />
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
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
              } as CSSProperties
            }
            className="!pb-14"
          >
            {REVIEWS.map((rev) => (
              <SwiperSlide key={rev.name} className="!h-auto">
                <article className="group flex h-full select-none flex-col justify-between border border-stone-200/90 border-t-2 border-t-stone-950 bg-[#FAF8F5] p-8 transition-all duration-300 hover:border-t-amber-500 hover:shadow-xl sm:p-9">
                  <div>
                    {/* Fila superior: Estrellas + Comillas */}
                    <div className="mb-6 flex items-center justify-between">
                      <div
                        className="flex gap-1 text-amber-500"
                        aria-label={`${rev.stars} de 5 estrellas`}
                      >
                        {Array.from({ length: rev.stars }).map((_, i) => (
                          <Star key={i} size={16} weight="fill" />
                        ))}
                      </div>
                      <Quotes
                        size={30}
                        weight="fill"
                        className="text-stone-300 transition-colors duration-300 group-hover:text-amber-500/50"
                      />
                    </div>

                    {/* Comentario */}
                    <p className="font-serif text-base italic leading-relaxed text-stone-800">
                      &ldquo;{rev.comment}&rdquo;
                    </p>
                  </div>

                  {/* Autoría al pie */}
                  <div className="mt-8 flex items-center gap-3.5 border-t border-stone-200/80 pt-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-stone-950 font-serif text-xs font-bold tracking-wider text-amber-400">
                      {rev.initials}
                    </div>
                    <div>
                      <h3 className="font-serif text-sm font-bold leading-tight text-stone-950">
                        {rev.name}
                      </h3>
                      <span className="mt-0.5 block text-[11px] font-medium uppercase tracking-wider text-stone-400">
                        {rev.role}
                      </span>
                    </div>
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

export default Testimonials;
