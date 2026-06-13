"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function GalleryPageHeader() {
  return (
    <div className="border-b border-accent/10 bg-[#F5EBD8] px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl text-center">
        <ScrollReveal variant="fade-up">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            Photo Gallery
          </p>
        </ScrollReveal>
        <ScrollReveal
          as="h1"
          variant="section-header"
          className="mt-3 font-serif text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          Our Food
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={100}>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm text-accent sm:text-base">
            Bold flavors, fresh ingredients, and authentic Mexican dishes made
            with love in downtown Marshalltown.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
