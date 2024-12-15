import Image from "next/image";
import ArrowLine from "../../public/arrow-to-arrow-line.svg";
import DashedLine from "../../public/dashed-line.svg";

export default function Home() {
  return (
    <section
      className="container relative flex min-h-screen-mobile items-center justify-center py-10 md:min-h-screen-desktop xl:px-0"
      id="home"
    >
      <div className="flex w-full max-w-[42rem] flex-col items-center">
        <div className="flex items-center gap-3">
          <span className="text-[2.1875rem] text-[#232121] md:text-[4.375rem]">
            we
          </span>
          <div className="flex items-center border-l-[1.5px] border-r-[1.5px] border-[#D9D9D9] md:min-h-[120px]">
            <span className="relative text-[2.1875rem] leading-[60px] text-[#B1B4B9] md:text-[4.375rem]">
              shape
              <Image
                className="absolute top-2 w-full md:-top-1"
                src={ArrowLine}
                alt="arrow to arrow line svg"
              />
            </span>
          </div>
        </div>
        <div className="relative flex items-center gap-3">
          <Image
            src={DashedLine}
            alt="dashed line"
            width={660}
            className="absolute inset-0 w-full"
          />
          <div className="">
            <span className="text-[2.1875rem] text-[#232121] md:text-[4.375rem]">
              tomorrows
            </span>
          </div>
          <div className="flex items-center border-l-[1.5px] border-r-[1.5px] border-[#D9D9D9] md:min-h-[120px]">
            <span className="relative text-[2.1875rem] leading-[60px] text-[#232121] md:text-[4.375rem]">
              models
              <Image
                className="absolute bottom-2 w-full md:-bottom-2"
                src={ArrowLine}
                alt="arrow to arrow line svg"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
