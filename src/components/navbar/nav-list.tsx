"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import NavLogo from "./nav-logo";
import { navbar } from "./navbar.config";
import { useState } from "react";

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
            className={cn(`text-navLinkColor text-sm`, listItemClasses)}
          >
            <Link className={cn(linkItemClasses)} href={route.href}>
              {route.title}
            </Link>
          </li>
        ))}
        <li>
          <Button
            variant="kalon"
            asChild
            className={cn(
              "text-navLinkColor h-8 text-base",
              callToActionClasses,
            )}
          >
            <Link href="/register">Register</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}
// HOME PAGE NAV LIST
function DesktopNavListHomeVariant() {
  const { scrollYProgress } = useScroll();
  // const [scrollProgress, setScrollProgress] = useState(0);
  // how can we keep track of the scroll progress everytime it changes
  // we want to keep track of the scroll progress and use it to determine the flex direction of the flex container
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  // useMotionValueEvent(scrollYProgress, "change", (current) => {
  //   setScrollProgress(current);
  // });
  // so what we want is the flex container to become a row on scroll instead of coloum based on the y progress
  return (
    <motion.div
      // animate={{
      //   flexDirection: scrollProgress > 0 ? "row-reverse" : "column",
      //   alignItems: scrollProgress > 0.1 ? "center" : "flex-start",
      //   transition: {
      //     duration: 0.3,
      //     ease: [0.16, 1, 0.3, 1],
      //   },
      // }}
      className="container mt-10 w-full flex-col items-center justify-between gap-8 sm:mt-0 sm:flex"
    >
      {/* Navbar */}
      <motion.ul className="hidden w-full flex-row items-center justify-between gap-8 sm:flex">
        {routes.map((route) => (
          <Link className="group" key={route.href} href={route.href}>
            <li className="text-navLinkColor rounded-sm px-4 py-1 transition-all duration-300 hover:bg-[#e7dfef] group-hover:text-secondaryColor">
              {route.title}
            </li>
          </Link>
        ))}
        <li>
          <Button variant="kalon" className="text-navLinkColor h-8" asChild>
            <Link href="/register">Register</Link>
          </Button>
        </li>
      </motion.ul>
      {/* Kalon Logo Scale Animation */}
      <motion.div
        style={{ scale }}
        className="flex flex-col items-center justify-center"
      >
        <Image
          src="/Kalon.svg"
          alt="Kalon Logo"
          width={1280}
          height={260}
          className="w-full"
        />
      </motion.div>
    </motion.div>
  );
}
