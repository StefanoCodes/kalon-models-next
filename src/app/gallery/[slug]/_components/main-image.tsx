import { cn } from "@/lib/utils";
import Image from "next/image";

export default function GallerySlugMainImage({
  image,
  alt,
  className,
}: {
  image: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className="relative h-[500px] w-full lg:h-[600px]">
      <Image
        className={cn(`h-full w-full rounded-md object-cover`, className)}
        fill
        src={image}
        alt={alt}
        quality={100}
        priority
        placeholder="blur"
      />
    </div>
  );
}
