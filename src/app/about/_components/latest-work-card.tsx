import Image from "next/image";
import Link from "next/link";
import { GalleryContent } from "@/app/gallery/types/type";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const shortDescription = description.slice(0, 200);
  return (
    <div className="flex items-center gap-4 rounded-md bg-backgroundLightAltColor px-3 py-2 md:flex-1 lg:items-start lg:gap-8 lg:pt-4">
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
      <div className="flex h-full flex-1 flex-col justify-between gap-3 md:gap-0">
        <div className="flex items-center justify-between">
          <h3 className="max-w-prose text-sm font-medium sm:text-base">
            {title}
          </h3>

          <Button
            size={"sm"}
            variant={"default"}
            className="flex h-5 w-5 md:h-8 md:w-8"
            asChild
          >
            <Link href={`/gallery/${slug}`}>
              <ArrowUpRight className="h-full w-full" />
            </Link>
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <p className="inline-block bg-gradient-to-b from-paragraph via-navLinkColor to-transparent bg-clip-text text-xs text-transparent dark:to-transparent sm:text-sm lg:text-base">
            <span className="line-clamp-2 max-w-prose md:line-clamp-3 lg:line-clamp-none">
              {shortDescription}
            </span>
            ...
          </p>
        </div>
      </div>
    </div>
  );
}
