import Image from "next/image";
import ExternalLink from "@/components/external-link";
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
    <div className="flex items-center gap-4 rounded-md bg-backgroundLightAltColor p-2 py-4 md:flex-1 lg:items-start lg:gap-8 lg:px-4">
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
      {/* right */}
      <div className="flex flex-1 flex-col lg:pt-4">
        <div className="flex w-full justify-end self-end">
          <ExternalLink
            href={`/gallery/${slug}`}
            className="cursor-pointer text-sm font-normal transition-colors hover:text-primaryColor"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium lg:text-lg">{title}</h3>
          <p className="max-w-[300px] text-xs sm:text-sm lg:text-base">
            {shortDescription}...
          </p>
        </div>
      </div>
    </div>
  );
}
