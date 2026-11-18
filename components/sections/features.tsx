import {
  CookingPotIcon,
  ClockIcon,
  ForkKnifeIcon,
} from "@phosphor-icons/react/dist/ssr";

const FEATURES_LIST = [
  {
    number: "01",
    icon: CookingPotIcon,
    title: "Máxima Calidad",
    description:
      "Ingredientes frescos y seleccionados a diario para mantener intacto el sabor de la cocina tradicional.",
  },
  {
    number: "02",
    icon: ClockIcon,
    title: "Servicio Continuo",
    description:
      "Atención ágil, cercana y cuidada durante toda tu estancia para que disfrutes sin prisas.",
  },
  {
    number: "03",
    icon: ForkKnifeIcon,
    title: "Fácil Reserva",
    description:
      "Reserva tu mesa en segundos por teléfono o WhatsApp y consulta nuestra carta actualizada en cualquier momento.",
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      className="border-y border-stone-200/80 bg-[#F4F0E8] px-4 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Cabecera editorial */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 border border-amber-700/25 bg-amber-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-800">
            <ForkKnifeIcon size={15} weight="bold" className="text-amber-600" />
            <span>Lo Que Ofrecemos</span>
          </div>

          <h2 className="mb-4 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-stone-950 sm:text-5xl">
            Compromiso con la{" "}
            <span className="italic text-amber-700">Excelencia</span>
          </h2>

          <p className="text-base font-light leading-relaxed text-stone-600">
            Cuidamos cada detalle de nuestro servicio para garantizar una
            experiencia gastronómica cómoda, acogedora y memorable.
          </p>
        </div>

        {/* Grid de tarjetas editoriales */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURES_LIST.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative flex flex-col justify-between border border-stone-200/90 border-t-2 border-t-stone-950 bg-[#FAF8F5] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-t-amber-500 hover:shadow-xl sm:p-10"
              >
                <div>
                  {/* Fila superior: Icono oscuro + Numeración */}
                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center bg-stone-950 text-amber-400 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-stone-950">
                      <Icon size={24} weight="bold" />
                    </div>
                    <span className="font-serif text-3xl font-bold text-stone-300 transition-colors duration-300 group-hover:text-amber-600/40">
                      {item.number}
                    </span>
                  </div>

                  {/* Título y descripción */}
                  <h3 className="mb-3 font-serif text-2xl font-bold tracking-tight text-stone-950">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-stone-600">
                    {item.description}
                  </p>
                </div>

                {/* Línea de acento inferior */}
                <div className="mt-8 h-px w-12 bg-stone-300 transition-all duration-300 group-hover:w-full group-hover:bg-amber-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

