export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full px-5 py-10 md:px-10">
      <section id="gallery" className="container">
        {children}
      </section>
    </main>
  );
}
