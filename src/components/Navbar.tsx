"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, t, toggle } = useLanguage();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="w-full border-b border-[#d4cfc4] bg-[#fafaf7] sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[#1e3a1e] font-[family-name:var(--font-lora)] text-xl font-semibold tracking-wide hover:opacity-80 transition-opacity"
        >
          Skógar
        </Link>

        {/* Desktop: nav links + language toggle */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link text-sm tracking-widest uppercase font-[family-name:var(--font-lora)] ${
                    pathname === href
                      ? "text-[#1e3a1e] after:w-full"
                      : "text-[#4a4a4a] hover:text-[#1e3a1e]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language toggle */}
          <button
            onClick={toggle}
            aria-label={`Switch to ${lang === "en" ? "Icelandic" : "English"}`}
            className="flex items-center text-xs tracking-widest uppercase font-[family-name:var(--font-lora)] border border-[#d4cfc4] rounded-sm overflow-hidden"
          >
            <span
              className={`w-9 h-7 flex items-center justify-center transition-colors ${
                lang === "en"
                  ? "bg-[#1e3a1e] text-white"
                  : "text-[#8c8c8c] hover:text-[#2c2c2c]"
              }`}
            >
              EN
            </span>
            <span
              className={`w-9 h-7 flex items-center justify-center transition-colors ${
                lang === "is"
                  ? "bg-[#1e3a1e] text-white"
                  : "text-[#8c8c8c] hover:text-[#2c2c2c]"
              }`}
            >
              ÍS
            </span>
          </button>
        </div>

        {/* Mobile: hamburger */}
        <div className="md:hidden flex items-center gap-4">
          {/* Language toggle (mobile) */}
          <button
            onClick={toggle}
            aria-label={`Switch to ${lang === "en" ? "Icelandic" : "English"}`}
            className="flex items-center text-xs tracking-widest uppercase font-[family-name:var(--font-lora)] border border-[#d4cfc4] rounded-sm overflow-hidden"
          >
            <span
              className={`w-9 h-7 flex items-center justify-center transition-colors ${
                lang === "en" ? "bg-[#1e3a1e] text-white" : "text-[#8c8c8c]"
              }`}
            >
              EN
            </span>
            <span
              className={`w-9 h-7 flex items-center justify-center transition-colors ${
                lang === "is" ? "bg-[#1e3a1e] text-white" : "text-[#8c8c8c]"
              }`}
            >
              ÍS
            </span>
          </button>

          <button
            className="flex flex-col justify-center items-center gap-1.5"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-[#2c2c2c] transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-[#2c2c2c] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-[#2c2c2c] transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#d4cfc4] bg-[#fafaf7]">
          <ul className="flex flex-col py-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-6 py-3 text-sm tracking-widest uppercase ${
                    pathname === href
                      ? "text-[#1e3a1e] font-semibold"
                      : "text-[#4a4a4a]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
