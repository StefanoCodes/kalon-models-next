import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { Preloader } from "@/components/preloader";

const ABCNormal = localFont({
  src: [
    {
      path: "./fonts/ABCNormal-Normal.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/ABCNormal-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ABCNormal-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ABCNormal-Neutral.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  fallback: ["sans-serif"],
  display: "swap",
  variable: "--font-ABCNormal",
});

export const metadata: Metadata = {
  title: "Kalon | The modelling academy for all",
  description:
    "An introduction to Kalon Models, where we empower aspiring models to kickstart their careers with expert training, development, and opportunities in the modeling industry.",
  openGraph: {
    title: "Kalon | The modelling academy for all",
    description:
      "An introduction to Kalon Models, where we empower aspiring models to kickstart their careers with expert training, development, and opportunities in the modeling industry.",
    images: ["/og.image.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalon | The modelling academy for all",
    description:
      "An introduction to Kalon Models, where we empower aspiring models to kickstart their careers with expert training, development, and opportunities in the modeling industry.",
    images: ["/og.image.webp"],
    creator: "@kalonmodels",
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
        className={`${ABCNormal.className} ${ABCNormal.variable} bg-whiteColor text-blackColor antialiased`}
      >
        <Preloader />
        <Navbar />
        <main className="min-h-screen-mobile md:min-h-screen-desktop">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
