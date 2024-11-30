import { navbar } from "./navbar.config";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import NavLogo from "./nav-logo";
import Link from "next/link";
import RegisterButton from "../buttons/register-button";

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
  return (
    <div className="hidden w-full justify-between sm:flex">
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
