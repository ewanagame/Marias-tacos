import type { MenuCategory } from "./menuData";

function MenuItemCard({
  name,
  price,
  description,
}: {
  name: string;
  price?: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl border border-accent/10 bg-[#FFFAF0] p-5 shadow-[0_4px_20px_rgba(74,55,40,0.08)] sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h3 className="font-serif text-base font-bold text-primary sm:text-lg">
          {name}
        </h3>
        {price && (
          <span className="w-fit shrink-0 rounded-full bg-accent px-3 py-1 font-sans text-sm font-semibold text-background">
            {price}
          </span>
        )}
      </div>
      <p className="mt-3 font-sans text-sm leading-relaxed text-accent">
        {description}
      </p>
    </article>
  );
}

export default function MenuSection({ id, title, items }: MenuCategory) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="font-serif text-2xl font-bold text-primary sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <MenuItemCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}
