import { cn } from "@/lib/utils";

export default function Row({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("flex flex-row", className)}>{children}</div>;
}
