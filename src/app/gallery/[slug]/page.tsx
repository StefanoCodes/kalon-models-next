import { galleryContent } from "../gallery.config";
import { notFound } from "next/navigation";
import GalleryBreadcrumb from "../_components/gallery-breadcrumb";
import GallerySlugHeader from "./_components/header";
import GallerySlugOverview from "./_components/overview";
import { GalleryContent } from "../types/type";
import GallerySlugSectors from "./_components/sectors";
import GallerySlugImages from "./_components/images";
import GallerySlugMainImage from "./_components/main-image";
import GallerySlugContentImage from "./_components/content-image";
type Params = Promise<{ slug: string }>;

export default async function GalleryInnerPage({ params }: { params: Params }) {
  const { slug } = await params;

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
          <GallerySlugSectors
            sectors={content.sectors}
            credits={content.credits}
          />
        </div>
      </div>
      {/* IMAGE */}
      <div className="flex flex-col gap-8">
        <GallerySlugMainImage image={`/gallery/placeholder_wide.webp`} />
        <GallerySlugImages />
      </div>
      <div className="flex flex-col gap-8">
        <GallerySlugContentImage title="Problem Overview" reverse />
        <GallerySlugContentImage title="Solution Overview" />
      </div>
    </div>
  );
}
