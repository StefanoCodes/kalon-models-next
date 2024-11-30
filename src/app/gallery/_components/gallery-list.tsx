import { galleryContent } from "../gallery.config";
import GalleryListItem from "./gallery-list-item";
import GalleryListRow from "./gallery-list-row";

const gridCols = {
  1: "col-span-12 md:col-span-8 xl:col-span-6",
  2: "col-span-12 md:col-span-4",
  3: "col-span-12 lg:col-span-12 xl:col-span-2",
  4: "col-span-12 md:col-span-8 ",
  5: "col-span-12 md:col-span-4 lg:col-span-4",
};

export default function GalleryList() {
  return (
    <>
      <GalleryListRow>
        {galleryContent.map(({ id, title, timeline, slug }) => (
          <GalleryListItem
            key={id}
            title={title}
            timeline={timeline}
            slug={slug}
            className={gridCols[id as keyof typeof gridCols]}
          />
        ))}
      </GalleryListRow>
    </>
  );
}
