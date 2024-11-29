"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import NavLogo from "./nav-logo";
import { AnimatePresence, motion } from "motion/react";
import { navbar } from "./navbar.config";
import { menuVariants } from "../motion/motion.config";
import AnimatedMobileNavLinks from "./animated-mobile-nav-items";
import RegisterButton from "../buttons/register-button";
const { email } = navbar.contact;
export default function MobileNavList() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  const toggleNavigation = () => setIsOpen((previsOpen) => !previsOpen);
  return (
    <>
      <div className="z-20 flex w-full items-center justify-between sm:hidden">
        <NavLogo className={cn(isOpen && `text-whiteColor`)} />
        <div
          className={cn(
            "z-20 cursor-pointer text-base text-blackColor sm:hidden",
            isOpen && `text-whiteColor`,
          )}
          onClick={toggleNavigation}
        >
          {isOpen ? "close" : "menu"}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed left-0 top-0 z-10 h-[100dvh] w-full bg-blackColor p-4 text-whiteColor"
          >
            <nav className="flex h-full w-full pt-32">
              <div className="flex w-full flex-col justify-between gap-8">
                <div className="flex flex-col gap-4">
                  <AnimatedMobileNavLinks onClick={toggleNavigation} />
                </div>
                <div className="flex w-full flex-row items-center justify-between">
                  <RegisterButton toggleNavigation={toggleNavigation} />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
