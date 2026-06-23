export type GalleryCarouselImage = {
  src: string;
  alt: string;
};

/** Gallery page carousel — real photos from Maria's Tacos */
export const galleryCarouselImages: GalleryCarouselImage[] = [
  { src: "/gallery/street-tacos.jpg", alt: "Street Tacos" },
  { src: "/gallery/burritos.jpg", alt: "Burritos" },
  { src: "/gallery/taco-salad.jpg", alt: "Taco Salad" },
  { src: "/gallery/burrito-bowl.jpg", alt: "Burrito Bowl" },
];

export type GalleryPhoto = {
  label: string;
  src: string;
  aspect: "square" | "portrait" | "landscape";
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    label: "Street Tacos",
    src: "/gallery/street-tacos.jpg",
    aspect: "square",
  },
  {
    label: "Burrito",
    src: "/gallery/burritos.jpg",
    aspect: "square",
  },
  {
    label: "Taco Salad",
    src: "/gallery/taco-salad.jpg",
    aspect: "square",
  },
  {
    label: "Burrito Bowl",
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
