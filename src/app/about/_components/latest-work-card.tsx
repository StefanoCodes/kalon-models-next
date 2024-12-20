import Image from "next/image";
import Link from "next/link";
import { GalleryContent } from "@/app/gallery/types/type";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import PrimaryButton from "@/components/buttons/primary-button";

export default function LatestWorkCard({
  title,
  coverImage,
  description,
  slug,
  className,
  imageClassName,
}: {
  title: GalleryContent["title"];
  coverImage: GalleryContent["coverImage"];
  description: GalleryContent["latestWorkDescription"];
  slug: GalleryContent["slug"];
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={cn(
        "latest-work-card-shadow flex flex-col items-center gap-4 rounded-md bg-backgroundLightAltColor p-2 md:flex-row md:gap-0 lg:items-start",
        className,
      )}
    >
      {/* left */}
      <div className="h-[200px] w-full flex-1">
        <Image
          src={coverImage}
          alt={title}
          className={cn(
            "aspect-square h-full w-full rounded-md object-cover",
            imageClassName,
          )}
          width={1000}
          height={1000}
        />
      </div>
      {/* right */}
      <div className="flex h-full flex-1 flex-col justify-between gap-3 px-3 md:gap-2 lg:px-3">
        <div>
          <p className="inline-block bg-gradient-to-b from-paragraph via-navLinkColor to-transparent bg-clip-text text-xs text-transparent dark:to-transparent sm:text-sm lg:text-base">
            <span className="text-2xl md:text-lg lg:text-2xl xl:text-3xl">
              {description}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="max-w-prose text-sm font-medium sm:text-base">
            {title}
          </h3>

          <PrimaryButton
            href={`/gallery/${slug}`}
            className="w-fit px-0"
            innerClassName="w-fit px-2 py-1 "
            variant="kalonBlack"
            size="xs"
          >
            <ArrowUpRight className="h-4 w-4" />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
