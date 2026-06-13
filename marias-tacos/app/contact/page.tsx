import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact & Location",
  description:
    "Visit Maria's Tacos at 110 W State St, Marshalltown, IA. Hours, directions, parking, accessibility, and payment info.",
};

export default function Contact() {
  return <ContactContent />;
}
