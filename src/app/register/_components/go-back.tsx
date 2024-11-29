import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

export default function GoBack({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <div
      className={cn("flex w-fit cursor-pointer items-center gap-2", className)}
      onClick={onClick}
    >
      <ArrowLeft className="h-4 w-4" />
      <span>Go Back</span>
    </div>
  );
}
