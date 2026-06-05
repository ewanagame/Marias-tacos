import { siteConfig } from "@/lib/site";

export default function OrderBanner() {
  return (
    <div className="sticky top-0 z-50 border-b border-primary/20 bg-primary">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-2.5">
        <a
          href={siteConfig.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs font-semibold text-background transition-opacity hover:opacity-90 sm:text-sm"
        >
          Order Online — Tap here to order from Maria&apos;s Tacos →
        </a>
      </div>
    </div>
  );
}
