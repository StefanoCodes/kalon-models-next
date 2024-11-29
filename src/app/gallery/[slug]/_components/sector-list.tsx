import { GalleryContent } from "../../types/type";
import GallerySlugSectorBadge from "./sector-badge";

export default function GallerySlugSectorList({
  sectors,
}: {
  sectors: GalleryContent["sectors"];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {sectors.map((sector, index) => (
        <GallerySlugSectorBadge key={index} sector={sector} />
      ))}
    </div>
  );
}
