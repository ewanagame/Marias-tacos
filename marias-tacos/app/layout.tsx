import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Maria's Tacos",
  description: "Authentic tacos made with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} min-h-screen`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
