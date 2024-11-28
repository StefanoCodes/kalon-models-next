import { cn } from "@/lib/utils";
import React from "react";

type HeadingProps = {
  headingSize: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({
  headingSize = "h1",
  children,
  className = "",
}) => {
  const headingStyles = {
    h1: "text-blackColor text-3xl md:text-4xl font-semibold lg:text-5xl",
    h2: "text-blackColor text-2xl md:text-3xl font-medium lg:text-4xl",
    h3: "text-blackColor text-xl md:text-2xl font-medium lg:text-3xl",
    h4: "text-blackColor text-lg md:text-xl font-medium lg:text-2xl",
    h5: "text-blackColor text-base font-medium lg:text-lg",
    h6: "text-blackColor text-sm font-medium lg:text-base",
  };

  const HeadingTag = headingSize as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className={cn(headingStyles[headingSize], className)}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
