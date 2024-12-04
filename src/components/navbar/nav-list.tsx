"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import NavLogo from "./nav-logo";
import { navbar } from "./navbar.config";

const { routes } = navbar;

export default function DesktopNavList({
  wrapperClasses,
  listItemClasses,
  linkItemClasses,
  callToActionClasses,
}: {
  wrapperClasses?: string;
  listItemClasses?: string;
  linkItemClasses?: string;
  callToActionClasses?: string;
}) {
  const pathname = usePathname();
  return pathname === "/" ? (
    <DesktopNavListHomeVariant />
  ) : (
    <DesktopNavListDefaultVariant
      wrapperClasses={wrapperClasses}
      listItemClasses={listItemClasses}
      linkItemClasses={linkItemClasses}
      callToActionClasses={callToActionClasses}
    />
  );
}
// OTHER PAGES NAV LIST
function DesktopNavListDefaultVariant({
  wrapperClasses,
  listItemClasses,
  linkItemClasses,
  callToActionClasses,
}: {
  wrapperClasses?: string;
  listItemClasses?: string;
  linkItemClasses?: string;
  callToActionClasses?: string;
}) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "container hidden w-full justify-between sm:flex",
        wrapperClasses,
      )}
    >
      <NavLogo />
      <ul
        className={cn(
          `hidden flex-row items-center justify-center gap-8 sm:flex`,
        )}
      >
        {routes.map((route) => (
          <li
            key={route.href}
            className={cn(
              `relative px-2 py-1 text-sm text-navLinkColor`,
              listItemClasses,
            )}
          >
            <Link
              className={cn(
                linkItemClasses,
                "hover:opacity-80",
                pathname.startsWith(route.href) && "relative",
              )}
              href={route.href}
            >
              {route.title}
            </Link>
            {pathname.startsWith(route.href) && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 top-0 h-full cursor-pointer rounded-sm bg-purple-500/15"
              />
            )}
          </li>
        ))}
        <li className="relative">
          <Button
            variant="kalon"
            asChild
            className={cn(
              "h-8 text-base text-navLinkColor",
              callToActionClasses,
            )}
          >
            <Link href="/register">Register</Link>
          </Button>
          {pathname.startsWith("/register") && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 top-0 h-full cursor-pointer rounded-sm bg-purple-500/40"
            />
          )}
        </li>
      </ul>
    </div>
  );
}
// HOME PAGE NAV LIST
function DesktopNavListHomeVariant() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const scale = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    console.log(current);
    setScrollProgress(current);
  });
  return (
    <motion.div
      ref={containerRef}
      layout
      style={{
        flexDirection: scrollProgress > 0.87 ? "row-reverse" : "column",
        justifyContent: scrollProgress > 0.87 ? "flex-end" : "center",
        alignItems: scrollProgress > 0.87 ? "flex-end" : "center",
      }}
      transition={{
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="container mt-10 hidden h-full w-full flex-col items-center justify-center gap-8 sm:mt-0 md:flex"
    >
      {/* Navbar */}
      <motion.ul
        layout="preserve-aspect"
        style={{
          justifyContent: scrollProgress > 0.87 ? "flex-end" : "space-between",
          gap: scrollProgress > 0.87 ? "0.5rem" : "1rem",
        }}
        transition={{
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="hidden w-full flex-row items-center gap-8 sm:flex"
      >
        {routes.map((route) => (
          <Link className="group" key={route.href} href={route.href}>
            <li className="rounded-sm px-4 py-1 text-navLinkColor transition-all duration-300 hover:bg-[#e7dfef] group-hover:text-secondaryColor">
              {route.title}
            </li>
          </Link>
        ))}
        <li>
          <Button variant="kalon" className="h-8 text-navLinkColor" asChild>
            <Link href="/register">Register</Link>
          </Button>
        </li>
      </motion.ul>
      <h1 className="text-8xl font-bold tracking-wider xs:text-9xl md:hidden">
        Kalon
      </h1>
      <motion.div
        style={{ scale }}
        layout
        transition={{
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="hidden flex-col items-center justify-center md:flex"
      >
        <motion.h1
          layout
          style={{ fontSize: "6rem" }}
          transition={{
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-9xl font-bold"
        >
          Kalon
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
