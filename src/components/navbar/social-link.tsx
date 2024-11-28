import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SocialLink({
  href,
  className,
  icon: Icon,
}: {
  href: string;
  className: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <Link href={href} target="_blank">
      <Icon className={cn(`h-4 w-4`, className)} />
    </Link>
  );
}
