import Image from "next/image";
import content from "@/app/about/about.config";
import SecondaryButton from "@/components/buttons/secondary-button";
import DoubleQuotes from "../../../../public/double-quotes.svg";
import Hr from "@/components/hr";
const { founder } = content;

// TEMP
// const {
//   founderImage,
//   founderSignature,
//   founderAbbreviation,
//   textNote1,
//   textNote2,
// } = founder;
{
  /* <div className="relative flex flex-1">
        <div className="-z-1 absolute left-1/2 top-1/2 hidden h-full w-[371px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-black lg:block" />
        <Image
          src={founderImage}
          alt="Kalon"
          width={1000}
          height={1000}
          className="z-[1] aspect-square h-full w-full rounded-xl object-cover md:mx-auto md:max-w-[371px] lg:-rotate-12"
        />
      </div> */
}

{
  /* CONTENT */
}
{
  /* <div className="flex flex-[1.5] flex-col justify-between gap-8 xl:min-h-[400px]">
        <div className="flex flex-col gap-5">
          <p className="body-text">{textNote1}</p>

          <p className="body-text">{textNote2}</p>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            src={founderSignature}
            alt="Kalon signature"
            width={80}
            height={36}
            className="object-cover"
          />
          <p className="body-text">{founderAbbreviation}</p>
        </div>
      </div> */
}

export default function FounderContent() {
  return (
    <div className="py-[6.25rem]">
      <div className="flex flex-col items-center gap-16">
        <Hr className="w-[65%] bg-gradient-to-r from-[#F8F8F8] via-[#737373] to-[#F8F8F8]" />
        <div className="flex flex-col items-center justify-center gap-[3.375rem]">
          <SecondaryButton
            containerStyles="h-[45px] w-[45px]"
            subContainerSyles="h-[38px] w-[38px]"
            childrenContainerStyles="h-[31px] w-[31px]"
          >
            <Image
              width={20}
              height={20}
              src={DoubleQuotes}
              alt="double quotes icon"
            />
          </SecondaryButton>
          <p className="max-w-[44ch] text-center text-xl md:text-2xl">
            Being apart of this school contributed greatly to my confidence, not
            just on stage and in front of the camera but in general. 100% would
            recommend.
          </p>
          <div className="flex w-full flex-col items-center gap-1 text-center">
            <div className="flex flex-col">
              <p className="text-lg text-secondaryColor">Mitha Tandwa</p>
              <span className="-mt-[3px] h-[1px] w-full bg-secondaryColor" />
            </div>
            <span className="text-lg text-black/50">Model, Kalon Models</span>
          </div>
        </div>
        <Hr className="w-[65%] bg-gradient-to-r from-[#F8F8F8] via-[#737373] to-[#F8F8F8]" />
      </div>
    </div>
  );
}
