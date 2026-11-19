"use client";

import { useState } from "react";
import Image from "next/image";
import { ForkKnifeIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import { siteConfig } from "@/data/site";

type CategoryId = "entrantes" | "principales" | "postres";

interface Dish {
  name: string;
  category: CategoryId;
  price: string;
  description: string;
  image: string;
  tag?: string;
}

const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "entrantes", label: "Tapas y Entrantes" },
  { id: "principales", label: "Carnes, Pescados y Arroces" },
  { id: "postres", label: "Postres Caseros" },
];

const DISHES: Dish[] = [
  // Tapas y Entrantes
  {
    name: "Croquetas del Día (Casera)",
    category: "entrantes",
    price: "1,80 €",
    description:
      "Cremosas por dentro y crujientes por fuera, elaboradas a diario según receta tradicional (precio por unidad).",
    image: "/images/dishes/croquettes.jpg",
    tag: "Especialidad",
  },
  {
    name: "Calamar Sahariano Frito",
    category: "entrantes",
    price: "18,50 €",
    description:
      "Fritura limpia y crujiente con producto fresco de lonja, acompañado de papas y ensalada.",
    image: "/images/dishes/fried-saharan-squid.jpg",
  },
  {
    name: "Gambas al Ajillo",
    category: "entrantes",
    price: "10,95 €",
    description:
      "Salteadas en cazuela de barro con aceite de oliva virgen extra, ajo laminado y guindilla.",
    image: "/images/dishes/garlic-prawns.jpg",
  },
  {
    name: "Tartar de Atún con Aguacate",
    category: "entrantes",
    price: "15,95 €",
    description:
      "Corte a cuchillo de atún fresco sobre aguacate con mayonesa de aguacate y wasabi.",
    image: "/images/dishes/tuna-tartare.jpg",
  },
  {
    name: "Ensaladilla Rusa con Ventresca",
    category: "entrantes",
    price: "9,50 €",
    description:
      "Elaboración casera tradicional coronada con ventresca de atún seleccionada.",
    image: "/images/dishes/russian-salad.jpg",
  },
  {
    name: "Pollo Crujiente",
    category: "entrantes",
    price: "11,95 €",
    description:
      "Tiras de pollo con rebozado extra crujiente, papas fritas y salsa de gochujang.",
    image: "/images/dishes/crispy-chicken.jpg",
  },

  // Carnes, Pescados y Arroces
  {
    name: "Cachopo de Ternera (800g)",
    category: "principales",
    price: "39,95 €",
    description:
      "Ideal para 2 personas. Filetes de ternera rellenos de jamón y queso fundido con guarnición.",
    image: "/images/dishes/cachopo.jpg",
    tag: "Estrella",
  },
  {
    name: "Arroz Negro Cremoso",
    category: "principales",
    price: "15,90 €",
    description:
      "Arroz meloso en su punto con tinta natural de calamar, chipirones y langostino.",
    image: "/images/dishes/black-rice.jpg",
  },
  {
    name: "Lomo de Bacalao",
    category: "principales",
    price: "18,95 €",
    description:
      "Con tomate cherry, aceituna negra, salsa cremosa de azafrán y aceite de albahaca con guarnición.",
    image: "/images/dishes/cod-loin.jpg",
  },
  // Postres Caseros
  {
    name: "Tarta de Queso Casera",
    category: "postres",
    price: "6,50 €",
    description: "Cremosa al horno sobre base crujiente de galleta artesanal.",
    image: "/images/dishes/cheesecake.jpg",
    tag: "Favorito",
  },
  {
    name: "Coulant de Chocolate",
    category: "postres",
    price: "6,80 €",
    description: "Bizcocho tibio de cacao puro con interior fundido.",
    image: "/images/dishes/coulant.jpg",
  },
  {
    name: "Bienmesabe",
    category: "postres",
    price: "6,00 €",
    description:
      "Clásico postre canario de crema de almendras tostadas con toque de canela y limón.",
    image: "/images/dishes/spanish-almond-cream.jpg",
  },
];

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("entrantes");

  const filteredDishes = DISHES.filter(
    (dish) => dish.category === activeCategory,
  );

  return (
    <section
      id="menu"
      className="border-b border-stone-200/80 bg-[#FAF8F5] px-4 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 border border-amber-700/25 bg-amber-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-800">
            <ForkKnifeIcon size={15} weight="bold" className="text-amber-600" />
            <span>Nuestra Carta</span>
          </div>

          <h2 className="mb-3 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-stone-950 sm:text-5xl">
            Selección de{" "}
            <span className="italic text-amber-700">Nuestros Platos</span>
          </h2>

          <p className="text-sm font-light leading-relaxed text-stone-600 sm:text-base">
            Especialidades asturianas y cocina de mercado en Arrecife. Consulta
            nuestra carta completa y sugerencias del día en sala.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Categorías de la carta"
          className="relative z-10 mb-10 flex w-full flex-nowrap items-center justify-start gap-2.5 overflow-x-auto pb-2 touch-pan-x sm:justify-center sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={`shrink-0 cursor-pointer whitespace-nowrap px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
                  isActive
                    ? "bg-stone-950 text-amber-400 shadow-sm"
                    : "border border-stone-300 bg-white text-stone-700 hover:border-stone-950 hover:text-stone-950"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-2">
          {filteredDishes.map((dish) => (
            <article
              key={dish.name}
              className="group flex items-start gap-4 border-b border-stone-200/90 pb-6 transition-colors hover:border-amber-500/70"
            >
              {/* Miniatura cuadrada */}
              <div className="relative h-20 w-20 shrink-0 overflow-hidden border border-stone-200 bg-stone-900 sm:h-24 sm:w-24">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="96px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Contenido del plato */}
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-serif text-lg font-bold leading-snug text-stone-950 transition-colors group-hover:text-amber-700">
                    {dish.name}
                  </h3>

                  {dish.tag && (
                    <span className="hidden bg-stone-950 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-amber-400 sm:inline-block">
                      {dish.tag}
                    </span>
                  )}

                  {/* Línea divisoria punteada estilo carta clásica */}
                  <span className="mx-1 hidden flex-1 border-b border-dotted border-stone-300 sm:block" />

                  <span className="ml-auto shrink-0 font-serif text-base font-bold text-amber-700 sm:ml-0 sm:text-lg">
                    {dish.price}
                  </span>
                </div>

                <p className="mt-1.5 line-clamp-2 text-xs font-light leading-relaxed text-stone-600 sm:text-sm">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 pt-4 sm:flex-row">
          <p className="text-center text-xs font-light text-stone-500 sm:text-left">
            * Todos nuestros pescados y carnes principales incluyen guarnición.
            Carta de alérgenos disponible en el local.
          </p>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="group inline-flex items-center gap-2 bg-stone-950 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#FAF8F5] transition-colors hover:bg-amber-500 hover:text-stone-950"
          >
            <span>Reservar Mesa</span>
            <ArrowUpRightIcon
              size={15}
              weight="bold"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
