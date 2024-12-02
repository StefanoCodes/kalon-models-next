import { galleryContent } from "../gallery.config";
import { notFound } from "next/navigation";
import GalleryBreadcrumb from "../_components/gallery-breadcrumb";
import GallerySlugHeader from "./_components/header";
import GallerySlugOverview from "./_components/overview";
import GallerySlugSectors from "./_components/sectors";
import GallerySlugImages from "./_components/images";
import GallerySlugMainImage from "./_components/main-image";
import GallerySlugContentImage from "./_components/content-image";
type Params = Promise<{ slug: string }>;

export default async function GalleryInnerPage({ params }: { params: Params }) {
  const { slug } = await params;
  const contentList = galleryContent.map((item) =>
    item.find((item) => item.slug === slug),
  );
  const items = contentList.filter((item) => item !== undefined);
  const content = items.find((item) => item !== undefined);
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
        <GallerySlugMainImage
          image={content.images[0].src}
          alt={content.images[0].alt}
          className={content.images[0]?.styles}
        />
        <div className="flex flex-col gap-4 md:flex-row">
          <GallerySlugImages
            image={content.images[1].src}
            alt={content.images[1].alt}
            className={content.images[1]?.styles}
          />
          <GallerySlugImages
            image={content.images[2].src}
            alt={content.images[2].alt}
            className={content.images[2]?.styles}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <GallerySlugContentImage
          title="Problem Overview"
          reverse
          image={content.images[3].src}
          alt={content.images[3].alt}
          imageClassNames={content.images[3]?.styles}
        />
        <GallerySlugContentImage
          title="Solution Overview"
          image={content.images[4].src}
          alt={content.images[4].alt}
          imageClassNames={content.images[4]?.styles}
        />
      </div>
    </div>
  );
}
