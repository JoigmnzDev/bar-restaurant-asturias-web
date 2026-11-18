import type { Metadata } from "next";
import {
  LegalDocument,
  type LegalSection,
} from "@/components/sections/legal-document";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Información sobre el uso de cookies en la web oficial de Bar Restaurante Asturias en Arrecife.",
  robots: { index: false, follow: true },
};

const SECTIONS: LegalSection[] = [
  {
    number: "01",
    title: "¿Qué son las cookies?",
    body: `Las cookies son pequeños archivos de texto que se almacenan en su navegador al visitar nuestro sitio web. Estas herramientas permiten garantizar el correcto funcionamiento técnico de la página y recordar preferencias básicas de navegación.

En Bar Restaurante Asturias utilizamos estas tecnologías únicamente para ofrecer una navegación fluida, rápida y segura sin identificarle personalmente.`,
  },
  {
    number: "02",
    title: "Tipos de cookies que utilizamos",
    body: `Este sitio web emplea principalmente cookies técnicas propias, gestionadas para asegurar la estabilidad y correcta visualización del contenido, así como cookies de terceros derivadas de servicios integrados como mapas de ubicación.

Según su duración, pueden ser de "sesión" (se eliminan automáticamente al cerrar el navegador) o "persistentes" (permanecen almacenadas durante un tiempo limitado).`,
  },
  {
    number: "03",
    title: "Cookies técnicas y necesarias",
    body: `Son aquellas estrictamente imprescindibles para la navegación y el funcionamiento básico de la web, como la carga de tipografías, imágenes y medidas de seguridad.

Al ser necesarias para prestar el servicio solicitado por el usuario al acceder a la página, estas cookies no requieren consentimiento previo.`,
  },
  {
    number: "04",
    title: "Cookies de terceros",
    body: `Al mostrar mapas interactivos o enlaces directos a plataformas externas como Google Maps o redes sociales, dichos proveedores pueden establecer sus propias cookies conforme a sus respectivas políticas.

Bar Restaurante Asturias no tiene control directo sobre las cookies gestionadas por estos servicios externos, por lo que le recomendamos revisar sus condiciones de privacidad.`,
  },
  {
    number: "05",
    title: "Gestión y desactivación en su navegador",
    body: `Puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo en cualquier momento a través de las opciones de configuración de su navegador habitual (Chrome, Safari, Firefox o Edge).

Tenga en cuenta que desactivar determinadas cookies técnicas podría afectar ligeramente al funcionamiento de algunos elementos visuales de la web.`,
  },
];

export default function CookiesPage() {
  return (
    <LegalDocument
      badge="Información Legal"
      titleLead="Política de"
      titleHighlight="Cookies"
      updatedAt="Última actualización — 2026"
      intro="En Bar Restaurante Asturias utilizamos cookies técnicas necesarias para que tu visita a nuestra web sea ágil, segura y clara, respetando en todo momento tu privacidad."
      sections={SECTIONS}
    />
  );
}
