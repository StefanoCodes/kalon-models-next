import { Badge } from "@/components/ui/badge";

export default function GallerySlugSectorBadge({ sector }: { sector: string }) {
  return (
    <Badge className="rounded-sm border border-muted-foreground bg-transparent font-normal text-paragraph hover:bg-blackColor hover:text-whiteColor">
      {sector}
    </Badge>
  );
}
