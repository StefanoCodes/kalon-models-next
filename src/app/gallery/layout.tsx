import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | A sneak peak into our world",
  description: "Explore our gallery.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      id="gallery"
      className="container min-h-screen-mobile py-10 md:min-h-screen-desktop xl:px-0"
    >
      {children}
    </section>
  );
}
