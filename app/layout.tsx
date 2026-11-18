import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Lora } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Cocina Asturiana y de Mercado en Arrecife`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Bar Restaurante Asturias",
    "Restaurante en Arrecife",
    "Cocina asturiana Lanzarote",
    "Cachopo en Lanzarote",
    "Comer en Avenida Marítima Arrecife",
    "Pescado y marisco Arrecife",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Cocina Asturiana en Arrecife`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Primera línea de playa en Arrecife`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Cocina Asturiana en Arrecife`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  telephone: siteConfig.contact.phone,
  servesCuisine: ["Asturiana", "Española", "Mariscos y Pescados"],
  priceRange: "€€",
  acceptsReservations: "True",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.location.address,
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.province,
    postalCode: siteConfig.location.postalCode,
    addressCountry: siteConfig.location.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "13:00",
      closes: "00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "13:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "19:00",
      closes: "00:00",
    },
  ],
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="es"
      className={cn("h-full antialiased", inter.variable, lora.variable)}
    >
      <body className="flex min-h-full flex-col bg-[#FAF8F5] text-stone-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
