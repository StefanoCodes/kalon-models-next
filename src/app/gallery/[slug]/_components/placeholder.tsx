import { cn } from "@/lib/utils";
import Image from "next/image";

export default function GallerySlugPlaceholder({
  className,
  src,
}: {
  className?: string;
  src?: string;
}) {
  return (
    <Image
      src={src || "/gallery/placeholder_wide.webp"}
      alt="Placeholder"
      width={500}
      height={500}
      quality={100}
      className={cn(
        "flex w-full items-center justify-center bg-muted object-cover text-xs font-medium uppercase tracking-widest",
        className,
      )}
    />
  );
}
