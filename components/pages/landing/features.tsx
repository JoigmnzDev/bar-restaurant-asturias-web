"use client";

import {
  CookingPotIcon,
  ClockIcon,
  ForkKnifeIcon,
} from "@phosphor-icons/react/dist/ssr";

export const Features = () => {
  const featuresList = [
    {
      icon: <CookingPotIcon size={32} className="text-amber-600" />,
      title: "Máxima Calidad",
      description:
        "Ingredientes frescos y seleccionados a diario para mantener el sabor tradicional.",
    },
    {
      icon: <ClockIcon size={32} className="text-amber-600" />,
      title: "Servicio Continuo",
      description:
        "Atención ágil y cuidada durante toda tu estancia para una experiencia perfecta.",
    },
    {
      icon: <ForkKnifeIcon size={32} className="text-amber-600" />,
      title: "Fácil Reserva",
      description:
        "Reserva tu mesa en segundos o consulta nuestro menú actualizado en cualquier momento.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-[#F7F4EF] py-20 px-4 sm:px-8 border-y border-stone-200/60"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-amber-700 font-medium text-xs tracking-[0.2em] uppercase mb-2">
            <ForkKnifeIcon size={16} className="text-amber-600" />
            <span>Lo Que Ofrecemos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-4">
            Compromiso con la Excelencia
          </h2>
          <p className="text-stone-600 text-sm font-light leading-relaxed">
            Cuidamos cada detalle de nuestro servicio para garantizar una
            experiencia gastronómica cómoda, acogedora y memorable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center border border-stone-100"
            >
              <div className="w-16 h-16 rounded-full bg-[#FAF8F5] flex items-center justify-center mb-6 border border-amber-100">
                {item.icon}
              </div>

              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">
                {item.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
