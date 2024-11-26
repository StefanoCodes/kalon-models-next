import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navabar from "@/components/navbar/navbar";
import Navbar from "@/components/navbar/navbar";
const ABCNormal = localFont({
  src: "./fonts/ABCNormal-Normal.ttf",
  fallback: ["sans-serif"],
  display: "swap",
  variable: "--font-ABCNormal",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Kalon | The modelling academy for all",
  description:
    "An introduction to Kalon Models, where we empower aspiring models to kickstart their careers with expert training, development, and opportunities in the modeling industry.",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
