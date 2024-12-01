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
    <main className="w-full px-4 py-10 lg:px-10">
      <section id="gallery" className="container">
        {children}
      </section>
    </main>
  );
}
