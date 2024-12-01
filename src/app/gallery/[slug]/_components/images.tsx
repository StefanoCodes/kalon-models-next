import { cn } from "@/lib/utils";
import GallerySlugPlaceholder from "./placeholder";
import Image from "next/image";

export default function GallerySlugImages({
  className,
  image,
  alt,
}: {
  className?: string;
  image: string;
  alt: string;
}) {
  return (
    <div className={cn("relative h-[400px] w-full md:flex-1", className)}>
      <Image
        className="h-full w-full rounded-md object-cover"
        fill
        src={image}
        alt={alt}
      />
    </div>
  );
}
