import { Metadata } from "next";
import GalleryList from "./_components/gallery-list";
import Heading from "../about/_components/heading";

export const metadata: Metadata = {
  title: "Gallery | A sneak peak into our world",
  description: "Explore our gallery.",
};

export default function Gallery() {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <Heading headingSize="h1">Gallery</Heading>
      <GalleryList />
    </div>
  );
}
