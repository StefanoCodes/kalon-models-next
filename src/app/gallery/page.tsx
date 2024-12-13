import { Metadata } from "next";
import GalleryList from "./_components/gallery-list";
import Heading from "../about/_components/heading";
import { galleryContent } from "./gallery.config";

export const metadata: Metadata = {
  title: "Gallery | A sneak peak into our world",
  description: "Explore our gallery.",
};
const contentList = galleryContent;
export default function Gallery() {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      {contentList.map((content, index) => (
        <GalleryList key={index} content={content} />
      ))}
    </div>
  );
}
