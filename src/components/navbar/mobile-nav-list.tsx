"use client";
import { contactConfig } from "@/app/contact/contact.config";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useCycle, useScroll } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { linkVariants, menuVariants } from "../motion/motion.config";
import AnimatedMobileNavLinks from "./animated-mobile-nav-items";
import NavLogo from "./nav-logo";
import { usePathname } from "next/navigation";
const { instagram } = contactConfig.socials;
import { useMotionValueEvent } from "motion/react";
import PrimaryButton from "../buttons/primary-button";
type bgColorType = "white" | "transparent";

export default function MobileNavList() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [bgColor, setBgColor] = useState<bgColorType>("transparent");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0) {
      setBgColor("white");
    } else {
      setBgColor("transparent");
    }
  });

  const pathname = usePathname();
  // set the body overflow to hidden when the menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {pathname === "/about" ? (
        <MobileNavListAboutVariant
          isOpen={isOpen}
          toggleOpen={toggleOpen}
          bgColor={bgColor}
        />
      ) : (
        <MobileNavListDefaultVariant isOpen={isOpen} toggleOpen={toggleOpen} />
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed left-0 top-0 z-20 min-h-dvh w-full bg-black p-4 pb-4 pt-32 text-whiteColor"
          >
            <nav className="flex min-h-[calc(100dvh-4rem-8rem)] w-full flex-col justify-between gap-8">
              <ul className="flex flex-col gap-8">
                <AnimatedMobileNavLinks onClick={toggleOpen} />
              </ul>
              <motion.div
                variants={linkVariants}
                className="flex w-full flex-col gap-8"
              >
                <PrimaryButton
                  onClick={toggleOpen}
                  href="/register"
                  variant="kalon"
                  size="sm"
                >
                  Register
                </PrimaryButton>
                <div className="flex flex-row items-center justify-between">
                  <p className="text-xs font-light text-muted-foreground">
                    hello@kalon.com.au
                  </p>
                  <div className="flex items-center gap-4">
                    <Link
                      href={instagram.url}
                      className="text-xs font-light capitalize text-muted-foreground"
                    >
                      in
                    </Link>
                    <Link
                      href={instagram.url}
                      className="text-xs font-light capitalize text-muted-foreground"
                    >
                      ti
                    </Link>
                  </div>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
// Default Mobile Navbar
function MobileNavListDefaultVariant({
  isOpen,
  toggleOpen,
}: {
  isOpen: boolean;
  toggleOpen: () => void;
}) {
  return (
    <header className="sm:hidden">
      <nav className={cn("container py-4 xl:px-0")}>
        <div className="flex w-full items-center justify-between">
          <NavLogo
            onClick={() => {
              return isOpen && toggleOpen();
            }}
            className={cn(isOpen && `z-40 text-whiteColor`)}
          />
          <div
            className={cn(
              "z-40 cursor-pointer text-base text-blackColor",
              isOpen && `text-whiteColor`,
            )}
            onClick={toggleOpen}
          >
            {isOpen ? "close" : "menu"}
          </div>
        </div>
      </nav>
    </header>
  );
}
// About Mobile Navbar
function MobileNavListAboutVariant({
  isOpen,
  toggleOpen,
  bgColor,
}: {
  isOpen: boolean;
  toggleOpen: () => void;
  bgColor: bgColorType;
}) {
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 bg-transparent transition-colors duration-300 sm:hidden",
        {
          "bg-whiteColor": bgColor === "white",
        },
        isOpen && `bg-transparent`,
      )}
    >
      <nav className={cn("container py-4 xl:px-0")}>
        <div className="flex w-full items-center justify-between">
          <NavLogo
            onClick={() => {
              return isOpen && toggleOpen();
            }}
            className={cn(
              isOpen && `z-40 text-whiteColor`,
              bgColor !== "white" && `text-whiteColor`,
            )}
          />
          <div
            className={cn(
              "z-40 cursor-pointer text-base text-blackColor",
              isOpen && `text-whiteColor`,
              bgColor !== "white" && `text-whiteColor`,
            )}
            onClick={toggleOpen}
          >
            {isOpen ? "close" : "menu"}
          </div>
        </div>
      </nav>
    </header>
  );
}
