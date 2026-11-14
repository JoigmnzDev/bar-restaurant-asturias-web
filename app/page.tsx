"use client";

import { Footer } from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/pages/landing/hero";
import About from "@/components/pages/landing/about";
import Features from "@/components/pages/landing/features";
import Testimonials from "@/components/pages/landing/testimonials";
import Team from "@/components/pages/landing/team";
import dynamic from "next/dynamic";
import MenuSection from "@/components/pages/landing/menu";
import CustomerMoments from "@/components/pages/landing/customer-moments";

const InfiniteGallery = dynamic(
  () =>
    import("@/components/pages/landing/infinite-gallery").then(
      (mod) => mod.InfiniteGallery,
    ),
  { ssr: false },
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAF8F5] text-stone-900 antialiased">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <MenuSection />
      <InfiniteGallery />
      <Testimonials />
      <Team />
      <CustomerMoments />
      <Footer />
    </main>
  );
}
