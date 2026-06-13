import type { Metadata } from "next";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryPageHeader from "@/components/gallery/GalleryPageHeader";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of tacos, burritos, tamales, and more at Maria's Tacos in Marshalltown, IA.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryPageHeader />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <GalleryGrid />
      </div>
    </>
  );
}
