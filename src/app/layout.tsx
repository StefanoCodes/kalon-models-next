import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  fallback: ["sans-serif"],
});

// const ABCNormal = Next({
//   src: "url('/fonts/ABCNormal.ttf')",
//   variable: "--font-ABCNormal",
// });

export const metadata: Metadata = {
  title: "Kalon | The modelling academy for all",
  description: "An introduction to Kalon Models, where we empower aspiring models to kickstart their careers with expert training, development, and opportunities in the modeling industry."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} bg-whiteColor text-blackColor antialiased`}
      >
        {/* <div className="flex flex-col justify-between min-h-[100dvh]"> */}


        {children}
        {/* <Footer /> */}
        {/* </div> */}
      </body>

    </html>
  );
}
