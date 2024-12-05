import Heading from "@/app/about/_components/heading";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function NavLogo({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Heading
      headingSize="h2"
      className={cn(
        "text-[16.67px] font-light uppercase md:text-[16.67px] lg:text-[16.67px]",
        className,
      )}
    >
      <Link href="/" className="inline-block h-full" onClick={onClick}>
        Kalon
      </Link>
    </Heading>
  );
}
