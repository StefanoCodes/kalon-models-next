import { Button } from "./ui/button";
import Link from "next/link";
import { InstagramIcon } from "lucide-react";
import { navbar } from "./navbar/navbar.config";

const { socials } = navbar;
export default function Footer() {
  const foundedYear = 2020;
  const instagramLink = socials[0].link;
  return (
    <footer className="bg-whiteColor">
      <div className="container flex items-center justify-between px-4 py-4 xl:px-0">
        <span className="block text-sm text-mutedColor">
          Creating Experiences Since {foundedYear}
        </span>

        <Link href={instagramLink} target="_blank">
          <InstagramIcon className="h-[18px] w-[18px] text-mutedColor" />
        </Link>
      </div>
    </footer>
  );
}
