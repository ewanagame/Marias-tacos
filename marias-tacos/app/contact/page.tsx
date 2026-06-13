import type { Metadata } from "next";
import { AnimatedAnchor } from "@/components/ui/AnimatedButton";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Location",
  description:
    "Visit Maria's Tacos at 110 W State St, Marshalltown, IA. Hours, directions, parking, accessibility, and payment info.",
};

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-accent/10 bg-[#FFFAF0] p-5 shadow-[0_4px_20px_rgba(74,55,40,0.08)] sm:p-8">
      <h2 className="font-serif text-xl font-bold text-primary sm:text-2xl">
        {title}
      </h2>
      <div className="mt-5 font-sans text-sm leading-relaxed text-accent">
        {children}
      </div>
    </article>
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

export default function Contact() {
  return (
    <>
      <div className="border-b border-accent/10 bg-[#F5EBD8] px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            Visit Us
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Contact &amp; Location
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm text-accent sm:text-base">
            Stop by downtown Marshalltown for authentic tacos, warm hospitality,
            and a welcoming atmosphere for the whole family.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <InfoCard title="Hours &amp; Location">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary">Address</h3>
                <address className="mt-2 not-italic">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </address>
              </div>

              <div>
                <h3 className="font-semibold text-primary">Phone</h3>
                <p className="mt-2">
                  <a
                    href={siteConfig.phoneTel}
                    className="transition-colors hover:text-primary"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
              </div>

              <div>
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
              </div>

              <AnimatedAnchor
                href={siteConfig.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full sm:w-auto"
              >
                Get Directions
              </AnimatedAnchor>
            </div>
          </InfoCard>

          <div className="overflow-hidden rounded-2xl border border-accent/10 shadow-[0_4px_20px_rgba(74,55,40,0.08)]">
            <iframe
              title="Maria's Tacos location on Google Maps"
              src={siteConfig.mapsEmbedUrl}
              className="h-[280px] w-full sm:h-[320px] lg:h-full lg:min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-2 sm:gap-8">
          <InfoCard title="Service Options">
            <InfoList items={services} />
          </InfoCard>

          <InfoCard title="Accessibility">
            <InfoList items={accessibility} />
          </InfoCard>

          <InfoCard title="Payments Accepted">
            <InfoList items={payments} />
          </InfoCard>

          <InfoCard title="Parking">
            <InfoList items={parking} />
          </InfoCard>
        </div>
      </div>
    </>
  );
}
