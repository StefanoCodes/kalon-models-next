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
  description: GalleryContent["overview"][0];
  slug: GalleryContent["slug"];
  className?: string;
  imageClassName?: string;
}) {
  const shortDescription = description.slice(0, 210);
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 rounded-md bg-backgroundLightAltColor px-0 py-3 pt-0 md:flex-row md:gap-0 md:pt-3 lg:items-start lg:pt-4",
        className,
      )}
    >
      {/* left */}
      <div className="h-[200px] w-full flex-1 md:h-[150px] md:px-3 lg:h-[200px]">
        <Image
          src={coverImage}
          alt={title}
          className={cn(
            "aspect-square h-full w-full rounded-t-md object-cover md:rounded-md",
            imageClassName,
          )}
          width={1000}
          height={1000}
        />
      </div>
      {/* right */}
      <div className="flex h-full flex-1 flex-col justify-between gap-3 px-3 md:gap-2 lg:px-3">
        <div className="flex items-center justify-between">
          <h3 className="max-w-prose text-sm font-medium sm:text-base">
            {title}
          </h3>

          {/* <Button
            size={"sm"}
            variant={"default"}
            className="flex h-5 w-5 md:h-8 md:w-8"
            asChild
          >
            <Link href={`/gallery/${slug}`}>
              <ArrowUpRight className="h-full w-full" />
            </Link>
          </Button> */}
          <PrimaryButton
            href={`/gallery/${slug}`}
            className="w-fit px-0"
            innerClassName="w-fit px-2 py-1 "
            variant="kalonBlack"
          >
            <ArrowUpRight className="h-4 w-4" />
          </PrimaryButton>
        </div>
        <div>
          <p className="inline-block bg-gradient-to-b from-paragraph via-navLinkColor to-transparent bg-clip-text text-xs text-transparent dark:to-transparent sm:text-sm lg:text-base">
            <span className="line-clamp-2 max-w-prose md:line-clamp-3 lg:line-clamp-none">
              {shortDescription}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
