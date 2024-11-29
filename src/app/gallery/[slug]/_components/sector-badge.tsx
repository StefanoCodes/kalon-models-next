import { Badge } from "@/components/ui/badge";

export default function GallerySlugSectorBadge({ sector }: { sector: string }) {
  return <Badge className="font-normal">{sector}</Badge>;
}
