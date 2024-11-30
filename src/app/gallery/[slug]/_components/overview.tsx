import Heading from "@/app/about/_components/heading";
import { GalleryContent } from "../../types/type";

export default function GallerySlugOverview({
  overview,
}: {
  overview: GalleryContent["overview"];
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-1">
      <Heading
        headingSize="h2"
        className="text-xs font-normal uppercase tracking-widest md:text-sm"
      >
        overview
      </Heading>
      {overview.map((item, index) => (
        <p key={index} className="slug-content">
          {item}
        </p>
      ))}
    </div>
  );
}
