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
    <div className="mb-8 flex w-full flex-col items-start gap-16 md:flex-row md:justify-between">
      <div className="flex h-full">
        <Image
          src={founderImage}
          alt="Kalon"
          width={304}
          height={327}
          className="aspect-square h-full max-h-[327px] w-full rounded-xl object-cover md:w-auto md:max-w-[304px]"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-8 md:max-w-[560px]">
        <div className="flex max-w-xl flex-col gap-5">
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
