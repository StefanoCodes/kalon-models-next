import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownNarrowWide,
  ArrowDownRightFromSquare,
  ArrowRight,
  ArrowRightIcon,
  ExternalLink,
} from "lucide-react";
import { GalleryContent } from "@/app/gallery/types/type";

export default function LatestWorkCard({
  title,
  coverImage,
  description,
  slug,
}: {
  title: GalleryContent["title"];
  coverImage: GalleryContent["coverImage"];
  description: GalleryContent["overview"][0];
  slug: GalleryContent["slug"];
}) {
  const shortDescription = description.slice(0, 99);
  return (
    <div className="flex items-center gap-4 rounded-md bg-backgroundLightAltColor p-2 py-4 lg:gap-8 lg:px-4">
      {/* left */}
      <div className="h-[100px] md:h-[150px] lg:h-[200px]">
        <Image
          src={coverImage}
          alt={title}
          className="aspect-square h-full w-full rounded-md object-cover lg:h-[200px] lg:w-[200px]"
          width={1000}
          height={1000}
        />
      </div>

      <div className="flex h-full flex-1 flex-col justify-center gap-2 lg:gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium lg:text-lg">{title}</h3>
          <p className="max-w-[500px] text-xs sm:text-sm lg:text-base">
            {shortDescription}...
          </p>
        </div>
        <div className="w-fit">
          <Link
            href={`/gallery/${slug}`}
            className="cursor-pointer text-sm font-normal transition-colors hover:text-primaryColor"
          >
            <ExternalLink className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
