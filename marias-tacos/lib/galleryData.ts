export type GalleryCarouselImage = {
  src: string;
  alt: string;
};

/** Gallery page carousel — real photos from Maria's Tacos */
export const galleryCarouselImages: GalleryCarouselImage[] = [
  { src: "/gallery/Burritos.png", alt: "Burritos" },
  { src: "/gallery/Nachos.png", alt: "Nachos" },
  { src: "/gallery/Tostadas.png", alt: "Tostadas" },
  { src: "/gallery/Taco-salad.png", alt: "Taco-salad" },
];

export type GalleryPhoto = {
  label: string;
  src: string;
  aspect: "square" | "portrait" | "landscape";
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    label: "Burritos",
    src: "/gallery/Burritos.png",
    aspect: "square",
  },
  {
    label: "Nachos",
    src: "/gallery/Nachos.png",
    aspect: "square",
  },
  {
    label: "Tostadas",
    src: "/gallery/Tostadas.png",
    aspect: "square",
  },
  {
    label: "Taco-salad",
    src: "/gallery/Taco-salad.png",
    aspect: "square",
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
