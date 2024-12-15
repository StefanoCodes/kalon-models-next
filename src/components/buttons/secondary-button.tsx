import { cn } from "@/lib/utils";
import Link from "next/link";
export default function SecondaryButton({
  children = "Explore",
  to,
  containerStyles,
  subContainerSyles,
  childrenContainerStyles,
}: {
  children?: React.ReactNode;
  to?: string;
  containerStyles?: string;
  subContainerSyles?: string;
  childrenContainerStyles?: string;
}) {
  return to ? (
    <Link
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram link to Kalon"
      className="group"
    >
      <div className={cn("h-10 w-10", containerStyles)}>
        <div className="flex h-full w-full items-center justify-center rounded-[14.47px] bg-gradient-to-b from-[#E9E9E9] via-[#E9E9E9] to-[#FFFFFF]">
          <div
            className={cn(
              "instagram-container-card-shadow flex h-8 w-8 items-center justify-center bg-gradient-to-b from-[#ECECEC] to-[#FFFF]",
              subContainerSyles,
            )}
          >
            <div
              className={cn(
                "flex h-[26px] w-[26px] items-center justify-center rounded-lg bg-gradient-to-b from-[#F4F4F4] to-[#FEFEFE] group-hover:from-[#e9e9e9] group-hover:to-[#fefefe]",
                childrenContainerStyles,
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <div className={cn("h-10 w-10", containerStyles)}>
      <div className="flex h-full w-full items-center justify-center rounded-[14.47px] bg-gradient-to-b from-[#E9E9E9] via-[#E9E9E9] to-[#FFFFFF]">
        <div
          className={cn(
            "instagram-container-card-shadow flex h-8 w-8 items-center justify-center bg-gradient-to-b from-[#ECECEC] to-[#FFFF]",
            subContainerSyles,
          )}
        >
          <div
            className={cn(
              "flex h-[26px] w-[26px] items-center justify-center rounded-lg bg-gradient-to-b from-[#F4F4F4] to-[#FEFEFE] group-hover:from-[#e9e9e9] group-hover:to-[#fefefe]",
              childrenContainerStyles,
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
