"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-[#d4cfc4] bg-[#f0ece3] py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="text-[#1e3a1e] font-[family-name:var(--font-lora)] text-lg font-semibold mb-3">
            Skógar
          </p>
          <p className="text-sm text-[#5c5c5c] leading-relaxed max-w-xs">
            {t.footer.tagline}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs tracking-widest uppercase text-[#8aab7e] font-semibold mb-4">
            {t.footer.navigate}
          </p>
          <ul className="space-y-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-[#4a4a4a] hover:text-[#1e3a1e] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs tracking-widest uppercase text-[#8aab7e] font-semibold mb-4">
            {t.footer.contact}
          </p>
          <ul className="space-y-2 text-sm text-[#4a4a4a]">
            <li>
              <a
                href="mailto:info@skogarforest.org"
                className="hover:text-[#1e3a1e] transition-colors"
              >
                info@skogarforest.org
              </a>
            </li>
            <li>{t.contact.address.join(", ")}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-[#d4cfc4]">
        <p className="text-xs text-[#8c8c8c]">
          {t.footer.copyright(new Date().getFullYear())}
          {t.footer.madeBy}{" "}
          <a
            href="https://ariantaherzadeh.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4a4a4a] underline underline-offset-2 hover:text-[#1e3a1e] transition-colors"
          >
            Arían Helgi Taherzadeh
          </a>
        </p>
      </div>
    </footer>
  );
}
