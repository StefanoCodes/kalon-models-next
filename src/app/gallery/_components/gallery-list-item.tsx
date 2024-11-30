import Link from "next/link";
// Variants
import { cn } from "@/lib/utils";
import GallerySlugPlaceholder from "../[slug]/_components/placeholder";

const variants = {
  "1/2": "col-span-1",
  "1/3": "col-span-1",
  "1/4": "col-span-1",
};

export default function GalleryListItem({
  title,
  timeline,
  slug,
  className,
}: {
  title: string;
  timeline: string;
  slug: string;
  className?: string;
}) {
  return (
    <div className={cn(`flex flex-col gap-4`, className)}>
      <GallerySlugPlaceholder />
      <Link href={`/gallery/${slug}`}>
        <div className="flex flex-row items-center justify-between gap-4 border-b border-border pb-4">
          <h3 className="text-lg font-normal md:text-xl">{title}</h3>

          <p className="text-sm text-gray-500">{timeline}</p>
        </div>
      </Link>
    </div>
  );
}
