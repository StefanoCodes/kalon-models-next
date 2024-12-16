import Image from "next/image";
import ArrowLine from "../../public/arrow-to-arrow-line.svg";
import DashedLine from "../../public/dashed-line.svg";
import Diamond from "@/components/diamond-star";

{
  /* <div className="flex items-center gap-3">
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
</div> */
}
export default function Home() {
  return (
    <section
      className="container relative flex min-h-screen-mobile items-center justify-center py-10 md:min-h-screen-desktop xl:px-0"
      id="home"
    >
      {/* vertical lines */}
      <div className="absolute right-[76px] hidden min-h-dvh border border-[#DDDDE6] md:block lg:right-[238px] xl:right-[312px]" />
      <div className="absolute left-[76px] hidden min-h-dvh border border-[#DDDDE6] md:block lg:left-[238px] xl:left-[312px]" />

      {/* horizontal lines & heading */}
      <div className="relative flex w-full max-w-[42rem] flex-col items-center">
        <div className="absolute top-2 min-w-[100dvw] border border-[#DDDDE6]" />
        <div className="absolute -bottom-[10px] min-w-[100dvw] border border-[#DDDDE6]" />

        <div className="relative w-full">
          <h1 className="flex flex-col items-center justify-center gap-0 py-3 text-[2.1875rem] leading-[1.2] text-[#232121] md:py-0 md:text-[4.375rem]">
            <span className="flex min-h-max items-center gap-4">
              we
              <span className="min-h-max text-[2.1875rem] text-[#B1B4B9] md:text-[4.375rem]">
                shape
              </span>
            </span>
            <span className="min-h-max">tomorrows models</span>
          </h1>
          {/* absolute positon */}

          <Diamond className="absolute left-5 top-0 lg:left-0" />
          <Diamond className="absolute right-5 lg:right-0" />
          <Diamond className="absolute left-5 lg:left-0" />
          <Diamond className="absolute right-5 top-0 lg:right-0" />
        </div>
      </div>
    </section>
  );
}
