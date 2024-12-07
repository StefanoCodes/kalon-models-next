import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ExternalLink from "@/components/external-link";
export default function GalleryListItem({
  title,
  timeline,
  slug,
  className,
  overview,
  coverImage,
}: {
  title: string;
  timeline: string;
  overview: string;
  slug: string;
  className?: string;
  coverImage: string;
}) {
  return (
    <div className={cn(`group`, className)}>
      <div className="flex flex-col gap-4">
        {/* IMAGE */}
        <div className="relative flex w-full flex-col gap-4">
          <Image
            src={coverImage}
            width={1000}
            height={1000}
            className="aspect-square min-h-[450px] w-full rounded-md object-cover brightness-50 filter lg:max-h-[550px]"
            alt="placeholder"
          />
          <ExternalLink
            href={`/gallery/${slug}`}
            className="absolute right-3 top-3 z-[1] self-start text-backgroundLightAltColor transition-colors hover:text-grayLightColor"
            iconClassName="size-4"
            text="View More"
            textClassName="text-sm font-normal tracking-wide md:text-[15px]"
            reverse
          />
        </div>
        {/* CONTENT */}
        <div className="flex flex-col gap-4 pb-4 transition-all duration-300">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-normal md:text-xl">{title}</h2>
            <p className="text-sm text-gray-500">{timeline}</p>
          </div>

          <div>
            <p className="slug-content">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
