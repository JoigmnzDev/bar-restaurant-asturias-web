// config/site.ts

export const siteConfig = {
  name: "Bar & Restaurant Asturias",
  legalName: "Bar & Restaurant Asturias S.L.",
  description:
    "Cocina tradicional asturiana y fusión en primera línea de playa en Arrecife, Lanzarote.",
  url: "https://barrestaurantasturias.com",
  ogImage: "/images/og.jpg",
  contact: {
    phone: "+34 928 38 04 27",
    phoneDisplay: "928 38 04 27",
    whatsapp: "+34669355881",
    email: "",
  },
  location: {
    address: "Avenida Marítima",
    city: "Arrecife",
    province: "Las Palmas",
    postalCode: "35500",
    country: "ES",
    googleMapsUrl: "https://maps.google.com/?q=...",
  },
  openingHours: {
    weekdays: "13:00 - 23:00",
    sunday: "13:00 - 16:00 | 19:00 - 23:00",
    tuesday: "Cerrado",
  },
  social: {
    instagram: "https://instagram.com/bar_restaurant_asturias",
    facebook: "https://facebook.com/barrestaurantasturias",
    tripadvisor: "https://tripadvisor.es/...",
    googleReviews: "https://g.page/...",
  },
} as const;

export type SiteConfig = typeof siteConfig;
