export type GalleryCarouselImage = {
  src: string;
  alt: string;
};

/** Gallery page carousel — real photos from Maria's Tacos */
export const galleryCarouselImages: GalleryCarouselImage[] = [
  { src: "/gallery/burritos.svg", alt: "Burritos" },
  { src: "/gallery/nachos.svg", alt: "Nachos" },
  { src: "/gallery/tostadas.svg", alt: "Tostadas" },
  { src: "/gallery/taco-salad.svg", alt: "Taco-salad" },
];

export type GalleryPhoto = {
  label: string;
  src: string;
  aspect: "square" | "portrait" | "landscape";
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    label: "Burritos",
    src: "/gallery/burritos.svg",
    aspect: "square",
  },
  {
    label: "Nachos",
    src: "/gallery/nachos.svg",
    aspect: "square",
  },
  {
    label: "Tostadas",
    src: "/gallery/tostadas.svg",
    aspect: "square",
  },
  {
    label: "Taco-salad",
    src: "/gallery/taco-salad.svg",
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
