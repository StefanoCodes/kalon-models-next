"use client";
import { navbar } from "./navbar.config";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import NavLogo from "./nav-logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTransition } from "react";
import { useScroll, useTransform } from "motion/react";

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
      className={cn("hidden w-full justify-between sm:flex", wrapperClasses)}
    >
      <NavLogo />
      <ul
        className={cn(
          `hidden flex-row items-center justify-center gap-8 sm:flex`,
        )}
      >
        {routes.map((route) => (
          <li key={route.href} className={cn(listItemClasses)}>
            <Link className={cn(linkItemClasses)} href={route.href}>
              {route.title}
            </Link>
          </li>
        ))}
        <li>
          <Button
            variant="kalon"
            asChild
            className={cn("text-base", callToActionClasses)}
          >
            <Link href="/register">Register</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}

function DesktopNavListHomeVariant() {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      initial={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "between",
      }}
      // whenever the scroll progress is like 0.1 we can do something
      className="container mt-10 w-full flex-col items-center justify-between gap-8 sm:mt-0 sm:flex"
    >
      {/* Navbar */}
      <motion.ul className="hidden w-full flex-row items-center justify-between gap-8 sm:flex">
        {routes.map((route) => (
          <li
            key={route.href}
            className="group rounded-sm px-4 py-1 transition-all duration-300 hover:bg-[#e7dfef]"
          >
            <Link
              className="transition-colors group-hover:text-secondaryColor"
              href={route.href}
            >
              {route.title}
            </Link>
          </li>
        ))}
        <li>
          <Button variant="kalon" asChild>
            <Link href="/register">Register</Link>
          </Button>
        </li>
      </motion.ul>
      {/* Kalon Logo */}
      <motion.div
        style={{ scale }}
        className="hidden flex-col items-center justify-center xl:flex"
      >
        <Image
          src="/Kalon.svg"
          alt="Kalon Logo"
          width={1280}
          height={260}
          className="w-full"
        />
      </motion.div>
      <div className="flex flex-col items-center justify-center sm:hidden">
        <Image
          src="/Kalon.svg"
          alt="Kalon Logo"
          width={1280}
          height={260}
          className="w-full"
        />
      </div>
    </motion.div>
  );
}
