import PrimaryButton from "@/components/buttons/primary-button";

export default function GallerySlugSectorBadge({ sector }: { sector: string }) {
  return (
    <PrimaryButton
      variant="outline"
      className="w-fit rounded-[4px] font-normal drop-shadow-sm"
      innerClassName="text-xs py-0 rounded-[4px] px-2"
    >
      {sector}
    </PrimaryButton>
  );
}
// old look
// import { Badge } from "@/components/ui/badge";

// export default function GallerySlugSectorBadge({ sector }: { sector: string }) {
//   return (
//     <Badge className="rounded-sm border border-muted-foreground bg-transparent font-normal text-paragraph hover:bg-blackColor hover:text-whiteColor">
//       {sector}
//     </Badge>
//   );
// }
