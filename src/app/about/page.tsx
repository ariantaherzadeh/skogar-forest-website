import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About — Skógar",
  description:
    "The history of Skógar — a collective effort to restore the forests of Þorskafjörður in Iceland's Westfjords.",
};

export default function AboutPage() {
  return <AboutContent />;
}
