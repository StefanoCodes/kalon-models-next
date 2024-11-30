import { Button } from "./ui/button";
import Link from "next/link";
export default function Footer() {
  const foundedYear = 2020;
  return (
    <footer className="bg-backgroundLightAltColor">
      <div className="container flex items-center justify-between px-4 py-4">
        <span className="block text-sm text-paragraph">
          Creating Experiences Since {foundedYear}
        </span>
        <Button className="h-auto bg-secondaryColor px-4 py-[2px] text-base font-normal text-whiteColor hover:bg-primaryColor">
          <Link href="/contact">Support</Link>
        </Button>
      </div>
    </footer>
  );
}
