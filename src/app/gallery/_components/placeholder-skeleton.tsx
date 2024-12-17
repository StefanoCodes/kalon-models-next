import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
export default function PlaceholderSkeleton({
  className,
}: {
  className: string;
}) {
  return (
    <Skeleton
      className={cn(
        "flex h-[400px] w-full items-center justify-center",
        className,
      )}
    >
      <p className="text-sm uppercase text-gray-500">placeholder</p>
    </Skeleton>
  );
}
