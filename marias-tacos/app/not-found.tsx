import {
  AnimatedAnchor,
  AnimatedLink,
  PhoneIcon,
} from "@/components/ui/AnimatedButton";
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
        <AnimatedLink href="/" variant="primary">
          Back to Home
        </AnimatedLink>
        <AnimatedLink href="/menu" variant="outline-primary">
          View Menu
        </AnimatedLink>
        <AnimatedAnchor
          href={siteConfig.orderUrl}
          variant="secondary"
          cta
          icon={<PhoneIcon />}
        >
          {siteConfig.orderLabel}
        </AnimatedAnchor>
      </div>
    </div>
  );
}
