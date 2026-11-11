"use client";

export const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center bg-stone-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/hero/restaurant-bg.jpg')" }}
      />

      <div className="relative z-10 text-center max-w-3xl px-4">
        <p className="text-amber-400 uppercase tracking-widest text-sm mb-3">
          Bienvenidos a Bar & Restaurant Asturias
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
          Sabor Tradicional & Calidad
        </h1>
        <p className="text-stone-300 text-lg mb-8 font-light">
          Disfruta de la mejor gastronomía asturiana en un ambiente acogedor.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#menu"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition"
          >
            MENU
          </a>
          <a
            href="#contacto"
            className="border border-white/80 hover:bg-white hover:text-stone-900 px-8 py-3 rounded-md font-medium transition"
          >
            RESERVA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
