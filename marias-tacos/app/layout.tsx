import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OrderBanner from "@/components/OrderBanner";
import { siteConfig } from "@/lib/site";
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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Maria's Tacos | Authentic Mexican Food in Marshalltown, IA",
    template: "%s | Maria's Tacos",
  },
  description: siteConfig.description,
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Maria's Tacos | Authentic Mexican Food in Marshalltown, IA",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} flex min-h-screen flex-col`}
      >
        <OrderBanner />
        <Navbar />
        <main className="relative z-0 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
