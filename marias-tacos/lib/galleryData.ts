export type GalleryCarouselImage = {
  src: string;
  alt: string;
};

/** Gallery page carousel — swap `src` paths with real photos in /public/gallery/ */
export const galleryCarouselImages: GalleryCarouselImage[] = [
  { src: "/gallery/tacos.svg", alt: "Tacos" },
  { src: "/gallery/burritos.svg", alt: "Burritos" },
  { src: "/gallery/salsa.svg", alt: "Salsa" },
  { src: "/gallery/quesadillas.svg", alt: "Quesadillas" },
  { src: "/gallery/drinks.svg", alt: "Drinks" },
];

export type GalleryPhoto = {
  label: string;
  src: string;
  aspect: "square" | "portrait" | "landscape";
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    label: "Street Tacos",
    src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=80",
    aspect: "portrait",
  },
  {
    label: "Carne Asada Tacos",
    src: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&auto=format&fit=crop&q=80",
    aspect: "landscape",
  },
  {
    label: "Burrito",
    src: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&auto=format&fit=crop&q=80",
    aspect: "portrait",
  },
  {
    label: "Nachos",
    src: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=800&auto=format&fit=crop&q=80",
    aspect: "landscape",
  },
  {
    label: "Tamales",
    src: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=800&auto=format&fit=crop&q=80",
    aspect: "square",
  },
  {
    label: "Pozole",
    src: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=80",
    aspect: "landscape",
  },
  {
    label: "Quesadilla",
    src: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=800&auto=format&fit=crop&q=80",
    aspect: "portrait",
  },
];

export const aspectClasses: Record<GalleryPhoto["aspect"], string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
};

export const carouselPhotos = galleryPhotos.map(({ label, src }) => ({
  label,
  src,
}));
