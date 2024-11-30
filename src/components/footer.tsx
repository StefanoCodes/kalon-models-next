import { Button } from "./ui/button";
import Link from "next/link";
import { InstagramIcon } from "lucide-react";
import { navbar } from "./navbar/navbar.config";

const { socials } = navbar;
export default function Footer() {
  const foundedYear = 2020;
  const instagramLink = socials[0].link;
  return (
    <footer className="bg-backgroundLightAltColor">
      <div className="container flex items-center justify-between px-4 py-4">
        <span className="block text-sm text-paragraph">
          Creating Experiences Since {foundedYear}
        </span>

        <Link href={instagramLink} target="_blank">
          <InstagramIcon className="h-4 w-4 text-mutedColor" />
        </Link>
      </div>
    </footer>
  );
}
