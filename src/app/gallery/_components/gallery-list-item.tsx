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
      <div className="flex flex-row items-center justify-between gap-4 border-b border-border pb-4">
        <h3 className="text-xl font-normal md:text-2xl">{title}</h3>

        <p className="text-sm text-gray-500">{timeline}</p>
      </div>
    </Link>
  );
}
