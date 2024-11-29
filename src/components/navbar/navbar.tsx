import { cn } from "@/lib/utils";
import MobileNavList from "./mobile-nav-list";
import DesktopNavList from "./nav-list";

export default function Navbar() {
  return (
    <header className="z-50">
      <nav
        className={cn(
          "container px-4 py-4 sm:block xl:px-0",
          "max-w-screen-xl",
        )}
      >
        <div className="flex flex-row items-center justify-between">
          {/* DESKTOP NAV HIDDEN ON mobile SHOWN AT SM */}
          <DesktopNavList />
          {/* MOBILE NAV HIDDEN ON SHOWN AT MOBILE SM: */}
          <MobileNavList />
        </div>
      </nav>
    </header>
  );
}
