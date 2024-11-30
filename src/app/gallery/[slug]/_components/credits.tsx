import Heading from "@/app/about/_components/heading";
import { GalleryContent } from "../../types/type";

export default function GallerySlugCredits({
  credits,
}: {
  credits: GalleryContent["credits"];
}) {
  return (
    <div className="flex flex-col gap-4">
      <Heading
        headingSize="h2"
        className="text-xs font-normal uppercase tracking-widest md:hidden md:text-sm"
      >
        credits
      </Heading>
      <div className="flex flex-col gap-4">
        {credits.map((credit) => (
          <div key={credit.name} className="flex flex-col gap-[2px]">
            <div className="text-xs font-medium uppercase tracking-widest">
              {credit.title}:
            </div>
            <div className="text-sm font-normal">{credit.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
