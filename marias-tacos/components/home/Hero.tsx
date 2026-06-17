"use client";

import {
  AnimatedAnchor,
  AnimatedLink,
  PhoneIcon,
} from "@/components/ui/AnimatedButton";
import DoorDashOrderButton from "@/components/ui/DoorDashOrderButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/site";
import Image from "next/image";

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

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20">
        <ScrollReveal
          variant="fade-up"
          triggerOnMount
          className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-secondary sm:text-sm"
        >
          Welcome to Maria&apos;s Tacos
        </ScrollReveal>
        <ScrollReveal
          as="h1"
          variant="hero-headline"
          triggerOnMount
          delay={100}
          className="max-w-3xl font-serif text-3xl font-bold leading-tight text-background sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Authentic Mexican Flavors in the Heart of Marshalltown
        </ScrollReveal>
        <ScrollReveal
          variant="fade-up"
          triggerOnMount
          delay={200}
          className="mt-4 max-w-xl font-sans text-base leading-relaxed text-background/90 sm:mt-6 sm:text-lg"
        >
          Handcrafted tacos, tamales, and family recipes served with warmth
          in downtown Marshalltown.
        </ScrollReveal>
        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <ScrollReveal variant="hero-cta" triggerOnMount delay={300}>
            <DoorDashOrderButton size="hero" />
          </ScrollReveal>
          <ScrollReveal variant="hero-cta" triggerOnMount delay={500}>
            <AnimatedLink href="/menu" variant="outline-light">
              View Our Menu
            </AnimatedLink>
          </ScrollReveal>
          <ScrollReveal variant="hero-cta" triggerOnMount delay={700}>
            <AnimatedAnchor
              href={siteConfig.orderUrl}
              variant="outline-white"
              icon={<PhoneIcon />}
            >
              {siteConfig.orderLabel}
            </AnimatedAnchor>
          </ScrollReveal>
          <ScrollReveal variant="hero-cta" triggerOnMount delay={900}>
            <AnimatedLink href="/gallery" variant="outline-white">
              View Our Gallery 📸
            </AnimatedLink>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
