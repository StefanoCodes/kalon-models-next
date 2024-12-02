import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
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
      <Link href={`/gallery/${slug}`} className="flex flex-col gap-4">
        <div className="flex w-full flex-col gap-4">
          <Image
            src={coverImage}
            width={1000}
            height={1000}
            className="aspect-square min-h-[450px] w-full rounded-md object-cover brightness-75 filter lg:max-h-[550px]"
            alt="placeholder"
          />
        </div>
        <div className="flex flex-col gap-4 border-b border-border pb-4 transition-all duration-300 group-hover:border-blackColor">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-normal md:text-xl">{title}</h2>
            <p className="text-sm text-gray-500">{timeline}</p>
          </div>
          <div>
            <p className="slug-content">{overview}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
