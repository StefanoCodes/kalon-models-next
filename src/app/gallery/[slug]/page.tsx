import { galleryContent } from "../gallery.config";
import { notFound } from "next/navigation";
import GalleryBreadcrumb from "../_components/gallery-breadcrumb";
import GallerySlugHeader from "./_components/header";
import GallerySlugOverview from "./_components/overview";
import { GalleryContent } from "../types/type";
import GallerySlugSectors from "./_components/sectors";
import { Skeleton } from "@/components/ui/skeleton";

export default async function GalleryInnerPage({
  params,
}: {
  params: { slug: Promise<string> };
}) {
  const slug = await params.slug;

  const content = galleryContent.find((item) => item.slug === slug);
  if (!content) {
    return notFound();
  }
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <GalleryBreadcrumb title={content.title} />
      {/* CONTENT */}
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8 md:max-w-7xl md:flex-row md:gap-16">
          <GallerySlugHeader title={content.title} />
          <GallerySlugOverview overview={content.overview} />
          <GallerySlugSectors sectors={content.sectors} />
        </div>
      </div>
      {/* IMAGE */}
      <Skeleton className="flex h-[250px] w-full items-center justify-center bg-muted text-xs font-medium uppercase tracking-widest">
        Placeholder
      </Skeleton>
    </div>
  );
}
