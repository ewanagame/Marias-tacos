"use client";

import { AnimatedLink } from "@/components/ui/AnimatedButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { carouselPhotos } from "@/lib/galleryData";
import Image from "next/image";

const loopPhotos = [...carouselPhotos, ...carouselPhotos];

export default function FoodCarousel() {
  return (
    <section className="bg-background px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="fade-up" className="mb-8 text-center sm:mb-10">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
            Fresh From the Kitchen
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary sm:text-4xl">
            A Taste of Maria&apos;s
          </h2>
        </ScrollReveal>

        <div className="food-carousel group">
          <div className="food-carousel-fade-left" aria-hidden="true" />
          <div className="food-carousel-fade-right" aria-hidden="true" />
          <div className="food-carousel-viewport">
            <div className="food-carousel-track">
              {loopPhotos.map((photo, index) => (
                <div
                  key={`${photo.label}-${index}`}
                  className="food-carousel-slide"
                >
                  <div className="food-carousel-image-wrap">
                    <Image
                      src={photo.src}
                      alt={photo.label}
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ScrollReveal variant="fade-up" delay={200} className="mt-10 text-center">
          <AnimatedLink href="/gallery" variant="outline-primary">
            View Our Gallery 📸
          </AnimatedLink>
        </ScrollReveal>
      </div>
    </section>
  );
}
