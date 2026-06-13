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
            className="btn-menu-pill"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
