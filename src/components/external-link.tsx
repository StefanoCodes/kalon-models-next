import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
export default function ExternalLink({
  href,
  className,
  iconClassName,
  text,
  textClassName,
  reverse,
}: {
  href: string;
  className?: string;
  iconClassName?: string;
  text?: string;
  textClassName?: string;
  reverse?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        `cursor-pointer transition-colors hover:text-primaryColor`,
        className,
      )}
    >
      <div
        className={cn("flex items-center gap-1", reverse && "flex-row-reverse")}
      >
        <ExternalLinkIcon className={cn("size-4", iconClassName)} />
        {text && <span className={cn(textClassName)}>{text}</span>}
      </div>
    </Link>
  );
}
