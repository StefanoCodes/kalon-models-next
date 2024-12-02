"use client";
import { navbar } from "./navbar.config";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import NavLogo from "./nav-logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
  return (
    <div className="mt-10 w-full flex-col items-center justify-between gap-8 sm:mt-0 sm:flex">
      {/* Navbar */}
      <ul className="hidden w-full flex-row items-center justify-between gap-8 sm:flex">
        {routes.map((route) => (
          <li key={route.href}>
            <Link href={route.href}>{route.title}</Link>
          </li>
        ))}
        <li>
          <Button variant="kalon" asChild>
            <Link href="/register">Register</Link>
          </Button>
        </li>
      </ul>
      {/* Kalon Logo */}
      <Image
        src="/Kalon.svg"
        alt="Kalon Logo"
        width={1280}
        height={260}
        className="w-full"
      />
    </div>
  );
}
