import { Metadata } from "next";
import GalleryList from "./_components/gallery-list";

export const metadata: Metadata = {
  title: "Gallery | A sneak peak into our world",
  description: "Explore our gallery.",
};

export default function Gallery() {
  return <GalleryList />;
}
