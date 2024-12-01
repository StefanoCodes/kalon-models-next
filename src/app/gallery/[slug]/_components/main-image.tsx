import Image from "next/image";

export default function GallerySlugMainImage({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) {
  return (
    <div className="relative h-[500px] w-full">
      <Image
        className="h-full w-full rounded-md object-cover"
        fill
        src={image}
        alt={alt}
      />
    </div>
  );
}
