const reviews = [
  {
    quote:
      "My favorite Marshalltown restaurant. The attached photo is what $9 gets you — 4 tacos & a coke. Not much to say except that they were amazing. Absolutely delicious.",
    author: "Dan Davis",
  },
  {
    quote:
      "The food was AMAZING! We had the nachos and taco salad. Very good. She was very polite. One of our favorite places to eat now.",
    author: "Ann Prough",
  },
  {
    quote:
      "I didn't think I would find authentic tacos in Marshalltown, boy was I wrong. This place is top notch. Had the steak tacos and the tamales — everything was great.",
    author: "B Malarkey",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 text-secondary" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-[#F5EBD8] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            What People Say
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary sm:text-4xl">
            Customer Reviews
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-3">
          {reviews.map(({ quote, author }) => (
            <blockquote
              key={author}
              className="flex h-full flex-col rounded-2xl border border-accent/10 bg-background p-6 shadow-[0_4px_20px_rgba(74,55,40,0.08)] sm:p-8"
            >
              <StarRating />
              <p className="mt-5 flex-1 font-sans text-sm leading-relaxed text-accent">
                &ldquo;{quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-accent/10 pt-4">
                <cite className="font-serif text-base font-bold not-italic text-primary">
                  {author}
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
