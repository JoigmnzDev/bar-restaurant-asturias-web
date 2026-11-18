"use client";

import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { MenuSection } from "@/components/sections/menu";
import { CustomerMoments } from "@/components/sections/customer-moments";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import dynamic from "next/dynamic";

const InfiniteGallery = dynamic(
  () =>
    import("@/components/sections/infinite-gallery").then(
      (mod) => mod.InfiniteGallery,
    ),
  { ssr: false },
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAF8F5] text-stone-900 antialiased">
      <Hero />
      <About />
      <Features />
      <MenuSection />
      <InfiniteGallery />
      <Testimonials />
      <Team />
      <CustomerMoments />
    </main>
  );
}
