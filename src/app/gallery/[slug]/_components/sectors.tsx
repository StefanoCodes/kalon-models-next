import Heading from "@/app/about/_components/heading";
import { GalleryContent } from "../../types/type";
import GallerySlugSectorBadge from "./sector-badge";
import GallerySlugSectorList from "./sector-list";

export default function GallerySlugSectors({
  sectors,
}: {
  sectors: GalleryContent["sectors"];
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-[0.25]">
      <Heading
        headingSize="h2"
        className="text-xs font-normal uppercase tracking-widest md:text-sm"
      >
        sectors
      </Heading>
      <GallerySlugSectorList sectors={sectors} />
    </div>
  );
}
