import { galleryContent } from "../gallery.config";
import GalleryListItem from "./gallery-list-item";

export default function GalleryList() {
  return (
    <div className="flex flex-col gap-10">
      {galleryContent.map(({ id, title, timeline, slug }) => (
        <GalleryListItem
          key={id}
          title={title}
          timeline={timeline}
          slug={slug}
        />
      ))}
    </div>
  );
}
