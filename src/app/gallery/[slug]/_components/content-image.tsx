import { cn } from "@/lib/utils";
import GallerySlugPlaceholder from "./placeholder";

export default function GallerySlugContentImage({
  image,
  content,
  title,
  reverse,
}: {
  image?: string;
  content?: string;
  reverse?: boolean;
  title?: string;
}) {
  // const { title, description } = content;
  return (
    <div className="flex w-full flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-16">
      <div className={cn("w-full md:flex-1", reverse && "order-1 md:order-2")}>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium tracking-wide">{title}</h3>
          <div className="flex flex-col gap-4">
            <p className="slug-content">
              Nightjar’s brief was to design and engineer a new platform that
              would consolidate the various stand alone sites into one
              mastersite, while still creating a consistent and cohesive brand
              experience. On the backend, the technical solution needed to be
              able to scale to handle this growth trajectory of acquiring up to
              10 practices per year, while giving the NDC team full control of
              all the practice child-sites, as well as an easier way to maintain
              cybersecurity.
            </p>
            <p className="slug-content">
              As an additional UX and design challenge to overcome, some
              practices are NDC branded, West Coast practices are DB Dental
              branded, and recent acquisition practices needed to retain some of
              their own branding elements logos, colour palettes to be convinced
              convinced to move to the new mastersite.
            </p>
          </div>
        </div>
      </div>
      <div className={cn("w-full md:flex-1", reverse && "order-2 md:order-1")}>
        <GallerySlugPlaceholder className="h-[400px] w-full" />
      </div>
    </div>
  );
}
