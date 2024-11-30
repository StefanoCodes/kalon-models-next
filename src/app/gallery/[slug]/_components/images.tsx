import { Skeleton } from "@/components/ui/skeleton";
import GallerySlugPlaceholder from "./placeholder";

export default function GallerySlugImages() {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <GallerySlugPlaceholder className="h-[400px] w-full md:flex-1" />
      <GallerySlugPlaceholder className="h-[400px] w-full md:flex-1" />
    </div>
  );
}
