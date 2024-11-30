import Link from "next/link";
import { cn } from "@/lib/utils";
import GallerySlugPlaceholder from "../[slug]/_components/placeholder";
import { ExternalLinkIcon } from "lucide-react";

export default function GalleryListItem({
  title,
  timeline,
  slug,
  className,
  overview,
}: {
  title: string;
  timeline: string;
  overview: string;
  slug: string;
  className?: string;
}) {
  return (
    <div className={cn(`group`, className)}>
      <Link href={`/gallery/${slug}`} className="flex flex-col gap-4">
        <GallerySlugPlaceholder />
        {/* we want the border to start from zero */}
        <div className="flex flex-col gap-4 border-b border-border pb-4 transition-all duration-300 group-hover:border-blackColor">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-normal md:text-xl">{title}</h3>
            <p className="text-sm text-gray-500">{timeline}</p>
          </div>
          <div>
            <p>{overview}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
