import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact — Skógar",
  description:
    "Get in touch with the Skógar reforestation project in the Westfjords of Iceland.",
};

export default function ContactPage() {
  return <ContactContent />;
}
