"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import NavLogo from "./nav-logo";
import { navbar } from "./navbar.config";

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
// OTHER PAGES NAV LIST
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
      className={cn(
        "container hidden min-h-[700px] w-full justify-between sm:flex",
        wrapperClasses,
      )}
    >
      <NavLogo />
      <ul
        className={cn(
          `hidden flex-row items-center justify-center gap-8 sm:flex`,
        )}
      >
        {routes.map((route) => (
          <li
            key={route.href}
            className={cn(`text-sm text-navLinkColor`, listItemClasses)}
          >
            <Link className={cn(linkItemClasses)} href={route.href}>
              {route.title}
            </Link>
          </li>
        ))}
        <li>
          <Button
            variant="kalon"
            asChild
            className={cn(
              "h-8 text-base text-navLinkColor",
              callToActionClasses,
            )}
          >
            <Link href="/register">Register</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}
// HOME PAGE NAV LIST
function DesktopNavListHomeVariant() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const scale = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    console.log(current);
    setScrollProgress(current);
  });
  return (
    <motion.div
      ref={containerRef}
      layout
      style={{
        flexDirection: scrollProgress > 0.85 ? "row-reverse" : "column",
        justifyContent: scrollProgress > 0.85 ? "flex-end" : "center",
        alignItems: scrollProgress > 0.85 ? "flex-end" : "center",
      }}
      transition={{
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="container mt-10 flex h-full w-full flex-col items-center justify-center gap-8 sm:mt-0"
    >
      {/* Navbar */}
      <motion.ul
        layout="preserve-aspect"
        style={{
          justifyContent: scrollProgress > 0.85 ? "flex-end" : "space-between",
          gap: scrollProgress > 0.85 ? "0.5rem" : "1rem",
        }}
        transition={{
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="hidden w-full flex-row items-center gap-8 sm:flex"
      >
        {routes.map((route) => (
          <Link className="group" key={route.href} href={route.href}>
            <li className="rounded-sm px-4 py-1 text-navLinkColor transition-all duration-300 hover:bg-[#e7dfef] group-hover:text-secondaryColor">
              {route.title}
            </li>
          </Link>
        ))}
        <li>
          <Button variant="kalon" className="h-8 text-navLinkColor" asChild>
            <Link href="/register">Register</Link>
          </Button>
        </li>
      </motion.ul>
      <h1 className="text-8xl font-bold tracking-wider xs:text-9xl md:hidden">
        Kalon
      </h1>
      <motion.div
        style={{ scale }}
        layout
        transition={{
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="hidden flex-col items-center justify-center md:flex"
      >
        <motion.h1
          layout
          style={{ fontSize: "6rem" }}
          transition={{
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-9xl font-bold"
        >
          Kalon
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
// function DesktopNavListHomeVariant() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const scale = useTransform(scrollYProgress, [1, 0.5], [1, 0]);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     setScrollProgress(current);
//   });

//   const navWidth = useTransform(scrollYProgress, [1, 0.87], ["100%", "auto"]);
//   const navJustify = useTransform(
//     scrollYProgress,
//     [1, 0.87],
//     ["space-between", "flex-end"],
//   );
//   const navGap = useTransform(scrollYProgress, [1, 0.87], ["2rem", "0.5rem"]);

//   return (
//     <motion.div
//       ref={containerRef}
//       layout
//       style={{
//         flexDirection: scrollProgress > 0.87 ? "row-reverse" : "column",
//         justifyContent: scrollProgress > 0.87 ? "flex-end" : "center",
//         alignItems: scrollProgress > 0.87 ? "center" : "center",
//       }}
//       transition={{
//         duration: 0.3,
//         ease: [0.16, 1, 0.3, 1],
//       }}
//       className="container mt-10 h-full w-full flex-col items-center justify-center gap-8 sm:mt-0 sm:flex"
//     >
//       {/* Navbar */}
//       <motion.ul
//         layout
//         style={{
//           width: navWidth,
//           justifyContent: navJustify,
//           gap: navGap,
//         }}
//         transition={{
//           duration: 0.3,
//           ease: [0.16, 1, 0.3, 1],
//         }}
//         className="hidden w-full flex-row items-center justify-between sm:flex"
//       >
//         {routes.map((route) => (
//           <motion.li
//             key={route.href}
//             layout
//             transition={{
//               duration: 0.3,
//               ease: [0.16, 1, 0.3, 1],
//             }}
//           >
//             <Link className="group" href={route.href}>
//               <span className="rounded-sm px-4 py-1 text-navLinkColor transition-all duration-300 hover:bg-[#e7dfef] group-hover:text-secondaryColor">
//                 {route.title}
//               </span>
//             </Link>
//           </motion.li>
//         ))}
//         <motion.li
//           layout
//           transition={{
//             duration: 0.3,
//             ease: [0.16, 1, 0.3, 1],
//           }}
//         >
//           <Button variant="kalon" className="h-8 text-navLinkColor" asChild>
//             <Link href="/register">Register</Link>
//           </Button>
//         </motion.li>
//       </motion.ul>
//       <motion.div
//         style={{ scale }}
//         layout
//         transition={{
//           duration: 0.3,
//           ease: [0.16, 1, 0.3, 1],
//         }}
//         className="flex flex-col items-center justify-center"
//       >
//         <h1 className="text-8xl font-bold">Kalon</h1>
//       </motion.div>
//     </motion.div>
//   );
// }
