export default function GalleryListRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="xs:grid flex grid-cols-12 flex-col gap-8 md:gap-10 lg:gap-12">
      {children}
    </div>
  );
}
