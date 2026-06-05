export default function Footer() {
  return (
    <footer className="relative z-0 border-t border-accent/15 bg-background pb-24 sm:pb-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <h2 className="font-serif text-lg font-bold text-primary">
            Maria&apos;s Tacos
          </h2>
          <address className="mt-3 not-italic font-sans text-sm leading-relaxed text-accent">
            110 W State St
            <br />
            Marshalltown, IA 50158
          </address>
        </div>

        <div>
          <h3 className="font-serif text-base font-bold text-primary">Contact</h3>
          <p className="mt-3 font-sans text-sm text-accent">
            <a
              href="tel:6417515327"
              className="transition-colors hover:text-primary"
            >
              641-751-5327
            </a>
          </p>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="font-serif text-base font-bold text-primary">Hours</h3>
          <ul className="mt-3 space-y-1 font-sans text-sm text-accent">
            <li className="flex justify-between gap-4">
              <span>Mon – Thu</span>
              <span>11:00 AM – 9:00 PM</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Fri – Sat</span>
              <span>11:00 AM – 10:00 PM</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sunday</span>
              <span>11:00 AM – 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-accent/10 px-6 py-4">
        <p className="mx-auto max-w-6xl text-center font-sans text-xs text-accent/80">
          &copy; {new Date().getFullYear()} Maria&apos;s Tacos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
