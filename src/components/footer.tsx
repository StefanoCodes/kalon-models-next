import SecondaryButton from "@/components/buttons/secondary-button";
import FooterTextAnimation from "./footer-text-animation";
import Image from "next/image";
import { KALON_INSTAGRAM_URL } from "@/lib/constants";
import Instagram from "../../public/instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-whiteColor">
      <div className="container flex items-center justify-between py-4 xl:px-0">
        <FooterTextAnimation />

        <SecondaryButton to={KALON_INSTAGRAM_URL}>
          <Image
            width={20}
            height={19}
            src={Instagram}
            alt="instagram social icon"
          />
        </SecondaryButton>
      </div>
    </footer>
  );
}
