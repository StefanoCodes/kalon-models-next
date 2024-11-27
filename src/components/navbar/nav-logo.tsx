import Heading from "@/app/about/_components/heading";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function NavLogo({ className }: { className?: string }) {
  return (
    <Heading headingSize="h2" className={cn("font-light uppercase", className)}>
      <Link href="/">Kalon</Link>
    </Heading>
  );
}
