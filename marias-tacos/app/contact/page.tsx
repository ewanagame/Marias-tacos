function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-accent/10 bg-[#FFFAF0] p-8 shadow-[0_4px_20px_rgba(74,55,40,0.08)]">
      <h2 className="font-serif text-2xl font-bold text-primary">{title}</h2>
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
      <div className="border-b border-accent/10 bg-[#F5EBD8] px-6 py-14">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            Visit Us
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-primary sm:text-5xl">
            Contact &amp; Location
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-accent">
            Stop by downtown Marshalltown for authentic tacos, warm hospitality,
            and a welcoming atmosphere for the whole family.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <InfoCard title="Hours &amp; Location">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary">Address</h3>
                <address className="mt-2 not-italic">
                  110 W State St
                  <br />
                  Marshalltown, IA 50158
                </address>
              </div>

              <div>
                <h3 className="font-semibold text-primary">Phone</h3>
                <p className="mt-2">
                  <a
                    href="tel:+16417515327"
                    className="transition-colors hover:text-primary"
                  >
                    (641) 751-5327
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary">Hours</h3>
                <p className="mt-2">Opens 8:30 AM daily</p>
                <p className="mt-2 text-xs italic text-accent/80">
                  Hours may vary — please call ahead to confirm.
                </p>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=110+W+State+St,+Marshalltown,+IA+50158"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-primary bg-primary px-6 py-2.5 font-sans text-sm font-semibold text-background transition-colors hover:bg-primary/90"
              >
                Get Directions
              </a>
            </div>
          </InfoCard>

          <div className="overflow-hidden rounded-2xl border border-accent/10 shadow-[0_4px_20px_rgba(74,55,40,0.08)]">
            <iframe
              title="Maria's Tacos location on Google Maps"
              src="https://maps.google.com/maps?q=110+W+State+St,+Marshalltown,+IA+50158&hl=en&z=15&output=embed"
              className="h-full min-h-[320px] w-full lg:min-h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
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
