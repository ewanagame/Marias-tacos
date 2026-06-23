export type GalleryCarouselImage = {
  src: string;
  alt: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function gallerySrc(filename: string) {
  return `${basePath}/gallery/${filename}`;
}

/** Gallery page carousel — real photos from Maria's Tacos */
export const galleryCarouselImages: GalleryCarouselImage[] = [
  { src: gallerySrc("Burritos.png"), alt: "Burritos" },
  { src: gallerySrc("Nachos.png"), alt: "Nachos" },
  { src: gallerySrc("Tostadas.png"), alt: "Tostadas" },
  { src: gallerySrc("Taco-salad.png"), alt: "Taco-salad" },
];

export type GalleryPhoto = {
  label: string;
  src: string;
  aspect: "square" | "portrait" | "landscape";
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    label: "Burritos",
    src: gallerySrc("Burritos.png"),
    aspect: "square",
  },
  {
    label: "Nachos",
    src: gallerySrc("Nachos.png"),
    aspect: "square",
  },
  {
    label: "Tostadas",
    src: gallerySrc("Tostadas.png"),
    aspect: "square",
  },
  {
    label: "Taco-salad",
    src: gallerySrc("Taco-salad.png"),
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
