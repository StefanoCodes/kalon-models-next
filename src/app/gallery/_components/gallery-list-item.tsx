import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
export default function GalleryListItem({
  id,
  title,
  timeline,
  slug,
  className,
  overview,
  coverImage,
  blurUrl,
}: {
  id: number;
  title: string;
  timeline: string;
  overview: string;
  slug: string;
  className?: string;
  coverImage: string;
  blurUrl?: string;
}) {
  return (
    <div className={cn(className)}>
      <div className="flex flex-col gap-4">
        {/* IMAGE */}
        <div className="relative flex w-full flex-col gap-4">
          <Link href={`gallery/${slug}`}>
            <div className="inline-block w-full overflow-hidden rounded-md">
              <Image
                priority={id < 2 ? true : false}
                src={coverImage}
                width={1000}
                height={1000}
                className="duration-600 aspect-square min-h-[450px] w-full rounded-md object-cover brightness-50 filter transition-transform duration-500 lg:max-h-[550px] lg:hover:scale-110"
                alt="placeholder"
                placeholder="blur"
                blurDataURL={blurUrl}
              />
            </div>
          </Link>
        </div>
        {/* CONTENT */}
        <div className="flex flex-col gap-4 pb-4 transition-all duration-300">
          <div className="flex flex-col gap-1">
            <Link href={`gallery/${slug}`} className="group">
              <h2 className="text-lg font-normal md:text-xl">{title}</h2>
              <div className="h-[2px] w-0 rounded-md bg-transparent transition-all duration-1000 lg:group-hover:w-full lg:group-hover:bg-navLinkColor" />
            </Link>
            <p className="text-sm text-gray-500">{timeline}</p>
          </div>

          <div>
            <p className="slug-content text-balance">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
