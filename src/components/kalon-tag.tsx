import { cn } from "@/lib/utils";
import Image from "next/image";

export default function KalonTag({ text, className }: { text: string, className?: string }) {
  return (
    <span className={cn("inline-flex h-6 items-center justify-center relative gap-[2px] font-medium -top-[1px] rounded-sm bg-tertiaryColor px-2 text-sm text-secondaryColor hover:bg-tertiaryColor hover:text-secondaryColor transition-all duration-300 hover:scale-105 hover:-rotate-3", className)}>
      <Image src="./about/circle.svg" alt="Kalon" width={14.5} height={14.5} className="h-[15px] w-[15px]" />
      <span className="text-base leading-normal">{text}</span>
    </span>
  );
}