"use client";

import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "@/components/ContactForm";

export default function ContactContent() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <>
      {/* ── Page header ── */}
      <section className="bg-gradient-to-br from-[#162d16] via-[#1e3a1e] to-[#2d5a27] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8aab7e] mb-4">
            {c.eyebrow}
          </p>
          <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-5xl font-semibold leading-tight">
            {c.heading}
          </h1>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-[#fafaf7]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl text-[#1e3a1e] mb-4">
              {c.subheading}
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed mb-10">{c.para}</p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-sm bg-[#e8e4da] border border-[#d4cfc4] flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-[#4a7c3f]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#8aab7e] mb-1 font-semibold">
                    {c.emailLabel}
                  </p>
                  <a
                    href="mailto:info@skogarforest.org"
                    className="text-[#2c2c2c] hover:text-[#1e3a1e] transition-colors"
                  >
                    info@skogarforest.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-sm bg-[#e8e4da] border border-[#d4cfc4] flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-[#4a7c3f]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#8aab7e] mb-1 font-semibold">
                    {c.addressLabel}
                  </p>
                  <p className="text-[#2c2c2c]">
                    {c.address[0]}
                    <br />
                    {c.address[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
