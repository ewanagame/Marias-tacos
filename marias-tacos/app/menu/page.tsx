import MenuCategoryNav from "@/components/menu/MenuCategoryNav";
import MenuSection from "@/components/menu/MenuSection";
import { menuCategories } from "@/components/menu/menuData";

export default function Menu() {
  return (
    <>
      <div className="border-b border-accent/10 bg-[#F5EBD8] px-6 py-14">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            Our Menu
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-primary sm:text-5xl">
            Fresh &amp; Authentic
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-accent">
            Tacos, burritos, tamales, and more — made fresh daily with
            traditional recipes and the finest ingredients.
          </p>
        </div>
      </div>

      <MenuCategoryNav />

      <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
        {menuCategories.map((category) => (
          <MenuSection key={category.id} {...category} />
        ))}
      </div>
    </>
  );
}
