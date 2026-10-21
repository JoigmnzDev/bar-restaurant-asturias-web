'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, MessageSquare, Phone, Star } from 'lucide-react'

const categories = ['Todas', 'Nuestras Tapas', 'El Local', 'Ambiente'] as const

type Category = (typeof categories)[number]

const gallery = [
  { title: 'Tapas para compartir', category: 'Nuestras Tapas', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85', className: 'md:col-span-2 md:row-span-2' },
  { title: 'La barra, nuestro punto de encuentro', category: 'El Local', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=85', className: 'md:row-span-2' },
  { title: 'Cocina con historia', category: 'Nuestras Tapas', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=85', className: '' },
  { title: 'Momentos sin prisa', category: 'Ambiente', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=85', className: '' },
  { title: 'Una mesa para volver', category: 'Ambiente', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85', className: 'md:col-span-2' },
]

const whatsapp = 'https://wa.me/34928812345?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20mesa.'

function PillLink({ children, href, variant = 'primary' }: { children: React.ReactNode; href: string; variant?: 'primary' | 'secondary' }) {
  return <a href={href} className={`inline-flex flex-row items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold shadow-xs transition-all hover:-translate-y-0.5 ${variant === 'primary' ? 'bg-[#ACCCC3] text-slate-900 hover:bg-[#99beb5]' : 'border border-slate-200 bg-white text-slate-800 hover:bg-slate-50'}`}>{children}</a>
}

export function AsturiasLanding() {
  const [active, setActive] = useState<Category>('Todas')
  const filteredGallery = useMemo(() => active === 'Todas' ? gallery : gallery.filter((item) => item.category === active), [active])

  return (
    <main className="min-h-screen overflow-hidden bg-[#FAFAFA] text-slate-900">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:py-7">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Bar & Restaurante Asturias, inicio">
            <span className="flex size-10 items-center justify-center rounded-full bg-[#ACCCC3] font-serif text-xl font-bold text-slate-900">A</span>
            <span className="max-w-[150px] font-serif text-sm font-bold leading-tight text-slate-900 sm:max-w-none sm:text-base">Bar & Restaurante Asturias</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex" aria-label="Navegación principal">
            <a className="transition-colors hover:text-slate-950" href="#inicio">Inicio</a><a className="transition-colors hover:text-slate-950" href="#galeria">Galería</a><a className="transition-colors hover:text-slate-950" href="#nosotros">Sobre Nosotros</a><a className="transition-colors hover:text-slate-950" href="#ubicacion">Ubicación</a>
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <a className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-slate-700" href="tel:+34928812345"><Phone className="size-4" /> <span className="hidden xl:inline">928 812 345</span></a>
            <PillLink href={whatsapp}><MessageSquare className="size-4" /> Reservar por WhatsApp</PillLink>
          </div>
          <a href={whatsapp} className="flex size-11 items-center justify-center rounded-full bg-[#ACCCC3] sm:hidden" aria-label="Reservar por WhatsApp"><MessageSquare className="size-5" /></a>
        </div>
      </header>

      <section id="inicio" className="relative isolate flex min-h-[720px] items-end overflow-hidden pt-32 lg:min-h-[800px] lg:items-center">
        <img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2200&q=90" alt="Interior cálido de un restaurante" className="absolute inset-0 -z-20 size-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/90 to-white/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-white/65 via-transparent to-white/15" />
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 lg:pb-0">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-slate-700 shadow-sm backdrop-blur"><Star className="size-3.5 fill-[#ACCCC3] text-[#6f9f94]" /> 4.8 en Google Reviews <span className="text-slate-400">·</span> Arrecife, Lanzarote</div>
            <h1 className="font-serif text-5xl font-bold leading-[0.98] tracking-tight text-slate-950 sm:text-7xl">Bar & Restaurante Asturias</h1>
            <p className="mt-6 font-serif text-xl text-slate-700 sm:text-2xl">Sabores que saben a hogar <span className="text-[#6f9f94]">·</span> Arrecife, Lanzarote</p>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">Gastronomía tradicional, tapas y momentos especiales en el corazón de Arrecife.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><PillLink href={whatsapp}><MessageSquare className="size-4" /> Reservar Mesa por WhatsApp</PillLink><PillLink href="tel:+34928812345" variant="secondary"><Phone className="size-4" /> Llamar al Restaurante</PillLink></div>
          </div>
        </div>
      </section>

      <section id="galeria" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6f9f94]">Una mirada a Asturias</p><h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">Nuestro Local y Especialidades</h2><p className="mt-4 max-w-xl text-slate-600">Descubre nuestras tapas, el ambiente y las instalaciones en Arrecife.</p></div><div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar galería">{categories.map((category) => <button key={category} onClick={() => setActive(category)} role="tab" aria-selected={active === category} className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${active === category ? 'bg-[#ACCCC3] text-slate-900' : 'bg-white text-slate-500 hover:bg-slate-100'}`}>{category}</button>)}</div></div>
        <div className="mt-10 grid auto-rows-[190px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">{filteredGallery.map((item) => <article key={item.title} className={`group relative overflow-hidden rounded-3xl ${item.className}`}><img src={item.image} alt={item.title} className="size-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-5 text-white"><p className="text-xs font-medium uppercase tracking-wider text-white/70">{item.category}</p><h3 className="mt-1 font-serif text-xl">{item.title}</h3></div></article>)}</div>
      </section>

      <section id="nosotros" className="bg-white px-6 py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6f9f94]">Desde 1998</p><h2 className="max-w-xl font-serif text-4xl font-bold leading-tight sm:text-5xl">Una cocina honesta, una mesa siempre abierta.</h2><div className="mt-7 space-y-5 text-base leading-7 text-slate-600"><p>En Asturias creemos que comer bien empieza por cuidar lo esencial: producto cercano, recetas con memoria y el tiempo necesario para hacer las cosas bien.</p><p>Somos un bar de barrio con alma de casa. Aquí cada plato sale con cariño y cada visita se convierte en una conversación más.</p></div><a href="#ubicacion" className="mt-8 inline-flex items-center gap-2 font-semibold text-slate-900 underline decoration-[#ACCCC3] decoration-4 underline-offset-4">Ven a conocernos <ArrowUpRight className="size-4" /></a></div><div className="rounded-[2rem] border border-[#ACCCC3]/30 bg-[#ACCCC3]/15 p-8 sm:p-12"><span className="font-serif text-6xl leading-none text-[#6f9f94]">“</span><blockquote className="mt-3 font-serif text-3xl leading-tight text-slate-800">Aquí venimos a comer rico, a conversar sin prisa y a sentirnos como en casa.</blockquote><div className="mt-8 flex items-center gap-3 text-sm font-semibold text-slate-600"><span className="size-2 rounded-full bg-[#6f9f94]" /> La familia Asturias</div></div></div></section>

      <section id="ubicacion" className="px-6 py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div className="rounded-[2rem] bg-slate-900 p-8 text-white sm:p-10"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ACCCC3]">Reserva directa</p><h2 className="font-serif text-4xl font-bold">Tu mesa empieza con un hola.</h2><p className="mt-5 leading-7 text-slate-300">Gestionamos las reservas de forma cercana, por WhatsApp Business o por teléfono. Sin formularios, sin esperas.</p><div className="mt-8 flex flex-col gap-3"><PillLink href={whatsapp}><MessageSquare className="size-4" /> Escribir por WhatsApp</PillLink><PillLink href="tel:+34928812345" variant="secondary"><Phone className="size-4" /> 928 812 345</PillLink></div><div className="mt-10 grid gap-5 border-t border-white/10 pt-7 text-sm"><div><p className="font-semibold text-white">Horario</p><p className="mt-1 text-slate-400">Lunes a sábado · 12:00 — 23:30<br />Domingo cerrado</p></div><div><p className="font-semibold text-white">Dónde estamos</p><p className="mt-1 text-slate-400">Calle León y Castillo, 42<br />35500 Arrecife, Lanzarote</p></div></div></div><div className="min-h-[420px] overflow-hidden rounded-[2rem] border border-slate-200 bg-[#e9efed]"><iframe title="Mapa de Bar & Restaurante Asturias" src="https://www.google.com/maps?q=Calle+Le%C3%B3n+y+Castillo+42,+Arrecife,+Lanzarote&output=embed" className="size-full min-h-[420px] border-0 grayscale" loading="lazy" /></div></div></section>

      <footer className="bg-slate-900 px-6 py-10 text-slate-400"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm sm:flex-row sm:items-center"><div><p className="font-serif text-lg font-bold text-white">Bar & Restaurante Asturias</p><p className="mt-1">Calle León y Castillo, 42 · Arrecife</p></div><div className="flex items-center gap-5"><a href="tel:+34928812345" className="hover:text-white">928 812 345</a><a href={whatsapp} aria-label="WhatsApp" className="hover:text-white"><MessageSquare className="size-5" /></a><a href="#inicio" aria-label="Redes sociales" className="font-semibold hover:text-white">IG</a></div></div><div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-xs">© 2026 Bar & Restaurante Asturias. Todos los derechos reservados.</div></footer>
      <a href={whatsapp} className="fixed bottom-5 right-5 z-30 flex size-14 items-center justify-center rounded-full bg-[#ACCCC3] text-slate-900 shadow-lg transition-transform hover:scale-110" aria-label="Reservar por WhatsApp"><MessageSquare className="size-6" /></a>
    </main>
  )
}
