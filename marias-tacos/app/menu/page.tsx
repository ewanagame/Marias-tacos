import type { Metadata } from "next";
import MenuCategoryNav from "@/components/menu/MenuCategoryNav";
import MenuSection from "@/components/menu/MenuSection";
import { menuCategories } from "@/components/menu/menuData";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse tacos from $3, burritos, tamales, sides, and drinks at Maria's Tacos in Marshalltown, IA.",
};

export default function Menu() {
  return (
    <>
      <div className="border-b border-accent/10 bg-[#F5EBD8] px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            Our Menu
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Fresh &amp; Authentic
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm text-accent sm:text-base">
            Tacos, burritos, tamales, and more — made fresh daily with
            traditional recipes and the finest ingredients.
          </p>
        </div>
      </div>

      <MenuCategoryNav />

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:space-y-16 sm:px-6 sm:py-16">
        {menuCategories.map((category) => (
          <MenuSection key={category.id} {...category} />
        ))}
      </div>
    </>
  );
}
