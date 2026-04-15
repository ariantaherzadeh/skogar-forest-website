"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translations } from "@/lib/translations";

interface LanguageContextValue {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  // Persist preference in localStorage
  useEffect(() => {
    const stored = localStorage.getItem("skogar-lang");
    if (stored === "en" || stored === "is") setLang(stored);
  }, []);

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === "en" ? "is" : "en";
      localStorage.setItem("skogar-lang", next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider
      value={{ lang, t: translations[lang], toggle }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
