import { GalleryContent } from "../types/type";
import GalleryListItem from "./gallery-list-item";
import GalleryListRow from "./gallery-list-row";

const gridCols = {
  1: "col-span-12 md:col-span-8 xl:col-span-6",
  2: "col-span-12 md:col-span-4",
  3: "col-span-12 lg:col-span-12 xl:col-span-2",
  4: "col-span-12 md:col-span-8 ",
  5: "col-span-12 md:col-span-4 lg:col-span-4",
};

export default function GalleryList({
  content,
}: {
  content: GalleryContent[];
}) {
  return (
    <>
      <GalleryListRow>
        {content.map(({ id, title, timeline, slug, overview }) => (
          <GalleryListItem
            key={id}
            title={title}
            timeline={timeline}
            slug={slug}
            overview={overview[0]}
            className={gridCols[id as keyof typeof gridCols]}
          />
        ))}
      </GalleryListRow>
    </>
  );
}
