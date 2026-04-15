"use client";

import { useLanguage } from "@/context/LanguageContext";
import GalleryGrid from "@/components/GalleryGrid";
import type { GalleryImage } from "@/lib/getGalleryImages";

interface GalleryContentProps {
  images: GalleryImage[];
}

export default function GalleryContent({ images }: GalleryContentProps) {
  const { t } = useLanguage();
  const g = t.gallery;

  return (
    <>
      {/* ── Page header ── */}
      <section className="bg-gradient-to-br from-[#162d16] via-[#1e3a1e] to-[#2d5a27] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8aab7e] mb-4">
            {g.eyebrow}
          </p>
          <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-5xl font-semibold leading-tight">
            {g.heading}
          </h1>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="bg-[#fafaf7]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          {images.length > 0 && (
            <p className="text-sm text-[#8c8c8c] mb-8 text-right">
              {g.photoCount(images.length)}
            </p>
          )}
          <GalleryGrid images={images} />

          {images.length === 0 && (
            <div className="mt-12 border border-dashed border-[#c8c0b4] rounded-sm p-8 text-center max-w-lg mx-auto">
              <p className="text-xs tracking-widest uppercase text-[#8aab7e] mb-3">
                {g.howToTitle}
              </p>
              <ol className="text-sm text-[#5c5c5c] text-left space-y-2 list-decimal list-inside">
                {g.howTo.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
