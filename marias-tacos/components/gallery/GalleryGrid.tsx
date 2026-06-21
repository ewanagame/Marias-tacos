"use client";

import { galleryCarouselImages } from "@/lib/galleryData";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

export default function GalleryGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = scrollRef.current;
    if (!viewport) return;

    dragState.current = {
      isDragging: true,
      startX: event.clientX,
      scrollLeft: viewport.scrollLeft,
    };
    setIsDragging(true);
    viewport.setPointerCapture(event.pointerId);
  }, []);

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = scrollRef.current;
    if (!viewport || !dragState.current.isDragging) return;

    event.preventDefault();
    const delta = event.clientX - dragState.current.startX;
    viewport.scrollLeft = dragState.current.scrollLeft - delta;
  }, []);

  const endDrag = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = scrollRef.current;
    if (!viewport || !dragState.current.isDragging) return;

    dragState.current.isDragging = false;
    setIsDragging(false);
    viewport.releasePointerCapture(event.pointerId);
  }, []);

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-12"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-12"
        aria-hidden="true"
      />

      <div
        ref={scrollRef}
        className={`gallery-carousel flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pt-1 scrollbar-hide sm:gap-6 ${
          isDragging ? "cursor-grabbing scroll-auto" : "cursor-grab scroll-smooth"
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
      >
        {galleryCarouselImages.map((image) => (
          <figure
            key={image.src}
            className="gallery-carousel-card group snap-center shrink-0"
          >
            <div className="gallery-carousel-image-wrap">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                draggable={false}
                className="pointer-events-none select-none object-cover"
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 320px"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2C1810]/90 via-[#2C1810]/50 to-transparent px-4 pb-4 pt-12">
                <span className="font-serif text-lg font-bold text-white sm:text-xl">
                  {image.alt}
                </span>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>

      <p className="mt-4 text-center font-sans text-xs text-accent/70 sm:text-sm">
        Swipe or drag to browse · Scroll to snap between photos
      </p>
    </div>
  );
}
