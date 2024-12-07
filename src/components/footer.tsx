import { Button } from "./ui/button";
import Link from "next/link";
import { InstagramIcon } from "lucide-react";
import { navbar } from "./navbar/navbar.config";
import FooterTextAnimation from "./footer-text-animation";

const { socials } = navbar;
export default function Footer() {
  const instagramLink = socials[0].link;
  return (
    <footer className="bg-whiteColor">
      <div className="container flex items-center justify-between py-4 xl:px-0">
        <FooterTextAnimation />

        <Link href={instagramLink} target="_blank">
          <InstagramIcon className="h-[18px] w-[18px] text-mutedColor" />
        </Link>
      </div>
    </footer>
  );
}
