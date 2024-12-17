import { Metadata } from "next";
import Image from "next/image";
import FounderContent from "./_components/founder-content";
import Header from "./_components/header";
import LatestWork from "./_components/latest-work";

export const metadata: Metadata = {
  title: "About | A Modeling Academy for Everyone, but Not Just Anyone.",
  description:
    "Discover Kalon Models, a top modeling academy since 2020, empowering aspiring models with expert training in runway, pageantry, and personal branding.",
};

const headerAnimationStyle = `text-3xl font-medium leading-[1.1] tracking-tight text-blackColor sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl xl:leading-[1.1] text-center`;
const headerAnimationStyleSoft = `text-3xl font-normal leading-[1.1] tracking-tight text-blackColor sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl xl:leading-[1.1] text-center`;

export default function About() {
  return (
    <>
      <div className="relative">
        <div className="relative h-[500px] w-full">
          <div className="h-full w-full bg-[#B2B3C9]"></div>
          {/* <Image
            src="/kalon-cover-home.jpg"
            alt="About Hero"
            fill
            className="mx-auto max-w-[1920px] bg-gray-500 object-cover brightness-0"
            priority
          /> */}
        </div>
        <h1 className="absolute left-1/2 top-1/2 flex min-w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <span className={headerAnimationStyle}>
            <span className={headerAnimationStyleSoft}>In the</span> academy
            today,
          </span>

          <span className={headerAnimationStyle}>
            <span className={headerAnimationStyleSoft}>on the</span> runway
            tomorrow,
          </span>
        </h1>
      </div>
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
