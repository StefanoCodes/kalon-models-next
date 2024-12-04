import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function InterestedButton({ href }: { href: string }) {
  return (
    <Button
      className="group w-full items-center rounded-sm bg-secondaryColor px-8 py-4 text-sm font-medium text-white shadow-lg transition-colors hover:bg-foreground"
      asChild
    >
      <Link href={href} className="flex items-center gap-1 font-normal">
        Interested
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  );
}
