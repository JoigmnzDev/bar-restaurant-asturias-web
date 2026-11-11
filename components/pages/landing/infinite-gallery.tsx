"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";

import "swiper/css";

export const InfiniteGallery = () => {
  const images = [
    {
      src: "/images/dishes/croquettes.jpg",
      alt: "Croquetas Caseras",
    },
    {
      src: "/images/dishes/cachopo.jpg",
      alt: "Cachopo Asturiano 800g",
    },
    {
      src: "/images/dishes/crispy-chicken.jpg",
      alt: "Pollo Crujiente",
    },
    {
      src: "/images/dishes/cheesecake.jpg",
      alt: "Tarta de Queso",
    },
    {
      src: "/images/dishes/cod-loin.jpg",
      alt: "Lomo de Bacalao",
    },
    {
      src: "/images/dishes/coulant.jpg",
      alt: "Coulant de Chocolate",
    },
    {
      src: "/images/dishes/fried-saharan-squid.jpg",
      alt: "Calamares Fritos",
    },
    {
      src: "/images/dishes/garlic-prawns.jpg",
      alt: "Gambas al Ajillo",
    },
    {
      src: "/images/dishes/black-rice.jpg",
      alt: "Arroz Negro",
    },
    {
      src: "/images/dishes/smoke-cheddar.jpg",
      alt: "Queso Ahumado",
    },
    {
      src: "/images/dishes/tuna-tartare.jpg",
      alt: "Tartar de Atún",
    },
    {
      src: "/images/dishes/russian-salad.jpg",
      alt: "Ensaladilla Rusa",
    },
    {
      src: "/images/dishes/seafood-paella.jpg",
      alt: "Paella de Pescado y Mariscos",
    },
    {
      src: "/images/dishes/spanish-almond-cream.jpg",
      alt: "Bienmesabe",
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F5] overflow-hidden">
      <Swiper
        modules={[Autoplay, Mousewheel]}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
        }}
        slidesPerView={2}
        spaceBetween={0}
        breakpoints={{
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="ease-linear"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-square w-full overflow-hidden border-r border-stone-200/40">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default InfiniteGallery;
