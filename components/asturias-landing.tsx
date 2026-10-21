'use client'

import { useState } from 'react'
import { ArrowRight, Calendar, Location, Phone, Restaurant, Star, Time, LogoInstagram, LogoFacebook } from '@carbon/icons-react'
import { Button, Column, Grid, Header, HeaderName, HeaderGlobalBar, HeaderGlobalAction, Tile, Tag } from '@carbon/react'

const whatsapp = 'https://wa.me/34928812345?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20mesa.'

const highlights = [
  { image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=85', title: 'Cocina con memoria', text: 'Recetas asturianas, producto cercano y el punto justo de fuego.' },
  { image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1100&q=85', title: 'Una mesa abierta', text: 'Un espacio para quedarse un rato más, compartir y volver.' },
  { image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1100&q=85', title: 'Hecho aquí', text: 'Cada plato nace en nuestra cocina y llega a tu mesa sin artificios.' },
]

export function AsturiasLanding() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="asturias-page">
      <Header aria-label="Navegación principal" className="site-header">
        <HeaderName href="#inicio" prefix="ASTURIAS">Bar & Restaurante</HeaderName>
        <HeaderGlobalBar>
          <nav className="desktop-nav" aria-label="Secciones">
            <a href="#cocina">La cocina</a><a href="#historia">Nuestra historia</a><a href="#visitanos">Visítanos</a>
          </nav>
          <HeaderGlobalAction aria-label="Abrir menú" tooltipAlignment="end" onClick={() => setMenuOpen(!menuOpen)}><span className="menu-label">{menuOpen ? 'Cerrar' : 'Menú'}</span></HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
      {menuOpen && <nav className="mobile-nav" aria-label="Menú móvil"><a href="#cocina" onClick={() => setMenuOpen(false)}>La cocina</a><a href="#historia" onClick={() => setMenuOpen(false)}>Nuestra historia</a><a href="#visitanos" onClick={() => setMenuOpen(false)}>Visítanos</a></nav>}

      <section id="inicio" className="hero-zone">
        <Grid className="hero-grid">
          <Column sm={4} md={8} lg={{ span: 8, offset: 1 }} className="hero-copy">
            <Tag type="green" size="md">Casa de comidas · Arrecife</Tag>
            <h1>El sabor de casa,<br /><em>sin prisa.</em></h1>
            <p className="hero-lede">Una cocina honesta en el corazón de Arrecife. Producto, memoria y conversación alrededor de una buena mesa.</p>
            <div className="hero-actions"><Button href={whatsapp} size="lg" renderIcon={Calendar}>Reservar mesa</Button><Button href="#cocina" kind="tertiary" size="lg" renderIcon={ArrowRight}>Descubrir Asturias</Button></div>
          </Column>
          <Column sm={4} md={8} lg={{ span: 7, offset: 9 }} className="hero-image-column"><div className="hero-image"><img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=90" alt="Interior cálido del restaurante Asturias" /><div className="hero-note"><Star size={16} /> <span>4.8 · Google Reviews</span></div></div></Column>
        </Grid>
        <div className="scroll-cue">Desliza para conocer la casa <ArrowRight size={16} /></div>
      </section>

      <section id="cocina" className="intro-zone"><Grid><Column sm={4} md={3} lg={4}><p className="eyebrow">01 / La cocina</p></Column><Column sm={4} md={5} lg={8}><h2>Lo sencillo, cuando está bien hecho, se convierte en algo extraordinario.</h2><p className="body-copy">En Asturias cocinamos como se ha cocinado siempre: eligiendo bien, respetando el tiempo y dejando que el producto hable. Nuestra carta cambia con el mercado, pero la intención permanece.</p><Button href={whatsapp} kind="ghost" renderIcon={ArrowRight}>Ven a probarlo</Button></Column></Grid></section>

      <section id="historia" className="highlights-zone"><Grid><Column sm={4} md={8} lg={16}><div className="section-heading"><div><p className="eyebrow">02 / Una forma de estar</p><h2>Hecho para compartir</h2></div><p className="section-aside">Tres razones para sentarte<br />a nuestra mesa.</p></div></Column>{highlights.map((item, index) => <Column key={item.title} sm={4} md={index === 0 ? 4 : 4} lg={index === 0 ? 6 : 5} className="highlight-column"><article className="highlight-card"><div className="highlight-image"><img src={item.image} alt="" /></div><div className="highlight-content"><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></div></article></Column>)}</Grid></section>

      <section id="visitanos" className="visit-zone"><Grid><Column sm={4} md={8} lg={7} className="visit-copy"><p className="eyebrow">03 / Encuéntranos</p><h2>La mesa está lista.</h2><p className="body-copy">Ven a visitarnos en el centro de Arrecife. Te esperamos con la cocina encendida y una copa servida.</p><Button href={whatsapp} size="lg" renderIcon={Calendar}>Reservar por WhatsApp</Button></Column><Column sm={4} md={4} lg={{ span: 5, offset: 1 }}><Tile className="details-tile"><div className="detail"><Location size={20} /><p><strong>Calle León y Castillo, 42</strong><br />35500 Arrecife, Lanzarote</p></div><div className="detail"><Time size={20} /><p><strong>Lunes a sábado</strong><br />12:00 — 23:30 · Domingo cerrado</p></div><div className="detail"><Phone size={20} /><p><strong>928 812 345</strong><br />Reservas y consultas</p></div></Tile></Column></Grid></section>

      <footer className="site-footer"><Grid><Column sm={4} md={5} lg={8}><p className="footer-brand">ASTURIAS</p><p>Bar & Restaurante · Arrecife</p></Column><Column sm={4} md={3} lg={4} className="footer-social"><a href="#inicio">Instagram <LogoInstagram size={18} /></a><a href="#inicio">Facebook <LogoFacebook size={18} /></a></Column><Column sm={4} md={8} lg={4} className="footer-legal"><p>© 2026 Asturias</p><a href="#inicio">Volver arriba ↑</a></Column></Grid></footer>
      <a className="floating-reserve" href={whatsapp} aria-label="Reservar mesa por WhatsApp"><Calendar size={20} /></a>
    </main>
  )
}
