import { GalleryContent } from "../../types/type";

export default function GallerySlugHeader({
  title,
}: {
  title: GalleryContent["title"];
}) {
  const [firstPart, secondPart] = title.split(" ");
  return (
    <div className="flex max-w-2xl flex-col gap-2">
      <h1 className="text-colorBlack text-4xl font-bold tracking-tight sm:text-5xl">
        {firstPart}
      </h1>
      <p className="text-3xl font-normal tracking-tight text-mutedColor sm:text-4xl">
        {secondPart}
      </p>
    </div>
  );
}
