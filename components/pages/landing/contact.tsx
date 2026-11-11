"use client";

import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  WhatsappLogoIcon,
  ForkKnifeIcon,
} from "@phosphor-icons/react/dist/ssr";

export const Contact = () => {
  return (
    <section
      id="contacto"
      className="bg-[#FAF8F5] py-20 px-4 sm:px-8 border-t border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-amber-700 font-medium text-xs tracking-[0.2em] uppercase mb-2">
            <ForkKnifeIcon size={16} className="text-amber-600" />
            <span>Encuéntranos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-4">
            Horarios & Ubicación
          </h2>
          <p className="text-stone-600 text-sm font-light leading-relaxed">
            Ven a disfrutar de nuestra cocina en un ambiente único. Te
            recomendamos reservar mesa con antelación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-between gap-6">
            <div className="bg-white p-6 rounded-sm shadow-sm border border-stone-200/80 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] flex items-center justify-center border border-amber-100 shrink-0">
                <MapPinIcon size={24} className="text-amber-600" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-stone-900 mb-1">
                  Dirección
                </h3>
                <p className="text-stone-600 text-sm">
                  Calle León y Castillo, 12
                </p>
                <p className="text-stone-500 text-xs">
                  35500 Arrecife, Lanzarote
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm border border-stone-200/80 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] flex items-center justify-center border border-amber-100 shrink-0">
                <ClockIcon size={24} className="text-amber-600" />
              </div>
              <div className="w-full">
                <h3 className="font-serif font-bold text-lg text-stone-900 mb-1">
                  Horario de Apertura
                </h3>
                <div className="flex justify-between text-sm text-stone-600 border-b border-stone-100 py-1">
                  <span>Martes - Sábado:</span>
                  <span className="font-medium text-stone-800">
                    12:30 - 23:00
                  </span>
                </div>
                <div className="flex justify-between text-sm text-stone-600 border-b border-stone-100 py-1">
                  <span>Domingos:</span>
                  <span className="font-medium text-stone-800">
                    12:30 - 17:00
                  </span>
                </div>
                <div className="flex justify-between text-sm text-stone-500 py-1">
                  <span>Lunes:</span>
                  <span className="text-amber-700 font-medium">
                    Cerrado por descanso
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm border border-stone-200/80 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] flex items-center justify-center border border-amber-100 shrink-0">
                <PhoneIcon size={24} className="text-amber-600" />
              </div>
              <div className="w-full">
                <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
                  Reservas Directas
                </h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+34928000000"
                    className="flex-1 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider py-3 px-4 rounded text-center transition-colors flex items-center justify-center gap-2"
                  >
                    <PhoneIcon size={16} />
                    Llamar al restaurante
                  </a>
                  <a
                    href="https://wa.me/34928000000?text=Hola,%20me%20gustaría%20reservar%20una%20mesa"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider py-3 px-4 rounded text-center transition-colors flex items-center justify-center gap-2"
                  >
                    <WhatsappLogoIcon size={18} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-[350px] lg:min-h-full rounded-sm overflow-hidden border border-stone-200/80 shadow-sm relative">
            <iframe
              title="Ubicación del Restaurante"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.273188583492!2d-13.551231823528827!3d28.960012975487714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc489c636f32e7f9%3A0x6b2b7337a6dd63a5!2sArrecife%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
