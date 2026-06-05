import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1920&q=80"
        alt="Fresh tacos with colorful toppings"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/90 via-[#4A3728]/75 to-[#8B2500]/60" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FDF5E6' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
          Welcome to Maria&apos;s Tacos
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-background sm:text-5xl lg:text-6xl">
          Authentic Mexican Flavors in the Heart of Marshalltown
        </h1>
        <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-background/90">
          Handcrafted tacos, tamales, and family recipes served with warmth
          in downtown Marshalltown.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center rounded-full border-2 border-background bg-background px-8 py-3 font-sans text-sm font-semibold text-primary transition-colors hover:bg-background/90"
          >
            View Our Menu
          </Link>
          <a
            href="https://ordermariastacos.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-secondary bg-secondary px-8 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-secondary/90"
          >
            Order Online
          </a>
        </div>
      </div>
    </section>
  );
}
