import Heading from "@/app/about/_components/heading";
import { GalleryContent } from "../../types/type";
import GallerySlugSectorList from "./sector-list";
import GallerySlugCredits from "./credits";

export default function GallerySlugSectors({
  sectors,
  credits,
}: {
  sectors: GalleryContent["sectors"];
  credits: GalleryContent["credits"];
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-[0.25]">
      <Heading
        headingSize="h2"
        className="text-xs font-normal uppercase tracking-widest md:text-sm"
      >
        sectors
      </Heading>
      <div className="flex flex-col gap-8">
        <GallerySlugSectorList sectors={sectors} />
        <GallerySlugCredits credits={credits} />
      </div>
    </div>
  );
}
