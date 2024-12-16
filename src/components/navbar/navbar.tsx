import MobileNavList from "./mobile-nav-list";
import DesktopNavList from "./default-nav-list";

export default function Navbar() {
  return (
    <>
      {/* DESKTOP NAV HIDDEN ON mobile SHOWN AT SM */}
      <DesktopNavList />
      {/* MOBILE NAV seen until sm: */}
      <MobileNavList />
    </>
  );
}
