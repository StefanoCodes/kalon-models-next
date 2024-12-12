import { cn } from "@/lib/utils";
import GallerySlugImages from "./images";

export default function GallerySlugContentImage({
  image,
  alt,
  contents = [
    "Nightjar’s brief was to design and engineer a new platform that would consolidate the various stand alone sites into one mastersite, while still creating a consistent and cohesive brand experience. On the backend, the technical solution needed to be able to scale to handle this growth trajectory of acquiring up to 10 practices per year, while giving the NDC team full control of all the practice child-sites, as well as an easier way to maintain cybersecurity.",
    "  As an additional UX and design challenge to overcome, some practices are NDC branded, West Coast practices are DB Dental branded, and recent acquisition practices needed to retain some of their own branding elements logos, colour palettes to be convinced convinced to move to the new mastersite.",
  ],
  title,
  reverse,
  imageClassNames,
}: {
  image: string;
  alt: string;
  contents?: string[]; // todo make this not optional once the content is there to be used
  reverse?: boolean;
  title?: string;
  imageClassNames?: string;
}) {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-16">
      <div className={cn("w-full md:flex-1", reverse && "order-1 md:order-2")}>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium tracking-wide">{title}</h3>
          <div className="flex flex-col gap-4">
            {/* if the content is present roll it in other wise we show the default stuff untill the content is ready */}
            {contents?.map((content, id) => {
              return (
                <p key={id} className="slug-content">
                  {content}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className={cn("w-full md:flex-1", reverse && "order-2 md:order-1")}>
        <GallerySlugImages
          image={image}
          alt={alt}
          className={imageClassNames}
        />
      </div>
    </div>
  );
}
