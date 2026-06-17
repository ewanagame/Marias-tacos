import type { Metadata } from "next";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryPageHeader from "@/components/gallery/GalleryPageHeader";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of burritos, tortas, nachos, tostadas, taco salad, and more at Maria's Tacos in Marshalltown, IA.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryPageHeader />
      <div className="bg-background px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <GalleryGrid />
        </div>
      </div>
    </>
  );
}
