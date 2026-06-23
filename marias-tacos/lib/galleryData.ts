export type GalleryCarouselImage = {
  src: string;
  alt: string;
};

/** Gallery page carousel — real photos from Maria's Tacos */
export const galleryCarouselImages: GalleryCarouselImage[] = [
  { src: "/gallery/street-tacos.jpg", alt: "Burritos" },
  { src: "/gallery/burritos.jpg", alt: "Nachos" },
  { src: "/gallery/taco-salad.jpg", alt: "Tostadas" },
  { src: "/gallery/burrito-bowl.jpg", alt: "Taco-salad" },
];

export type GalleryPhoto = {
  label: string;
  src: string;
  aspect: "square" | "portrait" | "landscape";
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    label: "Burritos",
    src: "/gallery/street-tacos.jpg",
    aspect: "square",
  },
  {
    label: "Nachos",
    src: "/gallery/burritos.jpg",
    aspect: "square",
  },
  {
    label: "Tostadas",
    src: "/gallery/taco-salad.jpg",
    aspect: "square",
  },
  {
    label: "Taco-salad",
    src: "/gallery/burrito-bowl.jpg",
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
