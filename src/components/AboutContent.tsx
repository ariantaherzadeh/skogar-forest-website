"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      {/* ── Page header ── */}
      <section className="bg-gradient-to-br from-[#162d16] via-[#1e3a1e] to-[#2d5a27] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8aab7e] mb-4">
            {a.eyebrow}
          </p>
          <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-5xl font-semibold leading-tight max-w-2xl">
            {a.heading}
          </h1>
        </div>
      </section>

      {/* ── Photo + Opening ── */}
      <section className="bg-[#fafaf7]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Feature photo */}
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden ring-1 ring-[#c8c0b4]">
            <Image
              src="/images/about-feature.jpg"
              alt="Skógar — Þorskafjörður"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Opening text */}
          <div className="pt-2">
            <p className="font-[family-name:var(--font-lora)] text-xl md:text-2xl text-[#4a6640] leading-relaxed italic mb-8">
              {a.openingQuote}
            </p>
            <p className="text-[#4a4a4a] leading-relaxed mb-5">{a.openingP1}</p>
            <p className="text-[#4a4a4a] leading-relaxed">{a.openingP2}</p>
          </div>
        </div>
      </section>

      {/* ── Full history ── */}
      <section className="bg-[#f0ece3] border-t border-[#d4cfc4]">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8aab7e] mb-6">
            {a.historyEyebrow}
          </p>
          <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl text-[#1e3a1e] mb-10 leading-snug">
            {a.historyHeading}
          </h2>
          <div className="space-y-6 text-[#4a4a4a] leading-relaxed">
            <p>{a.historyP1}</p>
            <p>{a.historyP2}</p>
            <p>{a.historyP3}</p>
            <p>{a.historyP4}</p>
          </div>
        </div>
      </section>

      {/* ── Timeline highlights ── */}
      <section className="bg-[#fafaf7] border-t border-[#d4cfc4]">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8aab7e] mb-10 text-center">
            {a.milestonesEyebrow}
          </p>
          <div className="space-y-0">
            {a.milestones.map(({ year, text }, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-px bg-[#d4cfc4] flex-1 group-first:invisible" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4a7c3f] my-2 shrink-0" />
                  <div className="w-px bg-[#d4cfc4] flex-1 group-last:invisible" />
                </div>
                <div className="pb-10 pt-1">
                  <p className="text-xs tracking-widest uppercase text-[#8aab7e] mb-1 font-semibold">
                    {year}
                  </p>
                  <p className="text-[#4a4a4a] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
