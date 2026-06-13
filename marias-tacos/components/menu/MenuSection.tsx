"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { MenuCategory } from "./menuData";

function MenuItemCard({
  name,
  emoji,
  price,
  description,
  index,
}: {
  name: string;
  emoji: string;
  price?: string;
  description: string;
  index: number;
}) {
  const { ref, isVisible, style } = useScrollAnimation({
    variant: "menu-card",
    delay: index * 100,
  });

  const visibleClass = isVisible ? "scroll-visible" : "";

  return (
    <article
      ref={ref}
      style={style}
      className={`scroll-menu-card ${visibleClass} rounded-2xl border border-accent/10 bg-[#FFFAF0] p-5 shadow-[0_4px_20px_rgba(74,55,40,0.08)] sm:p-6`}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h3 className="flex items-center gap-3 font-serif text-base font-bold text-primary sm:text-lg">
          <span
            className={`scroll-emoji ${visibleClass} text-2xl leading-none`}
            aria-hidden="true"
          >
            {emoji}
          </span>
          <span>{name}</span>
        </h3>
        {price && (
          <span
            className={`scroll-price-badge ${visibleClass} w-fit shrink-0 rounded-full bg-accent px-3 py-1 font-sans text-sm font-semibold text-background`}
          >
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
      <ScrollRevealTitle title={title} />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <MenuItemCard key={item.name} {...item} index={index} />
        ))}
      </div>
    </section>
  );
}

function ScrollRevealTitle({ title }: { title: string }) {
  const { ref, className } = useScrollAnimation({
    variant: "section-header",
  });

  return (
    <h2
      ref={ref}
      className={`${className} font-serif text-2xl font-bold sm:text-3xl`}
    >
      {title}
    </h2>
  );
}
