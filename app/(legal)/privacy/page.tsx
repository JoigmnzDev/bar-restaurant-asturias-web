import type { Metadata } from "next";
import {
  LegalDocument,
  type LegalSection,
} from "@/components/sections/legal-document";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Información sobre el tratamiento y protección de datos personales en Bar Restaurante Asturias.",
  robots: { index: false, follow: true },
};

const SECTIONS: LegalSection[] = [
  {
    number: "01",
    title: "Responsable del tratamiento",
    body: `De acuerdo con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), le informamos que los datos personales facilitados voluntariamente por los usuarios serán tratados por Bar Restaurante Asturias, con domicilio en Arrecife, Lanzarote.`,
  },
  {
    number: "02",
    title: "Finalidad y base jurídica",
    body: `Los datos recogidos a través de llamadas telefónicas o comunicaciones directas se utilizan exclusivamente para gestionar reservas de mesa, atender consultas sobre eventos o intolerancias alimentarias y prestar el servicio solicitado.

La base legal del tratamiento es el consentimiento del interesado y la ejecución de medidas precontractuales a petición del cliente.`,
  },
  {
    number: "03",
    title: "Conservación y cesión de datos",
    body: `Los datos personales se conservarán únicamente durante el tiempo necesario para gestionar su reserva o consulta y cumplir con las obligaciones legales aplicables. No se cederán datos a terceros salvo obligación legal.`,
  },
  {
    number: "04",
    title: "Derechos de los usuarios",
    body: `Usted tiene derecho a acceder, rectificar y suprimir sus datos, así como a solicitar la limitación u oposición a su tratamiento, comunicándolo directamente en nuestro establecimiento en Arrecife o a través de nuestros canales de contacto.`,
  },
];

export default function PrivacidadPage() {
  return (
    <LegalDocument
      badge="Protección de Datos"
      titleLead="Política de"
      titleHighlight="Privacidad"
      updatedAt="Última actualización — 2026"
      intro="En Bar Restaurante Asturias cuidamos la confidencialidad de nuestros clientes tanto en sala como en nuestros canales digitales, cumpliendo con la normativa vigente de protección de datos."
      sections={SECTIONS}
    />
  );
}
