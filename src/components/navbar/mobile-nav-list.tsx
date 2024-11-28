"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLogo from "./nav-logo";
import { AnimatePresence, motion } from "motion/react";
import { navbar } from "./navbar.config";
import SocialLinks, { ContactLink } from "./social-links";
import { linkVariants, menuVariants } from "../motion/motion.config";
const routes = navbar.routes;
const { email } = navbar.contact;
const navItems = [
  ...routes,
  {
    title: `Register`,
    href: `/register`,
  },
];

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
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.title}
                      variants={linkVariants}
                      className="text-2xl transition-colors duration-300 ease-in-out hover:text-gray-300"
                    >
                      <Link onClick={toggleNavigation} href={item.href}>
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="flex w-full flex-row items-center justify-between">
                  <ContactLink>{email}</ContactLink>
                  <div className="flex flex-row gap-3">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
