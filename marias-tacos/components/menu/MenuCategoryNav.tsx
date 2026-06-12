import { categoryNav } from "./menuData";

export default function MenuCategoryNav() {
  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-0 z-10 border-b border-accent/10 bg-background/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 scrollbar-hide sm:px-6 sm:py-4">
        {categoryNav.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="shrink-0 rounded-full border border-accent/15 bg-[#FFFAF0] px-3 py-1.5 font-sans text-xs font-medium text-accent transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary sm:px-4 sm:py-2 sm:text-sm"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
