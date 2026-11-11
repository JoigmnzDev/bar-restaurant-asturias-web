"use client";

import { Footer } from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/pages/landing/hero";
import About from "@/components/pages/landing/about";
import Features from "@/components/pages/landing/features";
import Testimonials from "@/components/pages/landing/testimonials";
import Team from "@/components/pages/landing/team";
import InfiniteGallery from "@/components/pages/landing/infinite-gallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAF8F5] text-stone-900 antialiased">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <InfiniteGallery />
      <Testimonials />
      <Team />
      <Footer />
    </main>
  );
}
