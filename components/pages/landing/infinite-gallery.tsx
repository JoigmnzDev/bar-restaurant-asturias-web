"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";

import "swiper/css";

const emptySubscribe = () => () => {};

const GALLERY_IMAGES = [
  { src: "/images/dishes/cachopo.jpg", alt: "Cachopo Asturiano 800g" },
  { src: "/images/dishes/croquettes.jpg", alt: "Croquetas Caseras" },
  { src: "/images/dishes/crispy-chicken.jpg", alt: "Pollo Crujiente" },
  { src: "/images/dishes/cheesecake.jpg", alt: "Tarta de Queso" },
  { src: "/images/dishes/cod-loin.jpg", alt: "Lomo de Bacalao" },
  { src: "/images/dishes/coulant.jpg", alt: "Coulant de Chocolate" },
  { src: "/images/dishes/fried-saharan-squid.jpg", alt: "Calamares Fritos" },
  { src: "/images/dishes/garlic-prawns.jpg", alt: "Gambas al Ajillo" },
  { src: "/images/dishes/black-rice.jpg", alt: "Arroz Negro" },
  { src: "/images/dishes/smoke-cheddar.jpg", alt: "Queso Ahumado" },
  { src: "/images/dishes/russian-salad.jpg", alt: "Ensaladilla Rusa" },
  {
    src: "/images/dishes/seafood-paella.jpg",
    alt: "Paella de Pescado y Mariscos",
  },
  { src: "/images/dishes/tuna-tartare.jpg", alt: "Tartar de Atún" },
  { src: "/images/dishes/spanish-almond-cream.jpg", alt: "Bienmesabe" },
];

export const InfiniteGallery = () => {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <section className="w-full overflow-hidden bg-[#FAF8F5]">
        <div className="h-48 w-full bg-[#FAF8F5]" />
      </section>
    );
  }

  return (
    <section className="w-full overflow-hidden bg-[#FAF8F5]">
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
        {GALLERY_IMAGES.map((img) => (
          <SwiperSlide key={img.src}>
            <div className="relative aspect-square w-full overflow-hidden border-r border-stone-200/40">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
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
