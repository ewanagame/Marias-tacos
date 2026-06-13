"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { aspectClasses, galleryPhotos } from "@/lib/galleryData";
import Image from "next/image";

export default function GalleryGrid() {
  return (
    <div className="columns-1 gap-4 sm:columns-2 sm:gap-6 lg:columns-3">
      {galleryPhotos.map((photo, index) => (
        <ScrollReveal
          key={photo.label}
          variant="fade-up"
          delay={index * 100}
          className="mb-4 break-inside-avoid sm:mb-6"
        >
          <figure className="group overflow-hidden rounded-2xl border border-accent/10 bg-[#D4A97A] shadow-[0_4px_20px_rgba(74,55,40,0.08)] transition-shadow duration-300 hover:shadow-[0_8px_28px_rgba(212,114,26,0.2)]">
            <div
              className={`relative overflow-hidden bg-[#D4A97A] ${aspectClasses[photo.aspect]}`}
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2C1810]/95 via-[#2C1810]/55 to-transparent px-4 pb-4 pt-10">
                <span className="font-serif text-base font-bold text-white sm:text-lg">
                  {photo.label}
                </span>
              </figcaption>
            </div>
          </figure>
        </ScrollReveal>
      ))}
    </div>
  );
}
