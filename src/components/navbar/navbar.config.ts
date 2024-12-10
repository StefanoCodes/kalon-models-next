import { BirdIcon, InstagramIcon } from "lucide-react";
export const navbar = {
  routes: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Gallery",
      href: "/gallery",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  contact: {
    email: "info@kalonmodels.co.za",
  },
  socials: [
    {
      handle: "kalon.models",
      icon: InstagramIcon,
      link: `https://www.instagram.com/kalon.models`,
    },
    {
      handle: "kalonmodels",
      icon: BirdIcon,
      link: "https://www.tiktok.com/@kalonmodels",
    },
  ],
};
