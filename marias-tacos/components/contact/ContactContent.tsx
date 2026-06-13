"use client";

import { AnimatedAnchor } from "@/components/ui/AnimatedButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/site";

function InfoCard({
  title,
  children,
  variant = "fade-up",
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  variant?: "fade-up" | "slide-left" | "slide-right";
  delay?: number;
}) {
  return (
    <ScrollReveal
      variant={variant}
      delay={delay}
      className="rounded-2xl border border-accent/10 bg-[#FFFAF0] p-5 shadow-[0_4px_20px_rgba(74,55,40,0.08)] sm:p-8"
    >
      <h2 className="font-serif text-xl font-bold text-primary sm:text-2xl">
        {title}
      </h2>
      <div className="mt-5 font-sans text-sm leading-relaxed text-accent">
        {children}
      </div>
    </ScrollReveal>
  );
}

function InfoList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const services = ["Dine-In", "Takeout", "Delivery", "Outdoor Seating"];

const accessibility = [
  "Wheelchair accessible entrance",
  "Wheelchair accessible parking lot",
  "Wheelchair accessible restroom",
];

const payments = [
  "Credit cards",
  "Debit cards",
  "NFC / mobile payments",
];

const parking = ["Free parking lot", "Free street parking"];

export default function ContactContent() {
  return (
    <>
      <div className="border-b border-accent/10 bg-[#F5EBD8] px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl text-center">
          <ScrollReveal variant="fade-up">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
              Visit Us
            </p>
          </ScrollReveal>
          <ScrollReveal
            as="h1"
            variant="section-header"
            className="mt-3 font-serif text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Contact &amp; Location
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-sm text-accent sm:text-base">
              Stop by downtown Marshalltown for authentic tacos, warm hospitality,
              and a welcoming atmosphere for the whole family.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <InfoCard title="Hours &amp; Location" variant="slide-left">
            <div className="space-y-6">
              <ScrollReveal variant="slide-left" delay={100}>
                <h3 className="font-semibold text-primary">Address</h3>
                <address className="mt-2 not-italic">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </address>
              </ScrollReveal>

              <ScrollReveal variant="slide-right" delay={200}>
                <h3 className="font-semibold text-primary">Phone</h3>
                <p className="mt-2">
                  <a
                    href={siteConfig.phoneTel}
                    className="transition-colors hover:text-primary"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
              </ScrollReveal>

              <ScrollReveal variant="slide-left" delay={300}>
                <h3 className="font-semibold text-primary">Hours</h3>
                <ul className="mt-2 space-y-1">
                  {siteConfig.hours.map(({ days, time }) => (
                    <li key={days} className="flex justify-between gap-4">
                      <span>{days}</span>
                      <span>{time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-xs italic text-accent/80">
                  {siteConfig.hoursNote}
                </p>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={400}>
                <AnimatedAnchor
                  href={siteConfig.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Get Directions
                </AnimatedAnchor>
              </ScrollReveal>
            </div>
          </InfoCard>

          <ScrollReveal
            variant="slide-right"
            className="overflow-hidden rounded-2xl border border-accent/10 shadow-[0_4px_20px_rgba(74,55,40,0.08)]"
          >
            <iframe
              title="Maria's Tacos location on Google Maps"
              src={siteConfig.mapsEmbedUrl}
              className="h-[280px] w-full sm:h-[320px] lg:h-full lg:min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </ScrollReveal>
        </div>

        <div className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-2 sm:gap-8">
          <InfoCard title="Service Options" variant="slide-left" delay={100}>
            <InfoList items={services} />
          </InfoCard>

          <InfoCard title="Accessibility" variant="slide-right" delay={100}>
            <InfoList items={accessibility} />
          </InfoCard>

          <InfoCard title="Payments Accepted" variant="slide-left" delay={200}>
            <InfoList items={payments} />
          </InfoCard>

          <InfoCard title="Parking" variant="slide-right" delay={200}>
            <InfoList items={parking} />
          </InfoCard>
        </div>
      </div>
    </>
  );
}
