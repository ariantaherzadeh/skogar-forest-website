"use client";

import Link from "next/link";
import Image from "next/image";
import VideoEmbed from "@/components/VideoEmbed";
import { useLanguage } from "@/context/LanguageContext";

const YOUTUBE_VIDEO_ID = "v5Hg26XUfJE";

export default function HomeContent() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#162d16] via-[#1e3a1e] to-[#2d5a27] text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8aab7e] mb-6">
            {h.heroEyebrow}
          </p>
          <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-6xl font-semibold leading-tight mb-8 max-w-3xl mx-auto">
            {h.heroHeading}
          </h1>
          <p className="text-[#c8d9c2] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            {h.heroSub}
          </p>
          <Link
            href="/about"
            className="inline-block border border-[#8aab7e] text-[#8aab7e] text-sm tracking-widest uppercase px-8 py-3 hover:bg-[#8aab7e] hover:text-[#1e3a1e] transition-colors duration-200"
          >
            {h.heroBtn}
          </Link>
        </div>
      </section>

      {/* ── Featured Video ── */}
      <section className="bg-[#f0ece3]">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8aab7e] text-center mb-4">
            {h.videoEyebrow}
          </p>
          <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl text-center text-[#1e3a1e] mb-10">
            {h.videoHeading}
          </h2>
          <VideoEmbed videoId={YOUTUBE_VIDEO_ID} />
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="bg-[#fafaf7] border-y border-[#d4cfc4]">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
          <blockquote className="font-[family-name:var(--font-lora)] text-xl md:text-2xl text-[#2c2c2c] leading-relaxed italic mb-6">
            {h.quoteText}
          </blockquote>
          <p className="text-sm tracking-widest uppercase text-[#8aab7e]">
            — {h.quoteAttrib}
          </p>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="bg-[#fafaf7]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#8aab7e] mb-4">
              {h.whoEyebrow}
            </p>
            <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl text-[#1e3a1e] mb-6 leading-snug">
              {h.whoHeading}
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-5">{h.whoPara1}</p>
            <p className="text-[#4a4a4a] leading-relaxed mb-8">{h.whoPara2}</p>
            <Link
              href="/about"
              className="text-sm tracking-widest uppercase text-[#2d5a27] border-b border-[#2d5a27] pb-0.5 hover:text-[#1e3a1e] hover:border-[#1e3a1e] transition-colors"
            >
              {h.whoLink}
            </Link>
          </div>

          {/* Feature photo */}
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
            <Image
              src="/home-feature.jpg"
              alt="Skógar forest in Þorskafjörður"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-gradient-to-r from-[#1e3a1e] via-[#2d5a27] to-[#1e3a1e] text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-[family-name:var(--font-lora)] text-4xl font-semibold mb-2">
              130,000+
            </p>
            <p className="text-[#c8d9c2] text-sm tracking-wide uppercase">
              {h.statTrees}
            </p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-lora)] text-4xl font-semibold mb-2">
              {h.statYear}
            </p>
            <p className="text-[#c8d9c2] text-sm tracking-wide uppercase">
              {h.statSince}
            </p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-lora)] text-4xl font-semibold mb-2">
              Westfjords
            </p>
            <p className="text-[#c8d9c2] text-sm tracking-wide uppercase">
              {h.statLocation}
            </p>
          </div>
        </div>
      </section>

      {/* ── Get Involved CTA ── */}
      <section className="bg-[#fafaf7]">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8aab7e] mb-4">
            {h.ctaEyebrow}
          </p>
          <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl text-[#1e3a1e] mb-6">
            {h.ctaHeading}
          </h2>
          <p className="text-[#4a4a4a] leading-relaxed mb-8 max-w-xl mx-auto">
            {h.ctaPara}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1e3a1e] text-white text-sm tracking-widest uppercase px-8 py-3 hover:bg-[#2d5a27] transition-colors duration-200"
          >
            {h.ctaBtn}
          </Link>
        </div>
      </section>
    </>
  );
}
