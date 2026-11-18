import Link from "next/link";
import { ArrowLeftIcon, ForkKnifeIcon } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/data/site";

export interface LegalSection {
  number: string;
  title: string;
  body: string;
}

interface LegalDocumentProps {
  badge: string;
  titleLead: string;
  titleHighlight: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
}

export function LegalDocument({
  badge,
  titleLead,
  titleHighlight,
  updatedAt,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Cabecera editorial */}
      <section
        className="relative overflow-hidden border-b border-stone-200/80 px-4 pt-36 pb-16 sm:px-8 lg:pt-44 lg:pb-20"
        aria-label={`${titleLead} ${titleHighlight}`}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-stone-500 transition-colors hover:text-amber-700"
            >
              <ArrowLeftIcon size={14} weight="bold" />
              <span>Volver al inicio</span>
            </Link>
          </div>

          <div className="mb-4 inline-flex items-center gap-2 border border-amber-700/25 bg-amber-500/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-800">
            <ForkKnifeIcon size={15} weight="bold" className="text-amber-600" />
            <span>{badge}</span>
          </div>

          <h1 className="font-serif text-4xl font-bold leading-[1.06] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
            {titleLead}{" "}
            <span className="italic text-amber-700">{titleHighlight}</span>
          </h1>

          <div className="mt-8 flex items-center gap-4">
            <div
              className="h-px max-w-xs flex-1 bg-stone-300"
              aria-hidden="true"
            />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
              {updatedAt}
            </p>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="px-4 py-14 sm:px-8" aria-label="Introducción legal">
        <div className="mx-auto max-w-5xl">
          <p className="max-w-3xl text-base font-light leading-relaxed text-stone-600 sm:text-lg">
            {intro}
          </p>
        </div>
      </section>

      {/* Secciones numeradas en rejilla de 2 columnas */}
      <section className="px-4 pb-24 sm:px-8" aria-label="Cláusulas legales">
        <div className="mx-auto flex max-w-5xl flex-col">
          {sections.map((section) => (
            <article
              key={section.number}
              className="group grid grid-cols-1 gap-4 border-t border-stone-200/90 py-10 transition-colors duration-300 hover:border-amber-600/70 md:grid-cols-[120px_1fr] md:gap-12 md:py-12"
            >
              <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                <span className="font-serif text-sm font-bold tracking-[0.25em] text-amber-700">
                  {section.number}
                </span>
                <div
                  className="h-px w-8 bg-stone-300 transition-colors duration-300 group-hover:bg-amber-600 md:hidden"
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-xl font-bold tracking-tight text-stone-950 sm:text-2xl">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-3.5">
                  {section.body.split("\n\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm font-light leading-relaxed text-stone-600 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <div className="border-t border-stone-200/90" aria-hidden="true" />
        </div>
      </section>

      {/* Bloque inferior de contacto */}
      <section
        className="border-t border-stone-200/80 bg-[#F4F0E8] px-4 py-16 sm:px-8"
        aria-label="Contacto legal"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-800">
              ¿Tienes alguna consulta?
            </span>
            <h2 className="font-serif text-2xl font-bold text-stone-950 sm:text-3xl">
              Contacta con Nosotros
            </h2>
            <p className="text-sm font-light text-stone-600">
              Estamos a tu disposición en Arrecife para resolver cualquier duda
              sobre nuestras políticas o servicios.
            </p>
          </div>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center bg-stone-950 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#FAF8F5] transition-colors hover:bg-amber-500 hover:text-stone-950 whitespace-nowrap"
          >
            Llamar al Restaurante
          </a>
        </div>
      </section>
    </div>
  );
}
