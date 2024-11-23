import { cn } from "@/lib/utils"

export default function Hr({ className, gradient = 'primary' }: {
    className?: string
    gradient?: "primary" | "secondary" | "tertiary" | "light" | "dark";
}) {

    // gradient colors:
    const gradients = {
        primary: "from-primaryColor via-secondaryColor to-tertiaryColor",
        secondary: "from-secondaryColor via-tertiaryColor to-primaryColor",
        tertiary: "from-tertiaryColor via-primaryColor to-secondaryColor",
        light: "from-whiteColor via-blackColor to-whiteColor",
        dark: "from-blackColor  via-whiteColor to-blackColor",
    }
    return (
        <span className={cn("w-full h-[1px] bg-gradient-to-r " + gradients[gradient || "primary"], className)} />
    )
}