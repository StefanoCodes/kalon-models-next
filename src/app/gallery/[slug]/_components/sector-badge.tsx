import { Badge } from "@/components/ui/badge";

export default function GallerySlugSectorBadge({ sector }: { sector: string }) {
  return (
    <Badge className="border border-muted-foreground bg-transparent font-normal text-paragraph">
      {sector}
    </Badge>
  );
}
