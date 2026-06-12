import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
        404
      </p>
      <h1 className="mt-4 font-serif text-3xl font-bold text-primary sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md font-sans text-sm text-accent sm:text-base">
        Sorry, we couldn&apos;t find that page. Head back home or browse our
        menu.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border-2 border-primary bg-primary px-6 py-3 font-sans text-sm font-semibold text-background transition-colors hover:bg-primary/90"
        >
          Back to Home
        </Link>
        <Link
          href="/menu"
          className="inline-flex items-center justify-center rounded-full border-2 border-primary bg-transparent px-6 py-3 font-sans text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
        >
          View Menu
        </Link>
        <a
          href={siteConfig.orderUrl}
          className="inline-flex items-center justify-center rounded-full border-2 border-secondary bg-secondary px-6 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-secondary/90"
        >
          {siteConfig.orderLabel}
        </a>
      </div>
    </div>
  );
}
