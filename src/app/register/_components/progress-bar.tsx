import { cn } from "@/lib/utils";
const animationsOptions = {
  none: "animate-none",
  pulse: "animate-pulse",
  spin: "animate-spin",
  ping: "animate-ping",
  bounce: "animate-bounce",
};

const animationSpeed = {
  slow: "",
};

export default function ProgressBar({
  progressPercentage,
  showPercentage,
  className,
  animation = "none",
}: {
  progressPercentage?: number;
  showPercentage?: boolean;
  className?: string;
  animation: "pulse" | "spin" | "ping" | "bounce" | "none";
}) {
  return (
    <div className="flex flex-col">
      <div className="animate h-2 w-full">
        <div
          className={cn(
            "h-2 bg-blue-600",
            animation && `${animationsOptions[animation]}`,
            className,
          )}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      {showPercentage && (
        <span className="self-end p-1 text-sm text-blackColor">
          {progressPercentage} %
        </span>
      )}
    </div>
  );
}
