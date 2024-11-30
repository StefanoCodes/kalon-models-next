export default function GalleryListRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-8 md:gap-10 lg:gap-12">
      {children}
    </div>
  );
}
