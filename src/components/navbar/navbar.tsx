import { cn } from "@/lib/utils";
import MobileNavList from "./mobile-nav-list";
import DesktopNavList from "./nav-list";

export default function Navbar() {
  return (
    <header className="z-40 overflow-hidden">
      <nav
        className={cn(
          "container px-4 py-4 sm:block xl:px-0",
          "max-w-screen-xl",
        )}
      >
        <div className="flex flex-col-reverse items-center justify-between sm:flex-row">
          {/* DESKTOP NAV HIDDEN ON mobile SHOWN AT SM */}
          <DesktopNavList />

          {/* MOBILE NAV HIDDEN ON SHOWN AT MOBILE SM: */}
          <MobileNavList />
        </div>
      </nav>
    </header>
  );
}
