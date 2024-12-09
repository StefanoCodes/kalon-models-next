"use client";
import { cn } from "@/lib/utils";
import NavLogo from "./nav-logo";
import { navbar } from "./navbar.config";
import Link from "next/link";
import PrimaryButton from "../buttons/primary-button";
import { MotionValue, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
const { routes } = navbar;

type bgColorType = "white" | "transparent";

export default function DestkopNavListAboutVariant({
  pathname,
}: {
  pathname: string;
}) {
  const { scrollYProgress } = useScroll();
  const [bgColor, setBgColor] = useState<bgColorType>("transparent");
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0) {
      setBgColor("white");
    } else {
      setBgColor("transparent");
    }
  });
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-10 hidden bg-transparent transition-colors duration-300 sm:block",
        {
          "bg-whiteColor": bgColor === "white",
        },
      )}
    >
      <nav className={cn("container py-4 xl:px-0")}>
        <div className={cn("flex w-full items-center justify-between")}>
          <NavLogo className={cn({ "text-whiteColor": bgColor !== "white" })} />
          <ul className={cn(`flex flex-row items-center justify-center gap-8`)}>
            {routes.map((route) => (
              <li
                key={route.href}
                className={cn(`relative px-2 py-1 text-sm text-navLinkColor`, {
                  "text-whiteColor": bgColor !== "white",
                })}
              >
                <Link
                  className={cn("select-none hover:opacity-80", {
                    "text-tertiaryColor": pathname.startsWith(route.href),
                    "text-primaryColor":
                      bgColor === "white" && pathname.endsWith(route.href),
                  })}
                  href={route.href}
                >
                  {route.title}
                </Link>
              </li>
            ))}
            <li>
              <PrimaryButton size="sm" variant="kalon" href="/register">
                Register
              </PrimaryButton>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
