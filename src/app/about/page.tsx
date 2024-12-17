import { Metadata } from "next";
import Image from "next/image";
import FounderContent from "./_components/founder-content";
import Header from "./_components/header";
import LatestWork from "./_components/latest-work";
import PreviewImage from "./_components/preview-image";

export const metadata: Metadata = {
  title: "About | A Modeling Academy for Everyone, but Not Just Anyone.",
  description:
    "Discover Kalon Models, a top modeling academy since 2020, empowering aspiring models with expert training in runway, pageantry, and personal branding.",
};

export default function About() {
  return (
    <>
      <PreviewImage />
      <section
        id="about"
        className="container relative min-h-screen-mobile py-10 md:min-h-screen-desktop xl:px-0"
      >
        <div className="flex flex-col gap-16">
          <Header />
          <FounderContent />
          <LatestWork />
        </div>
      </section>
    </>
  );
}
