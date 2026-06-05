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
    <article className="rounded-2xl border border-accent/10 bg-[#FFFAF0] p-6 shadow-[0_4px_20px_rgba(74,55,40,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-lg font-bold text-primary">{name}</h3>
        {price && (
          <span className="shrink-0 rounded-full bg-accent px-3 py-1 font-sans text-sm font-semibold text-background">
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
      <h2 className="font-serif text-3xl font-bold text-primary">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <MenuItemCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}
