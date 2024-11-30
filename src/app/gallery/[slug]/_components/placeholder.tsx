import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function GallerySlugPlaceholder({
  className,
}: {
  className?: string;
}) {
  return (
    <Skeleton
      className={cn(
        "flex h-[400px] w-full items-center justify-center bg-muted text-xs font-medium uppercase tracking-widest",
        className,
      )}
    >
      Placeholder
    </Skeleton>
  );
}
