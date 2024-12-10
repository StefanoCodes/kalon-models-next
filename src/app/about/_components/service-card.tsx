import { cn } from "@/lib/utils";

export default function ServicesCard({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("xl:min-w-[280px]", className)}>
      <p className="body-text">{title}</p>
    </div>
  );
}
