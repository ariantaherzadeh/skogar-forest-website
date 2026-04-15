"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const { t } = useLanguage();
  const f = t.contact.form;

  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");

    // ─── Wire up your preferred form backend here ──────────────────────────
    // Example with Formspree:
    //   const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(form),
    //   });
    //   if (res.ok) setState("success"); else setState("error");
    // ────────────────────────────────────────────────────────────────────────

    await new Promise((r) => setTimeout(r, 800));
    setState("success");
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-start justify-center h-full min-h-[300px]">
        <div className="w-12 h-12 rounded-full bg-[#e8f0e4] flex items-center justify-center mb-6">
          <svg
            className="w-6 h-6 text-[#2d5a27]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-lora)] text-2xl text-[#1e3a1e] mb-3">
          {f.successHeading}
        </h3>
        <p className="text-[#4a4a4a] leading-relaxed">{f.successPara}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-xs tracking-widest uppercase text-[#6b7280] mb-2"
        >
          {f.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder={f.namePlaceholder}
          className="w-full border border-[#d4cfc4] bg-white px-4 py-3 text-sm text-[#2c2c2c] placeholder-[#b8b0a4] focus:outline-none focus:border-[#4a7c3f] transition-colors rounded-sm"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs tracking-widest uppercase text-[#6b7280] mb-2"
        >
          {f.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder={f.emailPlaceholder}
          className="w-full border border-[#d4cfc4] bg-white px-4 py-3 text-sm text-[#2c2c2c] placeholder-[#b8b0a4] focus:outline-none focus:border-[#4a7c3f] transition-colors rounded-sm"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs tracking-widest uppercase text-[#6b7280] mb-2"
        >
          {f.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder={f.messagePlaceholder}
          className="w-full border border-[#d4cfc4] bg-white px-4 py-3 text-sm text-[#2c2c2c] placeholder-[#b8b0a4] focus:outline-none focus:border-[#4a7c3f] transition-colors resize-none rounded-sm"
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-red-600">
          {f.errorMsg}{" "}
          <a href="mailto:info@skogarforest.org" className="underline">
            info@skogarforest.org
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-block bg-[#1e3a1e] text-white text-sm tracking-widest uppercase px-8 py-3 hover:bg-[#2d5a27] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? f.submitting : f.submit}
      </button>
    </form>
  );
}
