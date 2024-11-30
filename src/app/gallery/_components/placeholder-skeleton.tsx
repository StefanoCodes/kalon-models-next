import { Skeleton } from "@/components/ui/skeleton";

export default function PlaceholderSkeleton() {
  return (
    <Skeleton className="flex h-[500px] w-full items-center justify-center">
      <p className="text-sm uppercase text-gray-500">placeholder</p>
    </Skeleton>
  );
}
