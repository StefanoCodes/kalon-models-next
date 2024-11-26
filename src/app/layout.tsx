import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  fallback: ["sans-serif"],
});

const ABCNormal = localFont({
  src: "./fonts/ABCNormal-Normal.ttf",
  fallback: ["sans-serif"],
  display: "swap",
  variable: "--font-ABCNormal",
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
        {/* <div className="flex flex-col justify-between min-h-[100dvh]"> */}

        {children}
        {/* <Footer /> */}
        {/* </div> */}
      </body>
    </html>
  );
}
