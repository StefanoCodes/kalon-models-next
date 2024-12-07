"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PrimaryButton from "../buttons/primary-button";
import NavLogo from "./nav-logo";
import DestkopNavListAboutVariant from "./navbar-about";
import { navbar } from "./navbar.config";

const { routes } = navbar;

export default function DesktopNavList() {
  const pathname = usePathname();
  return pathname === "/about" ? (
    <DestkopNavListAboutVariant pathname={pathname} />
  ) : (
    <DesktopNavListDefaultVariant pathname={pathname} />
  );
}
// Default Navbar
function DesktopNavListDefaultVariant({ pathname }: { pathname: string }) {
  return (
    <header className="hidden sm:block">
      <nav className={cn("container relative z-10 py-4 xl:px-0")}>
        <div className={cn("flex w-full items-center justify-between")}>
          <NavLogo />
          <ul className={cn(`flex flex-row items-center justify-center gap-8`)}>
            {routes.map((route) => (
              <li
                key={route.href}
                className={cn(`relative px-2 py-1 text-sm text-navLinkColor`)}
              >
                <Link
                  className={cn("select-none hover:opacity-80", {
                    "text-secondaryColor": pathname.startsWith(route.href),
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
