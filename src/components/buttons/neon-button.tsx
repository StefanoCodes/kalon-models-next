import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { Button } from "../ui/button";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  link?: string;
}

export default function NeonButton({
  children,
  className,
  link,
  ...props
}: NeonButtonProps) {
  return (
    <Button
      className={cn(
        // Base styles
        "relative rounded-xl px-8 py-4 text-xl font-medium tracking-wider text-white",
        // Background and border
        "border border-purple-400/50 bg-purple-600/90",
        // Glow effects
        "shadow-[0_0_2rem_-0.5rem_rgb(168,85,247,1)]",
        // Hover effects
        "hover:border-purple-300/50 hover:bg-purple-500/90",
        "hover:shadow-[0_0_3rem_0rem_rgb(168,85,247,1)]",
        "hover:after:opacity-75",
        // Focus styles
        "focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black",
        // Animation
        "transition-all duration-300",
        className,
      )}
      {...props}
    >
      {link ? <Link href={link}>{children}</Link> : children}
    </Button>
  );
}

// Example usage
export function ButtonDemo() {
  return (
    <div className="flex min-h-[400px] items-center justify-center bg-black p-8">
      <NeonButton>Register Now</NeonButton>
    </div>
  );
}
