import Image from "next/image";
import content from "@/app/about/about.config";
const { founder } = content;
const {
  founderImage,
  founderSignature,
  founderAbbreviation,
  textNote1,
  textNote2,
} = founder;
export default function FounderContent() {
  return (
    <div className="mb-8 flex h-full w-full flex-col gap-16 md:flex-row md:justify-between md:gap-4">
      <div className="relative flex flex-1">
        <div className="-z-1 absolute left-1/2 top-1/2 hidden h-full w-[371px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-black lg:block" />
        <Image
          src={founderImage}
          alt="Kalon"
          width={1000}
          height={1000}
          className="z-[1] aspect-square h-full w-full rounded-xl object-cover md:mx-auto md:max-w-[371px] lg:-rotate-12"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-[1.5] flex-col justify-between gap-8 xl:min-h-[400px]">
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
      </div>
    </div>
  );
}
