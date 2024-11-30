import { Link } from "next-view-transitions";
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
  coverImage?: string;
}) {
  return (
    <div className={cn(`group`, className)}>
      <Link href={`/gallery/${slug}`} className="flex flex-col gap-4">
        {/* image will come in as props later */}
        <Image
          src={coverImage || "/gallery/placeholder_3.webp"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={1000}
          height={1000}
          className="w-full brightness-75 filter"
          alt="placeholder"
        />
        <div className="flex flex-col gap-4 border-b border-border pb-4 transition-all duration-300 group-hover:border-blackColor">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-normal md:text-xl">{title}</h3>
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
