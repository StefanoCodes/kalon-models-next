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
    <section id="gallery" className="container px-4 py-10 xl:px-0">
      {children}
    </section>
  );
}
