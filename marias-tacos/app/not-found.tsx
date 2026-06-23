"use client";

import {
  AnimatedLink,
} from "@/components/ui/AnimatedButton";
import CallToOrderButton from "@/components/ui/CallToOrderButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <ScrollReveal variant="fade-up">
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
          404
        </p>
      </ScrollReveal>
      <ScrollReveal
        as="h1"
        variant="section-header"
        className="mt-4 font-serif text-3xl font-bold sm:text-4xl"
      >
        Page Not Found
      </ScrollReveal>
      <ScrollReveal variant="fade-up" delay={100} className="mt-4 max-w-md">
        <p className="font-sans text-sm text-accent sm:text-base">
          Sorry, we couldn&apos;t find that page. Head back home or browse our
          menu.
        </p>
      </ScrollReveal>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <ScrollReveal variant="hero-cta" triggerOnMount delay={200}>
          <AnimatedLink href="/" variant="primary">
            Back to Home
          </AnimatedLink>
        </ScrollReveal>
        <ScrollReveal variant="hero-cta" triggerOnMount delay={500}>
          <AnimatedLink href="/menu" variant="outline-primary">
            View Menu
          </AnimatedLink>
        </ScrollReveal>
        <ScrollReveal variant="hero-cta" triggerOnMount delay={800}>
          <CallToOrderButton size="navbar" />
        </ScrollReveal>
      </div>
    </div>
  );
}
