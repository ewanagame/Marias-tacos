import { siteConfig } from "@/lib/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-0 border-t border-accent/15 bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <h2 className="font-serif text-lg font-bold text-primary">
            Maria&apos;s Tacos
          </h2>
          <address className="mt-3 not-italic font-sans text-sm leading-relaxed text-accent">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}, {siteConfig.address.state}{" "}
            {siteConfig.address.zip}
          </address>
        </div>

        <div>
          <h3 className="font-serif text-base font-bold text-primary">
            Contact
          </h3>
          <p className="mt-3 font-sans text-sm text-accent">
            <a
              href={siteConfig.phoneTel}
              className="transition-colors hover:text-primary"
            >
              {siteConfig.phone}
            </a>
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={siteConfig.orderUrl}
              className="inline-flex w-fit rounded-md border border-primary/20 bg-background px-3 py-1.5 font-sans text-xs font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              {siteConfig.orderLabel}
            </a>
            <a
              href={siteConfig.doorDashUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit rounded-md bg-secondary px-3 py-1.5 font-sans text-xs font-semibold text-white transition-colors hover:bg-secondary/90"
            >
              {siteConfig.doorDashLabel}
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-base font-bold text-primary">Hours</h3>
          <ul className="mt-3 space-y-1 font-sans text-sm text-accent">
            {siteConfig.hours.map(({ days, time }) => (
              <li key={days} className="flex justify-between gap-4">
                <span>{days}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs italic text-accent/80">
            {siteConfig.hoursNote}
          </p>
        </div>

        <div>
          <h3 className="font-serif text-base font-bold text-primary">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 font-sans text-sm text-accent">
            <li>
              <Link
                href="/menu"
                className="transition-colors hover:text-primary"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-primary"
              >
                Contact &amp; Location
              </Link>
            </li>
            <li>
              <a
                href={siteConfig.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                Get Directions
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-accent/10 px-6 py-4">
        <p className="mx-auto max-w-6xl text-center font-sans text-xs text-accent/80">
          &copy; {new Date().getFullYear()} Maria&apos;s Tacos. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
