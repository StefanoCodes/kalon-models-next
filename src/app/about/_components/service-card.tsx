import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesCard({ title }: { title: string }) {
  return (
    <div className="md:min-w-[200px]">
      <p className="body-text">{title}</p>
    </div>
  );
}

// CARD STYLE SERVICE

// <Card
//     className="group relative overflow-hidden bg-blackColor border-0 aspect-[3/4] transition-transform duration-300 hover:scale-[1.02]"
// >
//     <Image
//         src={service.image}
//         alt={service.title}
//         fill
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         quality={85}
//         className="object-cover transition-transform duration-300 group-hover:scale-110 filter grayscale contrast-125 brightness-90"
//     />
//     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
//     <CardContent className="relative h-full flex flex-col justify-end p-6">
//         <h3 className="text-2xl font-bold mb-2 whitespace-pre-line leading-tight text-whiteColor">
//             {service.title}
//         </h3>
//         <p className="text-sm text-gray-300 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
//             {service.description}
//         </p>
//     </CardContent>
// </Card>
