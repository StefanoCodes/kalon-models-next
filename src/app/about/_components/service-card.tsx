import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ServicesCard({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("md:min-w-[280px]", className)}>
      <p className="body-text">{title}</p>
    </div>
  );
}
