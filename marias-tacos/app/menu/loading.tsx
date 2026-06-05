function MenuCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-accent/10 bg-[#FFFAF0] p-5 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="h-5 w-3/4 rounded bg-accent/15" />
        <div className="h-6 w-16 rounded-full bg-accent/15" />
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full rounded bg-accent/10" />
        <div className="h-3 w-5/6 rounded bg-accent/10" />
      </div>
    </div>
  );
}

export default function MenuLoading() {
  return (
    <>
      <div className="border-b border-accent/10 bg-[#F5EBD8] px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl animate-pulse text-center">
          <div className="mx-auto h-4 w-24 rounded bg-accent/15" />
          <div className="mx-auto mt-4 h-10 w-64 max-w-full rounded bg-accent/15 sm:h-12" />
          <div className="mx-auto mt-4 h-4 w-full max-w-xl rounded bg-accent/10" />
        </div>
      </div>

      <div className="border-b border-accent/10 bg-background/95 px-4 py-4">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-hidden">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-9 w-24 shrink-0 animate-pulse rounded-full bg-accent/10"
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:space-y-16 sm:px-6 sm:py-16">
        {Array.from({ length: 3 }).map((_, sectionIndex) => (
          <div key={sectionIndex} className="animate-pulse">
            <div className="h-8 w-40 rounded bg-accent/15" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, cardIndex) => (
                <MenuCardSkeleton key={cardIndex} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
