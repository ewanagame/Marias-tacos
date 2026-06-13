import type { Metadata } from "next";
import FoodCarousel from "@/components/home/FoodCarousel";
import Hero from "@/components/home/Hero";
import HighlightsBar from "@/components/home/HighlightsBar";
import Reviews from "@/components/home/Reviews";
import WhyMarias from "@/components/home/WhyMarias";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Maria's Tacos | Authentic Mexican Food in Marshalltown, IA",
  description: siteConfig.description,
};

export default function Home() {
  return (
    <>
      <Hero />
      <HighlightsBar />
      <WhyMarias />
      <FoodCarousel />
      <Reviews />
    </>
  );
}
