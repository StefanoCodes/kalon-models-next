import { galleryContent } from "../gallery.config";
import { notFound } from "next/navigation";
import GalleryBreadcrumb from "../_components/gallery-breadcrumb";
import GallerySlugHeader from "./_components/header";
import GallerySlugOverview from "./_components/overview";
import GallerySlugSectors from "./_components/sectors";
import GallerySlugImages from "./_components/images";
import GallerySlugMainImage from "./_components/main-image";
import GallerySlugContentImage from "./_components/content-image";

import type { Metadata, ResolvingMetadata } from "next";
import { getAllGalleryItems } from "@/lib/gallery";

type Params = Promise<{ slug: string }>;

// Dynamic metadata for each gallery post

export async function generateMetadata(
  {
    params,
  }: {
    params: Params;
  },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const contentList = galleryContent.map((item) =>
    item.find((item) => item.slug === slug),
  );
  const items = contentList.filter((item) => item !== undefined);
  const content = items.find((item) => item !== undefined);
  if (!content) return {};

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Gallery | ${content.title}`,
    description: content.overview[0],
    openGraph: {
      images: [content.coverImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `Gallery | ${content.title}`,
      description: content.overview[0],
      images: [content.coverImage],
      creator: "@kalonmodels",
    },
  };
}

export async function generateStaticParams() {
  const galleryItems = getAllGalleryItems();
  return galleryItems.map((item) => ({
    slug: item.slug,
  }));
}

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
          contents={content.contents?.left}
          reverse
          image={content.images[3].src}
          alt={content.images[3].alt}
          imageClassNames={content.images[3]?.styles}
        />
        <GallerySlugContentImage
          contents={content.contents?.right}
          image={content.images[4].src}
          alt={content.images[4].alt}
          imageClassNames={content.images[4]?.styles}
        />
      </div>
    </div>
  );
}
