import Image from "next/image";
import ArrowLine from "../../public/arrow-to-arrow-line.svg";
import DashedLine from "../../public/dashed-line.svg";
import Diamond from "@/components/diamond-star";

export default function Home() {
  return (
    <section
      className="container relative flex min-h-screen-mobile items-center justify-center py-10 md:min-h-screen-desktop xl:px-0"
      id="home"
    >
      {/* horizontal lines & heading */}
      <div className="relative flex w-full max-w-[42rem] flex-col items-center">
        <div className="relative w-full">
          <h1 className="flex flex-col items-center justify-center gap-0 py-3 text-[2.1875rem] leading-[1.2] text-[#232121] md:py-0 md:text-[4.375rem]">
            <span className="flex min-h-max items-center gap-1 md:gap-2">
              we
              <span className="relative px-4 pb-3 pt-2 text-[2.1875rem] text-[#B1B4B9] md:px-3 md:pb-3 md:pt-[1px] md:text-[4.375rem]">
                shape
                <Diamond className="absolute bottom-1 right-[3px] z-10 h-3 w-3 md:bottom-[2px] md:right-[1px] md:h-4 md:w-4" />
                <Diamond className="absolute left-[3px] top-[3px] z-10 h-3 w-3 md:left-[1px] md:top-[1px] md:h-4 md:w-4" />
                <Diamond className="absolute bottom-1 left-[3px] z-10 h-3 w-3 md:bottom-[2px] md:left-[1px] md:h-4 md:w-4" />
                <Diamond className="absolute right-[3px] top-[3px] z-10 h-3 w-3 md:right-[1px] md:top-[1px] md:h-4 md:w-4" />
                <div className="absolute left-0 top-[8px] w-[100%] border border-[#DDDDE6] md:w-[100%]" />
                <div className="absolute bottom-2 left-0 w-[100%] border border-[#DDDDE6] md:w-[100%]" />
                <div className="absolute left-2 top-[0px] h-[98%] border border-[#DDDDE6] md:-top-[1px] md:h-[101%]" />
                <div className="absolute right-2 top-[0px] h-[98%] border border-[#DDDDE6] md:-top-[1px] md:h-[101%]" />
              </span>
            </span>
            <span className="min-h-max">tomorrows models</span>
          </h1>
          {/* absolute positon */}
        </div>
      </div>
    </section>
  );
}
