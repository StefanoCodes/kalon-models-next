import { GalleryContent } from "../types/type";
import GalleryListItem from "./gallery-list-item";
import GalleryListRow from "./gallery-list-row";

const gridCols = {
  1: "col-span-12 md:col-span-4 xl:col-span-4",
  2: "col-span-12 md:col-span-8 xl:col-span-8",
  3: "col-span-12 lg:col-span-12 xl:col-span-8",
  4: "col-span-12 md:col-span-8 xl:col-span-4",
  5: "col-span-12 md:col-span-4 xl:col-span-12",
};

export default function GalleryList({
  content,
}: {
  content: GalleryContent[];
}) {
  return (
    <>
      <GalleryListRow>
        {content.map(({ id, title, timeline, slug, overview, coverImage }) => (
          <GalleryListItem
            key={id}
            title={title}
            timeline={timeline}
            slug={slug}
            overview={overview[0]}
            coverImage={coverImage}
            className={gridCols[id as keyof typeof gridCols]}
          />
        ))}
      </GalleryListRow>
    </>
  );
}
