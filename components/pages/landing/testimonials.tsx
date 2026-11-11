"use client";

import Image from "next/image";
import { Star, Quotes, ForkKnife } from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";

export const Testimonials = () => {
  const reviews = [
    {
      name: "Javier Camín Merin",
      role: "Reseña de Google",
      comment:
        "Platos de Asturias y autóctonos en primera línea de playa. Servicio excelente, comida buenísima y precio muy correcto. Recomendable 100%.",
      stars: 5,
    },
    {
      name: "Cristina Fernández",
      role: "Reseña de Google",
      comment:
        "Uno de los mejores sitios, sin duda. Trato muy amable y todos los platos que pedimos estaban buenísimos. Si volvemos a Lanzarote, repetiremos seguro.",
      stars: 5,
    },
    {
      name: "Keith Wills",
      role: "Reseña de Google",
      comment:
        "Fabulous food, really well cooked and beautifully presented. Restaurant staff really friendly. Excellent.",
      stars: 5,
    },
    {
      name: "Heitam Aagdadi Talavera",
      role: "Reseña de Google",
      comment:
        "Comida increíble, trato excelente y unos camareros súper majos. ¡Nos encantó!",
      stars: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-[#F7F4EF] py-20 px-4 sm:px-8 border-b border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-amber-700 font-medium text-xs tracking-[0.2em] uppercase mb-2">
            <ForkKnife size={16} className="text-amber-600" />
            <span>Testimonios</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-stone-600 text-sm font-light leading-relaxed">
            La satisfacción de quienes nos visitan es nuestra mayor recompensa.
          </p>
        </div>

        {/* Carrusel Swiper */}
        <div className="pb-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true, // Se detiene al interactuar para dejar leer cómodamente
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper !pb-12"
          >
            {reviews.map((rev, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white p-8 rounded-sm shadow-sm border border-stone-200/60 h-full flex flex-col justify-between select-none">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div>
                          <h3 className="font-serif font-bold text-stone-900 text-base leading-tight">
                            {rev.name}
                          </h3>
                          <span className="text-stone-400 text-xs">
                            {rev.role}
                          </span>
                        </div>
                      </div>
                      <Quotes
                        size={32}
                        className="text-amber-200/80"
                        weight="fill"
                      />
                    </div>
                    <div className="flex gap-1 text-amber-500 mb-4">
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} size={16} weight="fill" />
                      ))}
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed italic font-light">
                      "{rev.comment}"
                    </p>
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

export default Testimonials;
