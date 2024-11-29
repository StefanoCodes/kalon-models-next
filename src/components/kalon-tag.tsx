import { cn } from "@/lib/utils";
import Image from "next/image";

export default function KalonTag({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative -top-[1px] inline-flex h-6 cursor-default select-none items-center justify-center gap-[2px] rounded-sm bg-tertiaryColor px-2 text-sm font-medium text-secondaryColor transition-all duration-300 hover:-rotate-3 hover:scale-105 hover:bg-tertiaryColor hover:text-secondaryColor",
        className,
      )}
    >
      <Image
        src="./about/circle.svg"
        alt="Kalon"
        width={14.5}
        height={14.5}
        className="h-[15px] w-[15px]"
      />
      <span className="text-base font-normal leading-normal">{text}</span>
    </span>
  );
}
