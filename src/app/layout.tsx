import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Kalon | The modelling academy for all",
  description: "The Masterclass",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} bg-blackColor text-whiteColor antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
