import type { Metadata } from "next";
import MenuCategoryNav from "@/components/menu/MenuCategoryNav";
import MenuPageHeader from "@/components/menu/MenuPageHeader";
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
      <MenuPageHeader />
      <MenuCategoryNav />

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:space-y-16 sm:px-6 sm:py-16">
        {menuCategories.map((category) => (
          <MenuSection key={category.id} {...category} />
        ))}
      </div>
    </>
  );
}
