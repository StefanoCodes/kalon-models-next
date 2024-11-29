import { ArrowRight, ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function GalleryListItem({
  title,
  timeline,
  slug,
}: {
  title: string;
  timeline: string;
  slug: string;
}) {
  return (
    <Link href={`/gallery/${slug}`}>
      <div className="flex flex-row justify-between gap-4 border-b border-border pb-4">
        <div className="flex flex-row items-center gap-2">
          <h3 className="text-2xl font-medium">{title}</h3>
          <ArrowUpRightIcon className={`h-4 w-4`} />
        </div>

        <p className="text-sm text-gray-500">{timeline}</p>
      </div>
    </Link>
  );
}
