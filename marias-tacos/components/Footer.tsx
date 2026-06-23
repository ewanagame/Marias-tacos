"use client";

import { NavAnchor, NavLink } from "@/components/ui/AnimatedButton";
import CallToOrderButton from "@/components/ui/CallToOrderButton";
import DoorDashOrderButton from "@/components/ui/DoorDashOrderButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative z-0 border-t border-accent/15 bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <ScrollReveal variant="fade-up" delay={0}>
          <h2 className="font-serif text-lg font-bold text-primary">
            Maria&apos;s Tacos
          </h2>
          <address className="mt-3 not-italic font-sans text-sm leading-relaxed text-accent">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}, {siteConfig.address.state}{" "}
            {siteConfig.address.zip}
          </address>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={100}>
          <h3 className="font-serif text-base font-bold text-primary">
            Contact
          </h3>
          <p className="mt-3 font-sans text-sm text-accent">
            <NavAnchor href={siteConfig.phoneTel}>{siteConfig.phone}</NavAnchor>
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <DoorDashOrderButton size="footer" />
            <CallToOrderButton size="footer" />
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={200}>
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
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={300}>
          <h3 className="font-serif text-base font-bold text-primary">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 font-sans text-sm">
            <li>
              <NavLink href="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact &amp; Location</NavLink>
            </li>
            <li>
              <NavAnchor
                href={siteConfig.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </NavAnchor>
            </li>
          </ul>
        </ScrollReveal>
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
