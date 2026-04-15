import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skógar — Reforestation in the Westfjords of Iceland",
  description:
    "Skógar is a reforestation project in Þorskafjörður, situated in the Westfjords of Iceland, promoting well-being and justice through collaboration and sustainable land stewardship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#fafaf7] text-[#2c2c2c]">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
