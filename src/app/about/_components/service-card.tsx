import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesCard({ title }: { title: string }) {
  return (
    <div className="md:min-w-[200px]">
      <p className="body-text">{title}</p>
    </div>
  );
}
