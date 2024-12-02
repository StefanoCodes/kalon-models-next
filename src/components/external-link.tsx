import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
export default function ExternalLink({
  href,
  className,
}: {
  href: string;
  className?: string;
}) {
  return (
    <Link href={href} className={cn(className)}>
      <ExternalLinkIcon className="size-4" />
    </Link>
  );
}
