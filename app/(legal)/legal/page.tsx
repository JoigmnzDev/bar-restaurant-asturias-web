import type { Metadata } from "next";
import {
  LegalDocument,
  type LegalSection,
} from "@/components/sections/legal-document";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Datos identificativos y condiciones generales de uso del sitio web de Bar Restaurante Asturias.",
  robots: { index: false, follow: true },
};

const SECTIONS: LegalSection[] = [
  {
    number: "01",
    title: "Datos identificativos",
    body: `En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa que este sitio web pertenece a Bar Restaurante Asturias, establecimiento de restauración ubicado en Arrecife, Lanzarote (Las Palmas, España).`,
  },
  {
    number: "02",
    title: "Objeto y condiciones de uso",
    body: `El presente sitio web tiene por finalidad dar a conocer nuestra propuesta gastronómica, carta, horarios de apertura y vías de contacto para reservas en sala.

El acceso y navegación por la web atribuye la condición de usuario e implica la aceptación de las presentes condiciones generales de uso.`,
  },
  {
    number: "03",
    title: "Propiedad intelectual e industrial",
    body: `Todos los contenidos publicados en este dominio, incluyendo textos, fotografías de platos y local, logotipos, diseño editorial y código fuente, están protegidos por la normativa de propiedad intelectual e industrial, quedando prohibida su reproducción o distribución sin autorización expresa.`,
  },
  {
    number: "04",
    title: "Exclusión de responsabilidad",
    body: `Los precios y platos mostrados en la carta digital tienen carácter orientativo y pueden variar según disponibilidad de producto fresco de temporada. La carta oficial actualizada y la información sobre alérgenos están siempre disponibles en nuestro local.`,
  },
];

export default function AvisoLegalPage() {
  return (
    <LegalDocument
      badge="Marco Legal"
      titleLead="Aviso"
      titleHighlight="Legal"
      updatedAt="Última actualización — 2026"
      intro="Información general sobre la titularidad, condiciones de acceso y uso del sitio web oficial de Bar Restaurante Asturias en Arrecife."
      sections={SECTIONS}
    />
  );
}
