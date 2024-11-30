import { Button } from "./ui/button";
import Link from "next/link";
import { InstagramIcon } from "lucide-react";
export default function Footer() {
  const foundedYear = 2020;
  return (
    <footer className="bg-backgroundLightAltColor">
      <div className="container flex items-center justify-between px-4 py-4">
        <span className="block text-sm text-paragraph">
          Creating Experiences Since {foundedYear}
        </span>

        <Link href="https://www.instagram.com/sentri.co.za/" target="_blank">
          <InstagramIcon className="h-4 w-4 text-mutedColor" />
        </Link>
      </div>
    </footer>
  );
}
