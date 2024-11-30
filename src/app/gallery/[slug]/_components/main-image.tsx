import GallerySlugPlaceholder from "./placeholder";

export default function GallerySlugMainImage({ image }: { image?: string }) {
  return <GallerySlugPlaceholder className="h-[400px] w-full" src={image} />;
}
