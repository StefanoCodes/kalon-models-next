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
    <div className="mb-8 flex w-full flex-col items-start gap-16 md:flex-row md:justify-between h-full">
      <div className="flex flex-1">
        <Image
          src={founderImage}
          alt="Kalon"
          width={1000}
          height={1000}
          className="aspect-square h-full w-full rounded-xl object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-[1.5] flex-col md:gap-56 justify-between">
        <div className="flex  flex-col gap-5">
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
