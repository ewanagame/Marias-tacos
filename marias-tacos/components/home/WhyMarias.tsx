const reasons = [
  {
    title: "Authentic Recipes",
    description:
      "Traditional Mexican dishes made from scratch with fresh ingredients and time-honored family recipes passed down through generations.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8Z" />
        <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    ),
  },
  {
    title: "Family-Friendly Atmosphere",
    description:
      "A welcoming space where families, friends, and neighbors gather to share great food, warm hospitality, and good times together.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "A Marshalltown Favorite for Years",
    description:
      "Proudly serving the Marshalltown community from our downtown location — a local go-to for tacos, tamales, and authentic Mexican flavors.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export default function WhyMarias() {
  return (
    <section className="bg-background px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            Our Story
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary sm:text-4xl">
            Why Maria&apos;s?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-accent">
            More than a meal — it&apos;s a taste of home, crafted with care in
            the heart of Iowa.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {reasons.map(({ title, description, icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-accent/10 bg-[#FFFAF0] p-6 shadow-[0_4px_20px_rgba(74,55,40,0.08)] transition-transform hover:-translate-y-1 sm:p-8"
            >
              <div className="mb-5 inline-flex rounded-xl border border-primary/10 bg-primary/5 p-3 text-primary">
                {icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">
                {title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-accent">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
