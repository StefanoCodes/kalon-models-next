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
    <section id="gallery" className="container py-10">
      {children}
    </section>
  );
}
