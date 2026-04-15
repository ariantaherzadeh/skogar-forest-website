import type { Metadata } from "next";
import { getGalleryImages } from "@/lib/getGalleryImages";
import GalleryContent from "@/components/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery — Skógar",
  description:
    "Photos from Skógar — a reforestation project in the Westfjords of Iceland.",
};

export default function GalleryPage() {
  const images = getGalleryImages();
  return <GalleryContent images={images} />;
}
